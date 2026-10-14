export interface ClientAuthSession {
  isAuthenticated: boolean;
  clientId: string | null;
  role: 'client' | 'developer_admin';
  authenticatedAt: number;
}

export interface AuthLoginResult {
  success: boolean;
  message: string;
}
