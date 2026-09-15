"use client";

import { RefreshCw, Download, Grip, Fullscreen, Plus, Minus, Focus, Sparkles, Activity, CalendarDays, BarChart, Route, Radar, Settings, History, Satellite, Disc, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function SatellitePage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-space-lg px-space-lg">
      <div className="flex flex-col w-full space-y-space-md max-w-[1600px] mx-auto">
        {/* Level 2 Sub-Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm border border-surface-container-low">
          <div className="flex items-center gap-space-md">
            <nav className="flex items-center gap-space-xs">
              <button className="relative px-space-md py-space-xs font-headline-sm text-headline-sm text-secondary font-semibold border-b-2 border-secondary transition-all">
                Observations
              </button>
              <button className="px-space-md py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">
                Channels
              </button>
              <button className="px-space-md py-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">
                Timeline
              </button>
            </nav>
            <span className="hidden md:inline-block h-4 w-px bg-surface-container-high"></span>
            <div className="hidden lg:flex items-center gap-space-xs text-on-surface-variant font-label-data-sm text-label-data-sm">
              <Satellite className="w-4 h-4 text-secondary" />
              <span>GEO-SYNCHRONOUS ORBIT · 74.0°E NADIR</span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low text-on-surface hover:bg-surface-container rounded-lg font-label-data-sm text-label-data-sm transition-colors border border-surface-container">
              <RefreshCw className="w-4 h-4" />
              <span>Sync Ephemeris</span>
            </button>
            <button className="flex items-center gap-space-xs px-space-md py-space-xs bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-data-sm text-label-data-sm transition-all shadow-sm">
              <Download className="w-4 h-4" />
              <span>Fetch Latest Granule</span>
            </button>
          </div>
        </div>

        {/* Operational Telemetry Bar (Sensor Dropdowns & Status) */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest px-space-md py-space-xs rounded-xl shadow-sm border border-surface-container-low">
          <div className="flex flex-wrap items-center gap-space-sm">
            {/* Satellite Selection */}
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg border border-surface-container">
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Sat</span>
              <select className="bg-transparent font-label-data-sm text-label-data-sm text-on-surface font-semibold focus:outline-none cursor-pointer">
                <option value="INSAT-3DR">INSAT-3DR (GEO 74.0°E)</option>
                <option value="INSAT-3D">INSAT-3D (GEO 82.0°E)</option>
                <option value="MetOp-B">MetOp-B (LEO Pol.)</option>
                <option value="NOAA-20">NOAA-20 (JPSS-1)</option>
              </select>
            </div>
            {/* Channel Selection */}
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg border border-surface-container">
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Band</span>
              <select className="bg-transparent font-label-data-sm text-label-data-sm text-on-surface font-semibold focus:outline-none cursor-pointer">
                <option value="TIR-1">TIR-1 Thermal IR (10.8 µm)</option>
                <option value="Visible">Visible (0.65 µm)</option>
                <option value="Water-Vapor">Water Vapor (6.8 µm)</option>
                <option value="SWIR">SWIR (1.6 µm)</option>
              </select>
            </div>
            {/* Timestamp Selection */}
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg border border-surface-container">
              <span className="font-caption text-caption uppercase text-on-surface-variant font-semibold">Epoch</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">14:15 UTC (T-17m / Latest)</span>
              </div>
            </div>
          </div>
          
          {/* Sensor Health & Telemetry Controls */}
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-md bg-secondary-fixed/50">
              <Disc className="w-4 h-4 text-secondary" />
              <span className="font-label-data-sm text-label-data-sm text-on-secondary-fixed font-semibold">Sensor Calibrated · SNR 48.2 dB</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors" title="Pan / Drag tool">
                <Grip className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors" title="Toggle Fullscreen">
                <Fullscreen className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Primary Workspace Split-Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          {/* Left Column: Hero Satellite Image Viewer & Radiometric Tray (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-space-md">
            {/* Scientific HUD Satellite Display Frame */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] bg-inverse-surface rounded-xl overflow-hidden shadow-md group select-none">
              {/* Live Satellite Image Source */}
              <div className="w-full h-full bg-slate-900 relative">
                {/* Fallback pattern if image missing */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
              </div>
              
              {/* Ambient Optical Vignette & Radar Scanlines */}
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-inverse-surface/60 pointer-events-none"></div>
              
              {/* GIS Coordinate Reticle Crosshairs Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="relative w-28 h-28 border border-secondary/40 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-secondary"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-secondary"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-3 bg-secondary"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-3 bg-secondary"></div>
                </div>
              </div>
              
              {/* HUD Top Left: Sector Identifier */}
              <div className="absolute top-3 left-3 flex items-center gap-space-xs bg-inverse-surface/90 backdrop-blur-md px-space-sm py-1 rounded-md text-inverse-on-surface shadow-sm border border-surface-tint/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-data-sm text-label-data-sm font-semibold tracking-wider">INSAT-3DR // SECTOR: BAY OF BENGAL (BOB-03)</span>
              </div>
              
              {/* HUD Top Right: Cyclone Ephemeris */}
              <div className="absolute top-3 right-3 flex items-center gap-space-xs bg-inverse-surface/90 backdrop-blur-md px-space-sm py-1 rounded-md text-inverse-on-surface shadow-sm border border-error/30">
                <Activity className="w-3.5 h-3.5 text-error" />
                <span className="font-label-data-sm text-label-data-sm font-semibold tracking-wider text-error-container">CYC VAJRA // 14.6°N, 84.8°E</span>
              </div>
              
              {/* HUD Bottom Left: Scale & Coordinates */}
              <div className="absolute bottom-3 left-3 bg-inverse-surface/90 backdrop-blur-md px-space-sm py-1.5 rounded-md text-inverse-on-surface shadow-sm flex flex-col gap-0.5 border border-surface-tint/30">
                <div className="flex items-center gap-space-sm font-label-data-sm text-label-data-sm">
                  <span className="text-secondary-fixed">FOV: 1,850 × 1,400 KM</span>
                  <span>·</span>
                  <span>1:3,500,000</span>
                </div>
                <div className="w-24 h-1 bg-surface-container-high relative overflow-hidden rounded-full mt-0.5">
                  <div className="w-12 h-full bg-secondary"></div>
                </div>
              </div>
              
              {/* HUD Bottom Right: Infrared Brightness Temperature Ramp Legend */}
              <div className="absolute bottom-3 right-3 bg-inverse-surface/95 backdrop-blur-md p-2 rounded-md shadow-sm flex flex-col gap-1 w-64 border border-surface-tint/30">
                <div className="flex items-center justify-between text-inverse-on-surface font-caption text-caption">
                  <span className="font-semibold text-error-container">-80°C (Cold/Deep Conv.)</span>
                  <span className="text-surface-container-highest">+30°C (Sea Sfc)</span>
                </div>
                {/* Calibrated Temperature Color Ramp Gradient */}
                <div className="h-2.5 w-full rounded relative overflow-hidden flex" style={{ background: "linear-gradient(to right, #93000a 0%, #ba1a1a 20%, #ffdad6 40%, #5bb8fe 65%, #006398 85%, #00174b 100%)" }}>
                  {/* Reticle Marker for Eyewall Peak Cold Top */}
                  <div className="absolute left-[8%] top-0 bottom-0 w-1 bg-white shadow-sm" title="Eyewall Core: -78.4°C"></div>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm pt-0.5">
                  <span className="text-inverse-on-surface font-mono text-[10px]">TIR-1 Brightness Temp (Tb)</span>
                  <span className="text-secondary-container font-mono text-[10px] font-semibold">Peak: -78.4°C</span>
                </div>
              </div>
              
              {/* Floating HUD Quick Control Pill */}
              <div className="absolute right-3 top-12 flex flex-col gap-1 bg-inverse-surface/80 backdrop-blur-md p-1 rounded-lg border border-surface-tint/30">
                <button className="w-7 h-7 flex items-center justify-center text-inverse-on-surface hover:bg-surface-container-high/20 rounded transition-colors" title="Zoom In">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-inverse-on-surface hover:bg-surface-container-high/20 rounded transition-colors" title="Zoom Out">
                  <Minus className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-inverse-on-surface hover:bg-surface-container-high/20 rounded transition-colors" title="Recenter Frame">
                  <Focus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Below Viewer: Metadata Telemetry Strip & AI Action Catalyst */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-surface-container-low">
              {/* Telemetry Data Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm flex-1">
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Observation</span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold mt-0.5">14:15 UTC (14 May)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Sensor Payload</span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold mt-0.5">ISRO / IMD 3DR Imager</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Resolution</span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold mt-0.5">4.0 km (Thermal IR)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Radiometric Qual</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-label-data-sm text-label-data-sm text-secondary font-semibold">Nominal (99.8%)</span>
                  </div>
                </div>
              </div>
              
              {/* Direct Trigger Button: AI Extraction & Dvorak Synthesis */}
              <button className="flex items-center justify-center gap-space-sm px-space-lg py-2.5 bg-secondary text-on-secondary hover:bg-secondary/90 font-headline-sm text-headline-sm rounded-lg shadow-sm transition-all transform active:scale-[0.99] whitespace-nowrap">
                <Sparkles className="w-5 h-5" />
                <span>Analyze with AI &rarr;</span>
              </button>
            </div>
          </div>
          
          {/* Right Column: Multi-Sensor Ingest & Channel Inspector (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-space-md">
            {/* Multi-Sensor Fusion Status Card */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col space-y-space-sm border border-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <Radar className="text-secondary w-5 h-5" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Multi-Sensor Ingest</h3>
                </div>
                <span className="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed rounded font-label-data-sm text-label-data-sm font-semibold uppercase tracking-wider">Active Stream</span>
              </div>
              
              <div className="space-y-space-xs mt-space-xs">
                {/* Sensor 1: INSAT-3DR */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between border border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">INSAT-3DR (Primary GEO)</span>
                    <span className="font-caption text-caption text-on-surface-variant">Multi-Spectral Imager / Sounder</span>
                  </div>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">Active (0m delay)</span>
                </div>
                
                {/* Sensor 2: Oceansat-3 */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between border border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">Oceansat-3 (OSCAT-3)</span>
                    <span className="font-caption text-caption text-on-surface-variant">Ku-band Scatterometer Wind Feed</span>
                  </div>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">Linked (Sync)</span>
                </div>
                
                {/* Sensor 3: MetOp-C */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between border border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">MetOp-C (EUMETSAT)</span>
                    <span className="font-caption text-caption text-on-surface-variant">ASCAT 25km Surface Vector Swath</span>
                  </div>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface-variant">Ready</span>
                </div>
              </div>
              
              <div className="pt-space-xs flex items-center gap-space-xs text-on-surface-variant font-label-data-sm text-label-data-sm">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Next pass: <strong className="text-on-surface">MetOp-B in 42 mins</strong> (East Coast Overpass)</span>
              </div>
            </div>
            
            {/* Quick Spectral Channel Switcher */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col space-y-space-sm border border-surface-container-low">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Spectral Channels</h3>
                <span className="font-caption text-caption text-on-surface-variant uppercase">Interactive Bands</span>
              </div>
              
              <div className="flex flex-col gap-space-xs">
                {/* Channel Option 1: Thermal IR (Active) */}
                <button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low border-l-4 border-secondary flex flex-col transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">Thermal IR (10.8 µm)</span>
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant mt-0.5">Brightness temp, eyewall cloud-top convective coldness</span>
                </button>
                
                {/* Channel Option 2: Visible 0.65µm */}
                <button className="w-full text-left p-space-sm rounded-lg hover:bg-surface-container-low/70 flex flex-col transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface group-hover:text-secondary">Visible (0.65 µm)</span>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">1.0 km</span>
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant mt-0.5">High albedo daylight cyclonic texture and spiraling bands</span>
                </button>
                
                {/* Channel Option 3: Water Vapor 6.5µm */}
                <button className="w-full text-left p-space-sm rounded-lg hover:bg-surface-container-low/70 flex flex-col transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface group-hover:text-secondary">Water Vapor (6.5 µm)</span>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">8.0 km</span>
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant mt-0.5">Upper-tropospheric moisture circulation and wind shear troughs</span>
                </button>
              </div>
            </div>
            
            {/* Automated AI Rapid Diagnostic Snapshot */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col space-y-space-sm border border-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <Activity className="text-secondary w-5 h-5" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Automated AI Snapshot</h3>
                </div>
                <span className="font-label-data-sm text-label-data-sm px-1.5 py-0.5 bg-surface-container-low rounded text-on-surface-variant font-semibold border border-surface-container">CNN Model v4</span>
              </div>
              
              <div className="space-y-space-sm divide-y divide-surface-container">
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-body-md text-body-md text-on-surface-variant">Eyewall Structure</span>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">Ragged Eye Forming</span>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-body-md text-body-md text-on-surface-variant">Min Cloud Top Temp</span>
                  <span className="font-label-data-sm text-label-data-sm font-semibold text-error">-78.4°C</span>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-body-md text-body-md text-on-surface-variant">Automated Dvorak</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-data-sm text-label-data-sm font-bold rounded">T3.5</span>
                    <span className="font-caption text-caption text-on-surface-variant">(CI 3.5 / 55 kts)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Component: 24-Hour Orbital Granule Timeline Scrubber */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col space-y-space-sm border border-surface-container-low">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <History className="text-secondary w-5 h-5" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface">24-Hour Observation Granule Scrubber</h3>
            </div>
            <span className="font-caption text-caption text-on-surface-variant">Select any discrete point to inspect raw multispectral telemetry</span>
          </div>
          
          {/* Timeline Horizontal Rail */}
          <div className="relative pt-space-sm pb-space-xs overflow-x-auto">
            <div className="min-w-[680px] flex items-center justify-between relative">
              {/* Connecting Track Line */}
              <div className="absolute left-6 right-6 top-3 h-0.5 bg-surface-container-high -z-0"></div>
              
              {/* Node 1: 06:00 UTC */}
              <div className="flex flex-col items-center gap-1 z-10 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-surface-container-high flex items-center justify-center group-hover:border-secondary transition-all">
                  <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-secondary"></div>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">06:00 UTC</span>
                <span className="font-caption text-caption text-on-surface-variant">INSAT-3DR VIS</span>
              </div>
              
              {/* Node 2: 08:30 UTC */}
              <div className="flex flex-col items-center gap-1 z-10 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-surface-container-high flex items-center justify-center group-hover:border-secondary transition-all">
                  <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-secondary"></div>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">08:30 UTC</span>
                <span className="font-caption text-caption text-on-surface-variant">NOAA-20 VIIRS</span>
              </div>
              
              {/* Node 3: 10:30 UTC */}
              <div className="flex flex-col items-center gap-1 z-10 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-surface-container-high flex items-center justify-center group-hover:border-secondary transition-all">
                  <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-secondary"></div>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">10:30 UTC</span>
                <span className="font-caption text-caption text-on-surface-variant">INSAT-3D VIS</span>
              </div>
              
              {/* Node 4: 12:00 UTC */}
              <div className="flex flex-col items-center gap-1 z-10 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-surface-container-high flex items-center justify-center group-hover:border-secondary transition-all">
                  <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-secondary"></div>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">12:00 UTC</span>
                <span className="font-caption text-caption text-on-surface-variant">Oceansat-3 OCM</span>
              </div>
              
              {/* Node 5: 13:45 UTC */}
              <div className="flex flex-col items-center gap-1 z-10 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-surface-container-high flex items-center justify-center group-hover:border-secondary transition-all">
                  <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-secondary"></div>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">13:45 UTC</span>
                <span className="font-caption text-caption text-on-surface-variant">INSAT-3DR WV</span>
              </div>
              
              {/* Node 6: 14:15 UTC (Selected / Current Active) */}
              <div className="flex flex-col items-center gap-1 z-10">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-md ring-4 ring-secondary-fixed">
                  <div className="w-2 h-2 rounded-full bg-on-secondary"></div>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-secondary font-bold">14:15 UTC</span>
                <span className="font-caption text-caption font-semibold text-secondary">TIR-1 [Current]</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
