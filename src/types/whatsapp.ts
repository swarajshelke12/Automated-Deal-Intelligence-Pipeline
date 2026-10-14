export interface WhatsAppDispatchPayload {
  toPhone: string;
  messageBody: string;
  templateName?: string;
  isTemplateFallback: boolean;
  dispatchedAt: string;
}
