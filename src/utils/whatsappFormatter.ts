export function buildWhatsAppBriefingPreview(title: string, attendee: string, talkingPoints: string[]): string {
  return `🚀 *AI Meeting Prepration Briefing*\n\n*Meeting:* ${title}\n*Attendee:* ${attendee}\n\n*Strategic Talking Points:*\n` +
    talkingPoints.map(p => `• ${p}`).join('\n');
}
