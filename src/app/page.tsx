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
  Bot,
  Activity,
  Zap,
  Globe,
  GitBranch,
  ShieldCheck,
  Cpu,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Radio,
  HeartPulse,
  Anchor,
  ShoppingCart,
  Coins,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { AICopilotModal } from "@/components/AICopilotModal";
import { TitanProject } from "@/types/portfolio";

const TITAN_PROJECTS: TitanProject[] = [
  {
    id: "insursure-os",
    name: "InsurSure OS",
    category: "InsurTech & Actuarial Risk ERP (Titan 15)",
    tagline: "Loss Ratio Canvas Radar, Triase Klaim & Sertifikat Polis OJK A4",
    description: "Sistem operasi asuransi komersial dengan visualisasi radar rasio klaim 60 FPS, deteksi fraud adjudikasi klaim, cetak sertifikat polis standar AAUI/OJK A4, dan permodelan aktuaria Chain-Ladder IBNR serta rasio solvabilitas RBC POJK 71/2016.",
    techStack: ["Next.js 16", "Actuarial Chain-Ladder", "Loss Ratio Radar", "OJK A4 Print"],
    liveUrl: "https://olyxmintabansos-byte.github.io/insursure-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/insursure-os",
    statsMetric: "Quindecagon • Live",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    accentGradient: "from-teal-500/20 via-emerald-600/10 to-transparent",
    iconName: "shield-alert",
    status: "OPERATIONAL",
  },
  {
    id: "lexjurist-os",
    name: "LexJurist OS",
    category: "Legal Practice & Court Docket (Titan 14)",
    tagline: "Kalender Sidang Pengadilan, Retainer Trust & Gugatan Hukum A4",
    description: "Sistem manajemen firma hukum terpadu dengan timeline sidang PN/PT/MA/BANI, billing jam advokat berbasis retainer trust ledger, generator surat gugatan resmi A4, dan brankas alat bukti Pasal 1866 KUHPerdata.",
    techStack: ["Next.js 16", "Court Docket", "Retainer Ledger", "Legal Pleading A4"],
    liveUrl: "https://olyxmintabansos-byte.github.io/lexjurist-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/lexjurist-os",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accentGradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    iconName: "scale",
    status: "OPERATIONAL",
  },
  {
    id: "venturevault-os",
    name: "VentureVault OS",
    category: "Venture Capital & Cap Table (Titan 13)",
    tagline: "Permodelan Cap Table, YC SAFE Notes & NVCA Term Sheet A4",
    description: "Sistem private equity dan venture capital dengan matriks kepemilikan saham, kalkulator konversi YC Post-Money SAFE Notes, simulasi likuidasi exit M&A waterfall preferensi 1x Non-Participating, dan cetak Term Sheet Seri A NVCA.",
    techStack: ["Next.js 16", "Cap Table Matrix", "M&A Waterfall", "NVCA A4 Print"],
    liveUrl: "https://olyxmintabansos-byte.github.io/venturevault-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/venturevault-os",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    iconName: "coins",
    status: "OPERATIONAL",
  },
  {
    id: "forgecommerce-os",
    name: "ForgeCommerce OS",
    category: "B2B Wholesale & RFQ Engine (Titan 12)",
    tagline: "Portal Tender Reverse Auction, Tiered Pricing & Faktur Pajak A4",
    description: "Platform perdagangan grosir B2B dengan reverse auction RFQ bidding, matriks diskon volume bertingkat, scoring kredit vendor Dun & Bradstreet, serta faktur proforma dan pajak resmi PPN 11% cetak A4.",
    techStack: ["Next.js 16", "RFQ Tender", "Tiered Pricing", "Tax Invoice A4"],
    liveUrl: "https://olyxmintabansos-byte.github.io/forgecommerce-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/forgecommerce-os",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accentGradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    iconName: "cart",
    status: "OPERATIONAL",
  },
  {
    id: "logichain-os",
    name: "LogiChain OS",
    category: "Maritime Freight & Port OS (Titan 2)",
    tagline: "AIS Sea Lanes Radar, Container Yard & INSW Customs A4",
    description: "Sistem operasi maritim dan terminal peti kemas dengan HTML5 Canvas 60 FPS AIS radar, koordinat stacking bay-row-tier gantry crane, kalkulator kepabeanan HS Code INSW & cetak B/L A4, serta telemetri IoT reefer cold chain.",
    techStack: ["Next.js 16", "Canvas 60 FPS", "Bay Matrix", "INSW Customs"],
    liveUrl: "https://olyxmintabansos-byte.github.io/logichain-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/logichain-os",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    accentGradient: "from-sky-500/20 via-blue-600/10 to-transparent",
    iconName: "anchor",
    status: "OPERATIONAL",
  },
  {
    id: "aegissec-os",
    name: "AegisSec OS",
    category: "Cyber Defense & SOC SIEM (Titan 3)",
    tagline: "SIEM Incident Command, Canvas Threat Radar & MITRE ATT&CK",
    description: "Pusat komando pertahanan siber terpadu dengan HTML5 Canvas 60 FPS rotating threat radar, status DEFCON dinamis, matriks 8 taktik MITRE ATT&CK enterprise, WAF rule engine, dan audit kerentanan CVE 1-klik.",
    techStack: ["Next.js 16", "Canvas 60 FPS", "MITRE Heatmap", "WAF Engine"],
    liveUrl: "https://olyxmintabansos-byte.github.io/aegissec-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/aegissec-os",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    accentGradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    iconName: "shield",
    status: "OPERATIONAL",
  },
  {
    id: "medicore-os",
    name: "MediCore OS",
    category: "Hospital ERP & Clinical Triage (Titan 4)",
    tagline: "Pusat Triase IGD, Live Lead II EKG & Farmasi E-Resep",
    description: "Sistem operasi rumah sakit modern dengan visualisasi gelombang elektrokardiogram (EKG 60Hz) HTML5 Canvas, alokasi 12 bed IGD/ICU, smart farmasi e-resep deteksi alergi obat, dan Casemix INA-CBG invoice A4.",
    techStack: ["Next.js 16", "Canvas Lead II", "INA-CBG Billing", "E-Resep"],
    liveUrl: "https://olyxmintabansos-byte.github.io/medicore-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/medicore-os",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    iconName: "heart",
    status: "OPERATIONAL",
  },
  {
    id: "neuroforge-ai",
    name: "NeuroForge AI",
    category: "Autonomous Multi-Agent Orchestrator (Titan 5)",
    tagline: "Studio Orkestrasi 5 Agen Otonom, Debate Arena & Token ROI",
    description: "Sistem penalaran rekursif multi-agen (Architect, Coder, SecOps, QA, Arbiter) dengan dialektika pertentangan adversarial debate, Recharts telemetri token, dan ekspor spesifikasi formal Markdown.",
    techStack: ["Next.js 16", "Multi-Agent DAG", "Debate Arena", "Mermaid Export"],
    liveUrl: "https://olyxmintabansos-byte.github.io/neuroforge-ai/",
    githubUrl: "https://github.com/olyxmintabansos-byte/neuroforge-ai",
    statsMetric: "3 Rute • Live",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    accentGradient: "from-purple-500/20 via-indigo-600/10 to-transparent",
    iconName: "cpu",
    status: "OPERATIONAL",
  },
  {
    id: "nexus-shiftops",
    name: "Nexus Corp & ShiftOps",
    category: "Workforce ERP & Fleet OS (Titan 6)",
    tagline: "Sistem Manajemen Shift 24/7, Payroll Otomatis & Armada",
    description: "Matriks kalender mingguan Gantt rotasi shift, alur persetujuan cuti HRD, kalkulator lembur PPh 21/BPJS dengan cetak slip gaji A4, serta monitoring BBM telemetri armada real-time.",
    techStack: ["Next.js 16", "TypeScript", "Workforce Roster", "Recharts"],
    liveUrl: "https://olyxmintabansos-byte.github.io/nexus-shiftops/",
    githubUrl: "https://github.com/olyxmintabansos-byte/nexus-shiftops",
    statsMetric: "6 Rute • Live",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    accentGradient: "from-blue-500/20 via-indigo-600/10 to-transparent",
    iconName: "layers",
    status: "OPERATIONAL",
  },
  {
    id: "educore-os",
    name: "EduCore: School OS",
    category: "Academic ERP & CBT Engine (Titan 7)",
    tagline: "Platform Kampus/Sekolah Terpadu, CBT Anti-Curang & Raport A4",
    description: "Direktori siswa SIS multi-jurusan, transkrip nilai & raport digital format cetak A4 kop resmi, simulator ujian CBT dengan live timer & deteksi pindah tab, presensi QR, serta kasir SPP.",
    techStack: ["Next.js 16", "CBT Engine", "Anti-Cheat", "Raport A4"],
    liveUrl: "https://olyxmintabansos-byte.github.io/educore-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/educore-os",
    statsMetric: "7 Rute • Live",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    accentGradient: "from-indigo-500/20 via-purple-600/10 to-transparent",
    iconName: "graduation",
    status: "OPERATIONAL",
  },
  {
    id: "simucorp-os",
    name: "SimuCorp: Cyber Empire",
    category: "Cyber Economy & Tycoon OS (Titan 8)",
    tagline: "Simulator Megakorporasi, Bursa Saham Real-Time & Hostile M&A",
    description: "12 unit usaha multi-tier, pasar modal Wall Street dengan fluktuasi candlestick real-time per detik, R&D Tech Tree 7 cabang, hostile takeovers 51% saham rival, dan reinkarnasi Cyber Shards.",
    techStack: ["Next.js 16", "Stock Candlestick", "R&D Tree", "M&A Raider"],
    liveUrl: "https://olyxmintabansos-byte.github.io/simucorp-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/simucorp-os",
    statsMetric: "6 Rute • Live",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accentGradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    iconName: "trending",
    status: "OPERATIONAL",
  },
  {
    id: "omnipos-os",
    name: "OmniPOS & Retail OS",
    category: "Enterprise POS, Stock & KDS (Titan 9)",
    tagline: "Kasir Kilat FnB/Ritel, Denah 16 Meja & Multi-Gudang",
    description: "Terminal transaksi kasir kilat + cetak struk thermal 58/80mm, kontrol stok multi-gudang & stock opname, denah 16 meja restoran interaktif, Kitchen Display System (KDS), dan laporan kasir shift.",
    techStack: ["Next.js 16", "Kitchen KDS", "Stock Opname", "Thermal Print"],
    liveUrl: "https://olyxmintabansos-byte.github.io/omnipos-os/",
    githubUrl: "https://github.com/olyxmintabansos-byte/omnipos-os",
    statsMetric: "5 Rute • Live",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    iconName: "shopping",
    status: "OPERATIONAL",
  },
  {
    id: "craftcv-ai",
    name: "CraftCV AI",
    category: "ATS Resume Studio & Career OS (Titan 10)",
    tagline: "Studio Pembuat Resume ATS & Simulator Wawancara AI",
    description: "Split-screen resume studio interaktif dengan 3 template ATS dinamis, skor kecocokan ATS real-time, job description matcher otomatis, dan AI Technical Interview Simulator rubrik STAR.",
    techStack: ["Next.js 16", "ATS Engine", "Interview Coach", "PDF Export"],
    liveUrl: "https://olyxmintabansos-byte.github.io/craftcv-ai/",
    githubUrl: "https://github.com/olyxmintabansos-byte/craftcv-ai",
    statsMetric: "2 Rute • Live",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    accentGradient: "from-pink-500/20 via-rose-600/10 to-transparent",
    iconName: "file",
    status: "OPERATIONAL",
  },
  {
    id: "finpulse-ai",
    name: "FinPulse AI",
    category: "SME Financial ERP & OCR (Titan 11)",
    tagline: "Sistem Keuangan UMKM, Faktur B2B & Virtual CFO Advisory",
    description: "Executive Financial Dashboard, pembukuan jurnal kas mutasi debit-kredit, generator faktur B2B otomatis dengan PPN 11%, pemindai struk multimodal OCR instan, dan asisten virtual CFO.",
    techStack: ["Next.js 16", "OCR Scanner", "Virtual CFO", "Tax Engine"],
    liveUrl: "https://olyxmintabansos-byte.github.io/finpulse-ai/",
    githubUrl: "https://github.com/olyxmintabansos-byte/finpulse-ai",
    statsMetric: "4 Rute • Live",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    accentGradient: "from-blue-500/20 via-cyan-600/10 to-transparent",
    iconName: "wallet",
    status: "OPERATIONAL",
  },
];

