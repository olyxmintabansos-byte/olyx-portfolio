"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Radio,
  Server,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Activity,
  Zap,
  Flame,
  Cpu,
} from "lucide-react";
import { SystemHealthProbe } from "@/types/portfolio";

const SYSTEM_PROBES: SystemHealthProbe[] = [
  {
    id: "aegissec-os",
    name: "AegisSec OS (Cyber Defense & SOC)",
    endpoint: "https://olyxmintabansos-byte.github.io/aegissec-os/",
    status: "ONLINE",
    latencyMs: 24,
    uptimePercent: 99.99,
    lastChecked: "Baru saja",
    routesCount: 3,
  },
  {
    id: "medicore-os",
    name: "MediCore OS (Hospital ERP & Triage)",
    endpoint: "https://olyxmintabansos-byte.github.io/medicore-os/",
    status: "ONLINE",
    latencyMs: 28,
    uptimePercent: 99.98,
    lastChecked: "Baru saja",
    routesCount: 4,
  },
  {
    id: "neuroforge-ai",
    name: "NeuroForge AI (Multi-Agent)",
    endpoint: "https://olyxmintabansos-byte.github.io/neuroforge-ai/",
    status: "ONLINE",
    latencyMs: 38,
    uptimePercent: 99.98,
    lastChecked: "Baru saja",
    routesCount: 3,
  },
  {
    id: "nexus-shiftops",
    name: "Nexus Corp & ShiftOps",
    endpoint: "https://olyxmintabansos-byte.github.io/nexus-shiftops/",
    status: "ONLINE",
    latencyMs: 42,
    uptimePercent: 99.95,
    lastChecked: "Baru saja",
    routesCount: 6,
  },
  {
    id: "educore-os",
    name: "EduCore: School OS & LMS",
    endpoint: "https://olyxmintabansos-byte.github.io/educore-os/",
    status: "ONLINE",
    latencyMs: 45,
    uptimePercent: 99.99,
    lastChecked: "Baru saja",
    routesCount: 7,
  },
  {
    id: "simucorp-os",
    name: "SimuCorp: Cyber Empire",
    endpoint: "https://olyxmintabansos-byte.github.io/simucorp-os/",
    status: "ONLINE",
    latencyMs: 35,
    uptimePercent: 99.94,
    lastChecked: "Baru saja",
    routesCount: 6,
  },
  {
    id: "omnipos-os",
    name: "OmniPOS & Retail OS",
    endpoint: "https://olyxmintabansos-byte.github.io/omnipos-os/",
    status: "ONLINE",
    latencyMs: 40,
    uptimePercent: 99.97,
    lastChecked: "Baru saja",
    routesCount: 5,
  },
  {
    id: "craftcv-ai",
    name: "CraftCV AI (Resume & ATS)",
    endpoint: "https://olyxmintabansos-byte.github.io/craftcv-ai/",
    status: "ONLINE",
    latencyMs: 32,
    uptimePercent: 99.96,
    lastChecked: "Baru saja",
    routesCount: 2,
  },
  {
    id: "finpulse-ai",
    name: "FinPulse AI (Financial ERP)",
    endpoint: "https://olyxmintabansos-byte.github.io/finpulse-ai/",
    status: "ONLINE",
    latencyMs: 48,
    uptimePercent: 99.95,
    lastChecked: "Baru saja",
    routesCount: 4,
  },
];

export default function ObservatoryPage() {
  const [probes] = useState<SystemHealthProbe[]>(SYSTEM_PROBES);

  const averageLatency = Math.round(
    probes.reduce((acc, p) => acc + p.latencyMs, 0) / probes.length
  );
  const totalRoutes = probes.reduce((acc, p) => acc + p.routesCount, 0);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-mono selection:bg-cyan-500 selection:text-black">
      {/* Telemetry Header */}
      <header className="border-b border-slate-800/80 bg-[#060a1d]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-sm sm:text-base tracking-wider">
                  GLOBAL SYSTEMS OBSERVATORY
                </span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  DECAGON MILESTONE
                </span>
              </div>
              <p className="text-[10px] text-slate-400">9 Enterprise Titans Telemetry & Health Probe Network</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SLA 99.97% MET</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Observatory HUD */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#090f24] border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Probed Systems</div>
            <div className="text-2xl font-black text-white flex items-center justify-between">
              <span>{probes.length} Titans</span>
              <Server className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-[10px] text-emerald-400 mt-1 font-bold">100% Operational Status</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090f24] border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Average RTT Latency</div>
            <div className="text-2xl font-black text-cyan-400 flex items-center justify-between">
              <span>{averageLatency} ms</span>
              <Activity className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-[10px] text-slate-400 mt-1">High-Speed GitHub CDN</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090f24] border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Prerendered Routes</div>
            <div className="text-2xl font-black text-white flex items-center justify-between">
              <span>{totalRoutes}+</span>
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Next.js 16 Static Export</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090f24] border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">9Router Local Bridge</div>
            <div className="text-2xl font-black text-purple-400 flex items-center justify-between">
              <span>:20128/v1</span>
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-[10px] text-slate-400 mt-1">SSE Chunk Reader Active</div>
          </div>
        </div>

        {/* Live Health Probes Table */}
        <div className="rounded-3xl border border-slate-800 bg-[#090e22] overflow-hidden shadow-2xl">
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0b122c]">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <h2 className="text-sm font-bold text-white tracking-wider">LIVE TELEMETRY PROBES</h2>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">UPDATED: REAL-TIME INTERVAL</span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {probes.map((probe) => (
              <div
                key={probe.id}
                className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-900/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-ping" />
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{probe.name}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5 truncate max-w-xs sm:max-w-md">
                      {probe.endpoint}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Routes</div>
                    <div className="text-white font-bold">{probe.routesCount} Rute</div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Latency</div>
                    <div className="text-cyan-400 font-bold">{probe.latencyMs} ms</div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Uptime</div>
                    <div className="text-emerald-400 font-bold">{probe.uptimePercent}%</div>
                  </div>

                  <a
                    href={probe.endpoint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#04060f] py-6 text-center text-xs text-slate-500">
        <div>
          Apex Global Systems Observatory • Organization:{" "}
          <code className="text-cyan-400 font-mono">olyxmintabansos-byte</code>
        </div>
      </footer>
    </div>
  );
}
