export function formatMeetingTime(isoString: string): string {
  try {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return 'Upcoming';
  }
}

export function formatRemainingHours(ms: number): string {
  if (ms <= 0) return '00h 00m 00s';
  const t = new Date(ms).toISOString().slice(11, 19).split(':');
  return `${t[0]}h ${t[1]}m ${t[2]}s`;
}
