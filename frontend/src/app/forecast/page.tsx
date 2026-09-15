"use client";

import { useState } from "react";
import { Route, Zap, HelpCircle, Wind, RefreshCw, Download, MapPin, Layers, Plus, Minus, Play, Target, Radio, Share2, CheckCircle, Navigation } from "lucide-react";
import clsx from "clsx";

export default function ForecastPage() {
  const [activeTab, setActiveTab] = useState<"track" | "intensity" | "uncertainty" | "wind">("track");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="flex flex-col w-full px-space-lg py-space-lg min-h-screen">
      {/* Level 2 Contextual Navigation Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest px-space-lg py-space-sm rounded-xl shadow-sm mb-space-lg">
        <div className="flex items-center gap-space-lg overflow-x-auto">
          <div 
            onClick={() => setActiveTab("track")}
            className={clsx(
              "relative py-space-sm font-headline-sm text-headline-sm flex items-center gap-space-xs cursor-pointer transition-colors",
              activeTab === "track" ? "text-secondary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <Route className="w-5 h-5" />
            <span>Track</span>
            {activeTab === "track" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></div>}
          </div>
          <div 
            onClick={() => setActiveTab("intensity")}
            className={clsx(
              "relative py-space-sm font-headline-sm text-headline-sm flex items-center gap-space-xs cursor-pointer transition-colors",
              activeTab === "intensity" ? "text-secondary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <Zap className="w-5 h-5" />
            <span>Intensity</span>
            {activeTab === "intensity" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></div>}
          </div>
          <div 
            onClick={() => setActiveTab("uncertainty")}
            className={clsx(
              "relative py-space-sm font-headline-sm text-headline-sm flex items-center gap-space-xs cursor-pointer transition-colors",
              activeTab === "uncertainty" ? "text-secondary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Uncertainty</span>
            {activeTab === "uncertainty" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></div>}
          </div>
          <div 
            onClick={() => setActiveTab("wind")}
            className={clsx(
              "relative py-space-sm font-headline-sm text-headline-sm flex items-center gap-space-xs cursor-pointer transition-colors",
              activeTab === "wind" ? "text-secondary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <Wind className="w-5 h-5" />
            <span>Wind Radii</span>
            {activeTab === "wind" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></div>}
          </div>
        </div>
        
        <div className="flex items-center gap-space-sm">
          <button 
            onClick={handleRefresh}
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-body-sm text-body-sm font-semibold"
          >
            <RefreshCw className={clsx("w-4 h-4", isRefreshing && "animate-spin")} />
            <span>Refresh Blend (0.1° ECMWF / GFS)</span>
          </button>
          <button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary hover:opacity-90 transition-opacity font-body-sm text-body-sm font-semibold">
            <Download className="w-4 h-4" />
            <span>Export Telemetry</span>
          </button>
        </div>
      </div>

      {/* Operational Context Header */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="font-headline-lg text-headline-lg text-on-surface">Trajectory & Track Prediction</span>
            <span className="px-space-sm py-space-xs bg-error-container text-on-error-container rounded-lg font-label-data-sm text-label-data-sm font-semibold uppercase tracking-wider">
              Very Severe Cyclonic Storm (VSCS)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-secondary">cyclone</span>
              <strong className="font-semibold text-on-surface">Cyclone Vajra (02B)</strong>
            </span>
            <span className="text-outline-variant">•</span>
            <span>Ensemble Multi-Model Consensus (ECMWF, GFS, UKMET)</span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-data-sm text-label-data-sm bg-surface-container-low px-space-xs py-0.5 rounded text-on-surface">12:00 UTC Run Synced</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
          </span>
          <div className="flex flex-col">
            <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Landfall Threat Horizon</span>
            <span className="font-headline-sm text-headline-sm text-error font-bold">Odisha / N. Andhra Coast in ~28h</span>
          </div>
        </div>
      </div>

      {/* Primary 2-Column Split Console */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">
        {/* Left Column: Geospatial Telemetry & Ensemble Map (8 Cols on XL) */}
        <div className="xl:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          {/* GIS Canvas Sub-header Bar */}
          <div className="flex flex-wrap items-center justify-between p-space-md bg-surface-container-low/40 gap-space-sm border-b border-surface-container-low">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">Ensemble Track Extrapolation & Uncertainty Cone</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Observed trajectory T-24h to T-0 with multi-member spread up to T+48h</span>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest p-space-xs rounded-lg shadow-sm border border-surface-container-low">
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Recenter Track">
                <MapPin className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Layers Toggle">
                <Layers className="w-4 h-4" />
              </button>
              <div className="h-4 w-px bg-surface-container"></div>
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Zoom In">
                <Plus className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Zoom Out">
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant px-space-xs">1:2.5M</span>
            </div>
          </div>

          {/* Geospatial SVG Canvas Representation */}
          <div className="relative w-full aspect-[16/10] min-h-[440px] bg-surface-container-low overflow-hidden select-none">
            <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" id="cycloneGlow" r="50%">
                  <stop offset="0%" stopColor="#006398" stopOpacity="0.35"></stop>
                  <stop offset="60%" stopColor="#5bb8fe" stopOpacity="0.1"></stop>
                  <stop offset="100%" stopColor="#5bb8fe" stopOpacity="0"></stop>
                </radialGradient>
                <linearGradient id="coneGradient" x1="0%" x2="40%" y1="100%" y2="0%">
                  <stop offset="0%" stopColor="#006398" stopOpacity="0.08"></stop>
                  <stop offset="60%" stopColor="#006398" stopOpacity="0.16"></stop>
                  <stop offset="100%" stopColor="#ba1a1a" stopOpacity="0.22"></stop>
                </linearGradient>
                <filter height="110%" id="coastalGlow" width="110%" x="-5%" y="-5%">
                  <feDropShadow dx="1" dy="1" floodColor="#006398" floodOpacity="0.08" stdDeviation="2"></feDropShadow>
                </filter>
              </defs>
              <rect fill="#f0f7ff" height="560" width="900"></rect>
              <g stroke="#dce9ff" strokeDasharray="3,3" strokeWidth="1">
                <line x1="0" x2="900" y1="120" y2="120"></line>
                <line x1="0" x2="900" y1="230" y2="230"></line>
                <line x1="0" x2="900" y1="340" y2="340"></line>
                <line x1="0" x2="900" y1="450" y2="450"></line>
                <line x1="160" x2="160" y1="0" y2="560"></line>
                <line x1="320" x2="320" y1="0" y2="560"></line>
                <line x1="480" x2="480" y1="0" y2="560"></line>
                <line x1="640" x2="640" y1="0" y2="560"></line>
                <line x1="800" x2="800" y1="0" y2="560"></line>
              </g>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="10" y="115">21°00' N</text>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="10" y="225">19°00' N</text>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="10" y="335">17°00' N</text>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="10" y="445">15°00' N</text>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="325" y="545">84°00' E</text>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="485" y="545">86°00' E</text>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="645" y="545">88°00' E</text>
              <path d="M 0,0 L 480,0 C 490,40 540,65 570,85 C 560,110 520,135 500,160 C 470,195 440,210 420,240 C 390,285 360,320 330,370 C 300,415 270,470 240,520 L 220,560 L 0,560 Z" fill="#ffffff" filter="url(#coastalGlow)" stroke="#c6c6cd" strokeWidth="1.5"></path>
              <path d="M 0,0 L 480,0 C 490,40 540,65 570,85 C 560,110 520,135 500,160 C 470,195 440,210 420,240 C 390,285 360,320 330,370 C 300,415 270,470 240,520 L 220,560 L 0,560 Z" fill="#f8f9ff" opacity="0.8"></path>
              
              <g className="fill-on-surface-variant font-body-sm font-semibold" fontSize="11">
                <circle cx="540" cy="80" fill="#0b1c30" r="3"></circle>
                <text className="fill-on-surface" x="548" y="83">Kolkata</text>
                <circle cx="495" cy="165" fill="#ba1a1a" r="3.5"></circle>
                <text className="fill-error font-bold" x="430" y="162">Paradip Port</text>
                <circle cx="445" cy="210" fill="#ba1a1a" r="3.5"></circle>
                <text className="fill-error font-bold" x="395" y="208">Puri</text>
                <circle cx="390" cy="265" fill="#0b1c30" r="3"></circle>
                <text x="325" y="268">Gopalpur</text>
                <circle cx="320" cy="360" fill="#0b1c30" r="3"></circle>
                <text x="220" y="364">Visakhapatnam</text>
                <text className="fill-secondary font-headline-sm font-bold tracking-widest opacity-35" fontSize="20" x="640" y="320">BAY OF BENGAL</text>
                <text className="fill-secondary font-label-data-sm opacity-50" fontSize="11" x="660" y="340">CENTRAL BASIN</text>
              </g>

              {/* Landfall sector */}
              <path d="M 430,225 Q 470,185 510,150" fill="none" opacity="0.3" stroke="#ba1a1a" strokeLinecap="round" strokeWidth="7"></path>
              <path d="M 430,225 Q 470,185 510,150" fill="none" stroke="#ba1a1a" strokeDasharray="4,3" strokeWidth="2.5"></path>
              <g transform="translate(490, 195)">
                <rect fill="#ffdad6" height="24" rx="4" width="130" x="-10" y="-12"></rect>
                <text className="fill-on-error-container font-label-data-sm font-bold" fontSize="10" textAnchor="middle" x="55" y="4">LANDFALL INTERCEPT</text>
              </g>

              {/* Uncertainty cone */}
              <path d="M 520,440 C 515,380 500,320 480,260 C 468,225 455,185 435,145 C 485,130 535,160 560,195 C 575,260 565,335 550,400 Z" fill="url(#coneGradient)" stroke="#5bb8fe" strokeDasharray="5,4" strokeWidth="1.5"></path>
              
              {/* Ensemble spaghetti */}
              <path d="M 535,440 Q 525,350 495,265 T 450,155" fill="none" opacity="0.6" stroke="#5bb8fe" strokeDasharray="4,2" strokeWidth="1.2"></path>
              <path d="M 535,440 Q 545,340 520,250 T 490,165" fill="none" opacity="0.6" stroke="#497cff" strokeDasharray="4,2" strokeWidth="1.2"></path>
              <path d="M 535,440 Q 530,345 505,255 T 465,160" fill="none" opacity="0.7" stroke="#006398" strokeWidth="1.5"></path>
              
              {/* Observed track */}
              <path d="M 610,525 L 570,480 L 535,440" fill="none" stroke="#00174b" strokeLinecap="round" strokeWidth="3.5"></path>
              <circle cx="610" cy="525" fill="#00174b" r="4.5" stroke="#ffffff" strokeWidth="1.5"></circle>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="620" y="529">T-24h (75 km/h)</text>
              <circle cx="570" cy="480" fill="#00174b" r="4.5" stroke="#ffffff" strokeWidth="1.5"></circle>
              <text className="fill-on-surface-variant font-label-data-sm" fontSize="10" x="580" y="484">T-12h (90 km/h)</text>
              
              {/* Forecast track */}
              <path d="M 535,440 C 528,380 512,310 492,250 C 478,208 465,178 458,162" fill="none" stroke="#006398" strokeDasharray="6,4" strokeLinecap="round" strokeWidth="3"></path>
              <circle cx="522" cy="385" fill="#ffffff" r="5" stroke="#006398" strokeWidth="2.5"></circle>
              <g transform="translate(534, 380)">
                <rect fill="#ffffff" height="26" rx="4" stroke="#dce9ff" strokeWidth="1" width="130" x="0" y="-12"></rect>
                <text className="fill-on-surface font-label-data-sm font-semibold" fontSize="10" x="8" y="5">+6h • 115 km/h (95%)</text>
              </g>
              <circle cx="508" cy="325" fill="#ffffff" r="5" stroke="#006398" strokeWidth="2.5"></circle>
              <g transform="translate(520, 320)">
                <rect fill="#ffffff" height="26" rx="4" stroke="#dce9ff" strokeWidth="1" width="132" x="0" y="-12"></rect>
                <text className="fill-on-surface font-label-data-sm font-semibold" fontSize="10" x="8" y="5">+12h • 120 km/h (93%)</text>
              </g>
              <circle cx="488" cy="245" fill="#ba1a1a" r="6" stroke="#ffffff" strokeWidth="2"></circle>
              <g transform="translate(502, 240)">
                <rect fill="#ffffff" height="30" rx="4" stroke="#ffdad6" strokeWidth="1" width="168" x="0" y="-14"></rect>
                <text className="fill-error font-label-data-sm font-bold" fontSize="10" x="8" y="0">+24h • PEAK 125 km/h</text>
                <text className="fill-on-surface-variant font-caption" fontSize="9" x="8" y="12">17.8°N, 86.6°E • Conf: 91%</text>
              </g>
              <circle cx="458" cy="162" fill="#ba1a1a" r="7" stroke="#ffffff" strokeWidth="2.5"></circle>
              <g transform="translate(325, 120)">
                <rect fill="#ffffff" height="46" rx="6" stroke="#c6c6cd" strokeWidth="1" width="160" x="0" y="0"></rect>
                <text className="fill-error font-label-data-sm font-bold" fontSize="11" x="10" y="16">+48h LANDFALL CORRIDOR</text>
                <text className="fill-on-surface font-body-sm" fontSize="10" x="10" y="30">Puri / Jagatsinghpur (95 km/h)</text>
                <text className="fill-on-surface-variant font-caption" fontSize="9" x="10" y="41">Confidence: 82% • Surge +3.1m</text>
              </g>
              
              {/* CURRENT FIX */}
              <circle cx="535" cy="440" fill="url(#cycloneGlow)" r="32">
                <animate attributeName="r" dur="3s" repeatCount="indefinite" values="24;36;24"></animate>
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.8;0.3;0.8"></animate>
              </circle>
              <circle cx="535" cy="440" fill="#006398" opacity="0.25" r="14"></circle>
              <circle cx="535" cy="440" fill="#006398" r="7" stroke="#ffffff" strokeWidth="2"></circle>
              <circle cx="535" cy="440" fill="#ffffff" r="2.5"></circle>
              <g transform="translate(370, 428)">
                <rect fill="#131b2e" height="42" rx="6" width="150" x="0" y="0"></rect>
                <text className="fill-on-primary font-label-data-sm font-bold" fontSize="11" x="10" y="17">NOW: 110 KM/H (SCS)</text>
                <text className="fill-secondary-fixed font-caption" fontSize="10" x="10" y="32">14.6°N, 84.8°E • Press 980hPa</text>
              </g>
            </svg>

            {/* Overlays */}
            <div className="absolute top-space-md left-space-md bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-xl shadow-sm flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Track Vector</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-label-data-lg text-label-data-lg text-on-surface">335° NNW</span>
                <span className="font-caption text-caption text-secondary font-semibold">@ 16 km/h</span>
              </div>
            </div>

            <div className="absolute top-space-md right-space-md bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-xl shadow-sm flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                <Target className="w-5 h-5 text-on-secondary-fixed" />
              </div>
              <div className="flex flex-col">
                <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Gale Radii (R34)</span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">NE: 160 NM | SW: 110 NM</span>
              </div>
            </div>
          </div>

          {/* Bottom Map Legend & Interactive Forecast Step Scrubber */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between p-space-md bg-surface-container-lowest gap-space-md border-t border-surface-container-low">
            <div className="flex flex-wrap items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-4 h-1 bg-tertiary-container rounded"></span>
                <span className="font-body-sm text-body-sm text-on-surface">Observed Track</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-4 h-0.5 bg-secondary border-b-2 border-dashed border-secondary"></span>
                <span className="font-body-sm text-body-sm text-on-surface">Ensemble Extrapolation</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-3.5 h-3.5 rounded bg-secondary-fixed opacity-70"></span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">70% Cone Spread</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Landfall Intercept</span>
              </div>
            </div>
            
            <div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-xl overflow-x-auto">
              <button className="px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm font-label-data-sm text-label-data-sm font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>T-0 (Now)</span>
              </button>
              <button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm transition-colors">
                +6h
              </button>
              <button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm transition-colors">
                +12h
              </button>
              <button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm transition-colors">
                +24h
              </button>
              <button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm transition-colors">
                +48h
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-secondary text-on-secondary hover:opacity-90 transition-opacity ml-1">
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Operational Forecast Summary & Metrics (4 Cols on XL) */}
        <div className="xl:col-span-4 flex flex-col gap-space-lg">
          {/* Forecast Summary Card */}
          <div className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low/50">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-low">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Operational Forecast</span>
                <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">JTWC / IMD Consensus</span>
              </div>
              <span className="px-space-sm py-space-xs bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-data-sm text-label-data-sm font-semibold">
                Bulletin #14
              </span>
            </div>
            
            <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl mb-space-md border border-surface-container">
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Current State (T-0)</span>
              <div className="flex items-baseline justify-between mt-space-xs">
                <span className="font-headline-md text-headline-md text-on-surface font-bold">110 km/h</span>
                <span className="font-label-data-sm text-label-data-sm text-secondary font-semibold">Gusts 130 km/h</span>
              </div>
              <div className="grid grid-cols-2 gap-space-xs mt-space-xs font-body-sm text-body-sm">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant">Central Pressure</span>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">980 hPa (-4hPa/6h)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-on-surface-variant">Fix Location</span>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">14.6°N, 84.8°E</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-space-sm mb-space-md">
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Next 24h Trajectory Outlook</span>
              <div className="flex items-start justify-between p-space-sm rounded-lg bg-surface-container-low/60 border border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <Navigation className="w-5 h-5 text-secondary -rotate-45" />
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Forward Motion</span>
                </div>
                <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">NNW at 16 km/h</span>
              </div>
              <div className="flex items-start justify-between p-space-sm rounded-lg bg-surface-container-low/60 border border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <Zap className="w-5 h-5 text-error" />
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Peak Anticipated Wind</span>
                </div>
                <span className="font-label-data-sm text-label-data-sm font-semibold text-error">125 km/h (VSCS)</span>
              </div>
              <div className="flex items-start justify-between p-space-sm rounded-lg bg-surface-container-low/60 border border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <Wind className="w-5 h-5 text-secondary" />
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Rapid Intensification</span>
                </div>
                <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">Moderate (38%)</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl mb-space-md border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Model Track Agreement</span>
                <span className="font-label-data-lg text-label-data-lg text-secondary font-bold">91% High</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden my-space-xs">
                <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: "91%" }}></div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                51-member ECMWF & GFS ensemble spread remains tightly grouped (σ = ±24 km at +24h), indicating high landfall trajectory certainty.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row xl:flex-col gap-space-xs mt-auto">
              <button className="w-full py-space-sm px-space-md rounded-lg bg-primary-container text-on-primary hover:opacity-90 transition-opacity font-body-md text-body-md font-semibold flex items-center justify-center gap-space-xs">
                <span>View Detailed Forecast</span>
                <Navigation className="w-4 h-4 rotate-90" />
              </button>
              <button className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-body-md text-body-md font-semibold flex items-center justify-center gap-space-xs border border-surface-container">
                <Download className="w-4 h-4" />
                <span>Download Advisory (PDF)</span>
              </button>
            </div>
          </div>

          {/* Satellite Context Preview Card */}
          <div className="flex flex-col bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-low">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Infrared Multispectral Feed</span>
              <span className="font-label-data-sm text-label-data-sm text-secondary">INSAT-3DR 10.8µm</span>
            </div>
            <div className="relative w-full h-36 rounded-lg overflow-hidden bg-surface-container flex items-center justify-center">
              <span className="text-on-surface-variant font-caption">[Satellite Feed View Placeholder]</span>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-space-sm">
                <span className="font-label-data-sm text-label-data-sm text-on-primary">Eye Core Temp: -76°C (Strong Convection)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Analytical Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        <div className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <div className="w-8 h-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">Landfall Projection</span>
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">High Vulnerability Corridor</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs mt-space-xs font-body-sm text-body-sm text-on-surface">
            <div className="flex justify-between py-1 bg-surface-container-low/40 px-space-xs rounded">
              <span className="text-on-surface-variant">Target Sector:</span>
              <span className="font-semibold text-on-surface">Puri to Paradip (Odisha)</span>
            </div>
            <div className="flex justify-between py-1 px-space-xs">
              <span className="text-on-surface-variant">Estimated Window:</span>
              <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">+26h to +32h Horizon</span>
            </div>
            <div className="flex justify-between py-1 bg-surface-container-low/40 px-space-xs rounded">
              <span className="text-on-surface-variant">Storm Surge:</span>
              <span className="font-label-data-sm text-label-data-sm font-semibold text-error">2.5m - 3.2m Inundation</span>
            </div>
          </div>
          <p className="font-caption text-caption text-on-surface-variant mt-space-sm leading-relaxed">
            Tidal timing coincides with early morning high astronomical tide; low-lying estuarine plains facing elevated backwater risk.
          </p>
        </div>

        <div className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <div className="w-8 h-8 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">Wind Field Extent</span>
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">R34 / R50 Nautical Radii</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs mt-space-xs font-body-sm text-body-sm text-on-surface">
            <div className="flex justify-between py-1 bg-surface-container-low/40 px-space-xs rounded">
              <span className="text-on-surface-variant">34-kt Gale Radius:</span>
              <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">160 NM (NE) / 110 NM (SW)</span>
            </div>
            <div className="flex justify-between py-1 px-space-xs">
              <span className="text-on-surface-variant">50-kt Storm Radius:</span>
              <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">75 NM (NE) / 50 NM (SW)</span>
            </div>
            <div className="flex justify-between py-1 bg-surface-container-low/40 px-space-xs rounded">
              <span className="text-on-surface-variant">64-kt Core Radius:</span>
              <span className="font-label-data-sm text-label-data-sm font-semibold text-error">30 NM Concentric Eye Wall</span>
            </div>
          </div>
          <p className="font-caption text-caption text-on-surface-variant mt-space-sm leading-relaxed">
            Significant northeastward quadrant expansion due to southerly monsoon surge interaction over central Bay waters.
          </p>
        </div>

        <div className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <div className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">Ensemble Dispersion</span>
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Variance & Outlier Diagnostic</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs mt-space-xs font-body-sm text-body-sm">
            <div className="flex items-center gap-space-xs text-on-surface">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="font-semibold">Tight consensus along NNW trajectory</span>
            </div>
            <p className="text-on-surface-variant font-body-sm text-body-sm mt-1 leading-relaxed">
              Low track dispersion over the next 24 hours. Subtropical ridge anchoring over Myanmar prevents eastward recurvature before landfall. High operational confidence in northern Odisha coastal crossing.
            </p>
          </div>
          <div className="mt-auto pt-space-xs flex items-center justify-between font-label-data-sm text-label-data-sm text-on-surface-variant">
            <span>Spread Variance: ±18.4 km</span>
            <span className="text-secondary font-semibold">51 Members Synced</span>
          </div>
        </div>
      </div>
    </div>
  );
}
