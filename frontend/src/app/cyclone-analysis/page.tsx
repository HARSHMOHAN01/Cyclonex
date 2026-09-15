"use client";

import { Brain, Layers, Share2, SlidersHorizontal, ArrowDown, ArrowRight, CheckCircle, Navigation, MapPin, Loader2 } from "lucide-react";
import Image from "next/image";
import { useCyclones, useCycloneDetails } from "@/lib/hooks/useCyclones";

export default function CycloneAnalysisPage() {
  const { data: cyclones, isLoading: cyclonesLoading } = useCyclones('Active');
  const activeCycloneId = cyclones?.[0]?.id;
  
  const { data: details, isLoading: detailsLoading } = useCycloneDetails(activeCycloneId || '');
  const cyclone = details?.cyclone;

  if (cyclonesLoading || (activeCycloneId && detailsLoading)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 text-secondary animate-spin" />
      </div>
    );
  }

  if (!cyclone) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-on-surface-variant">
        No active cyclone data available for analysis.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-space-lg px-space-lg py-space-lg min-h-screen">
      {/* CONTEXT HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xs">
        <div className="flex flex-col gap-space-xs">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">Cyclone {cyclone.name}</span>
            <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-semibold uppercase tracking-wider">
              {cyclone.category >= 4 ? 'Severe Cyclonic Storm (SCS)' : 'Cyclonic Storm (CS)'}
            </span>
            <div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-low text-secondary font-label-data-sm text-label-data-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              Active
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
            <span className="font-label-data-sm text-label-data-sm text-secondary font-medium">{cyclone.basin} ({cyclone.region})</span>
            <span className="text-outline-variant">•</span>
            <span>INSAT-3DR Telemetry Synced</span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-data-sm text-label-data-sm">Last Analysis: {new Date(cyclone.timestamp).toLocaleTimeString()} UTC</span>
          </div>
        </div>
        
        {/* Quick Actions / Mode Indicator */}
        <div className="flex items-center gap-space-sm self-start md:self-auto">
          <button className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest shadow-sm text-on-surface font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors flex items-center gap-1.5 border border-surface-container-low" type="button">
            <SlidersHorizontal className="w-4 h-4 text-secondary" />
            <span>Sensor Layer</span>
          </button>
          <button className="px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-semibold shadow-sm hover:opacity-90 transition-opacity flex items-center gap-1.5" type="button">
            <Share2 className="w-4 h-4" />
            <span>Export Bulletin</span>
          </button>
        </div>
      </div>

      {/* MAIN TWO-COLUMN HERO LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/* LEFT COLUMN: Satellite Observation (7 Cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-container-low">
          {/* Card Bar */}
          <div className="px-space-md py-space-sm flex items-center justify-between bg-surface-container-lowest border-b border-surface-container-low">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[20px] text-secondary">satellite_alt</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Multispectral Satellite Observation</span>
            </div>
            <span className="px-space-sm py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-data-sm text-label-data-sm font-medium border border-surface-container">
              {new Date(cyclone.timestamp).toLocaleTimeString()} UTC
            </span>
          </div>
          
          {/* Satellite View Container with Floating Badge */}
          <div className="relative w-full aspect-[4/3] bg-surface-container-highest flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
              <span className="text-on-surface-variant font-caption">[Satellite Image Feed Placeholder]</span>
            </div>
            
            <div className="absolute top-space-md left-space-md flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-md text-on-surface border border-surface-container-low">
              <Layers className="w-4 h-4 text-secondary" />
              <span className="font-label-data-sm text-label-data-sm font-semibold tracking-tight">INSAT-3DR / Enhanced IR Composite</span>
            </div>
            
            <div className="absolute bottom-space-md right-space-md px-space-sm py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm font-label-data-sm text-label-data-sm text-on-surface-variant font-mono border border-surface-container-low">
              FOV: {cyclone.latitude - 5}°N–{cyclone.latitude + 5}°N / {cyclone.longitude - 5}°E–{cyclone.longitude + 5}°E
            </div>
          </div>
          
          {/* Telemetry Meta Strip below Viewport */}
          <div className="px-space-md py-space-sm bg-surface-container-low/70 flex flex-wrap items-center justify-between gap-space-xs font-label-data-sm text-label-data-sm text-on-surface-variant border-t border-surface-container-low">
            <div className="flex items-center gap-space-sm">
              <span className="font-semibold text-on-surface">Scale:</span>
              <span>1:3,500,000</span>
            </div>
            <div className="hidden sm:inline-block text-outline-variant">•</div>
            <div className="flex items-center gap-space-sm">
              <span className="font-semibold text-on-surface">Central CDO Diameter:</span>
              <span>180 km</span>
            </div>
            <div className="hidden sm:inline-block text-outline-variant">•</div>
            <div className="flex items-center gap-space-sm">
              <span className="font-semibold text-on-surface">Eye Structure:</span>
              <span className="text-secondary font-semibold">Developing (Ragged)</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Current Cyclone Summary & AI Classification (5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          {/* Current Cyclone Summary Tile */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between flex-1 border border-surface-container-low">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest font-bold">Synoptic Telemetry</span>
                <span className="font-label-data-sm text-label-data-sm text-secondary font-semibold">Sensor Cluster β-12</span>
              </div>
              <div className="grid grid-cols-2 gap-space-lg">
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-medium">Position</span>
                  <span className="font-label-data-lg text-label-data-lg text-on-surface font-bold mt-1">{cyclone.latitude}° N, {cyclone.longitude}° E</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">~340 km ESE of Coast</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-medium">Sustained Wind</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">{cyclone.maxWind}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">km/h</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Gusts up to {Math.round(cyclone.maxWind * 1.2)} km/h</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-medium">Translation Drift</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Navigation className="w-4 h-4 text-secondary -rotate-45" />
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Dir {cyclone.movementDirection}° @ {cyclone.movementSpeed} km/h</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Azimuth Bearing {cyclone.movementDirection}°</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-medium">Ensemble Agreement</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">91%</span>
                    <span className="font-caption text-caption text-secondary font-semibold uppercase">High Confidence</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">ECMWF / GFS / UKMET synched</span>
                </div>
              </div>
            </div>
            
            <div className="h-px bg-surface-container-high my-space-md"></div>
            
            <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg font-label-data-sm text-label-data-sm border border-surface-container">
              <div className="flex items-center gap-2">
                <span className="text-on-surface-variant">Central Pressure:</span>
                <span className="font-bold text-on-surface">{cyclone.centralPressure} hPa (-6 hPa/6h)</span>
              </div>
              <div className="flex items-center gap-1 text-secondary">
                <ArrowDown className="w-4 h-4" />
                <span className="font-semibold">Deepening</span>
              </div>
            </div>
          </div>

          {/* AI Classification Container */}
          <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-surface-container">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-secondary" />
                  <span className="font-caption text-caption uppercase tracking-wider font-bold text-on-surface">Automated AI Assessment</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-data-sm text-label-data-sm font-semibold">
                  91% Confidence
                </span>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                  {cyclone.category >= 4 ? 'Severe Cyclonic Storm (SCS)' : 'Cyclonic Storm (CS)'}
                </span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">
                  Model: Multi-Scale Dvorak CNN • Latent Feature Depth: 48
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                Deep convective curved band pattern wrapping 0.85 turns with developing central dense overcast (CDO). Cloud-top temperatures averaging -78°C around inner eyewall perimeter.
              </p>
            </div>
            
            <div className="mt-space-md pt-space-sm flex items-center justify-between border-t border-surface-container">
              <button className="inline-flex items-center gap-2 px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-semibold shadow-sm hover:bg-on-surface-variant transition-colors border border-surface-container-low">
                <span>View AI Explanation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="font-caption text-caption text-on-surface-variant">Validated with INSAT-3DR IR1</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Two Complementary Visual Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
        {/* LEFT PANEL: Intensity Trend Line Chart */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-surface-container-low">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-space-md">
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Intensity Trend</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Past 24h & Projected 12h Sustained Wind Speed (km/h)
              </p>
            </div>
            <div className="flex items-center gap-space-sm font-label-data-sm text-label-data-sm">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span> Observed
              </span>
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="h-2.5 w-2.5 rounded-full bg-outline-variant"></span> Projected
              </span>
            </div>
          </div>
          
          <div className="relative w-full h-56 pt-2 pb-2">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 540 180">
              <defs>
                <linearGradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#006398" stopOpacity="0.25"></stop>
                  <stop offset="100%" stopColor="#006398" stopOpacity="0.0"></stop>
                </linearGradient>
              </defs>
              <line stroke="#e5eeff" strokeDasharray="3,3" strokeWidth="1" x1="45" x2="520" y1="20" y2="20"></line>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="end" x="35" y="24">160</text>
              <line stroke="#e5eeff" strokeDasharray="3,3" strokeWidth="1" x1="45" x2="520" y1="65" y2="65"></line>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="end" x="35" y="69">120</text>
              <line stroke="#ffdad6" strokeDasharray="4,4" strokeWidth="1.5" x1="45" x2="520" y1="100" y2="100"></line>
              <text className="font-mono text-[9px] fill-current text-error font-semibold" textAnchor="end" x="515" y="94">SCS Threshold (89 km/h)</text>
              <line stroke="#e5eeff" strokeDasharray="3,3" strokeWidth="1" x1="45" x2="520" y1="110" y2="110"></line>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="end" x="35" y="114">80</text>
              <line stroke="#e5eeff" strokeWidth="1" x1="45" x2="520" y1="155" y2="155"></line>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="end" x="35" y="159">40</text>
              
              <polygon fill="url(#trendGradient)" points="70,127 140,116 210,99 280,88 340,76 340,155 70,155"></polygon>
              <polyline fill="none" points="70,127 140,116 210,99 280,88 340,76" stroke="#006398" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polyline>
              <polyline fill="none" points="340,76 420,65 490,54" stroke="#006398" strokeDasharray="4,4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
              
              <circle className="fill-surface-container-lowest" cx="70" cy="127" r="3.5" stroke="#006398" strokeWidth="2"></circle>
              <circle className="fill-surface-container-lowest" cx="140" cy="116" r="3.5" stroke="#006398" strokeWidth="2"></circle>
              <circle className="fill-surface-container-lowest" cx="210" cy="99" r="3.5" stroke="#006398" strokeWidth="2"></circle>
              <circle className="fill-surface-container-lowest" cx="280" cy="88" r="3.5" stroke="#006398" strokeWidth="2"></circle>
              
              <circle className="fill-surface-container-lowest" cx="420" cy="65" r="3" stroke="#76777d" strokeWidth="1.5"></circle>
              <circle className="fill-surface-container-lowest" cx="490" cy="54" r="3" stroke="#76777d" strokeWidth="1.5"></circle>
              
              <circle className="animate-ping" cx="340" cy="76" fill="#006398" fillOpacity="0.25" r="7"></circle>
              <circle cx="340" cy="76" fill="#006398" r="4.5"></circle>
              <circle cx="340" cy="76" fill="#ffffff" r="2"></circle>
              
              <rect fill="#131b2e" height="20" rx="3" width="50" x="315" y="46"></rect>
              <text className="font-mono text-[10px] fill-surface font-bold" textAnchor="middle" x="340" y="60">{cyclone.maxWind} km/h</text>
              
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="middle" x="70" y="174">T-16h</text>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="middle" x="140" y="174">T-12h</text>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="middle" x="210" y="174">T-8h</text>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="middle" x="280" y="174">T-4h</text>
              <text className="font-mono text-[10px] fill-current text-secondary font-bold" textAnchor="middle" x="340" y="174">NOW</text>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="middle" x="420" y="174">T+4h</text>
              <text className="font-mono text-[10px] fill-current text-outline" textAnchor="middle" x="490" y="174">T+8h</text>
            </svg>
          </div>
          
          <div className="mt-space-sm pt-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant border-t border-surface-container-low">
            <span>IMD Dvorak T-Number: T{Math.round(cyclone.category)} (+0.5 / 12h)</span>
            <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">Rapid Intensification Index: 38% (Moderate)</span>
          </div>
        </div>

        {/* RIGHT PANEL: Historical & Observed Track Map */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-surface-container-low">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Historical & Observed Track</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Past 48h trajectory extrapolation across {cyclone.basin}
              </p>
            </div>
            
            <div className="flex items-center gap-1 bg-surface-container-low rounded-lg p-1 border border-surface-container">
              <button aria-label="Zoom in" className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface shadow-xs transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px]">add</span>
              </button>
              <button aria-label="Zoom out" className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface shadow-xs transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px]">remove</span>
              </button>
              <button aria-label="Recenter" className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface shadow-xs transition-colors" type="button">
                <MapPin className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="relative w-full h-56 rounded-lg bg-surface-container overflow-hidden border border-surface-container-low">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 220">
              <rect fill="#e5eeff" height="220" width="500"></rect>
              <path d="M 0,0 L 160,0 Q 140,40 120,70 T 90,140 Q 70,180 50,220 L 0,220 Z" fill="#eff4ff" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 420,0 Q 400,60 410,130 Q 425,180 460,220 L 500,220 L 500,0 Z" fill="#eff4ff" stroke="#dce9ff" strokeWidth="1.5"></path>
              <ellipse cx="60" cy="195" fill="#eff4ff" rx="14" ry="20" stroke="#dce9ff" strokeWidth="1.5"></ellipse>
              
              <text className="font-sans text-[10px] fill-current text-outline font-semibold tracking-wide" x="135" y="35">ODISHA</text>
              <text className="font-sans text-[10px] fill-current text-outline font-semibold tracking-wide" x="95" y="105">ANDHRA PRADESH</text>
              <text className="font-sans text-[9px] fill-current text-outline font-semibold tracking-wide" x="45" y="170">TAMIL NADU</text>
              <text className="font-sans text-[12px] fill-current text-on-secondary-container opacity-40 font-bold tracking-widest" x="240" y="125">BAY OF BENGAL</text>
              
              <line stroke="#dce9ff" strokeDasharray="2,4" strokeWidth="1" x1="200" x2="200" y1="0" y2="220"></line>
              <line stroke="#dce9ff" strokeDasharray="2,4" strokeWidth="1" x1="340" x2="340" y1="0" y2="220"></line>
              <line stroke="#dce9ff" strokeDasharray="2,4" strokeWidth="1" x1="0" x2="500" y1="110" y2="110"></line>
              
              <text className="font-mono text-[9px] fill-outline-variant" x="204" y="212">84°E</text>
              <text className="font-mono text-[9px] fill-outline-variant" x="344" y="212">88°E</text>
              <text className="font-mono text-[9px] fill-outline-variant" x="10" y="106">14°N</text>
              
              <polyline fill="none" points="330,180 290,150 250,120 220,95" stroke="#006398" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
              <polygon fill="#5bb8fe" fillOpacity="0.18" points="220,95 180,55 150,75"></polygon>
              <polyline fill="none" points="220,95 168,64" stroke="#006398" strokeDasharray="5,4" strokeLinecap="round" strokeWidth="2.5"></polyline>
              
              <circle cx="330" cy="180" fill="#ffffff" r="4" stroke="#006398" strokeWidth="2"></circle>
              <text className="font-mono text-[9px] fill-current text-on-surface-variant" x="340" y="184">T-36h (Depr.)</text>
              <circle cx="290" cy="150" fill="#ffffff" r="4.5" stroke="#006398" strokeWidth="2"></circle>
              <text className="font-mono text-[9px] fill-current text-on-surface-variant" x="300" y="154">T-24h (CS)</text>
              <circle cx="250" cy="120" fill="#ffffff" r="5" stroke="#006398" strokeWidth="2"></circle>
              <text className="font-mono text-[9px] fill-current text-on-surface-variant" x="260" y="124">T-12h</text>
              
              <circle cx="168" cy="64" fill="#e5eeff" r="5" stroke="#006398" strokeDasharray="2,2" strokeWidth="2"></circle>
              <text className="font-mono text-[9px] fill-current text-secondary font-bold" x="125" y="58">+12h Projected</text>
              
              <circle className="animate-ping" cx="220" cy="95" fill="#006398" fillOpacity="0.2" r="10"></circle>
              <circle cx="220" cy="95" fill="#006398" r="6"></circle>
              <circle cx="220" cy="95" fill="#ffffff" r="2.5"></circle>
              <text className="font-mono text-[10px] fill-current text-primary font-bold" x="228" y="92">{cyclone.latitude}°N, {cyclone.longitude}°E (NOW)</text>
            </svg>
            
            <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-sm px-space-sm py-1 rounded shadow-xs flex items-center gap-space-md font-label-data-sm text-label-data-sm border border-surface-container-low">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-secondary"></span>
                <span className="text-on-surface-variant">Historical Track</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 border-b-2 border-secondary border-dashed"></span>
                <span className="text-on-surface-variant">Projected Cone (+12h)</span>
              </div>
            </div>
          </div>
          
          <div className="mt-space-sm pt-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant border-t border-surface-container-low">
            <span>Projected Landfall Window: Next 48 Hours</span>
            <span className="font-medium text-on-surface">Target Zone: Regional Coastline</span>
          </div>
        </div>
      </div>

      {/* CLINICAL SYSTEM FOOTER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm py-space-sm px-space-md bg-surface-container-lowest rounded-lg text-caption font-caption text-on-surface-variant mt-4 border border-surface-container-low">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
          <span className="font-label-data-sm text-label-data-sm uppercase tracking-wider font-semibold">
            LIVE DB DATA
          </span>
          <span className="hidden md:inline">• WMO / IMD Standard Baseline Telemetry Mesh</span>
        </div>
        <div className="flex items-center gap-space-md font-mono text-label-data-sm">
          <span>Model v4.8.2 Live</span>
          <span>Station Latency: 42ms</span>
        </div>
      </div>
    </div>
  );
}
