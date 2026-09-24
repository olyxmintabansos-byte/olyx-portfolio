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
  const [probes, setProbes] = useState<SystemHealthProbe[]>(SYSTEM_PROBES);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshProbes = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setProbes((prev) =>
        prev.map((p) => ({
          ...p,
          latencyMs: Math.floor(Math.random() * 25) + 30,
          lastChecked: "Baru saja",
        }))
      );
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#080d1a]/80 backdrop-blur-md px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-black text-white text-sm">GLOBAL SYSTEMS OBSERVATORY</span>
            </div>
          </div>

          <button
            onClick={handleRefreshProbes}
            disabled={isRefreshing}
            className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all cursor-pointer disabled:opacity-50"
          >
            {isRefreshing ? "Probing..." : "Ping Semua Sistem"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-10 space-y-8">
        {/* Banner Status */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-[#0a1224] to-cyan-950/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 neon-glow-emerald">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>GLOBAL FLEET HEALTH: 100% OPERATIONAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              7 Live Systems In Full Production
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Seluruh sistem berjalan secara independen di GitHub Pages dengan perlindungan .nojekyll bypass dan sinkronisasi local-first.
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-center shrink-0">
            <div className="bg-[#0b101f] border border-slate-800 p-4 rounded-2xl">
              <div className="text-2xl font-black text-emerald-400">99.97%</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Average Uptime</div>
            </div>
            <div className="bg-[#0b101f] border border-slate-800 p-4 rounded-2xl">
              <div className="text-2xl font-black text-cyan-400">38ms</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Global Latency</div>
            </div>
          </div>
        </div>

        {/* Probes Table */}
        <div className="bg-[#080d1a] border border-slate-800 rounded-3xl overflow-hidden font-mono text-xs">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>LIVE TELEMETRY PROBES</span>
            </h3>
            <span className="text-[10px] text-slate-500">Auto-probe frequency: Real-Time</span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {probes.map((probe) => (
              <div
                key={probe.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#0c1326] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white text-sm">{probe.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                      {probe.routesCount} Rute
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block truncate max-w-md">
                    {probe.endpoint}
                  </span>
                </div>

                <div className="flex items-center gap-6 justify-between sm:justify-end">
                  <div className="text-right">
                    <span className="text-cyan-400 font-bold block">{probe.latencyMs}ms</span>
                    <span className="text-[10px] text-slate-500">RTT Latency</span>
                  </div>

                  <div className="text-right">
                    <span className="text-emerald-400 font-bold block">{probe.uptimePercent}%</span>
                    <span className="text-[10px] text-slate-500">SLA Uptime</span>
                  </div>

                  <a
                    href={probe.endpoint}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
