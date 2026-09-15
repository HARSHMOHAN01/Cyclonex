# CycloneX - Meteorological Intelligence Platform

CycloneX is an operational meteorological intelligence platform built for active cyclone monitoring, satellite observation analysis, ensemble trajectory forecasting, and real-time situational awareness. 

It provides an end-to-end intelligence pipeline synchronizing with ISRO & IMD data feeds (simulated for development), delivering high-integrity telemetry for North Indian Ocean (NIO) basin threats.

## 🚀 Key Features

* **Real-time Overview Dashboard**: High-priority telemetry, geospatial synoptic track maps, and active threat targets.
* **Cyclone Analysis Workspace**: In-depth dossier on active systems, cross-sectional atmospheric profiles, multi-model ensemble tracks, and impact exposure modeling.
* **Satellite Observations**: Simulated 24-hour orbital granule timelines, multispectral channel selector (TIR-1, Visible, Water Vapor), and AI-driven automated diagnostic snapshots.
* **Intelligence Reports**: Tactical situation reports, rapid intensification alerts, and post-landfall damage assessments via a comprehensive repository matrix.
* **Archived Systems (History)**: Historical tracks, peak telemetry, and analysis of past cyclones (FANI, AMPHAN, BIPARJOY, etc.).
* **Diagnostic Telemetry**: System health monitoring, API stream status, and reliability indices ensuring SIH 2026 Evaluation Validation standards.

## 🛠️ Technology Stack

* **Frontend Architecture**:
  * Next.js (React)
  * Tailwind CSS (Custom Design System with Material 3 principles)
  * Lucide React (Iconography)
  * TanStack React Query (State Management & Polling)
* **Backend Architecture**:
  * Node.js & Express (RESTful API)
  * Prisma ORM
  * SQLite (Local Database, structured for scaling to PostgreSQL)
* **Monorepo Setup**:
  * Managed via npm workspaces (Root `package.json`).

## 📁 Project Structure

```
CycloneX/
├── frontend/             # Next.js Application
│   ├── src/
│   │   ├── app/          # App Router Pages (Overview, Analysis, Satellite, etc.)
│   │   ├── components/   # Reusable UI elements
│   │   └── lib/          # Utilities, API fetchers, and React Query hooks
├── backend/              # Express API Server
│   ├── src/
│   │   └── server.ts     # Main Express router & endpoints
│   ├── prisma/           # Prisma schema & SQLite dev database
│   │   ├── schema.prisma # DB schema definitions
│   │   └── seed.ts       # Database population script with meteorological data
└── package.json          # Root Monorepo Workspace Config
```

## ⚙️ Local Development Setup

### 1. Prerequisites
* Node.js (v18 or higher)
* npm (v9 or higher)

### 2. Installation
Install dependencies across the monorepo from the root directory:
```bash
npm install
```

### 3. Backend Setup & Seeding
Navigate to the backend to generate the Prisma client and seed the local SQLite database:
```bash
cd backend
npx prisma generate
npx prisma db push
npm run seed
```

### 4. Running the Application
Return to the root directory and start both frontend and backend development servers concurrently:
```bash
cd ..
npm run dev
```

* Frontend will run on: [http://localhost:3000](http://localhost:3000)
* Backend API will run on: [http://localhost:3001](http://localhost:3001)

## 📡 API Endpoints (v1)

The backend provides a set of RESTful endpoints serving real-time and historical cyclone data:

* `GET /api/v1/health` - System health check.
* `GET /api/v1/cyclones?status=Active|Archived` - List cyclones by status.
* `GET /api/v1/cyclones/:id` - Detailed dossier for a specific cyclone including its recent observations.
* `GET /api/v1/cyclones/:id/tracks` - Trajectory points and historical track.
* `GET /api/v1/cyclones/:id/forecasts` - Forecast runs and ensemble points.
* `GET /api/v1/telemetry/observations` - Latest global telemetry and multispectral data.
* `GET /api/v1/telemetry/status` - Backend ingest stream and AI service health events.
* `GET /api/v1/reports` - Meteorological intelligence and tactical situation reports.

## 🎨 Design System

CycloneX uses a highly customized Tailwind CSS configuration (`frontend/tailwind.config.ts`) tailored for professional, military-grade meteorological applications. It features:

* **Dark-mode First**: Specialized `surface-container` depth variables.
* **Status Colors**: Primary (Blue), Secondary (Cyan/Teal), Error (Red), and variations for distinct UI alerts.
* **Typography**: Clean sans-serif hierarchy for data-dense telemetry tables and dashboards.

## 📝 License
Proprietary / Built for SIH 2026.