export default function PortfolioHubPage() {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  const getProjectIcon = (name: TitanProject["iconName"]) => {
    switch (name) {
      case "shield-alert":
        return <ShieldAlert className="w-6 h-6 text-teal-400" />;
      case "scale":
        return <Scale className="w-6 h-6 text-amber-400" />;
      case "coins":
        return <Coins className="w-6 h-6 text-emerald-400" />;
      case "cart":
        return <ShoppingCart className="w-6 h-6 text-amber-400" />;
      case "anchor":
        return <Anchor className="w-6 h-6 text-sky-400" />;
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case "heart":
        return <HeartPulse className="w-6 h-6 text-emerald-400" />;
      case "cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case "layers":
        return <Layers className="w-6 h-6 text-blue-400" />;
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
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Telemetry Bar */}
      <header className="border-b border-slate-800 bg-[#070b19]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20">
              <Zap className="w-6 h-6 text-slate-950 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base tracking-wider">APEX TITANS HUB</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold">
                  QUINDECAGON MILESTONE (15/50)
                </span>
              </div>
              <p className="text-[10px] text-slate-400">15 Autonomous Enterprise Systems Ecosystem</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/observatory/"
              className="px-3 py-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shadow-cyan-500/10"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>Observatory</span>
            </Link>

            <button
              onClick={() => setIsCopilotOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
            >
              <Bot className="w-4 h-4 fill-current" />
              <span>9Router Copilot</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0a0e24] to-[#060813]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Chief Systems Architect Blueprint • Autonomous Hermes Execution</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none mb-6">
            The 15 Enterprise Titans <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Quindecagon Milestone (30% Complete)
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Lima belas mahakarya perangkat lunak tingkat korporasi: InsurTech Loss Ratio, Law Practice Docket, Private Equity Cap Table, B2B Wholesale RFQ, Maritime Freight, Cyber SOC, Hospital ERP, Multi-Agent AI, Workforce Roster, CBT LMS, Pasar Modal, Smart Retail POS, ATS Resume, dan SME Financials.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400">Total Systems:</span>
              <span className="text-white font-bold">15 / 15 Production Live</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-slate-400">Prerendered Routes:</span>
              <span className="text-white font-bold">65+ Halaman Statis</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400">Arsitektur:</span>
              <span className="text-white font-bold">Client-Side Local-First</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Titans */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>Bento Grid Titans Ecosystem</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                15 TITANS ACTIVE
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Eksplorasi portofolio live, arsitektur sistem, dan source code repositori.</p>
          </div>
          <Link
            href="/observatory/"
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 group"
          >
            <span>Buka Global Observatory</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TITAN_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-[#0c1228] to-[#070b1a] p-6 hover:border-slate-700 transition-all flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-700 transition-colors">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${project.badgeColor}`}>
                    {project.statsMetric}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2 mb-2">
                  <span>{project.name}</span>
                </h3>

                <p className="text-xs text-slate-300 font-medium mb-3 line-clamp-2">
                  {project.tagline}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#04060f] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 <span className="text-slate-300 font-bold">Apex Cyber Systems</span> • Organization:{" "}
            <code className="text-cyan-400 font-mono">olyxmintabansos-byte</code>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Powered by 9Router Engine</span>
            <span>•</span>
            <span>Static Export Zero-Defect</span>
            <span>•</span>
            <span>Quindecagon Milestone (15/50)</span>
          </div>
        </div>
      </footer>

      {/* AI Copilot Modal */}
      <AICopilotModal isOpen={isCopilotOpen} onClose={() => setIsCopilotOpen(false)} />
    </div>
  );
}
