export const StorageKeys = {
  AUTH_TOKEN: 'meetprep_auth',
  CLIENT_ID: 'meetprep_client_id',
  CREDENTIALS: 'meetprep_credentials',
  MEETINGS: 'meetprep_meetings'
};

export function getSessionItem(key: string): string | null {
  try {
    return sessionStorage.getItem(key) || localStorage.getItem(key);
  } catch {
    return null;
  }
}
