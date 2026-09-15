"use client";

import { useState } from "react";
import { FolderHeart, FolderSymlink, MonitorPlay, Layers, Calendar, Plus, FileText, CheckCircle, Search, SlidersHorizontal, Download, Share2, Shield, Activity, FileJson, FileType, CheckCircle2, Flag, AlertTriangle, Anchor, Megaphone } from "lucide-react";
import Image from "next/image";
import { useReports } from "@/lib/hooks/useReports";
import { Loader2, Route } from "lucide-react";
type ViewState = "repo" | "generator" | "templates";

export default function ReportsPage() {
  const [activeView, setActiveView] = useState<ViewState>("repo");
  const { data: reports, isLoading } = useReports();

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-space-lg">
      <div className="flex flex-col w-full max-w-[1600px] mx-auto">
        {/* Secondary Contextual Navigation Bar */}
        <div className="w-full bg-surface-container-lowest px-space-lg shadow-sm border-b border-surface-container-low mb-space-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md py-space-sm">
            <div className="flex items-center gap-space-xl overflow-x-auto pb-1 md:pb-0">
              <div className="flex items-center gap-space-xs">
                <button 
                  className={`flex items-center gap-space-xs py-space-sm px-space-md font-body-md text-body-md transition-all whitespace-nowrap ${activeView === 'repo' ? 'font-semibold text-secondary shadow-[inset_0_-2px_0_0_#006398]' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveView('repo')}
                >
                  <FolderHeart className="w-4 h-4" />
                  <span>Reports Archive</span>
                </button>
                <button 
                  className={`flex items-center gap-space-xs py-space-sm px-space-md font-body-md text-body-md transition-all whitespace-nowrap ${activeView === 'generator' ? 'font-semibold text-secondary shadow-[inset_0_-2px_0_0_#006398]' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveView('generator')}
                >
                  <MonitorPlay className="w-4 h-4" />
                  <span>Report Generator Studio</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-mono font-bold uppercase">3-Step</span>
                </button>
                <button 
                  className={`flex items-center gap-space-xs py-space-sm px-space-md font-body-md text-body-md transition-all whitespace-nowrap ${activeView === 'templates' ? 'font-semibold text-secondary shadow-[inset_0_-2px_0_0_#006398]' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveView('templates')}
                >
                  <Layers className="w-4 h-4" />
                  <span>Institutional Templates</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-space-sm shrink-0">
              <button className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container rounded-lg font-label-data-sm text-label-data-sm text-on-surface transition-all border border-surface-container">
                <Calendar className="w-4 h-4 text-on-surface-variant" />
                <span>Date Range: 13-15 May</span>
              </button>
              <button 
                className="flex items-center gap-space-xs px-space-md py-space-xs bg-primary text-on-primary hover:bg-on-surface-variant rounded-lg font-body-md text-body-md font-medium shadow-sm transition-all"
                onClick={() => setActiveView('generator')}
              >
                <Plus className="w-4 h-4" />
                <span>New Report Dossier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Operational Workspace Canvas */}
        <div className="px-space-lg space-y-space-lg max-w-7xl mx-auto w-full">
          {/* KPI & Repository Status Header */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">Total Published</span>
                <FileText className="w-5 h-5 text-secondary" />
              </div>
              <div className="mt-space-sm">
                <div className="font-headline-lg text-headline-lg font-bold text-on-surface">28</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Official synthesized dossiers</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">Active Threat Advisories</span>
                <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
              </div>
              <div className="mt-space-sm">
                <div className="font-headline-lg text-headline-lg font-bold text-error">03</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Cyclone Vajra (BOB-03) active</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">Multi-Agency Telemetry</span>
                <CheckCircle className="w-5 h-5 text-secondary" />
              </div>
              <div className="mt-space-sm">
                <div className="font-headline-lg text-headline-lg font-bold text-on-surface">100%</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">IMD, JTWC & ECMWF synced</p>
              </div>
            </div>
            
            <div className="bg-primary text-on-primary p-space-md rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption uppercase tracking-wider text-inverse-primary">Synthesizer Pipeline</span>
                <span className="font-label-data-sm text-label-data-sm text-secondary-container font-mono">v2.4 LTS</span>
              </div>
              <div className="mt-space-sm">
                <div className="font-headline-md text-headline-md font-semibold text-on-primary">Instant Gen</div>
                <p className="font-body-sm text-body-sm text-inverse-primary mt-space-xs">Automated ML narrative generation</p>
              </div>
            </div>
          </div>

          {/* MAIN VIEW 1: REPOSITORY ARCHIVE (DEFAULT) */}
          {activeView === 'repo' && (
            <div className="space-y-space-md animate-in fade-in duration-300">
              {/* Search and Filter Bar */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-md items-center justify-between border border-surface-container-low">
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-2.5 text-on-surface-variant w-5 h-5" />
                  <input className="w-full pl-10 pr-space-md py-2 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary shadow-sm transition-all border border-surface-container" placeholder="Search dossiers by cyclone, bulletin #, or agency..." type="text"/>
                </div>
                <div className="flex flex-wrap items-center gap-space-xs w-full lg:w-auto justify-start lg:justify-end">
                  <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-surface-container">
                    <button className="px-space-sm py-1 rounded font-label-data-sm text-label-data-sm bg-surface-container-lowest text-on-surface shadow-sm font-semibold">All (28)</button>
                    <button className="px-space-sm py-1 rounded font-label-data-sm text-label-data-sm text-on-surface-variant hover:text-on-surface">Cyclone Vajra</button>
                    <button className="px-space-sm py-1 rounded font-label-data-sm text-label-data-sm text-on-surface-variant hover:text-on-surface">DD 01A</button>
                    <button className="px-space-sm py-1 rounded font-label-data-sm text-label-data-sm text-on-surface-variant hover:text-on-surface">Historical</button>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <button className="px-space-sm py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface-variant text-label-data-sm font-label-data-sm rounded-lg flex items-center gap-1 border border-surface-container">
                      <SlidersHorizontal className="w-4 h-4" /> Filter Type
                    </button>
                    <button className="px-space-sm py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface-variant text-label-data-sm font-label-data-sm rounded-lg flex items-center gap-1 border border-surface-container">
                      <Download className="w-4 h-4" /> Export Registry
                    </button>
                  </div>
                </div>
              </div>

              {/* Institutional Reports Dossier Table */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-container-low">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-caption text-caption uppercase tracking-wider border-b border-surface-container">
                        <th className="py-space-sm px-space-md">Dossier ID & Title</th>
                        <th className="py-space-sm px-space-md">Target System</th>
                        <th className="py-space-sm px-space-md">Issuance (UTC)</th>
                        <th className="py-space-sm px-space-md">Classification</th>
                        <th className="py-space-sm px-space-md">Verification</th>
                        <th className="py-space-sm px-space-md text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
                      {isLoading ? (
                        <tr>
                          <td colSpan={6} className="py-12 text-center">
                            <Loader2 className="w-8 h-8 animate-spin text-secondary mx-auto" />
                          </td>
                        </tr>
                      ) : reports?.map((report) => (
                        <tr key={report.id} className="hover:bg-surface-container-low/50 transition-colors group">
                          <td className="py-space-md px-space-md">
                            <div className="flex items-start gap-space-sm">
                              <FileText className="text-secondary w-5 h-5 mt-0.5 shrink-0" />
                              <div>
                                <div className="font-semibold text-on-surface group-hover:text-secondary transition-colors">{report.title}</div>
                                <div className="font-label-data-sm text-label-data-sm text-on-surface-variant">DOC-{new Date(report.timestamp).getFullYear()}-{report.cyclone.basin}-{report.id.substring(0,6).toUpperCase()} · {report.author}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-md px-space-md">
                            <span className={`inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full font-label-data-sm text-label-data-sm font-semibold whitespace-nowrap border ${report.severity === 'RED ALERT' ? 'bg-error-container text-on-error-container border-error/20' : 'bg-secondary-container text-on-secondary-container border-secondary/20'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${report.severity === 'RED ALERT' ? 'bg-error' : 'bg-secondary'}`}></span>
                              {report.cyclone.name}
                            </span>
                          </td>
                          <td className="py-space-md px-space-md">
                            <div className="font-mono text-on-surface whitespace-nowrap">{new Date(report.timestamp).toLocaleDateString()}</div>
                            <div className="font-label-data-sm text-label-data-sm text-on-surface-variant whitespace-nowrap">{new Date(report.timestamp).toLocaleTimeString()} UTC</div>
                          </td>
                          <td className="py-space-md px-space-md">
                            <span className="px-space-sm py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-data-sm text-label-data-sm whitespace-nowrap">Technical Synoptic</span>
                          </td>
                          <td className="py-space-md px-space-md">
                            <span className="inline-flex items-center gap-1 text-secondary font-label-data-sm text-label-data-sm font-semibold whitespace-nowrap">
                              <CheckCircle2 className="w-4 h-4" /> Published
                            </span>
                          </td>
                          <td className="py-space-md px-space-md text-right">
                            <div className="flex items-center justify-end gap-space-xs">
                              <button className="px-space-sm py-1 bg-surface-container-low hover:bg-secondary hover:text-on-secondary rounded text-on-surface font-label-data-sm text-label-data-sm transition-all border border-surface-container" onClick={() => setActiveView('generator')}>Preview</button>
                              <button className="p-1 text-on-surface-variant hover:text-secondary rounded"><Download className="w-4 h-4" /></button>
                              <button className="p-1 text-on-surface-variant hover:text-secondary rounded"><Share2 className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      )) || (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-on-surface-variant">
                            No reports available in the archive.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-space-sm bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm px-space-md border-t border-surface-container">
                  <span>Showing 4 of 28 archived operational bulletins</span>
                  <div className="flex items-center gap-1">
                    <button className="px-2 py-1 bg-surface-container-lowest text-on-surface rounded shadow-sm border border-surface-container">1</button>
                    <button className="px-2 py-1 hover:bg-surface-container-lowest text-on-surface-variant rounded">2</button>
                    <button className="px-2 py-1 hover:bg-surface-container-lowest text-on-surface-variant rounded">3</button>
                    <span className="px-1">...</span>
                    <button className="px-2 py-1 hover:bg-surface-container-lowest text-on-surface-variant rounded">6</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MAIN VIEW 2: DEDICATED GENERATE WORKFLOW PREVIEW STUDIO */}
          {activeView === 'generator' && (
            <div className="space-y-space-lg animate-in fade-in duration-300">
              {/* Studio Header / Banner */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md border border-surface-container-low">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-data-sm text-label-data-sm font-semibold uppercase tracking-wider mb-space-xs border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Operational Dossier Synthesizer
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Report Generator Studio (3-Step Guided Workflow)</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">Configure telemetry ingestion parameters, deep-learning explainability modules, and automated threat synthesis.</p>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-body-md text-body-md transition-colors border border-surface-container">Reset Form</button>
                  <button className="px-space-lg py-space-xs rounded-lg bg-primary text-on-primary hover:bg-on-surface-variant font-body-md text-body-md font-semibold flex items-center gap-space-xs shadow-md transition-all">
                    <Activity className="w-4 h-4" />
                    <span>Re-Synthesize Dossier</span>
                  </button>
                </div>
              </div>

              {/* 2-Column Split Console: Configurator vs Live Institutional Paper Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                {/* Left Column: Steps 1 & 2 Controls (5 cols) */}
                <div className="lg:col-span-5 space-y-space-md">
                  {/* STEP 1: Select Cyclone */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low">
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-space-sm">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-data-sm text-label-data-sm flex items-center justify-center font-bold">1</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Select Meteorological System</h3>
                      </div>
                      <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Real-time sync</span>
                    </div>
                    
                    <div className="space-y-space-sm">
                      {/* Cyclone Vajra Card (Active Selected) */}
                      <label className="block p-space-md rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container relative border border-secondary/30">
                        <input defaultChecked className="sr-only" name="cyclone_selection" type="radio"/>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-space-xs">
                              <span className="font-body-lg text-body-lg font-bold text-on-surface">Cyclone Vajra</span>
                              <span className="px-2 py-0.5 bg-error-container text-on-error-container font-label-data-sm text-label-data-sm rounded font-bold border border-error/20">CAT 4 / VSCS</span>
                            </div>
                            <p className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">BOB-03 · 14.6° N, 84.8° E · 110-125 kt</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">North-Northwest vector toward Odisha / West Bengal coastline</p>
                          </div>
                          <div className="w-5 h-5 rounded-full border-[5px] border-secondary bg-surface"></div>
                        </div>
                      </label>
                      
                      {/* Deep Depression Card */}
                      <label className="block p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-all border border-surface-container">
                        <input className="sr-only" name="cyclone_selection" type="radio"/>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-space-xs">
                              <span className="font-body-lg text-body-lg font-semibold text-on-surface">Deep Depression 01A</span>
                              <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-data-sm text-label-data-sm rounded font-medium border border-secondary/20">Dissipating</span>
                            </div>
                            <p className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">ARB-01 · 18.2° N, 67.4° E · 28 kt</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">West Arabian Sea peripheral dissipation</p>
                          </div>
                          <div className="w-5 h-5 rounded-full border-2 border-outline-variant"></div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* STEP 2: Select Information Modules */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low">
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-space-sm">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-data-sm text-label-data-sm flex items-center justify-center font-bold">2</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Dossier Telemetry Modules</h3>
                      </div>
                      <span className="font-caption text-caption text-secondary uppercase font-semibold">5 Selected</span>
                    </div>
                    
                    <div className="space-y-space-xs">
                      {/* Module 1 */}
                      <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-all">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary border-outline-variant" type="checkbox"/>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-body-md text-body-md font-semibold text-on-surface">Current Situation & Telemetry</span>
                            <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">Real-time GIS</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Precise eye coordinates, minimum pressure (980 hPa), surface wind radii.</p>
                        </div>
                      </label>
                      {/* Module 2 */}
                      <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-all">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary border-outline-variant" type="checkbox"/>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-body-md text-body-md font-semibold text-on-surface">Multispectral Satellite Granule</span>
                            <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">INSAT-3DR / NOAA</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Cloud top brightness temperature profiles (-78.4°C) & convective asymmetry.</p>
                        </div>
                      </label>
                      {/* Module 3 */}
                      <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-all">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary border-outline-variant" type="checkbox"/>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-body-md text-body-md font-semibold text-on-surface">AI CNN Classification & XAI</span>
                            <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">91% Conf</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Automated Dvorak T-number estimation and Grad-CAM attention hotspots.</p>
                        </div>
                      </label>
                      {/* Module 4 */}
                      <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-all">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary border-outline-variant" type="checkbox"/>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-body-md text-body-md font-semibold text-on-surface">Forecast Track & Dispersion Cone</span>
                            <span className="font-label-data-sm text-label-data-sm text-on-surface-variant font-mono">Ensemble 28h</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Consensus model landfall timeline (ECMWF, GFS, UKMET) with error ellipses.</p>
                        </div>
                      </label>
                      {/* Module 5 */}
                      <label className="flex items-start gap-space-sm p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-all">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary border-outline-variant" type="checkbox"/>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-body-md text-body-md font-semibold text-on-surface">District Impact & Storm Surge</span>
                            <span className="font-label-data-sm text-label-data-sm text-error font-mono font-semibold">High Vulnerability</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Estimated 2.5m - 3.2m surge wave heights for Jagatsinghpur & Kendrapara.</p>
                        </div>
                      </label>
                    </div>

                    {/* Additional Template Preset Selector */}
                    <div className="mt-space-md pt-space-md bg-surface-container-low/50 p-space-sm rounded-lg border border-surface-container">
                      <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant block mb-1">Apply Format Presets:</span>
                      <div className="flex flex-wrap gap-space-xs">
                        <span className="px-2 py-1 rounded bg-surface-container-lowest text-secondary font-label-data-sm text-label-data-sm font-semibold shadow-sm border border-surface-container cursor-pointer">IMD Standard Bulletin</span>
                        <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm cursor-pointer">NDRF Operational Briefing</span>
                        <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-data-sm text-label-data-sm cursor-pointer">WMO Marine High-Seas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: STEP 3 - Live Institutional Paper Preview (7 cols) */}
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="flex items-center justify-between px-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-data-sm text-label-data-sm flex items-center justify-center font-bold">3</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Dossier Live Document Preview</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="flex items-center gap-1 font-label-data-sm text-label-data-sm text-secondary font-mono">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span> Live Preview Sync
                      </span>
                    </div>
                  </div>

                  {/* Document Render Surface (Institutional Paper Style) */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg transition-all relative border border-surface-container-low bg-white" id="dossier-paper">
                    {/* Document Header Banner */}
                    <div className="flex items-start justify-between pb-space-md border-b border-surface-container-high">
                      <div className="space-y-1">
                        <div className="flex items-center gap-space-xs">
                          <div className="w-3 h-3 rounded-full bg-secondary"></div>
                          <span className="font-caption text-caption text-secondary font-bold uppercase tracking-widest">CYCLONEX METEOROLOGICAL SERVICE</span>
                        </div>
                        <h1 className="font-headline-md text-headline-md font-bold text-slate-900 tracking-tight">CYCLONE INTELLIGENCE REPORT</h1>
                        <p className="font-label-data-sm text-label-data-sm text-slate-600 font-mono">AUTOMATED SITUATIONAL SYNTHESIS · ADVISORY REF #VAJRA-08-2024</p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="inline-block px-space-sm py-0.5 rounded bg-error/10 text-error font-label-data-sm text-label-data-sm font-bold uppercase border border-error/20">
                          ACTIVE SEVERE CYCLONE
                        </div>
                        <div className="font-label-data-sm text-label-data-sm text-slate-800 font-mono">14 May 2024 · 14:15 UTC</div>
                        <div className="font-caption text-caption text-slate-500">Dissemination: IMD / NDRF / INCOIS</div>
                      </div>
                    </div>

                    {/* Key System Parameters Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm py-space-md my-space-sm bg-slate-50 rounded-lg px-space-md border border-slate-200">
                      <div>
                        <span className="font-caption text-caption uppercase text-slate-500">System Identity</span>
                        <p className="font-body-md text-body-md font-bold text-slate-900">Cyclone Vajra (BOB-03)</p>
                      </div>
                      <div>
                        <span className="font-caption text-caption uppercase text-slate-500">Observed Fix</span>
                        <p className="font-body-md text-body-md font-mono font-semibold text-slate-900">14.6° N, 84.8° E</p>
                      </div>
                      <div>
                        <span className="font-caption text-caption uppercase text-slate-500">Intensity & Pressure</span>
                        <p className="font-body-md text-body-md font-bold text-error">110 km/h · 980 hPa</p>
                      </div>
                      <div>
                        <span className="font-caption text-caption uppercase text-slate-500">Category Code</span>
                        <p className="font-body-md text-body-md font-semibold text-slate-900">SCS (Severe Cyclonic)</p>
                      </div>
                    </div>

                    {/* Satellite Observation Granule & Graphic Preview */}
                    <div className="my-space-md space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-caption text-caption uppercase tracking-wider font-bold text-secondary flex items-center gap-1">
                          <Activity className="w-4 h-4" /> Satellite Observation Granule
                        </span>
                        <span className="font-label-data-sm text-label-data-sm text-slate-500 font-mono">INSAT-3DR Multispectral (IR/VIS)</span>
                      </div>
                      <div className="relative w-full h-44 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center">
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center opacity-80">
                           <span className="text-slate-400 font-mono text-sm">Image Data</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-space-sm">
                          <div className="flex items-center justify-between w-full text-white">
                            <span className="font-label-data-sm text-label-data-sm font-mono">Min Cloud Top Temp: -78.4°C</span>
                            <span className="font-label-data-sm text-label-data-sm font-mono">Eye Diameter: 28 km</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-700 leading-relaxed pt-2">
                        INSAT-3DR multispectral composite confirms ragged eyewall formation with intense deep convection (-78.4°C min cloud top temp) concentrated in the southern and eastern quadrants over the central Bay of Bengal basin.
                      </p>
                    </div>

                    {/* AI Classification & Explainability (XAI) Synthesis */}
                    <div className="my-space-md p-space-md rounded-lg bg-slate-50 space-y-space-xs border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="font-caption text-caption uppercase tracking-wider font-bold text-slate-900 flex items-center gap-1">
                          <Activity className="text-secondary w-4 h-4" /> AI Dvorak Deep-Learning Assessment
                        </span>
                        <span className="font-label-data-sm text-label-data-sm px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold border border-blue-200">91% Model Confidence</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-800 leading-relaxed pt-1">
                        Convolutional Neural Network analysis classifies the vortex as <strong className="text-slate-900">T4.0</strong> on the Dvorak scale. Grad-CAM visual attention mapping indicates the model's decision is driven primarily by spiral cloud banding wraps and robust convective core symmetry around the 980 hPa low.
                      </p>
                      <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-slate-600 font-label-data-sm text-label-data-sm">
                        <span>T-Number: <strong className="text-slate-900 font-mono">T4.0</strong></span>
                        <span>•</span>
                        <span>Current Intensity: <strong className="text-slate-900 font-mono">CI 4.0</strong></span>
                        <span>•</span>
                        <span>Grad-CAM Focus: <strong className="text-slate-900 font-mono">Core Eye Wall</strong></span>
                      </div>
                    </div>

                    {/* Forecast Trajectory & Dispersion */}
                    <div className="my-space-md space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-caption text-caption uppercase tracking-wider font-bold text-slate-900 flex items-center gap-1">
                          <Route className="text-secondary w-4 h-4" /> Ensemble Forecast Trajectory
                        </span>
                        <span className="font-label-data-sm text-label-data-sm text-slate-500 font-mono">Multi-Model Convergence</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-700 leading-relaxed pt-1">
                        Expected trajectory NNW at 16 km/h. Landfall projected along Odisha coastal corridor between <strong className="text-slate-900 font-semibold">Puri and Paradip</strong> within <strong className="text-slate-900 font-semibold">~28 hours</strong>. Offshore peak wind sustained at 125 km/h with gusts exceeding 140 km/h.
                      </p>
                    </div>

                    {/* District Risk & Storm Surge Vulnerability */}
                    <div className="my-space-md p-space-md rounded-lg bg-red-50 space-y-space-xs border border-red-100">
                      <div className="flex items-center justify-between">
                        <span className="font-caption text-caption uppercase tracking-wider font-bold text-red-800 flex items-center gap-1">
                          <AlertTriangle className="text-error w-4 h-4" /> Critical Vulnerability Assessment
                        </span>
                        <span className="font-label-data-sm text-label-data-sm text-error font-bold uppercase">Priority 1 Red Alert</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-900 leading-relaxed pt-1">
                        High vulnerability zone identified for coastal Jagatsinghpur, Kendrapara, and Bhadrak districts. Storm surge inundation estimated at <strong className="text-error font-bold">2.5m - 3.2m above astronomical tide</strong> during landfall phase. Recommended immediate suspension of all fishing operations and port clearance at Paradip.
                      </p>
                    </div>

                    {/* Institutional Sign-off Footer */}
                    <div className="pt-space-md mt-space-md border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-mono text-[11px] font-bold text-slate-700">IMD</div>
                        <div>
                          <div className="font-label-data-sm text-label-data-sm font-semibold text-slate-900">Chief Forecaster Dispatch</div>
                          <div className="font-caption text-caption text-slate-500">Validated via Automated Synthesis Suite #26070</div>
                        </div>
                      </div>
                      <div className="font-label-data-sm text-label-data-sm text-slate-500 font-mono">
                        CRC32: 0x8F902C1E
                      </div>
                    </div>

                    {/* Action Floating Toolbar */}
                    <div className="mt-space-lg flex flex-wrap items-center justify-end gap-space-sm pt-space-md border-t border-slate-200">
                      <button className="flex items-center gap-space-xs px-space-md py-space-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-body-md text-body-md transition-all border border-slate-300">
                        <FileJson className="w-4 h-4" />
                        <span>Export Raw JSON/XML</span>
                      </button>
                      <button className="flex items-center gap-space-xs px-space-lg py-space-xs bg-primary text-on-primary hover:bg-slate-800 rounded-lg font-body-md text-body-md font-semibold shadow-md transition-all">
                        <FileType className="w-4 h-4" />
                        <span>Generate PDF (Official Dossier)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MAIN VIEW 3: INSTITUTIONAL TEMPLATES PREVIEW (TAB 3) */}
          {activeView === 'templates' && (
            <div className="space-y-space-md animate-in fade-in duration-300">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-low">
                <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Institutional Document Templates</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Pre-calibrated report structures conforming to international and national meteorological standards.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Template 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-low">
                  <div className="space-y-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      <Flag className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">IMD Standard Bulletin</h3>
                      <p className="font-caption text-caption text-on-surface-variant uppercase mt-1 font-mono">Format RSMC / WMO-4</p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Includes standard 3-hourly synoptic position, observed squall speeds, state-wise warnings, and marine sea-state scales.</p>
                  </div>
                  <button className="mt-space-md w-full py-space-xs bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface font-body-md text-body-md rounded-lg transition-all border border-surface-container" onClick={() => setActiveView('generator')}>Use Template</button>
                </div>
                
                {/* Template 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-low">
                  <div className="space-y-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-error border border-error/10">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">NDRF Evacuation Matrix</h3>
                      <p className="font-caption text-caption text-on-surface-variant uppercase mt-1 font-mono">Disaster Management Protocol</p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Prioritizes district-level storm surge heights, vulnerable habitation counts, shelter capacities, and critical ingress route maps.</p>
                  </div>
                  <button className="mt-space-md w-full py-space-xs bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface font-body-md text-body-md rounded-lg transition-all border border-surface-container" onClick={() => setActiveView('generator')}>Use Template</button>
                </div>
                
                {/* Template 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-low">
                  <div className="space-y-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant border border-secondary/20">
                      <Anchor className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Port & Maritime Advisory</h3>
                      <p className="font-caption text-caption text-on-surface-variant uppercase mt-1 font-mono">IMO / NAVAREA VIII</p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Focuses on gale warning radii (34kt / 50kt / 64kt), significant wave height (SWH), port signal warnings (Signal 8-10), and sea swells.</p>
                  </div>
                  <button className="mt-space-md w-full py-space-xs bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface font-body-md text-body-md rounded-lg transition-all border border-surface-container" onClick={() => setActiveView('generator')}>Use Template</button>
                </div>
                
                {/* Template 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-low">
                  <div className="space-y-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface border border-surface-container-high">
                      <Megaphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Public Media Briefing</h3>
                      <p className="font-caption text-caption text-on-surface-variant uppercase mt-1 font-mono">Civil Defense Digest</p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Plain language synopses, color-coded district warning levels, precautionary guidelines, and helpline contact matrices.</p>
                  </div>
                  <button className="mt-space-md w-full py-space-xs bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-on-surface font-body-md text-body-md rounded-lg transition-all border border-surface-container" onClick={() => setActiveView('generator')}>Use Template</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
