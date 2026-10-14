export interface AttendeeProfile {
  name: string;
  role: string;
  company: string;
  email: string;
  linkedInUrl?: string;
  avatarUrl?: string;
}

export interface ExecutiveDossier {
  id: string;
  title: string;
  attendee: AttendeeProfile;
  date: string;
  time: string;
  talkingPoints: string[];
  emailSummary: string;
  linkedInInsights: string;
}
