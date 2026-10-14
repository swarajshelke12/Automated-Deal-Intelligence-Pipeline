export interface EphemeralVaultState {
  isLocked: boolean;
  remainingMs: number;
  expiresAt: number | null;
}
