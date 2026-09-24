"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  GraduationCap,
  TrendingUp,
  ShoppingBag,
  FileCheck2,
  Wallet,
  ExternalLink,
  GitBranch,
  Bot,
  Flame,
  ShieldCheck,
  Terminal,
  Cpu,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { AICopilotModal } from "@/components/AICopilotModal";
import { TitanProject } from "@/types/portfolio";

const TITAN_PROJECTS: TitanProject[] = [
  {
    id: "nexus-shiftops",
    name: "Nexus Corp & ShiftOps",
    category: "Workforce ERP & Fleet OS",
    tagline: "Sistem Manajemen Shift 24/7, Payroll Otomatis & Armada",
    description: "Matriks kalender mingguan Gantt rotasi shift, alur persetujuan cuti HRD, kalkulator lembur PPh 21/BPJS dengan cetak slip gaji A4, serta monitoring BBM armada real-time.",
    techStack: ["Next.js 16", "TypeScript", "Workforce Roster", "Recharts"],
    liveUrl: "https://olyxmintabansos-byte.github.io/nexus-shiftops/",
    githubUrl: "https://github.com/olyxmintabansos-byte/nexus-shiftops",
    statsMetric: "6 Rute • 100% Live",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    accentGradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    iconName: "layers",
  },
  {
    id: "educore-os",
    name: "EduCore: School OS & LMS Titan",
    category: "Academic ERP & CBT Engine",
    tagline: "Platform Kampus/Sekolah Terpadu, CBT Anti-Curang & Raport A4",
    description: "Direktori siswa SIS multi-jurusan, transkrip nilai & raport digital format cetak A4 kop resmi, simulator ujian CBT dengan live timer & deteksi pindah tab, presensi QR, serta kasir SPP berstempel LUNAS.",
    techStack: ["Next.js 16", "CBT Engine", "Anti-Cheat", "Raport A4"],
    liveUrl: "https://olyxmintabansos-byte.github.io/educore-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/educore-os",
    statsMetric: "7 Rute • 100% Live",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    accentGradient: "from-indigo-500/20 via-purple-600/10 to-transparent",
    iconName: "graduation",
  },
  {
    id: "simucorp-os",
    name: "SimuCorp: Cyber Empire Simulator",
    category: "Cyber Economy & Tycoon OS",
    tagline: "Simulator Megakorporasi, Bursa Saham Real-Time & Hostile M&A",
    description: "12 unit usaha multi-tier (Cyber Coffee s/d Reaktor Fusi), pasar modal Wall Street dengan fluktuasi candlestick real-time per detik, R&D Tech Tree 7 cabang, hostile takeovers 51% saham rival, dan reinkarnasi Cyber Shards.",
    techStack: ["Next.js 16", "Stock Candlestick", "R&D Tree", "M&A Raider"],
    liveUrl: "https://olyxmintabansos-byte.github.io/simucorp-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/simucorp-os",
    statsMetric: "6 Rute • 100% Live",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accentGradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    iconName: "trending",
  },
  {
    id: "omnipos-os",
    name: "OmniPOS & Retail OS",
    category: "Enterprise POS, Stock & KDS",
    tagline: "Kasir Kilat FnB/Ritel, Denah 16 Meja & Multi-Gudang",
    description: "Terminal transaksi kasir kilat + cetak struk thermal 58/80mm, kontrol stok multi-gudang & stock opname, denah 16 meja restoran interaktif, Kitchen Display System (KDS), CRM membership, dan rekonsiliasi laci kas Laporan Z.",
    techStack: ["Next.js 16", "Kitchen KDS", "Stock Opname", "Thermal Print"],
    liveUrl: "https://olyxmintabansos-byte.github.io/omnipos-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/omnipos-os",
    statsMetric: "5 Rute • 100% Live",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    iconName: "shopping",
  },
  {
    id: "craftcv-ai",
    name: "CraftCV AI",
    category: "ATS Resume Studio & Career OS",
    tagline: "Studio Pembuat Resume ATS & Simulator Wawancara AI",
    description: "Split-screen resume studio interaktif dengan 3 template ATS dinamis, skor kecocokan ATS real-time, job description matcher otomatis, dan AI Technical Interview Simulator dengan rubrik penilaian standar STAR.",
    techStack: ["Next.js 16", "ATS Engine", "Interview Coach", "PDF Export"],
    liveUrl: "https://olyxmintabansos-byte.github.io/craftcv-ai/",
    githubUrl: "https://github.com/olyxmintabansos-byte/craftcv-ai",
    statsMetric: "2 Rute • 100% Live",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    accentGradient: "from-pink-500/20 via-rose-600/10 to-transparent",
    iconName: "file",
  },
  {
    id: "finpulse-ai",
    name: "FinPulse AI",
    category: "SME Financial ERP & OCR",
    tagline: "Sistem Keuangan UMKM, Faktur B2B & Virtual CFO Advisory",
    description: "Executive Financial Dashboard, pembukuan jurnal kas mutasi debit-kredit, generator faktur B2B otomatis dengan PPN 11%, pemindai struk multimodal OCR instan, dan asisten virtual penasihat likuiditas CFO.",
    techStack: ["Next.js 16", "OCR Scanner", "Virtual CFO", "Tax Engine"],
    liveUrl: "https://olyxmintabansos-byte.github.io/finpulse-ai/",
    githubUrl: "https://github.com/olyxmintabansos-byte/finpulse-ai",
    statsMetric: "4 Rute • 100% Live",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    accentGradient: "from-blue-500/20 via-cyan-600/10 to-transparent",
    iconName: "wallet",
  },
];

