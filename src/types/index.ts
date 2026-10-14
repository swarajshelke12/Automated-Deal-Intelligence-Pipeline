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

export interface WorkflowCredentials {
  googleClientId: string;
  googleClientSecret: string;
  googleAccountEmail?: string;
  openAiApiKey: string;
  aiProvider?: 'groq' | 'openai';
  apifyApiKey: string;
  linkedInCookie?: string;
  whatsAppBusinessId: string;
  whatsAppAccessToken: string;
  whatsAppRecipientPhone?: string;
  telegramChatId?: string;
  status: 'Not Configured' | 'Submitted' | 'Configured' | 'Locked & Expired';
  lastSubmitted?: string;
  submittedAtTimestamp?: number;
  expiresAtTimestamp?: number;
}

export interface WorkflowStatus {
  name: string;
  isActive: boolean;
  triggerSchedule: string;
  lastRunAt: string;
  nextRunAt: string;
}
