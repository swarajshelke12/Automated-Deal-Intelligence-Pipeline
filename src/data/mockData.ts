import type { Meeting, WorkflowCredentials, WorkflowStatus } from '../types';

// ─── Meetings ─────────────────────────────────────────────────────────────────
// High-fidelity executive dossiers synthesized according to the dual n8n backend:
// 1. Google Calendar attendee extraction
// 2. Gmail correspondence recap via LangChain LLM
// 3. Apify LinkedIn profile & recent activity scraper
// 4. Groq / OpenAI synthesis agent delivering 4 strategic talking points

export const sampleBackendMeetings: Meeting[] = [
  {
    id: 'meet-01',
    title: 'Enterprise AI Automation & Q4 Integration Kickoff',
    attendeeName: 'Sarah Wilson',
    attendeeRole: 'VP of Engineering',
    attendeeCompany: 'TechFlow Systems',
    attendeeEmail: 'sarah.wilson@techflow.io',
    attendeeLinkedIn: 'https://linkedin.com/in/sarah-wilson-techflow',
    attendeeAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    date: 'Today',
    time: '14:00 PM',
    platform: 'Google Meet',
    status: 'Prepared',
    brief: {
      summary: 'Executive alignment on deploying autonomous meeting preparation pipelines and agency orchestration for TechFlow\'s 140-person enterprise engineering team. Primary goal is approving a 14-day sandboxed pilot.',
      emailSummary: 'Last thread on Oct 11: Sarah confirmed security compliance requirements regarding ephemeral API key storage (12-hour auto-purge guarantee) and requested latency benchmarks comparing Groq inference (<400ms) with OpenAI gpt-4o.',
      linkedinInsights: 'Recently promoted to VP of Engineering after scaling core infra past 2M ARR. Published a technical article 3 days ago praising autonomous developer workflows and self-annealing agent loops.',
      talkingPoints: [
        'Congratulate Sarah on TechFlow\'s recent Series B expansion and engineering team growth.',
        'Reassure her that MeetingOS operates strictly in ephemeral memory with zero permanent database storage.',
        'Highlight Groq inference speed advantages (under 400ms per briefing generation vs 2.5s industry standard).',
        'Walk through the 14-day live pilot milestones for TechFlow\'s infrastructure and sales leads.'
      ]
    }
  },
  {
    id: 'meet-02',
    title: 'Outbound Strategy & Executive CRM Briefing Pipeline',
    attendeeName: 'Jonathan Ross',
    attendeeRole: 'Chief Revenue Officer',
    attendeeCompany: 'Horizon Labs',
    attendeeEmail: 'j.ross@horizonlabs.ai',
    attendeeLinkedIn: 'https://linkedin.com/in/jonathan-ross-cro',
    attendeeAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    date: 'Today',
    time: '16:30 PM',
    platform: 'Google Meet',
    status: 'Prepared',
    brief: {
      summary: 'Strategic evaluation of automated pre-call attendee intelligence delivered directly to sales executives via WhatsApp Cloud API 60 minutes prior to scheduled calendar events.',
      emailSummary: 'Exchanged 4 emails discussing mobile notification format, WhatsApp Cloud API message templates, and integration with their existing Google Workspace calendar setup.',
      linkedinInsights: '12+ years B2B SaaS sales leader. Active poster on modern outbound motion, eliminating rep research fatigue, and increasing call conversion rates.',
      talkingPoints: [
        'Reference Horizon Labs\' goal of cutting account executive manual research by 1.5 hours daily.',
        'Demonstrate the exact WhatsApp brief card delivered 60 minutes prior to high-stakes calls.',
        'Show how Apify extracts recent prospect LinkedIn activity for natural conversation icebreakers.',
        'Confirm rollout schedule for their APAC and North America enterprise account executives.'
      ]
    }
  },
  {
    id: 'meet-03',
    title: 'Supplier Negotiation Copilot & Pilot Evaluation',
    attendeeName: 'Elena Rostova',
    attendeeRole: 'Head of Product',
    attendeeCompany: 'Quantum Retail Group',
    attendeeEmail: 'elena.rostova@quantumretail.com',
    attendeeLinkedIn: 'https://linkedin.com/in/elena-rostova',
    attendeeAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    date: 'Tomorrow',
    time: '10:00 AM',
    platform: 'Google Meet',
    status: 'In Progress',
    brief: {
      summary: 'Exploring autonomous supplier intelligence synthesis and Gmail thread summarization for Quantum Retail\'s category managers and product procurement team.',
      emailSummary: 'Elena forwarded RFP guidelines on Monday. Inquired specifically regarding how the n8n Gmail node handles long email threads with multiple quoted replies.',
      linkedinInsights: 'Product innovator specializing in enterprise retail technology and AI agent integration. Featured speaker at Retail Tech Summit 2026.',
      talkingPoints: [
        'Explain how the LangChain Information Extractor filters noise from extended Gmail threads.',
        'Review supplier background synthesis alongside public trade news.',
        'Offer a dedicated test run with Quantum Retail\'s next 5 upcoming vendor meetings.',
        'Review enterprise privacy protocols and self-hosted n8n deployment architecture.'
      ]
    }
  },
  {
    id: 'meet-04',
    title: 'Series A Partner Discussion & Automation Architecture',
    attendeeName: 'Michael Chang',
    attendeeRole: 'Managing Partner',
    attendeeCompany: 'Apex Venture Capital',
    attendeeEmail: 'mchang@apexvc.com',
    attendeeLinkedIn: 'https://linkedin.com/in/michael-chang-vc',
    attendeeAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    date: 'Oct 16, 2026',
    time: '11:30 AM',
    platform: 'Google Meet',
    status: 'Scheduled',
    brief: {
      summary: 'Introductory discussion with Apex VC regarding Novatic Industries\' agency automation framework, client portal architecture, and proprietary n8n orchestration pipelines.',
      emailSummary: 'Connected via LinkedIn referral. Michael expressed interest in seeing how agency clients experience automated backend workflows without touching raw n8n nodes.',
      linkedinInsights: 'Former software founder turned venture capitalist. Focused on enterprise automation, vertical AI agents, and developer tooling.',
      talkingPoints: [
        'Present the 3-layer architecture: Directives, Orchestration, and Deterministic Execution.',
        'Demonstrate how the client portal protects clients from backend complexity while maintaining live sync.',
        'Share agency client acquisition metrics and average client retention rates.',
        'Discuss long-term vision for multi-agent voice assistants and calendar autonomous scheduling.'
      ]
    }
  }
];

export const initialMeetings: Meeting[] = sampleBackendMeetings;

// ─── Workflow Credentials ─────────────────────────────────────────────────────
export const initialCredentials: WorkflowCredentials = {
  googleClientId: '',
  googleClientSecret: '',
  googleAccountEmail: '',
  openAiApiKey: '',
  aiProvider: 'groq',
  apifyApiKey: '',
  linkedInCookie: '',
  whatsAppBusinessId: '',
  whatsAppAccessToken: '',
  whatsAppRecipientPhone: '',
  telegramChatId: '5999707366',
  status: 'Not Configured',
};

// ─── Workflow Status ───────────────────────────────────────────────────────────
export const mockWorkflowStatus: WorkflowStatus = {
  name: 'AI Sales Meeting Prep & WhatsApp Dispatch',
  isActive: true,
  triggerSchedule: 'Every 1 hour (Google Calendar Poller)',
  lastRunAt: '12 minutes ago',
  nextRunAt: 'in 48 minutes',
};
