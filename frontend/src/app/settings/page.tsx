"use client";

import { useState } from "react";
import { CheckCircle2, SlidersHorizontal, Map as MapIcon, BellRing, BrainCircuit, Globe2, Layers, Radar, Waves, MonitorSmartphone, Webhook, MailCheck, Save, RotateCcw, CloudLightning, Landmark, Tornado, FolderOpen, BookOpen, Microscope } from "lucide-react";
import Image from "next/image";

type WindUnit = "kmh" | "knots" | "ms";
type PressUnit = "hpa" | "mbar" | "inhg";
type Horizon = "24h" | "48h" | "72h" | "120h";

export default function SettingsPage() {
  const [windUnit, setWindUnit] = useState<WindUnit>("kmh");
  const [pressUnit, setPressUnit] = useState<PressUnit>("hpa");
  const [horizon, setHorizon] = useState<Horizon>("48h");
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-space-lg">
      <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-lg max-w-7xl mx-auto w-full">
        {/* Top Action Context Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-sm">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-data-sm text-label-data-sm uppercase tracking-wider text-secondary font-semibold">Workspace Configuration</span>
              <span className="text-outline-variant font-label-data-sm text-label-data-sm">/</span>
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Profile & Node Preferences</span>
            </div>
            <div className="flex items-baseline gap-space-md">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">Settings</h1>
              <span className="hidden sm:inline-block font-body-sm text-body-sm text-on-surface-variant">Preferences, alert configurations, and system attribution</span>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-space-sm">
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-low">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary uppercase tracking-wider">PROFILE SYNCED</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl bg-surface-container-low text-on-surface-variant border border-surface-container">
              <Globe2 className="w-4 h-4" />
              <span className="font-label-data-sm text-label-data-sm font-mono">UTC 14:32:00</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl bg-surface-container-high text-on-surface">
              <span className="font-label-data-sm text-label-data-sm font-semibold tracking-wider">APP CONFIG V2.4</span>
            </div>
            <button 
              className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-primary text-on-primary shadow-sm hover:bg-on-surface transition-all active:scale-95"
              onClick={handleSave}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-body-sm text-body-sm font-medium">Save Changes</span>
            </button>
          </div>
        </div>

        {/* Main Content Dual-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Left Column / Operational Settings Deck (~65%) */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            
            {/* Section 1: General Workspace */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary border border-surface-container">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">General Preferences</h2>
                    <p className="font-caption text-caption text-on-surface-variant">Synoptic operational mode and standardized measurement metrics</p>
                  </div>
                </div>
                <span className="font-label-data-sm text-label-data-sm px-space-sm py-space-xs rounded-lg bg-surface-container-low text-secondary font-medium uppercase border border-surface-container">IMD Synoptic Node</span>
              </div>
              
              <div className="flex flex-col gap-space-md pt-space-xs">
                {/* Account / Node Mode */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs p-space-sm rounded-xl bg-surface-container-low border border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-body-md text-body-md font-medium text-on-surface">Forecaster Authority Node</span>
                    <span className="font-caption text-caption text-on-surface-variant">Operational Forecaster (IMD Synoptic Node #IN-4012)</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface font-semibold">Node Active</span>
                  </div>
                </div>
                
                {/* Units of Measurement: Wind Speed */}
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Wind Speed Measurement</span>
                    <span className="font-caption text-caption text-on-surface-variant">WMO-008 Guidance Standard</span>
                  </div>
                  <div className="grid grid-cols-3 gap-space-xs p-1 rounded-xl bg-surface-container-low border border-surface-container">
                    <button 
                      className={`py-space-xs px-space-sm rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${windUnit === 'kmh' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setWindUnit('kmh')}
                    >
                      km/h (IMD Standard)
                    </button>
                    <button 
                      className={`py-space-xs px-space-sm rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${windUnit === 'knots' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setWindUnit('knots')}
                    >
                      knots (Nautical)
                    </button>
                    <button 
                      className={`py-space-xs px-space-sm rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${windUnit === 'ms' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setWindUnit('ms')}
                    >
                      m/s (SI Unit)
                    </button>
                  </div>
                </div>
                
                {/* Units of Measurement: Pressure */}
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Central Atmospheric Pressure</span>
                    <span className="font-caption text-caption text-on-surface-variant">Barometric telemetry precision</span>
                  </div>
                  <div className="grid grid-cols-3 gap-space-xs p-1 rounded-xl bg-surface-container-low border border-surface-container">
                    <button 
                      className={`py-space-xs px-space-sm rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${pressUnit === 'hpa' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setPressUnit('hpa')}
                    >
                      hPa (Selected)
                    </button>
                    <button 
                      className={`py-space-xs px-space-sm rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${pressUnit === 'mbar' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setPressUnit('mbar')}
                    >
                      mbar
                    </button>
                    <button 
                      className={`py-space-xs px-space-sm rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${pressUnit === 'inhg' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setPressUnit('inhg')}
                    >
                      inHg
                    </button>
                  </div>
                </div>
                
                {/* Timezone Standard */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
                  <div>
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Timezone Standard & Reference</span>
                    <p className="font-caption text-caption text-on-surface-variant">All ensemble tracking matrices correlate with synoptic hour stamps</p>
                  </div>
                  <div className="px-space-md py-space-xs rounded-xl bg-surface-container-low flex items-center gap-space-sm border border-surface-container">
                    <Globe2 className="w-5 h-5 text-secondary" />
                    <div className="flex flex-col">
                      <span className="font-label-data-sm text-label-data-sm font-semibold text-on-surface">UTC (Universal Time)</span>
                      <span className="font-caption text-caption text-on-surface-variant">IST Offset: +05:30 Synoptic Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Map & GIS Preferences */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary border border-surface-container">
                    <MapIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">GIS & Basemap Overlays</h2>
                    <p className="font-caption text-caption text-on-surface-variant">Dynamic ocean basin framing and default sensor rendering stacks</p>
                  </div>
                </div>
                <span className="font-label-data-sm text-label-data-sm px-space-sm py-space-xs rounded-lg bg-surface-container-high text-on-surface font-semibold border border-surface-container">INSAT-3DR Synced</span>
              </div>
              
              {/* Basin Selectors */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-body-sm text-body-sm font-medium text-on-surface">Primary Synoptic Monitoring Basin</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                  <label className="cursor-pointer flex items-center justify-between p-space-sm rounded-xl bg-secondary-fixed text-on-secondary-fixed transition-all border border-secondary/20">
                    <div className="flex items-center gap-space-xs">
                      <input defaultChecked className="accent-secondary h-4 w-4" name="basin" type="radio"/>
                      <span className="font-body-md text-body-md font-semibold">Bay of Bengal</span>
                    </div>
                    <span className="font-label-data-sm text-label-data-sm uppercase">BOB</span>
                  </label>
                  <label className="cursor-pointer flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-xs">
                      <input className="accent-secondary h-4 w-4" name="basin" type="radio"/>
                      <span className="font-body-md text-body-md font-medium">Arabian Sea</span>
                    </div>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant uppercase">ARB</span>
                  </label>
                  <label className="cursor-pointer flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-xs">
                      <input className="accent-secondary h-4 w-4" name="basin" type="radio"/>
                      <span className="font-body-md text-body-md font-medium">North Indian Ocean</span>
                    </div>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant uppercase">NIO</span>
                  </label>
                </div>
              </div>
              
              {/* Default Map Layer Toggles */}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <span className="font-body-sm text-body-sm font-medium text-on-surface">Default Active Telemetry Layers</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <Layers className="w-5 h-5 text-secondary" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">Multispectral Satellite Overlay</span>
                        <span className="font-caption text-caption text-on-surface-variant">INSAT-3DR Thermal IR (TIR-1)</span>
                      </div>
                    </div>
                    <input defaultChecked className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <CloudLightning className="w-5 h-5 text-secondary" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">Ensemble Forecast Cone</span>
                        <span className="font-caption text-caption text-on-surface-variant">70% Trajectory probability spread</span>
                      </div>
                    </div>
                    <input defaultChecked className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <Radar className="w-5 h-5 text-secondary" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">Gale Wind Radii Quadrants</span>
                        <span className="font-caption text-caption text-on-surface-variant">R34 / R50 Nautical mile contours</span>
                      </div>
                    </div>
                    <input defaultChecked className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <Waves className="w-5 h-5 text-on-surface-variant" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">Coastal Bathymetry & Inundation</span>
                        <span className="font-caption text-caption text-on-surface-variant">High-tide surge penetration zones</span>
                      </div>
                    </div>
                    <input className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                </div>
              </div>
              
              {/* Basemap Style Selector */}
              <div className="flex items-center justify-between pt-space-xs">
                <div>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface">Basemap Cartography Style</span>
                  <p className="font-caption text-caption text-on-surface-variant">High-legibility monochrome projection optimized for cyclonic vorticity</p>
                </div>
                <div className="flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low border border-surface-container">
                  <span className="px-space-sm py-space-xs rounded-lg font-label-data-sm text-label-data-sm font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container">Light Meteorological</span>
                  <span className="px-space-sm py-space-xs rounded-lg font-label-data-sm text-label-data-sm text-on-surface-variant hover:text-on-surface cursor-pointer">Marine Nautical Bathy</span>
                </div>
              </div>
            </section>

            {/* Section 3: Operational Notifications & Alerts */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary border border-surface-container">
                    <BellRing className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Alert Rules & Dissemination</h2>
                    <p className="font-caption text-caption text-on-surface-variant">Automated early warning thresholds for coastal administrations</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" id="master-threat-alerts" type="checkbox"/>
                  <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary border border-surface-container-high"></div>
                </label>
              </div>
              
              {/* Severity Threshold Radios */}
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <span className="font-body-sm text-body-sm font-medium text-on-surface">Severity Escalation Threshold</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                  <label className="cursor-pointer flex flex-col gap-space-xs p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-xs">
                      <input className="accent-secondary h-4 w-4" name="severity" type="radio"/>
                      <span className="font-body-md text-body-md font-medium text-on-surface">All Depressions</span>
                    </div>
                    <span className="font-caption text-caption text-on-surface-variant">Low pressure systems ≥ 31 km/h</span>
                  </label>
                  <label className="cursor-pointer flex flex-col gap-space-xs p-space-sm rounded-xl bg-secondary-fixed text-on-secondary-fixed transition-all border border-secondary/20">
                    <div className="flex items-center gap-space-xs">
                      <input defaultChecked className="accent-secondary h-4 w-4" name="severity" type="radio"/>
                      <span className="font-body-md text-body-md font-semibold">Cyclonic Storms +</span>
                    </div>
                    <span className="font-caption text-caption text-on-secondary-fixed-variant">CS, SCS, VSCS, Super Cyclones</span>
                  </label>
                  <label className="cursor-pointer flex flex-col gap-space-xs p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all border border-surface-container">
                    <div className="flex items-center gap-space-xs">
                      <input className="accent-secondary h-4 w-4" name="severity" type="radio"/>
                      <span className="font-body-md text-body-md font-medium text-on-surface">Landfall Imminent</span>
                    </div>
                    <span className="font-caption text-caption text-on-surface-variant">Red Alert only ({"<"} 24h ETA)</span>
                  </label>
                </div>
              </div>
              
              {/* Notification Channels */}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <span className="font-body-sm text-body-sm font-medium text-on-surface">Downstream Dispatch Endpoints</span>
                <div className="flex flex-col gap-space-xs">
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <MonitorSmartphone className="w-5 h-5 text-secondary" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">High-Priority Browser Push Alerts</span>
                        <span className="font-caption text-caption text-on-surface-variant">Instant audio chime and visual banner when central pressure drops {">"} 5 hPa/3h</span>
                      </div>
                    </div>
                    <input defaultChecked className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <Webhook className="w-5 h-5 text-secondary" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">IMD Synoptic Dissemination API Webhook</span>
                        <span className="font-caption text-caption text-on-surface-variant">Automated JSON payload delivery to National Disaster Management Network</span>
                      </div>
                    </div>
                    <input defaultChecked className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                  <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low cursor-pointer border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <MailCheck className="w-5 h-5 text-secondary" />
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">Automated Email Digest to District Magistrates</span>
                        <span className="font-caption text-caption text-on-surface-variant">Structured 3-hourly analytical synoptic bulletin dispatch</span>
                      </div>
                    </div>
                    <input defaultChecked className="accent-secondary h-4 w-4" type="checkbox"/>
                  </label>
                </div>
              </div>
            </section>

            {/* Section 4: AI Prediction Engine Parameters */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary border border-surface-container">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Prediction & Ensemble Models</h2>
                    <p className="font-caption text-caption text-on-surface-variant">Forecast trajectory horizons and probabilistic cone calculations</p>
                  </div>
                </div>
                <span className="font-label-data-sm text-label-data-sm px-space-sm py-space-xs rounded-lg bg-surface-container-low text-secondary font-medium uppercase border border-surface-container">SIH-2026 Engine</span>
              </div>
              
              <div className="flex flex-col gap-space-md pt-space-xs">
                {/* Horizon Selector */}
                <div className="flex flex-col gap-space-xs">
                  <span className="font-body-sm text-body-sm font-medium text-on-surface">Default Forecast Extrapolation Horizon</span>
                  <div className="grid grid-cols-4 gap-space-xs p-1 rounded-xl bg-surface-container-low border border-surface-container">
                    <button 
                      className={`py-space-xs rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${horizon === '24h' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setHorizon('24h')}
                    >24h</button>
                    <button 
                      className={`py-space-xs rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${horizon === '48h' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setHorizon('48h')}
                    >48h (Default)</button>
                    <button 
                      className={`py-space-xs rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${horizon === '72h' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setHorizon('72h')}
                    >72h</button>
                    <button 
                      className={`py-space-xs rounded-lg text-center font-label-data-sm text-label-data-sm transition-all ${horizon === '120h' ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-sm border border-surface-container' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                      onClick={() => setHorizon('120h')}
                    >120h Extended</button>
                  </div>
                </div>
                
                {/* Model Consensus */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-low border border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-body-md text-body-md font-semibold text-on-surface">Ensemble Model Weighting</span>
                    <span className="font-caption text-caption text-on-surface-variant">Multi-Model Consensus: ECMWF-IFS (45%) + GFS-FV3 (35%) + UKMET (20%)</span>
                  </div>
                  <span className="font-label-data-sm text-label-data-sm px-space-sm py-space-xs rounded-lg bg-surface-container-highest text-on-surface font-semibold border border-surface-variant">Calibrated Optimum</span>
                </div>
                
                {/* Uncertainty Cone Mode */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">Uncertainty Envelope Display</span>
                    <p className="font-caption text-caption text-on-surface-variant">Standard 70% Confidence Cone with Landfall Error Ellipses</p>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-label-data-sm text-label-data-sm font-semibold text-secondary">WMO Compliant</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column / Institutional & About Deck (~35%) */}
          <div className="lg:col-span-4 flex flex-col gap-space-lg">
            {/* Institutional Dossier Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden border border-surface-container-low">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
              
              {/* Crest / Header Section */}
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary border border-primary-container/20">
                  <Tornado className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">CYCLONEX</span>
                    <span className="font-label-data-sm text-label-data-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-mono border border-surface-container">v2.4</span>
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant">AI-Powered Cyclone Intelligence</span>
                </div>
              </div>
              
              {/* Hackathon & Problem Statement Pill */}
              <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-surface-container">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Initiative</span>
                  <span className="font-label-data-sm text-label-data-sm text-secondary font-bold">SIH 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Problem ID</span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-mono font-semibold">#26070</span>
                </div>
              </div>
              
              {/* Institutional Guidance */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold">Guidance & Stakeholders</span>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-start gap-space-xs p-space-xs rounded-lg bg-surface-container-low border border-surface-container/50">
                    <Landmark className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Ministry of Earth Sciences (MoES)</span>
                      <span className="font-caption text-caption text-on-surface-variant">Government of India</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-xs p-space-xs rounded-lg bg-surface-container-low border border-surface-container/50">
                    <Radar className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">India Meteorological Department (IMD)</span>
                      <span className="font-caption text-caption text-on-surface-variant">Regional Specialized Meteorological Centre (RSMC)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Deep AI Models Architecture Stack */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold">Core AI Engines</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-on-surface text-body-sm font-body-sm py-1 border-b border-surface-container-low">
                    <span className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> YOLOv8 Eye Localization</span>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">0.96 IoU</span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface text-body-sm font-body-sm py-1 border-b border-surface-container-low">
                    <span className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Deep Dvorak CNN v4</span>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">±3.8 kt</span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface text-body-sm font-body-sm py-1 border-b border-surface-container-low">
                    <span className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Physics-Informed Recurve</span>
                    <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">PINN v2</span>
                  </div>
                </div>
              </div>
              
              {/* Integrity Benchmark Indicator */}
              <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low border border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">SIH Evaluation Metric</span>
                </div>
                <span className="font-label-data-sm text-label-data-sm text-secondary font-bold uppercase">Compliant</span>
              </div>
              
              {/* Documentation Quick Links */}
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold">Official Resources</span>
                <div className="flex flex-col gap-space-xs">
                  <a className="flex items-center justify-between p-space-xs px-space-sm rounded-lg hover:bg-surface-container-low text-secondary font-body-sm text-body-sm transition-all" href="#">
                    <span className="flex items-center gap-space-xs"><FolderOpen className="w-4 h-4" /> SIH #26070 Dossier</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                  <a className="flex items-center justify-between p-space-xs px-space-sm rounded-lg hover:bg-surface-container-low text-secondary font-body-sm text-body-sm transition-all" href="#">
                    <span className="flex items-center gap-space-xs"><BookOpen className="w-4 h-4" /> Synoptic Evaluation Guide</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                  <a className="flex items-center justify-between p-space-xs px-space-sm rounded-lg hover:bg-surface-container-low text-secondary font-body-sm text-body-sm transition-all" href="#">
                    <span className="flex items-center gap-space-xs"><Microscope className="w-4 h-4" /> XAI Model Explainability Whitepaper</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              </div>
              
              {/* Build Stamp */}
              <div className="pt-space-xs flex items-center justify-between text-on-surface-variant">
                <span className="font-label-data-sm text-label-data-sm font-mono">Build v2.4.8-synoptic</span>
                <span className="font-label-data-sm text-label-data-sm font-mono">May 2024 Release</span>
              </div>
            </div>

            {/* Quick Actions & Session Reset Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-low">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Node Execution</h3>
                <p className="font-caption text-caption text-on-surface-variant">Synchronize active session modifications across peer stations</p>
              </div>
              <div className="flex flex-col gap-space-sm">
                <button 
                  className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-xl bg-primary text-on-primary font-body-md text-body-md font-medium shadow-sm hover:bg-on-surface transition-all active:scale-[0.99]"
                  onClick={handleSave}
                >
                  <Save className="w-5 h-5" />
                  <span>Save Preferences</span>
                </button>
                <button className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-body-md text-body-md font-medium transition-all border border-surface-container">
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset to Institutional Defaults</span>
                </button>
              </div>
              
              {/* Toast feedback area */}
              {showToast && (
                <div className="flex items-center gap-space-xs p-space-sm rounded-xl bg-surface-container-high text-on-surface animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-label-data-sm text-label-data-sm font-semibold">Preferences synchronized with IMD node.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
