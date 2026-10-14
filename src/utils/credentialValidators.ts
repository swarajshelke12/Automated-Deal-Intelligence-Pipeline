export function isGoogleClientIdValid(id: string): boolean {
  return Boolean(id && id.trim().endsWith('.apps.googleusercontent.com'));
}

export function isGoogleSecretValid(sec: string): boolean {
  return Boolean(sec && sec.trim().startsWith('GOCSPX-') && sec.trim().length >= 8);
}

export function isOpenAiKeyValid(key: string): boolean {
  const k = key ? key.trim() : '';
  return (k.startsWith('sk-') || k.startsWith('gsk_')) && k.length >= 15;
}

export function isApifyKeyValid(key: string): boolean {
  const k = key ? key.trim() : '';
  return k.startsWith('apify_') && k.length >= 15;
}
