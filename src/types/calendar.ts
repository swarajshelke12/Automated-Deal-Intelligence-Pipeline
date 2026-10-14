export interface CalendarMeetingEvent {
  eventId: string;
  summary: string;
  startDateTime: string;
  hangoutLink?: string;
  organizerEmail: string;
  guestEmails: string[];
}