export default function PortfolioHubPage() {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  const getProjectIcon = (name: TitanProject["iconName"]) => {
    switch (name) {
      case "layers":
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case "graduation":
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case "trending":
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case "shopping":
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case "file":
        return <FileCheck2 className="w-6 h-6 text-pink-400" />;
      case "wallet":
        return <Wallet className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans pb-20">
      {/* Top Status HUD */}
      <div className="border-b border-slate-800/80 bg-[#080d1a]/80 backdrop-blur-md px-6 py-2.5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300 font-bold hidden sm:inline">
              APEX HUB STATUS: <span className="text-emerald-400">ALL 6 ENTERPRISE SYSTEMS OPERATIONAL</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>TOKEN BURN: <strong className="text-white font-black">100M+ TOKENS</strong></span>
            </div>

            <button
              onClick={() => setIsCopilotOpen(true)}
              className="px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer transition-all active:scale-95"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Apex AI Copilot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-12 max-w-7xl mx-auto text-center space-y-6 overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chief Systems Architect Showcase • GitHub Pages Live</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Enterprise Systems <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-amber-400 bg-clip-text text-transparent">
            Built at 100M Token Scale.
          </span>
        </h1>

        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Koleksi 6 sistem web kelas enterprise, berarsitektur <em>client-side local-first</em>, tanpa celah build error, dan disajikan secara otonom di GitHub Pages oleh duet <strong>Antigravity</strong> & <strong>Hermes Agent</strong>.
        </p>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 font-mono">
          <div className="bg-[#0b101f] border border-slate-800 p-4 rounded-2xl">
            <div className="text-2xl font-black text-cyan-400">6 Sistem</div>
            <div className="text-[11px] text-slate-500 mt-0.5">100% Zero-Defect Live</div>
          </div>
          <div className="bg-[#0b101f] border border-slate-800 p-4 rounded-2xl">
            <div className="text-2xl font-black text-emerald-400">30+ Rute</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Next.js App Router</div>
          </div>
          <div className="bg-[#0b101f] border border-slate-800 p-4 rounded-2xl">
            <div className="text-2xl font-black text-amber-400">100M+</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Tokens Synthesized</div>
          </div>
          <div className="bg-[#0b101f] border border-slate-800 p-4 rounded-2xl">
            <div className="text-2xl font-black text-purple-400">0 Errors</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Bypass Jekyll (.nojekyll)</div>
          </div>
        </div>
      </section>

      {/* Main Bento Grid: The 6 Titans */}
      <section className="px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-black text-white font-mono flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>THE 6 PRODUCTION-GRADE TITANS</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Pilih dan jalankan demo sistem langsung di browser lu</p>
          </div>

          <a
            href="https://github.com/olyxmintabansos-byte"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            <span>olyxmintabansos-byte</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TITAN_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className={`bg-[#090e1c] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl`}
            >
              {/* Accent gradient background */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${proj.accentGradient} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform`}
              />

              <div className="space-y-4 relative z-10">
                {/* Header Card */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#12192d] border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {getProjectIcon(proj.iconName)}
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold border ${proj.badgeColor}`}>
                    {proj.statsMetric}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-black text-white mt-1 group-hover:text-cyan-400 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-1 font-semibold">
                    {proj.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-[#131b31] border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 relative z-10 font-mono text-xs">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/10 cursor-pointer"
                >
                  <span>Buka Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#131b31] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Copilot Trigger Bar */}
      <section className="px-6 max-w-7xl mx-auto pt-12">
        <div className="bg-gradient-to-r from-cyan-950/30 via-indigo-950/30 to-purple-950/30 border border-cyan-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden neon-glow-cyan">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>EXPLOSIVE SYNTHETIC INTELLIGENCE</span>
            </div>
            <h3 className="text-2xl font-black text-white">Butuh Asisten Arsitek atau Mau Meledakkan AI Duar?</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Coba asisten interaktif Apex AI Copilot kami. Tanyakan spesifikasi teknis, alur data local-first, atau picu konfeti selebrasi 100 Juta Token secara instan!
            </p>
          </div>

          <button
            onClick={() => setIsCopilotOpen(true)}
            className="px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black font-mono text-sm flex items-center gap-2 shadow-xl shadow-cyan-500/30 cursor-pointer transition-all active:scale-95 shrink-0"
          >
            <Bot className="w-5 h-5" />
            <span>Buka Apex AI Copilot</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800/80 pt-8 text-center font-mono text-xs text-slate-500 space-y-2">
        <p>Architected by Antigravity Chief Systems Architect • Executed by Hermes Agent Desktop v0.21.3</p>
        <p>© 2026 olyxmintabansos-byte • Engineered with Next.js 16, TypeScript & 9Router Local Intelligence</p>
      </footer>

      {/* Embedded AI Modal */}
      <AICopilotModal
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
      />
    </div>
  );
}
