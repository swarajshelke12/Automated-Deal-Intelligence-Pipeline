export function sanitizeTalkingPoints(points: string[]): string[] {
  if (!Array.isArray(points)) return ['Review core priorities', 'Align on timeline'];
  return points.map(p => p.trim()).filter(Boolean);
}
