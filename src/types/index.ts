export type Screen = 'dashboard' | 'meetings' | 'preparation' | 'connections';

export type PreparationStatus = 'Prepared' | 'In Progress' | 'Scheduled';

export interface MeetingBrief {
  summary: string;
  emailSummary: string;
  linkedinInsights: string;
  talkingPoints: string[];
}

export interface Meeting {
  id: string;
  title: string;
  attendeeName: string;
  attendeeRole: string;
  attendeeCompany: string;
  attendeeEmail: string;
  attendeeLinkedIn?: string;
  attendeeAvatar: string;
  date: string;
  time: string;
  platform: 'Google Meet' | 'Zoom' | 'Microsoft Teams';
  status: PreparationStatus;
  brief?: MeetingBrief;
}

/**
 * Credentials required by the automation workflow:
 * "Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp"
 *
 * Google Integration (OAuth2 + API access)
 *   — Client ID & Secret     : Google Cloud OAuth2 app credentials (Calendar + Gmail)
 *
 * AI Intelligence Key        — Groq (gsk_...) or OpenAI (sk-...) for LLM chain nodes:
 *                              * Attendee Research Agent (openai/gpt-oss-20b)
 *                              * Correspondance Recap Agent (openai/gpt-oss-safeguard-20b)
 *                              * LinkedIn Summarizer Agent
 * Apify API Key              — APIFY Web Scraper node (run-sync dataset extraction)
 * LinkedIn Cookie (li_at)    — Session cookie for authenticated LinkedIn profile scraping
 * WhatsApp Business Cloud    — Meta Phone Number ID + Permanent Access Token
 * Telegram Bot (Optional)    — Alternately configured in workflow (chatId: 5999707366)
 */
export interface WorkflowCredentials {
  // ── Google Integration ──────────────────────────────────────────────────────
  googleClientId: string;       // Google Cloud OAuth2 Client ID (Calendar & Gmail)
  googleClientSecret: string;   // Google Cloud OAuth2 Client Secret
  googleAccountEmail?: string;  // Authorized Google account email

  // ── AI Engine (Groq / OpenAI) ──────────────────────────────────────────────
  openAiApiKey: string;         // Groq API Key (gsk_...) or OpenAI API Key (sk-...)
  aiProvider?: 'groq' | 'openai';

  // ── Apify & LinkedIn ────────────────────────────────────────────────────────
  apifyApiKey: string;          // Apify API Token (apify_api_...)
  linkedInCookie?: string;      // li_at session cookie from browser DevTools for Apify scraper

  // ── WhatsApp & Dispatch ────────────────────────────────────────────────────
  whatsAppBusinessId: string;   // Meta WhatsApp Phone Number ID (10-20 digits)
  whatsAppAccessToken: string;  // Permanent / long-lived access token from Meta (EAA...)
  whatsAppRecipientPhone?: string; // Recipient WhatsApp phone number with country code
  telegramChatId?: string;      // Optional Telegram Chat ID (e.g. 5999707366)

  // ── Status & Security Metadata ─────────────────────────────────────────────
  status: 'Not Configured' | 'Submitted' | 'Configured' | 'Locked & Expired';
  lastSubmitted?: string;
  submittedAtTimestamp?: number;  // Epoch ms timestamp when submitted
  expiresAtTimestamp?: number;    // Epoch ms timestamp when 12h lock triggers
}

export interface WorkflowStatus {
  name: string;
  isActive: boolean;
  triggerSchedule: string;
  lastRunAt: string;
  nextRunAt: string;
}
