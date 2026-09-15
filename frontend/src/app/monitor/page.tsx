"use client";

import { useState } from "react";
import { Navigation, Globe, List, RefreshCw, AlertTriangle, ShieldCheck, Download, Search } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export default function MonitorPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="flex flex-col w-full h-full min-h-full">
      {/* Sub-Navigation Bar */}
      <div className="bg-surface-container-lowest px-space-lg py-space-sm flex flex-wrap items-center justify-between shadow-sm">
        <div className="flex items-center gap-space-md">
          <button className="relative px-space-md py-space-sm font-label-data-lg text-label-data-lg text-on-surface font-semibold flex items-center gap-space-xs transition-colors">
            <Navigation className="w-5 h-5 text-secondary" />
            <span>Active Systems</span>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary"></span>
          </button>
          <button className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:text-on-surface flex items-center gap-space-xs transition-colors">
            <Globe className="w-5 h-5" />
            <span>Live Map</span>
          </button>
          <button className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:text-on-surface flex items-center gap-space-xs transition-colors">
            <List className="w-5 h-5" />
            <span>Timeline</span>
          </button>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="font-label-data-sm text-label-data-sm text-on-surface-variant uppercase tracking-wider hidden sm:inline">Telemetry Sync: Realtime</span>
          <button 
            onClick={handleRefresh}
            className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-data-sm text-label-data-sm px-space-md py-space-xs rounded-lg shadow-sm flex items-center gap-space-xs transition-all active:scale-95"
          >
            <RefreshCw className={clsx("w-4 h-4 text-secondary", isRefreshing && "animate-spin")} />
            <span>Refresh Telemetry</span>
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-space-lg flex flex-col gap-space-lg">
        {/* 1. Page Sub-Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="font-caption text-caption text-secondary uppercase tracking-widest font-semibold">Phase 3 Surveillance Matrix</span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">North Indian Ocean Basin</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Active Cyclone Systems</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">Real-time classification, kinetic motion vectors, and automated AI confidence metrics.</p>
          </div>
          {/* Filter Pill Group */}
          <div className="flex items-center bg-surface-container-low p-space-xs rounded-xl shadow-inner self-start md:self-auto">
            <button className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-secondary font-label-data-sm text-label-data-sm shadow-sm transition-all">
              All Basins (2)
            </button>
            <button className="px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm transition-all">
              Bay of Bengal (1)
            </button>
            <button className="px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm transition-all">
              Arabian Sea (1)
            </button>
          </div>
        </div>

        {/* 2. Active Cyclone Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Card 1: Cyclone VARUN (02B) */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-error"></div>
            <div>
              <div className="flex items-start justify-between gap-space-md mb-space-md">
                <div>
                  <div className="flex items-center gap-space-sm">
                    <h2 className="font-headline-md text-headline-md text-on-surface">Cyclone VARUN (02B)</h2>
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-label-data-sm text-label-data-sm">
                      <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                      HIGH RISK / SEVERE
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary font-medium mt-1">Very Severe Cyclonic Storm (VSCS)</p>
                </div>
                <div className="px-space-sm py-1 rounded bg-error-container/40 text-error font-label-data-sm text-label-data-sm flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Landfall Window: ~28 hrs</span>
                </div>
              </div>

              <div className="mb-space-md p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <Navigation className="w-5 h-5 text-secondary -rotate-45" />
                  <span className="font-label-data-sm text-label-data-sm text-on-surface">Vector: Azimuth 335° (NNW)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-caption text-caption text-on-surface-variant">Track Trend:</span>
                  <svg className="w-24 h-6 overflow-visible" fill="none" viewBox="0 0 96 24">
                    <path d="M4 18 C 30 16, 50 12, 70 8 L 88 4" stroke="#ba1a1a" strokeDasharray="2 3" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M4 18 C 25 17, 45 14, 60 10" stroke="#006398" strokeLinecap="round" strokeWidth="2.5"></path>
                    <circle cx="60" cy="10" fill="#ba1a1a" r="3.5"></circle>
                    <circle cx="88" cy="4" fill="#76777d" fillOpacity="0.5" r="2.5"></circle>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md py-space-sm bg-surface-container-lowest">
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">Current Location</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface block">17.8°N, 88.4°E</span>
                  <span className="font-caption text-caption text-on-surface-variant">NW Bay of Bengal</span>
                </div>
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">Wind Speed</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface block">135 km/h</span>
                  <span className="font-caption text-caption text-error font-medium">Gusts 165 km/h</span>
                </div>
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">Movement</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface block">NNW @ 16 km/h</span>
                  <span className="font-caption text-caption text-on-surface-variant">Heading 335°</span>
                </div>
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">AI Confidence</span>
                  <span className="font-label-data-lg text-label-data-lg text-secondary block font-bold">94.2%</span>
                  <span className="font-caption text-caption text-on-surface-variant">Ensemble Multi-Run</span>
                </div>
              </div>
            </div>
            <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-low bg-surface-container-lowest">
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">ID: NIO-2026-02B</span>
              <Link href="/cyclone-analysis" className="px-space-md py-space-sm rounded-lg bg-primary hover:bg-inverse-surface text-on-primary font-label-data-sm text-label-data-sm flex items-center gap-space-xs transition-all">
                <span>Inspect System</span>
                <Navigation className="w-4 h-4 rotate-90" />
              </Link>
            </div>
          </div>

          {/* Card 2: Deep Depression 01A */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary-container"></div>
            <div>
              <div className="flex items-start justify-between gap-space-md mb-space-md">
                <div>
                  <div className="flex items-center gap-space-sm">
                    <h2 className="font-headline-md text-headline-md text-on-surface">Deep Depression 01A</h2>
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-data-sm text-label-data-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      MODERATE WATCH
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary font-medium mt-1">Deep Depression (DD)</p>
                </div>
                <div className="px-space-sm py-1 rounded bg-secondary-fixed/50 text-secondary font-label-data-sm text-label-data-sm flex items-center gap-1">
                  <RefreshCw className="w-4 h-4" />
                  <span>Recurvature Warning</span>
                </div>
              </div>

              <div className="mb-space-md p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <Navigation className="w-5 h-5 text-secondary rotate-0" />
                  <span className="font-label-data-sm text-label-data-sm text-on-surface">Vector: Azimuth 010° (North)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-caption text-caption text-on-surface-variant">Track Trend:</span>
                  <svg className="w-24 h-6 overflow-visible" fill="none" viewBox="0 0 96 24">
                    <path d="M4 20 L 40 16 L 70 8 L 88 6" stroke="#5bb8fe" strokeDasharray="2 3" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M4 20 L 40 16" stroke="#006398" strokeLinecap="round" strokeWidth="2.5"></path>
                    <circle cx="40" cy="16" fill="#006398" r="3.5"></circle>
                    <circle cx="88" cy="6" fill="#76777d" fillOpacity="0.5" r="2.5"></circle>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md py-space-sm bg-surface-container-lowest">
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">Current Location</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface block">20.1°N, 68.2°E</span>
                  <span className="font-caption text-caption text-on-surface-variant">Off Gujarat Coast</span>
                </div>
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">Wind Speed</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface block">55 km/h</span>
                  <span className="font-caption text-caption text-on-surface-variant font-medium">Gusts 70 km/h</span>
                </div>
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">Movement</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface block">North @ 12 km/h</span>
                  <span className="font-caption text-caption text-on-surface-variant">Heading 010°</span>
                </div>
                <div>
                  <span className="font-caption text-caption uppercase text-on-surface-variant tracking-wider block mb-1">AI Confidence</span>
                  <span className="font-label-data-lg text-label-data-lg text-secondary block font-bold">88.5%</span>
                  <span className="font-caption text-caption text-on-surface-variant">Automated Dvorak T2.0</span>
                </div>
              </div>
            </div>
            <div className="mt-space-lg pt-space-md flex items-center justify-between border-t border-surface-container-low bg-surface-container-lowest">
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">ID: NIO-2026-01A</span>
              <button className="px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-data-sm text-label-data-sm flex items-center gap-space-xs transition-all">
                <span>Inspect System</span>
                <Navigation className="w-4 h-4 rotate-90 text-on-surface-variant" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Basin Map & Compact Side Panel Section */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Live Basin Map & Selected System Telemetry</h2>
              <p className="font-caption text-caption text-on-surface-variant">Click any active system on the map or cards to inspect vector envelopes and ensemble trajectories.</p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-data-sm text-label-data-sm text-secondary font-medium">INSAT-3DR Multispectral Overlay Active</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* Left Side: Interactive Map Container */}
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden relative flex flex-col h-[520px]">
              <div className="relative w-full h-full bg-surface-container-low overflow-hidden select-none">
                <svg className="w-full h-full absolute inset-0 pointer-events-none">
                  <defs>
                    <radialGradient cx="50%" cy="50%" id="coneGrad2" r="60%">
                      <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.18"></stop>
                      <stop offset="100%" stopColor="#ba1a1a" stopOpacity="0.02"></stop>
                    </radialGradient>
                    <pattern height="60" id="grid2" patternUnits="userSpaceOnUse" width="60">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d3e4fe" strokeDasharray="2 4" strokeWidth="0.75"></path>
                    </pattern>
                  </defs>
                  <rect fill="url(#grid2)" height="100%" width="100%"></rect>
                  
                  {/* Coastlines */}
                  <path d="M 120 40 L 160 80 L 140 140 L 170 170 L 190 260 L 230 350 L 270 440 L 310 470" fill="none" stroke="#93ccff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  <path d="M 310 470 L 340 430 L 380 340 L 440 260 L 510 200 L 580 180 L 640 160 L 690 190" fill="none" stroke="#93ccff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  <path d="M 320 460 C 330 480, 350 480, 340 450 Z" fill="#d3e4fe" stroke="#93ccff" strokeWidth="1.5"></path>
                  
                  <circle cx="170" cy="170" fill="#76777d" r="2.5"></circle>
                  <circle cx="510" cy="200" fill="#76777d" r="2.5"></circle>
                  <circle cx="580" cy="180" fill="#76777d" r="2.5"></circle>
                  <circle cx="380" cy="340" fill="#76777d" r="2.5"></circle>
                  
                  {/* VARUN Cone */}
                  <polygon fill="url(#coneGrad2)" points="540,250 490,170 570,160 540,250"></polygon>
                  <path d="M 490 170 Q 530 165 570 160" fill="none" stroke="#ba1a1a" strokeDasharray="3 3" strokeWidth="1"></path>
                  <path d="M 600 370 Q 570 310 540 250" fill="none" stroke="#006398" strokeLinecap="round" strokeWidth="3"></path>
                  <circle cx="600" cy="370" fill="#006398" r="3"></circle>
                  <circle cx="570" cy="310" fill="#006398" r="3.5"></circle>
                  <path d="M 540 250 Q 520 200 500 175" fill="none" stroke="#ba1a1a" strokeDasharray="4 4" strokeWidth="2.5"></path>
                  <circle cx="520" cy="200" fill="#ba1a1a" fillOpacity="0.8" r="3"></circle>
                  <circle cx="500" cy="175" fill="#ba1a1a" r="4"></circle>
                  
                  <circle className="animate-ping" cx="540" cy="250" fill="#ba1a1a" fillOpacity="0.15" r="18" style={{ transformOrigin: "540px 250px", animationDuration: "2.5s" }}></circle>
                  <circle cx="540" cy="250" fill="#ba1a1a" fillOpacity="0.25" r="9"></circle>
                  <circle cx="540" cy="250" fill="#ba1a1a" r="4.5"></circle>
                  
                  {/* DD 01A */}
                  <path d="M 120 250 L 130 200" fill="none" stroke="#006398" strokeLinecap="round" strokeWidth="2"></path>
                  <path d="M 130 200 L 135 150" fill="none" stroke="#006398" strokeDasharray="3 3" strokeWidth="2"></path>
                  <circle cx="120" cy="250" fill="#006398" r="3"></circle>
                  
                  <circle className="animate-pulse" cx="130" cy="200" fill="#5bb8fe" fillOpacity="0.25" r="12"></circle>
                  <circle cx="130" cy="200" fill="#006398" r="4.5"></circle>
                </svg>
              </div>
            </div>

            {/* Right Side: System Inspector Panel */}
            <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between h-[520px]">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container-low bg-surface-container-lowest">
                  <div className="flex items-center gap-space-xs">
                    <Search className="w-5 h-5 text-secondary" />
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">System Inspector</span>
                  </div>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-data-sm text-label-data-sm font-semibold">
                    Selected: VARUN (02B)
                  </span>
                </div>
                
                <div className="mb-space-md">
                  <h3 className="font-display-hero-mobile text-display-hero-mobile text-on-surface tracking-tight leading-tight">Cyclone VARUN</h3>
                  <p className="font-body-md text-body-md text-error font-semibold flex items-center gap-1 mt-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Very Severe Cyclonic Storm (VSCS)</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-lg mb-space-md border border-surface-container">
                  <div className="flex items-center justify-between py-1">
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Current Position</span>
                    <div className="text-right">
                      <span className="font-label-data-lg text-label-data-lg text-on-surface block">17.8°N, 88.4°E</span>
                      <span className="font-caption text-caption text-on-surface-variant">~240 km SE of Puri Coast</span>
                    </div>
                  </div>
                  <div className="h-[1px] bg-surface-container-high"></div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Peak Sustained Wind</span>
                    <span className="font-label-data-lg text-label-data-lg text-error font-bold">135 km/h (73 kts)</span>
                  </div>
                  <div className="h-[1px] bg-surface-container-high"></div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Forward Motion</span>
                    <span className="font-label-data-lg text-label-data-lg text-on-surface">NNW @ 16 km/h</span>
                  </div>
                  <div className="h-[1px] bg-surface-container-high"></div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Ensemble Confidence</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-data-lg text-label-data-lg text-secondary font-bold">94.2%</span>
                      <ShieldCheck className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                </div>
                
                <div className="p-space-sm bg-surface-container-lowest border border-surface-container-low rounded-lg mb-space-sm">
                  <div className="flex items-start gap-space-xs">
                    <Globe className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                      Puri Radar Doppler feed indicates eyewall intensification over past 3 hours. Coastal alerts active for Ganjam, Puri, and Jagatsinghpur.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-space-xs pt-space-sm">
                <Link href="/cyclone-analysis" className="w-full py-space-sm px-space-md rounded-lg bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-data-lg text-label-data-lg flex items-center justify-center gap-space-xs transition-all shadow-sm active:scale-[0.99]">
                  <span>Analyze Cyclone</span>
                  <Navigation className="w-4 h-4 rotate-90" />
                </Link>
                <div className="grid grid-cols-2 gap-space-xs">
                  <button className="py-space-xs px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-data-sm text-label-data-sm flex items-center justify-center gap-1 transition-all">
                    <Globe className="w-4 h-4 text-on-surface-variant" />
                    <span>Doppler Scan</span>
                  </button>
                  <button className="py-space-xs px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-data-sm text-label-data-sm flex items-center justify-center gap-1 transition-all">
                    <Download className="w-4 h-4 text-on-surface-variant" />
                    <span>Export Advisory</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SIH 2026 Problem Statement Validation Banner */}
        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md shadow-sm">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="font-label-data-sm text-label-data-sm text-secondary font-semibold uppercase tracking-wider">SIH 2026 Problem Statement #26070 Validation</span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-data-sm text-[10px]">OPERATIONAL SPEC</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Automated Track Trajectory & Intensity Prediction utilizing real-time INSAT-3DR Geostationary Imagery and Multi-model NWP Ensemble blending.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-xs self-end sm:self-center shrink-0">
            <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Latency: 142ms</span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-data-sm text-label-data-sm text-secondary font-medium">Model v4.8.2 Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
