"use client";

import { Search, Calendar, Globe, Wind, ArrowUpDown, RefreshCw, Download, ArrowRight, Activity, Zap, MapPin, Target, CalendarDays, BarChart, Route } from "lucide-react";
import { useCyclones } from "@/lib/hooks/useCyclones";

export default function HistoryPage() {
  const { data: archivedCyclones, isLoading } = useCyclones('Archived');
  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-space-lg px-space-lg">
      <div className="flex flex-col gap-space-xl max-w-[1600px] mx-auto w-full">
        {/* Context & Search/Filter Header */}
        <section className="flex flex-col gap-space-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-data-sm text-label-data-sm uppercase tracking-wider text-secondary font-semibold">Repository Node // N-IND-04</span>
                <span className="text-on-surface-variant font-caption text-caption">•</span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-medium">IMD / JTWC Reanalysis Stream</span>
              </div>
              <span className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">North Indian Ocean & Regional Cyclonic History Database</span>
            </div>
            
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-xl bg-surface-container-high text-on-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm font-semibold">184 Archived Systems Synced</span>
              </div>
              <button className="px-space-sm py-space-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium transition-colors flex items-center gap-space-xs shadow-sm" type="button">
                <Download className="w-4 h-4 text-on-surface-variant" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>
          
          {/* Controls Panel */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md border border-surface-container-low">
            {/* Search Field */}
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
              <input className="w-full pl-11 pr-space-md py-space-xs bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant placeholder:font-normal focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all" placeholder="Search cyclone by name, year, or basin..." type="text" />
            </div>
            
            {/* Filter Selectors */}
            <div className="flex flex-wrap items-center gap-space-sm">
              <div className="flex items-center bg-surface-container-low rounded-xl px-space-sm py-space-xs gap-space-xs border border-surface-container">
                <Calendar className="w-4 h-4 text-on-surface-variant" />
                <span className="font-caption text-caption text-on-surface-variant uppercase font-medium">Year:</span>
                <select className="bg-transparent text-on-surface font-label-data-sm text-label-data-sm font-medium focus:outline-none cursor-pointer pr-1">
                  <option>All Years</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>Historical (&lt;2018)</option>
                </select>
              </div>
              
              <div className="flex items-center bg-surface-container-low rounded-xl px-space-sm py-space-xs gap-space-xs border border-surface-container">
                <Globe className="w-4 h-4 text-on-surface-variant" />
                <span className="font-caption text-caption text-on-surface-variant uppercase font-medium">Basin:</span>
                <select className="bg-transparent text-on-surface font-label-data-sm text-label-data-sm font-medium focus:outline-none cursor-pointer pr-1">
                  <option>All Basins</option>
                  <option>Bay of Bengal</option>
                  <option>Arabian Sea</option>
                </select>
              </div>
              
              <div className="flex items-center bg-surface-container-low rounded-xl px-space-sm py-space-xs gap-space-xs border border-surface-container">
                <Wind className="w-4 h-4 text-on-surface-variant" />
                <span className="font-caption text-caption text-on-surface-variant uppercase font-medium">Category:</span>
                <select className="bg-transparent text-on-surface font-label-data-sm text-label-data-sm font-medium focus:outline-none cursor-pointer pr-1">
                  <option>All Intensities</option>
                  <option>Super Cyclonic Storm</option>
                  <option>Extremely Severe (ESCS)</option>
                  <option>Very Severe (VSCS)</option>
                  <option>Severe Cyclonic Storm (SCS)</option>
                </select>
              </div>
              
              {/* Sort Segment */}
              <div className="flex items-center bg-surface-container-low rounded-xl p-1 gap-1 border border-surface-container">
                <button className="px-space-sm py-space-xs bg-surface-container-lowest text-secondary rounded-lg font-label-data-sm text-label-data-sm font-semibold shadow-sm flex items-center gap-1 border border-surface-container-low" type="button">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Recency
                </button>
                <button className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface rounded-lg font-label-data-sm text-label-data-sm font-medium transition-colors" type="button">
                  Intensity
                </button>
              </div>
              
              <button className="p-space-xs text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" title="Reset Filters" type="button">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Analog Matchmaker & Comparison Preview Banner */}
        <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch border border-surface-container-low">
          <div className="w-2 bg-secondary flex-shrink-0"></div>
          <div className="p-space-lg flex-1 flex flex-col justify-between gap-space-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className="px-space-sm py-0.5 rounded bg-secondary-fixed text-on-secondary-container font-label-data-sm text-label-data-sm font-semibold tracking-wider uppercase">
                    Active System Analog Match
                  </span>
                  <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-secondary font-label-data-sm text-label-data-sm font-semibold">
                    AI-GENERATED SIMILARITY: 82% MATCH
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Updated 12m ago
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cyclone VAJRA (Current Active) vs. Cyclone FANI (May 2019)</span>
              </div>
              <button className="self-start md:self-auto inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary text-on-primary font-body-md text-body-md font-medium hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap">
                <span>Open Full Comparison View</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Telemetry Analog Metrics Split */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs border border-surface-container">
                <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption uppercase font-medium">
                  <span>Track Curvature Similarity</span>
                  <Route className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-label-data-lg text-label-data-lg text-on-surface font-bold">86.4%</span>
                  <span className="font-label-data-sm text-label-data-sm text-secondary font-medium">Parabolic Recurve</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-1 mt-1 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "86.4%" }}></div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs border border-surface-container">
                <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption uppercase font-medium">
                  <span>Rapid Intensification Index</span>
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-label-data-lg text-label-data-lg text-on-surface font-bold">79.0%</span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-medium">+35 kt / 24h Phase</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-1 mt-1 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "79%" }}></div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs border border-surface-container">
                <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption uppercase font-medium">
                  <span>Landfall Corridor Agreement</span>
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-label-data-lg text-label-data-lg text-on-surface font-bold">~92% Overlap</span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Puri - Odisha Coast</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-1 mt-1 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Section: Cyclone Record Archive Grid */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Archived Cyclones Dossier</span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-data-sm text-label-data-sm text-on-surface font-semibold border border-surface-container">6 Displayed</span>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-caption text-caption">
              <Target className="w-4 h-4" />
              <span>Validated historical meteorological tracks (Best Track JTWC / IMD)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
            {isLoading ? (
              <div className="col-span-full py-12 flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
              </div>
            ) : archivedCyclones?.map((cyclone) => (
              <article key={cyclone.id} className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow border border-surface-container-low group">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div>
                      <span className="font-label-data-sm text-label-data-sm text-secondary font-semibold uppercase tracking-wider">{cyclone.internationalId}</span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Cyclone {cyclone.name}</h3>
                    </div>
                    <span className="px-space-sm py-0.5 rounded bg-error-container text-on-error-container font-label-data-sm text-label-data-sm font-semibold whitespace-nowrap">
                      CAT {cyclone.category}
                    </span>
                  </div>
                  <p className="font-caption text-caption text-on-surface-variant">Archived System • {cyclone.basin}</p>
                  
                  {/* Mini Track SVG Visual & Basin Info */}
                  <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between gap-space-sm border border-surface-container">
                    <div className="flex flex-col">
                      <span className="font-caption text-caption text-on-surface-variant uppercase">Region</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">{cyclone.region}</span>
                      <span className="font-label-data-sm text-label-data-sm text-on-surface-variant mt-0.5">{new Date(cyclone.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="w-20 h-12 flex-shrink-0 relative flex items-center justify-center">
                      <svg className="w-full h-full stroke-secondary fill-none" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 100 60">
                        <path d="M 10 50 C 35 48, 55 35, 70 20 S 85 8, 90 6"></path>
                        <circle className="fill-error stroke-none" cx="90" cy="6" r="3"></circle>
                        <circle className="fill-secondary stroke-none" cx="10" cy="50" r="2.5"></circle>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
                    <div className="flex flex-col">
                      <span className="font-caption text-caption text-on-surface-variant uppercase">Peak Wind</span>
                      <span className="font-label-data-lg text-label-data-lg text-on-surface font-bold">{cyclone.maxWind} km/h</span>
                      <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Max Sustained</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-caption text-caption text-on-surface-variant uppercase">Central Pressure</span>
                      <span className="font-label-data-lg text-label-data-lg text-on-surface font-bold">{cyclone.centralPressure} hPa</span>
                      <span className="font-label-data-sm text-label-data-sm text-secondary font-medium">At Peak</span>
                    </div>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex-1 py-space-xs px-space-sm rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-body-sm text-body-sm font-medium transition-colors text-center border border-surface-container-high" type="button">
                    View Dossier
                  </button>
                  <button className="py-space-xs px-space-sm rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-fixed-dim font-label-data-sm text-label-data-sm font-semibold transition-colors flex items-center gap-1" type="button">
                    <ArrowRight className="w-4 h-4" />
                    Compare
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Section: Quick Patterns Insight Bar */}
        <section className="flex flex-col gap-space-md pt-space-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
            <div>
              <span className="font-label-data-sm text-label-data-sm uppercase tracking-wider text-secondary font-semibold">Climatological Synthesis</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Historical Synoptic Patterns</h2>
            </div>
            <button className="text-secondary hover:text-on-secondary-container font-body-sm text-body-sm font-medium inline-flex items-center gap-1">
              <span>Explore All 14 Climatology Patterns</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Pattern Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between gap-space-md border border-surface-container-low">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Track Geometry</span>
                  <Activity className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Common Track Patterns</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface font-semibold">71%</strong> of pre-monsoon Bay of Bengal systems curve NNW toward Odisha and West Bengal coastline due to subtropical ridge positioning.
                </p>
              </div>
              
              <div className="h-8 w-full bg-surface-container-low rounded-lg flex items-center px-space-sm justify-between border border-surface-container">
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">NNW Vector</span>
                <svg className="w-16 h-5 stroke-secondary fill-none" strokeWidth="2" viewBox="0 0 60 20">
                  <path d="M 5 16 C 20 14, 35 10, 52 4" strokeLinecap="round"></path>
                  <polygon className="fill-secondary stroke-none" points="55,3 48,2 51,7"></polygon>
                </svg>
              </div>
            </div>

            {/* Pattern Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between gap-space-md border border-surface-container-low">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Thermodynamics</span>
                  <BarChart className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Intensity Trends</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Peak rapid intensification window occurs between <strong className="text-on-surface font-semibold">14°N and 18°N</strong> over 30°C+ SST ocean warm cores with low vertical wind shear (&lt;10 kt).
                </p>
              </div>
              <div className="h-8 w-full bg-surface-container-low rounded-lg flex items-center px-space-sm justify-between border border-surface-container">
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">RI Critical Zone</span>
                <span className="font-label-data-sm text-label-data-sm text-secondary font-bold">14°N – 18°N</span>
              </div>
            </div>

            {/* Pattern Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between gap-space-md border border-surface-container-low">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Seasonality</span>
                  <CalendarDays className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Seasonal Distribution</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface font-semibold">May and Oct–Nov</strong> account for 84% of severe systems in the North Indian Ocean basin, representing dual annual peaks.
                </p>
              </div>
              <div className="h-8 w-full bg-surface-container-low rounded-lg flex items-center px-space-sm justify-between border border-surface-container">
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Bimodal Peak</span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-bold">84% Severe</span>
              </div>
            </div>

            {/* Pattern Card 4 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between gap-space-md border border-surface-container-low">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase font-semibold">Machine Inference</span>
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Historical Analogs</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  AI continuously matches current synoptic setup against 4,000+ historical records to forecast rapid intensification triggers.
                </p>
              </div>
              <div className="h-8 w-full bg-surface-container-low rounded-lg flex items-center px-space-sm justify-between border border-surface-container">
                <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Database Scan</span>
                <span className="font-label-data-sm text-label-data-sm text-secondary font-bold">Continuous (Live)</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
