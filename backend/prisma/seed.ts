import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with CycloneX test data...');

  // Clean up existing data (Cascade will handle relations)
  await prisma.cyclone.deleteMany({});
  await prisma.systemEvent.deleteMany({});

  // 1. Create a Very Severe Cyclonic Storm (Mocha)
  const mocha = await prisma.cyclone.create({
    data: {
      internationalId: 'TC-2023-MOCHA',
      name: 'Mocha',
      basin: 'Bay of Bengal',
      region: 'NIO',
      status: 'Active',
      category: 4,
      maxWind: 215, // km/h
      centralPressure: 938, // hPa
      latitude: 16.5,
      longitude: 90.2,
      movementDirection: 25, // NNE
      movementSpeed: 18,
      source: 'IMD / JTWC',
      timestamp: new Date(),
    }
  });

  // Observations for Mocha
  await prisma.observation.createMany({
    data: [
      {
        cycloneId: mocha.id,
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        latitude: 15.5,
        longitude: 89.8,
        windSpeed: 195,
        pressure: 950,
        category: 3,
        source: 'INSAT-3DR (TIR-1)'
      },
      {
        cycloneId: mocha.id,
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
        latitude: 16.0,
        longitude: 90.0,
        windSpeed: 205,
        pressure: 942,
        category: 4,
        source: 'INSAT-3DR (VIS)'
      }
    ]
  });

  // Tracks for Mocha (Historical Path)
  await prisma.track.createMany({
    data: [
      {
        cycloneId: mocha.id,
        timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
        latitude: 11.2,
        longitude: 88.5,
        windSpeed: 65,
        pressure: 996,
        category: 1,
        source: 'Best Track'
      },
      {
        cycloneId: mocha.id,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        latitude: 13.8,
        longitude: 89.1,
        windSpeed: 120,
        pressure: 978,
        category: 2,
        source: 'Best Track'
      }
    ]
  });

  // Forecast for Mocha
  const mochaForecastRun = await prisma.forecastRun.create({
    data: {
      cycloneId: mocha.id,
      model: 'SIH-Ensemble-v4',
      initializedAt: new Date(),
    }
  });

  await prisma.forecastPoint.createMany({
    data: [
      {
        forecastRunId: mochaForecastRun.id,
        forecastTime: new Date(Date.now() + 12 * 60 * 60 * 1000),
        latitude: 18.2,
        longitude: 91.5,
        windSpeed: 230,
        pressure: 925,
        category: 5,
        confidence: 0.92
      },
      {
        forecastRunId: mochaForecastRun.id,
        forecastTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
        latitude: 20.1,
        longitude: 92.5,
        windSpeed: 180,
        pressure: 955,
        category: 3,
        confidence: 0.78
      }
    ]
  });

  // Report for Mocha
  await prisma.report.create({
    data: {
      cycloneId: mocha.id,
      title: 'Mocha Rapid Intensification Assessment',
      content: 'The system has undergone rapid intensification over the last 12 hours. Eye is clearly visible on INSAT-3DR. Landfall expected near Sittwe/Coxs Bazar.',
      author: 'IMD Synoptic Node #IN-4012',
      severity: 'RED ALERT'
    }
  });

  // 2. Create an Archived Cyclone (Biparjoy)
  const biparjoy = await prisma.cyclone.create({
    data: {
      internationalId: 'TC-2023-BIPARJOY',
      name: 'Biparjoy',
      basin: 'Arabian Sea',
      region: 'ARB',
      status: 'Archived',
      category: 3,
      maxWind: 165,
      centralPressure: 958,
      latitude: 23.2,
      longitude: 68.6,
      movementDirection: 45,
      movementSpeed: 12,
      source: 'IMD Best Track',
      timestamp: new Date('2023-06-15T18:00:00Z'),
    }
  });

  await prisma.report.create({
    data: {
      cycloneId: biparjoy.id,
      title: 'Biparjoy Post-Landfall Analysis',
      content: 'Extensive damage reported in Kutch district. Wind speeds at landfall were recorded at 115-125 kmph gusting to 140 kmph.',
      author: 'NDRF Damage Assessment Unit',
      severity: 'ARCHIVED'
    }
  });

  // 3. System Events
  await prisma.systemEvent.createMany({
    data: [
      {
        service: 'Satellite Ingest',
        status: 'Operational',
        message: 'INSAT-3DR stream active. Latency 1.2s.',
      },
      {
        service: 'AI Classification',
        status: 'Operational',
        message: 'Deep Dvorak CNN v4 running. Inference time 45ms.',
      },
      {
        service: 'Dissemination API',
        status: 'Operational',
        message: 'Webhook payloads delivered to NDMA.',
      }
    ]
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
