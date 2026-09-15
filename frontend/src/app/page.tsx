"use client";

import { useState } from "react";
import { Grid, Wind, BarChart2, CheckCircle, Navigation, MapPin, Loader2 } from "lucide-react";
import clsx from "clsx";
import { useCyclones } from "@/lib/hooks/useCyclones";

export default function OverviewPage() {
  const [mapLayer, setMapLayer] = useState<"ir" | "wind">("ir");
  const { data: cyclones, isLoading, error } = useCyclones('Active');

  const activeCyclone = cyclones?.[0];

  return (
    <div className="flex flex-col w-full px-space-lg py-space-lg">
      {/* Level 2 Contextual Top Navigation & Workspace Header */}
      <section className="flex flex-col gap-space-md mb-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider">Operational Console</span>
              <span className="text-outline-variant font-caption text-caption">/</span>
              <span className="font-caption text-caption text-on-surface-variant">North Indian Ocean (NIO) Sector</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">Overview</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Real-time North Indian Ocean basin situational awareness and active threat intelligence</p>
          </div>
          {/* Contextual Segmented Navigation Rail */}
          <div className="flex items-center self-start lg:self-auto bg-surface-container-low p-1 rounded-xl border border-surface-container">
            <button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm font-semibold shadow-sm flex items-center gap-1.5 transition-all">
              <Grid className="w-4 h-4 text-secondary" />
              Dashboard
            </button>
            <button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm font-medium transition-colors flex items-center gap-1.5">
              <Wind className="w-4 h-4" />
              Situation
            </button>
            <button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm font-medium transition-colors flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4" />
              Insights
            </button>
          </div>
        </div>
        
        {/* Basin Status Alert Banner */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm border border-surface-container-low">
          <div className="flex items-center gap-space-sm min-w-0">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <div className="flex flex-wrap items-center gap-x-space-sm gap-y-0.5">
              <span className="font-body-md text-body-md text-on-surface font-semibold">Basin Activity Status:</span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                {isLoading ? (
                  <span className="animate-pulse">Loading active systems...</span>
                ) : cyclones && cyclones.length > 0 ? (
                  <span>
                    {cyclones.length} Tropical Cyclone Active (<span className="text-secondary font-semibold">{cyclones.map(c => c.name).join(', ')}</span>). Remaining basins quiet.
                  </span>
                ) : (
                  <span>All basins quiet. No active cyclonic systems detected.</span>
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">
            <Navigation className="w-4 h-4 text-outline" />
            <span className="font-label-data-sm text-label-data-sm text-outline">INSAT-3DR / Meteosat-9 synchronized just now</span>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="flex items-center justify-center p-12">
          <Loader2 className="w-8 h-8 animate-spin text-secondary" />
        </div>
      ) : error ? (
        <div className="p-4 bg-error-container text-on-error-container rounded-xl">Error loading telemetry data</div>
      ) : activeCyclone ? (
        <>
          {/* 4 Core High-Priority Telemetry Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
            {/* Metric 1 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-surface-container-low">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Active Severe Cyclones</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-label-data-sm text-label-data-sm font-semibold">{activeCyclone.region} Basin</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">0{cyclones.length}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">System</span>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant border-t border-surface-container-low">
                <span className="font-body-sm text-body-sm font-semibold text-secondary">Cyclone {activeCyclone.name}</span>
                <span className="font-caption text-caption">{activeCyclone.basin}</span>
              </div>
            </div>
            {/* Metric 2 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-surface-container-low">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Highest Wind Speed</span>
                <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-data-sm text-label-data-sm font-semibold">
                  {activeCyclone.category >= 4 ? 'VSCS' : 'CS'}
                </span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">{activeCyclone.maxWind}</span>
                <span className="font-label-data-lg text-label-data-lg text-on-surface-variant">km/h</span>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant border-t border-surface-container-low">
                <span className="font-body-sm text-body-sm">Cat: {activeCyclone.category}</span>
                <span className="font-caption text-caption text-error font-medium">Gusts {Math.round(activeCyclone.maxWind * 1.1)} km/h</span>
              </div>
            </div>
            {/* Metric 3 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-surface-container-low">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Estimated Landfall</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-data-sm text-label-data-sm font-semibold">T-Window</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">~24</span>
                <span className="font-label-data-lg text-label-data-lg text-on-surface-variant">hrs</span>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant border-t border-surface-container-low">
                <span className="font-body-sm text-body-sm">Coastal Corridor</span>
                <span className="font-caption text-caption font-medium">Confidence 88%</span>
              </div>
            </div>
            {/* Metric 4 */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-surface-container-low">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">AI Model Confidence</span>
                <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-data-sm text-label-data-sm font-semibold">Ensemble</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-lg text-headline-lg font-bold text-secondary">94.2%</span>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant border-t border-surface-container-low">
                <span className="font-body-sm text-body-sm truncate">Multi-spectral Satellite</span>
                <span className="font-caption text-caption text-secondary font-medium">Synced</span>
              </div>
            </div>
          </section>

          {/* Primary Centerpiece: Geospatial Map Canvas & Quick Focus Side Panel */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">
            {/* Map Centerpiece (8 Cols) */}
            <div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden relative min-h-[580px] border border-surface-container-low">
              {/* Map Top Controls Bar */}
              <div className="p-space-md flex flex-wrap items-center justify-between gap-space-sm z-20 bg-surface-container-lowest/90 backdrop-blur-md border-b border-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Synoptic Basin Track</span>
                  </div>
                  <span className="font-label-data-sm text-label-data-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-surface-container-high">EPSG:4326</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <div className="flex bg-surface-container-low p-0.5 rounded-lg text-caption font-caption">
                    <button
                      onClick={() => setMapLayer("ir")}
                      className={clsx("px-2.5 py-1 rounded-md shadow-sm font-semibold transition-colors", mapLayer === "ir" ? "bg-surface-container-lowest text-on-surface" : "text-on-surface-variant hover:text-on-surface")}
                    >
                      IR-Cloud
                    </button>
                    <button
                      onClick={() => setMapLayer("wind")}
                      className={clsx("px-2.5 py-1 rounded-md shadow-sm font-semibold transition-colors", mapLayer === "wind" ? "bg-surface-container-lowest text-on-surface" : "text-on-surface-variant hover:text-on-surface")}
                    >
                      Wind Vector
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Vector Basemap Canvas SVG (Crisp scientific layout) */}
              <div className="flex-1 relative w-full h-full bg-surface-container-low overflow-hidden select-none">
                <svg className="w-full h-full object-cover" style={{ background: "linear-gradient(180deg, #f0f6ff 0%, #e6f0fa 100%)" }} viewBox="0 0 1000 680">
                  <defs>
                    <linearGradient id="landGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff"></stop>
                      <stop offset="100%" stopColor="#f8fafc"></stop>
                    </linearGradient>
                    <radialGradient cx="30%" cy="40%" id="coneGrad" r="70%">
                      <stop offset="0%" stopColor="#5bb8fe" stopOpacity="0.32"></stop>
                      <stop offset="70%" stopColor="#5bb8fe" stopOpacity="0.14"></stop>
                      <stop offset="100%" stopColor="#5bb8fe" stopOpacity="0.04"></stop>
                    </radialGradient>
                    <filter height="140%" id="glowVortex" width="140%" x="-20%" y="-20%">
                      <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                      <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                    </filter>
                  </defs>
                  {/* Grid Lines */}
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="0" x2="1000" y1="120" y2="120"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="0" x2="1000" y1="260" y2="260"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="0" x2="1000" y1="400" y2="400"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="0" x2="1000" y1="540" y2="540"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="220" x2="220" y1="0" y2="680"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="420" x2="420" y1="0" y2="680"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="620" x2="620" y1="0" y2="680"></line>
                  <line opacity="0.7" stroke="#cbd5e1" strokeDasharray="3,3" strokeWidth="0.75" x1="820" x2="820" y1="0" y2="680"></line>
                  
                  {/* Landmass */}
                  <path d="M 0,0 L 1000,0 L 1000,100 L 910,140 L 890,210 L 840,290 L 820,380 L 840,490 L 890,560 L 890,680 L 730,680 L 700,560 L 680,480 L 630,370 L 600,320 L 580,260 L 560,250 L 530,280 L 490,340 L 440,430 L 410,510 L 400,580 L 385,610 L 370,580 L 350,470 L 320,380 L 260,330 L 210,320 L 180,310 L 150,270 L 120,290 L 90,270 L 60,230 L 0,230 Z" fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1.2"></path>
                  
                  {/* Sri Lanka & Islands */}
                  <path d="M 430,590 C 445,595 450,620 440,640 C 430,655 418,650 415,630 C 412,610 420,590 430,590 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"></path>
                  <path d="M 720,440 L 722,465 M 724,475 L 725,505 M 728,540 L 730,570" stroke="#94a3b8" strokeLinecap="round" strokeWidth="3"></path>
                  
                  {/* Forecast Cone & Track */}
                  <path d="M 590,325 Q 545,265 520,210 L 575,190 Q 615,250 590,325 Z" fill="url(#coneGrad)"></path>
                  <path d="M 645,460 Q 625,395 590,325" fill="none" stroke="#006398" strokeLinecap="round" strokeWidth="3.5"></path>
                  <circle cx="645" cy="460" fill="#ffffff" r="3.5" stroke="#006398" strokeWidth="2"></circle>
                  <circle cx="620" cy="400" fill="#ffffff" r="3.5" stroke="#006398" strokeWidth="2"></circle>
                  <circle cx="602" cy="355" fill="#ffffff" r="3.5" stroke="#006398" strokeWidth="2"></circle>
                  
                  {/* Forecast points */}
                  <path d="M 590,325 Q 565,270 540,210" fill="none" stroke="#006398" strokeDasharray="6,4" strokeLinecap="round" strokeWidth="3"></path>
                  <circle cx="560" cy="265" fill="#ffffff" r="4" stroke="#006398" strokeWidth="2"></circle>
                  <circle cx="540" cy="210" fill="#ba1a1a" r="5" stroke="#ffffff" strokeWidth="2"></circle>
                  
                  {/* Eye/Vortex */}
                  <g transform="translate(590, 325)">
                    <circle cx="0" cy="0" fill="#006398" fillOpacity="0.04" r="46"></circle>
                    <circle cx="0" cy="0" fill="#006398" fillOpacity="0.08" r="34" stroke="#006398" strokeDasharray="4,4" strokeWidth="0.8"></circle>
                    <circle cx="0" cy="0" fill="#006398" fillOpacity="0.14" r="22" stroke="#006398" strokeDasharray="3,2" strokeWidth="1.2"></circle>
                    <circle cx="0" cy="0" fill="#006398" filter="url(#glowVortex)" r="7"></circle>
                    <circle cx="0" cy="0" fill="#ffffff" r="2.5"></circle>
                    <path d="M -12,-12 A 16 16 0 0 1 14, -8" fill="none" stroke="#00476e" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M 12,12 A 16 16 0 0 1 -14, 8" fill="none" stroke="#00476e" strokeLinecap="round" strokeWidth="2"></path>
                  </g>
                </svg>
                <div className="absolute bottom-space-md left-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-sm rounded-lg shadow-sm flex items-center gap-space-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-5 bg-secondary rounded-full"></span>
                    <span className="font-caption text-caption text-on-surface">Observed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-5 bg-secondary/50 rounded-full border-b border-secondary border-dashed"></span>
                    <span className="font-caption text-caption text-on-surface">Ensemble Forecast</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 bg-secondary-container/40 rounded-sm"></span>
                    <span className="font-caption text-caption text-on-surface">Cone 70%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side Panel: Active Cyclone Quick Focus (4 Cols) */}
            <div className="xl:col-span-4 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex-1 flex flex-col justify-between border border-surface-container-low">
                <div>
                  <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                    <div>
                      <span className="font-caption text-caption text-secondary font-semibold uppercase tracking-wider">Active Threat Target</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">Cyclone {activeCyclone.name}</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-data-sm text-label-data-sm font-semibold tracking-wide uppercase">
                      Cat: {activeCyclone.category >= 4 ? 'VSCS' : 'CS'}
                    </span>
                  </div>
                  
                  <div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md border border-surface-container">
                    <div className="flex items-center gap-1.5 mb-1">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="font-caption text-caption text-on-surface font-semibold">
                        {activeCyclone.category >= 4 ? 'Very Severe Cyclonic Storm (VSCS)' : 'Cyclonic Storm (CS)'}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">IMD Classification: Sustained surface wind speeds between 118–165 km/h.</p>
                  </div>
                  
                  <div className="space-y-space-xs mb-space-md">
                    <div className="flex items-center justify-between py-2 px-space-sm rounded bg-surface-bright border border-surface-container-low">
                      <span className="font-caption text-caption text-on-surface-variant">Current Position</span>
                      <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">{activeCyclone.latitude}°N, {activeCyclone.longitude}°E</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-space-sm rounded bg-surface-bright border border-surface-container-low">
                      <span className="font-caption text-caption text-on-surface-variant">Central Pressure</span>
                      <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">{activeCyclone.centralPressure} hPa <span className="text-error text-[10px]">(-4 hPa/3h)</span></span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-space-sm rounded bg-surface-bright border border-surface-container-low">
                      <span className="font-caption text-caption text-on-surface-variant">Basin Coordinates</span>
                      <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">{activeCyclone.basin}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-space-sm rounded bg-surface-bright border border-surface-container-low">
                      <span className="font-caption text-caption text-on-surface-variant">Propagation Velocity</span>
                      <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">Dir {activeCyclone.movementDirection}° at {activeCyclone.movementSpeed} km/h</span>
                    </div>
                  </div>
                  
                  <div className="relative w-full h-32 rounded-lg overflow-hidden mb-space-md bg-surface-container-high border border-surface-container">
                    <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant font-caption">
                      [Satellite Feed Segment]
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-2.5">
                      <span className="text-on-primary font-label-data-sm text-label-data-sm flex items-center gap-1">
                        INSAT-3DR TIR-1 Enhanced Channel
                      </span>
                    </div>
                  </div>
                </div>
                
                <a href="/cyclone-analysis" className="w-full py-2.5 px-space-md bg-secondary hover:bg-on-secondary-container text-on-primary font-body-sm text-body-sm font-semibold rounded-lg text-center shadow-sm flex items-center justify-center gap-2 transition-all">
                  Open In-Depth Cyclone Analysis
                </a>
              </div>
            </div>
          </section>

          {/* Bottom Section: 2 Focused Synoptic Intelligence Cards */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-md">
            {/* Card A: Basin Trajectory Timeline (7 Cols) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
              <div className="flex items-center justify-between mb-space-md">
                <div>
                  <span className="font-caption text-caption text-secondary font-semibold uppercase tracking-wider">Prognostic Lifecycle</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">Basin Trajectory Timeline (Next 72h)</h3>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded border border-surface-container">GFS + ECMWF Blend</span>
              </div>
              
              <div className="py-space-md relative">
                <div className="relative flex items-center justify-between">
                  <div className="flex flex-col items-start relative z-10">
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-primary flex items-center justify-center text-[12px] font-bold shadow-sm">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="mt-2">
                      <span className="font-caption text-caption text-secondary font-bold block">T-18h</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface block">Deep Depression</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-7 h-7 rounded-full bg-surface-container-lowest text-secondary flex items-center justify-center text-[12px] font-bold shadow-sm border border-secondary/30">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                      </span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="font-caption text-caption text-secondary font-bold block">NOW</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface block">VSCS ({activeCyclone.name})</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-7 h-7 rounded-full bg-error text-on-error flex items-center justify-center text-[12px] font-bold shadow-sm">
                      !
                    </div>
                    <div className="mt-2 text-center">
                      <span className="font-caption text-caption text-error font-bold block">+28h</span>
                      <span className="font-body-sm text-body-sm font-semibold text-error block">Coastal Landfall</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end relative z-10">
                    <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-[12px] font-bold border border-outline-variant">
                      ~
                    </div>
                    <div className="mt-2 text-right">
                      <span className="font-caption text-caption text-on-surface-variant font-bold block">+72h</span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface-variant block">Inland Depletion</span>
                    </div>
                  </div>
                  <div className="absolute left-3 right-3 top-3.5 h-0.5 bg-surface-container-high -z-0">
                    <div className="h-full bg-secondary w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card B: AI Anomaly & Early Warning Sensor (5 Cols) */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="font-caption text-caption text-secondary font-semibold uppercase tracking-wider">Early Warning Scanner</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-data-sm text-label-data-sm font-medium text-on-surface border border-surface-container">Auto-Refresh: 180s</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Secondary Basin Telemetry</h3>
                <div className="my-space-md p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm border border-surface-container">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <span className="font-body-sm text-body-sm font-semibold text-on-surface block">Zero Anomalous Formations Detected</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      No secondary depressions detected in Arabian Sea or South Andaman Sea over past 6 hours. High pressure ridge suppressing convection west of 72°E.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="bg-surface-container-lowest p-space-xl rounded-xl border border-surface-container text-center py-20">
          <Wind className="w-12 h-12 text-on-surface-variant mx-auto mb-4" />
          <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">No Active Systems</h2>
          <p className="text-on-surface-variant font-body-md mt-2">There are currently no active cyclonic systems detected in the monitored basins.</p>
        </div>
      )}
      
      {/* Scientific Disclaimer Note */}
      <footer className="mt-space-md py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant border-t border-surface-container-low pt-space-md">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-data-sm text-label-data-sm font-semibold tracking-wide uppercase">
            LIVE DB DATA
          </span>
          <span className="font-caption text-caption">Autonomous Cyclone Prediction Engine • Version 4.8.2</span>
        </div>
      </footer>
    </div>
  );
}
