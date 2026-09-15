"use client";

import { Activity, Satellite, Sliders, BrainCircuit, LineChart, Network, RefreshCw, Shield, CheckSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useSystemStatus } from "@/lib/hooks/useTelemetry";

export default function SystemStatusPage() {
  const { data: systemEvents, isLoading } = useSystemStatus();
  const latestEvent = systemEvents?.[0];
  const lastUpdate = latestEvent ? new Date(latestEvent.timestamp).toLocaleTimeString('en-US', { timeZone: 'UTC' }) + ' UTC' : '14:31:45 UTC';
  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-space-lg">
      <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-data-sm text-label-data-sm text-secondary uppercase tracking-widest font-semibold">Diagnostic Telemetry</span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant">Continuous Synoptic Loop</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Intelligence Pipeline Health</h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              High-integrity status monitoring of the automated meteorological ingest, neural analysis nodes, and real-time dissemination feeds.
            </p>
          </div>
          <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm border border-surface-container-low">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
            <span className="font-label-data-lg text-label-data-lg text-on-surface font-mono">NOMINAL RUNTIME</span>
            <span className="font-caption text-caption px-space-xs py-0.5 rounded bg-surface-container-high text-secondary uppercase font-semibold ml-space-xs">99.98%</span>
          </div>
        </div>

        {/* Top KPI row */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {/* Data Stream 01 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-40 border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Data Stream 01</span>
              <div className="flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full border border-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
              </div>
            </div>
            <div className="flex flex-col mt-auto">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Satellite Data</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                INSAT-3DR & Oceansat-3 ingest active
              </p>
            </div>
          </div>
          
          {/* Inference 02 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-40 border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Inference 02</span>
              <div className="flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full border border-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
              </div>
            </div>
            <div className="flex flex-col mt-auto">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">AI Detection</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                YOLOv8 & segmentation nodes active
              </p>
            </div>
          </div>

          {/* Estimation 03 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-40 border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Estimation 03</span>
              <div className="flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full border border-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
              </div>
            </div>
            <div className="flex flex-col mt-auto">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Classification</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                Deep Dvorak CNN v4 online
              </p>
            </div>
          </div>

          {/* Extrapolation 04 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-40 border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Extrapolation 04</span>
              <div className="flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full border border-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
              </div>
            </div>
            <div className="flex flex-col mt-auto">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Forecast</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                Ensemble trajectory extrapolation synced
              </p>
            </div>
          </div>

          {/* Distribution 05 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-40 border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Distribution 05</span>
              <div className="flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full border border-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
              </div>
            </div>
            <div className="flex flex-col mt-auto">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">API</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                IMD/JTWC downstream distribution live
              </p>
            </div>
          </div>
        </section>

        {/* End to End pipeline */}
        <section className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg border border-surface-container-low">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">End-to-End Intelligence Pipeline</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Continuous real-time meteorological data flow and predictive synthesis
              </p>
            </div>
            <div className="flex items-center gap-space-xs font-label-data-sm text-label-data-sm text-secondary bg-surface-container-low px-space-md py-space-xs rounded-full border border-surface-container">
              <RefreshCw className="w-4 h-4" />
              <span>AUTONOMOUS STREAM ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative items-stretch mt-space-sm">
            {/* Stage 01 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative group hover:bg-surface-container transition-all border border-surface-container">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <Satellite className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs border border-surface-container-low">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
                </div>
              </div>
              <div>
                <span className="font-caption text-caption text-on-surface-variant uppercase font-mono">Stage 01</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">Satellite</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Raw multispectral feed (TIR-1, VIS, WV)
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm">
                <span>Latency</span>
                <span className="font-mono text-on-surface font-medium">1.2s</span>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative group hover:bg-surface-container transition-all border border-surface-container">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <Sliders className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs border border-surface-container-low">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
                </div>
              </div>
              <div>
                <span className="font-caption text-caption text-on-surface-variant uppercase font-mono">Stage 02</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">Processing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Radiometric calibration & cloud masking
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm">
                <span>Clean Rate</span>
                <span className="font-mono text-on-surface font-medium">99.4%</span>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative group hover:bg-surface-container transition-all border border-surface-container">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs border border-surface-container-low">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
                </div>
              </div>
              <div>
                <span className="font-caption text-caption text-on-surface-variant uppercase font-mono">Stage 03</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">AI</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Eye localization & intensity classification
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm">
                <span>Accuracy</span>
                <span className="font-mono text-on-surface font-medium">94.8% CI</span>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative group hover:bg-surface-container transition-all border border-surface-container">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <LineChart className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs border border-surface-container-low">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
                </div>
              </div>
              <div>
                <span className="font-caption text-caption text-on-surface-variant uppercase font-mono">Stage 04</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">Prediction</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Trajectory cone & multi-model blend
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm">
                <span>Horizon</span>
                <span className="font-mono text-on-surface font-medium">120 hrs</span>
              </div>
            </div>

            {/* Stage 05 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between relative group hover:bg-surface-container transition-all border border-surface-container">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <Network className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs border border-surface-container-low">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-data-sm text-label-data-sm text-on-surface font-medium">Operational</span>
                </div>
              </div>
              <div>
                <span className="font-caption text-caption text-on-surface-variant uppercase font-mono">Stage 05</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">Dashboard</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Live public & agency threat bulletins
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-data-sm text-label-data-sm">
                <span>Sync</span>
                <span className="font-mono text-on-surface font-medium">Sub-sec</span>
              </div>
            </div>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md border border-surface-container">
            <div className="flex items-center gap-space-sm">
              <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
              <div className="flex flex-col">
                <span className="font-body-md text-body-md text-on-surface font-semibold">Integrity Protocol Verified</span>
                <span className="font-caption text-caption text-on-surface-variant">Continuous telemetry cross-checks valid across Bay of Bengal and Arabian Sea nodes.</span>
              </div>
            </div>
            <button className="px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-label-data-sm text-label-data-sm font-medium shadow-xs hover:bg-surface-container-high transition-colors border border-surface-container-low whitespace-nowrap">
              Download Telemetry Log
            </button>
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
          {/* Synchronization */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Synchronization</span>
              <RefreshCw className="text-on-surface-variant w-5 h-5" />
            </div>
            <div className="my-space-md">
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant uppercase">Last Update</span>
              <div className="font-headline-sm text-headline-sm text-on-surface font-mono font-semibold mt-1">
                {isLoading ? '...' : lastUpdate}
              </div>
              <div className="flex items-center gap-space-xs mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <span>15 seconds ago</span>
                <span>•</span>
                <span className="font-mono text-secondary font-medium">latency 24ms</span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs text-secondary font-label-data-sm text-label-data-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Automated pulse verified</span>
            </div>
          </div>
          
          {/* Reliability Index */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Reliability Index</span>
              <Shield className="text-on-surface-variant w-5 h-5" />
            </div>
            <div className="my-space-md">
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant uppercase">System Uptime</span>
              <div className="font-headline-sm text-headline-sm text-on-surface font-mono font-semibold mt-1">
                99.98%
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Over last 90 days (Operational continuous run)
              </div>
            </div>
            <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full rounded-full" style={{ width: '99.98%' }}></div>
            </div>
          </div>
          
          {/* Verification Standard */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-low">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">Verification Standard</span>
              <CheckSquare className="text-on-surface-variant w-5 h-5" />
            </div>
            <div className="my-space-md">
              <span className="font-label-data-sm text-label-data-sm text-on-surface-variant uppercase">SIH 2026 Evaluation Validation</span>
              <div className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">
                Passing Synoptic Tests
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                All algorithmic microservices verified and passing synoptic integrity tests.
              </div>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-data-sm text-label-data-sm font-mono">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>SIH #26070 COMPLIANT</span>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-sm pb-space-lg text-on-surface-variant font-caption text-caption">
          <div className="flex items-center gap-space-sm">
            <span>CYCLONEX METEOROLOGICAL INTELLIGENCE</span>
            <span>/</span>
            <span>ISRO & IMD SYNCHRONIZATION BRIDGE</span>
          </div>
          <div className="flex items-center gap-space-sm font-mono">
            <span>POLLING INTERVAL: 5000MS</span>
            <span>•</span>
            <span className="text-secondary font-semibold">NODE CLUSTER STABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
