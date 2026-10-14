import { describe, it, expect } from 'vitest';
import { isGoogleClientIdValid, isGoogleSecretValid } from '../utils/credentialValidators';

describe('Credential Validators', () => {
  it('validates google client id format', () => {
    expect(isGoogleClientIdValid('sample-id.apps.googleusercontent.com')).toBe(true);
    expect(isGoogleClientIdValid('invalid-id')).toBe(false);
  });

  it('validates google client secret format', () => {
    expect(isGoogleSecretValid('GOCSPX-ValidSecret123')).toBe(true);
    expect(isGoogleSecretValid('wrong-secret')).toBe(false);
  });
});
