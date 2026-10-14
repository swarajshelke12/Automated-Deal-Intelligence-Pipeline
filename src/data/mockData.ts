import type { Meeting, WorkflowCredentials, WorkflowStatus } from '../types';

// ─── Meetings ─────────────────────────────────────────────────────────────────
// High-fidelity executive dossiers synthesized according to the dual n8n backend:
// 1. Google Calendar attendee extraction
// 2. Gmail correspondence recap via LangChain LLM
// 3. Apify LinkedIn profile & recent activity scraper
// 4. Groq / OpenAI synthesis agent delivering 4 strategic talking points

// ─── Meetings ─────────────────────────────────────────────────────────────────
// By default, no dummy or fake meetings are pre-seeded. Real calendar events
// are fetched when the Google Calendar sync runs or when dispatched via n8n.

export const sampleBackendMeetings: Meeting[] = [];

export const initialMeetings: Meeting[] = [];

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
  status: 'Not Configured',
};

// ─── Workflow Status ───────────────────────────────────────────────────────────
export const mockWorkflowStatus: WorkflowStatus = {
  name: 'AI Meeting Prepration automation',
  isActive: false,
  triggerSchedule: 'Every 1–2 hours (Autonomous Schedule)',
  lastRunAt: 'Awaiting first calendar scan',
  nextRunAt: 'Scheduled upon activation',
};

