export interface TitanProject {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  statsMetric: string;
  badgeColor: string;
  accentGradient: string;
  iconName: "layers" | "graduation" | "trending" | "shopping" | "file" | "wallet" | "cpu" | "heart";
  status?: "OPERATIONAL" | "ACTIVE" | "SYNTHESIZING";
}

export interface AgentStep {
  agent: "ARCHITECT" | "AUDITOR" | "SYNTHESIZER";
  title: string;
  content: string;
  tokensBurned: number;
}

export interface ChatMessage {
  id: string;
  sender: "USER" | "AI";
  text: string;
  timestamp: string;
  mode?: "DIRECT_9ROUTER" | "MULTI_AGENT_DEBATE" | "NEURAL_SYNTHESIS" | "ENTERPRISE_KNOWLEDGE";
  agentSteps?: AgentStep[];
  tokenStats?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    latencyMs: number;
  };
}

export interface SystemHealthProbe {
  id: string;
  name: string;
  endpoint: string;
  status: "ONLINE" | "CHECKING" | "MAINTENANCE";
  latencyMs: number;
  uptimePercent: number;
  lastChecked: string;
  routesCount: number;
}
