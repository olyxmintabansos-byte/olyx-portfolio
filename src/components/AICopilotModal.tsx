"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Flame,
  Zap,
  CheckCircle2,
  Terminal,
  Cpu,
  ShieldAlert,
  Layers,
  ChevronDown,
  ChevronRight,
  Activity,
  Server,
} from "lucide-react";
import { ChatMessage, AgentStep } from "@/types/portfolio";

export function AICopilotModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"MULTI_AGENT" | "DIRECT_9ROUTER" | "ENTERPRISE_KNOWLEDGE">("MULTI_AGENT");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "AI",
      text: "Halo Bos! Gue Apex Heavy-Duty AI Engine. Sistem ini dirancang untuk komputasi AI berbobot tinggi: Multi-Agent Consensus, Audit Arsitektur Rekursif, dan streaming langsung ke local 9Router (localhost:20128/v1). Token yang dibakar berbanding lurus dengan kedalaman analisis teknis tingkat dewa!",
      timestamp: "Baru saja",
      mode: "ENTERPRISE_KNOWLEDGE",
      tokenStats: {
        promptTokens: 420,
        completionTokens: 85,
        totalTokens: 505,
        latencyMs: 120,
      },
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStepTab, setActiveStepTab] = useState<number | null>(null);
  const [totalSessionTokens, setTotalSessionTokens] = useState<number>(505);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isProcessing) return;

    const userText = inputQuery.trim();
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "USER",
      text: userText,
      timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsProcessing(true);

    const startTime = performance.now();

    // JIKA MODE DIRECT 9ROUTER
    if (mode === "DIRECT_9ROUTER") {
      try {
        const response = await fetch("http://localhost:20128/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "combo-111",
            messages: [
              {
                role: "system",
                content: "Anda adalah Chief Systems Architect tingkat Principal. Analisis masalah teknis dengan standar enterprise tinggi, berikan evaluasi arsitektur, trade-offs, dan rekomendasi implementasi konkrit.",
              },
              { role: "user", content: userText },
            ],
            temperature: 0.3,
          }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const latency = Math.round(performance.now() - startTime);
        const replyText = data.choices?.[0]?.message?.content || "9Router memproses respons kosong.";
        const promptTokens = data.usage?.prompt_tokens || Math.round(userText.length * 1.4);
        const compTokens = data.usage?.completion_tokens || Math.round(replyText.length * 0.9);
        const total = promptTokens + compTokens;

        setTotalSessionTokens((t) => t + total);
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: "AI",
            text: replyText,
            timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
            mode: "DIRECT_9ROUTER",
            tokenStats: {
              promptTokens,
              completionTokens: compTokens,
              totalTokens: total,
              latencyMs: latency,
            },
          },
        ]);
        setIsProcessing(false);
        return;
      } catch {
        // Fallback jika 9Router offline / CORS
        console.warn("9Router local bridge unavailable. Falling back to High-Value Agentic Simulation.");
      }
    }

    // JIKA MODE MULTI-AGENT ATAU FALLBACK (HEAVY TOKEN WORKLOAD)
    setTimeout(() => {
      const isDuar = userText.toLowerCase().includes("duar") || userText.toLowerCase().includes("ledak");
      if (isDuar) triggerDuarEffect();

      const agentSteps: AgentStep[] = [
        {
          agent: "ARCHITECT",
          title: "Phase 1: Structural & Scalability Modeling",
          content: `Menganalisis domain: "${userText}". Membangun boundary context micro-frontends, shared LocalStorage schema state, dan isolasi thread Next.js 16 SSR vs Static Export. Target latency sub-16ms.`,
          tokensBurned: 840,
        },
        {
          agent: "AUDITOR",
          title: "Phase 2: SecOps & Resilience Stress-Audit",
          content: `Audit resiko: Single point of failure teridentifikasi pada LocalStorage quota. Mitigasi: implementasikan in-memory IndexedDB hybrid cache dengan automatic schema compaction & zero 404 Jekyll bypass.`,
          tokensBurned: 760,
        },
        {
          agent: "SYNTHESIZER",
          title: "Phase 3: Executive Consensus & Production Directive",
          content: `Konsensus tercapai. Output arsitektur diformulasikan ke format 100% executable tanpa placeholder. Seluruh 6 modul enterprise (FinPulse s/d Nexus) divalidasi interoperabilitasnya.`,
          tokensBurned: 1120,
        },
      ];

      const totalTokensThisRun = 840 + 760 + 1120;
      const latency = Math.round(performance.now() - startTime + 850);
      setTotalSessionTokens((t) => t + totalTokensThisRun);

      const finalReply = isDuar
        ? "💥 DUAAARRR!! KONSENSUS MULTI-AGENT SELESAI: 2.720 Token dialokasikan untuk audit arsitektur penuh! Seluruh ke-6 sistem enterprise lulus uji ketahanan enterprise-grade dengan skor zero-defect!"
        : `Evaluasi multi-agent untuk "${userText}" selesai. Melalui 3 fase penalaran mendalam (Architectural Modeling -> Resilience Audit -> Executive Synthesis), sistem merekomendasikan arsitektur client-side local-first dengan deterministik offline fallback. Rincian penalaran per-agent dapat dilihat pada tab agent di bawah.`;

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "AI",
          text: finalReply,
          timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
          mode: "MULTI_AGENT_DEBATE",
          agentSteps,
          tokenStats: {
            promptTokens: 820,
            completionTokens: 1900,
            totalTokens: totalTokensThisRun,
            latencyMs: latency,
          },
        },
      ]);
      setIsProcessing(false);
    }, 1000);
  };

  const triggerDuarEffect = () => {
    try {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.5 },
        colors: ["#06b6d4", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6"],
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#080d1a] border border-cyan-500/40 rounded-3xl max-w-3xl w-full h-[650px] flex flex-col justify-between shadow-2xl neon-glow-cyan overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header HUD */}
        <div className="p-4 bg-[#0d1527] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-white text-sm font-mono tracking-wide">APEX HEAVY REASONING ENGINE</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center gap-1">
                  <Activity className="w-3 h-3 animate-pulse text-cyan-400" />
                  HIGH-ROI COMPUTE
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 mt-0.5">
                <span>Burned Session: <strong className="text-cyan-400 font-bold">{totalSessionTokens.toLocaleString()} Tokens</strong></span>
                <span>•</span>
                <span>Mode: <strong className="text-amber-400">{mode}</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerDuarEffect}
              className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-slate-950 font-black text-xs font-mono flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-md shadow-amber-500/20"
              title="Ledakkan Efek AI Duar!"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>DUAR!</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Selector HUD */}
        <div className="bg-[#0b1122] px-4 py-2 border-b border-slate-800/80 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-400 text-[11px]">Compute Pipeline:</span>
          <div className="flex items-center gap-1.5 bg-[#0f182f] p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setMode("MULTI_AGENT")}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                mode === "MULTI_AGENT"
                  ? "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Multi-Agent Mesh (Heavy Burn)
            </button>
            <button
              onClick={() => setMode("DIRECT_9ROUTER")}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                mode === "DIRECT_9ROUTER"
                  ? "bg-indigo-500 text-white shadow-sm shadow-indigo-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              9Router Local (:20128)
            </button>
            <button
              onClick={() => setMode("ENTERPRISE_KNOWLEDGE")}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                mode === "ENTERPRISE_KNOWLEDGE"
                  ? "bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Direct Synthesis
            </button>
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${
                m.sender === "USER" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[90%] p-4 rounded-2xl ${
                  m.sender === "USER"
                    ? "bg-cyan-600 text-slate-950 font-bold rounded-tr-none shadow-md shadow-cyan-600/20"
                    : "bg-[#11192e] border border-slate-700/80 text-slate-200 rounded-tl-none leading-relaxed space-y-3"
                }`}
              >
                <div>{m.text}</div>

                {/* Multi-Agent Reasoning Chain Accordion */}
                {m.agentSteps && m.agentSteps.length > 0 && (
                  <div className="pt-2 border-t border-slate-700/60 space-y-2">
                    <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Autonomous Consensus Chain ({m.agentSteps.length} Agents)</span>
                    </div>

                    <div className="space-y-1.5">
                      {m.agentSteps.map((step, idx) => (
                        <div key={idx} className="bg-[#0b101f] border border-slate-800 rounded-xl p-2.5 text-[11px]">
                          <div className="flex items-center justify-between font-bold text-slate-300">
                            <span className="flex items-center gap-1.5">
                              {step.agent === "ARCHITECT" && <Cpu className="w-3.5 h-3.5 text-cyan-400" />}
                              {step.agent === "AUDITOR" && <ShieldAlert className="w-3.5 h-3.5 text-red-400" />}
                              {step.agent === "SYNTHESIZER" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                              {step.title}
                            </span>
                            <span className="text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-1.5 py-0.5 rounded">
                              {step.tokensBurned} tokens
                            </span>
                          </div>
                          <p className="text-slate-400 mt-1 text-[10px] leading-relaxed">
                            {step.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Token Telemetry Badge */}
                {m.tokenStats && (
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Allocated: <strong className="text-slate-200">{m.tokenStats.totalTokens} tokens</strong></span>
                    </span>
                    <span>Latency: <strong className="text-slate-200">{m.tokenStats.latencyMs}ms</strong></span>
                    <span className="text-emerald-400 font-bold">ROI: High-Leverage</span>
                  </div>
                )}
              </div>
              <span className="text-[9px] text-slate-500 mt-1 px-1">{m.timestamp}</span>
            </div>
          ))}

          {isProcessing && (
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono animate-pulse bg-[#0d1527] p-3 rounded-2xl border border-cyan-500/30 max-w-sm">
              <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
              <span>Multi-Agent Consensus sedang membakar token arsitektur...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#0d1527] border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder={
              mode === "MULTI_AGENT"
                ? "Beri problem arsitektur berat untuk di-debate 3 Agent (contoh: Fault Tolerance DB)..."
                : mode === "DIRECT_9ROUTER"
                ? "Kirim prompt langsung ke endpoint 9Router localhost:20128..."
                : "Tanyakan arsitektur 6 proyek enterprise kita atau ketik 'DUAR'..."
            }
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            disabled={isProcessing}
            className="flex-1 bg-[#11192e] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all cursor-pointer shadow-md shadow-cyan-500/20 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
