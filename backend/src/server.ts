import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Operational', timestamp: new Date() });
});
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'Operational', timestamp: new Date() });
});

// Cyclones API
app.get('/api/v1/cyclones', async (req, res) => {
  try {
    const { status } = req.query;
    const where = status ? { status: String(status) } : {};
    
    const cyclones = await prisma.cyclone.findMany({
      where,
      orderBy: { timestamp: 'desc' }
    });
    res.json({ success: true, data: cyclones });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch cyclones" } });
  }
});

app.get('/api/v1/cyclones/:id', async (req, res) => {
  try {
    const cyclone = await prisma.cyclone.findUnique({
      where: { id: req.params.id },
      include: {
        observations: { orderBy: { timestamp: 'desc' }, take: 10 },
        reports: { orderBy: { timestamp: 'desc' } }
      }
    });
    if (!cyclone) return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Cyclone not found" } });
    res.json({ success: true, data: cyclone });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch cyclone details" } });
  }
});

app.get('/api/v1/cyclones/:id/tracks', async (req, res) => {
  try {
    const tracks = await prisma.track.findMany({
      where: { cycloneId: req.params.id },
      orderBy: { timestamp: 'asc' }
    });
    res.json({ success: true, data: tracks });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch tracks" } });
  }
});

app.get('/api/v1/cyclones/:id/forecasts', async (req, res) => {
  try {
    const forecasts = await prisma.forecastRun.findMany({
      where: { cycloneId: req.params.id },
      orderBy: { initializedAt: 'desc' },
      take: 1,
      include: {
        points: { orderBy: { forecastTime: 'asc' } }
      }
    });
    res.json({ success: true, data: forecasts });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch forecasts" } });
  }
});

// Telemetry & Observations API
app.get('/api/v1/telemetry/observations', async (req, res) => {
  try {
    const observations = await prisma.observation.findMany({
      orderBy: { timestamp: 'desc' },
      take: 20,
      include: {
        cyclone: { select: { name: true, internationalId: true } }
      }
    });
    res.json({ success: true, data: observations });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch observations" } });
  }
});

app.get('/api/v1/telemetry/status', async (req, res) => {
  try {
    const events = await prisma.systemEvent.findMany({
      orderBy: { timestamp: 'desc' },
      take: 10
    });
    res.json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch system status" } });
  }
});

// Reports API
app.get('/api/v1/reports', async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      orderBy: { timestamp: 'desc' },
      include: {
        cyclone: { select: { name: true, basin: true } }
      }
    });
    res.json({ success: true, data: reports });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch reports" } });
  }
});

app.listen(port, () => {
  console.log(`CycloneX API server running on port ${port}`);
});
