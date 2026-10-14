export interface DeveloperAuditEvent {
  action: 'login' | 'logout' | 'credentials_save' | 'calendar_refresh';
  actorId: string;
  timestamp: string;
}
