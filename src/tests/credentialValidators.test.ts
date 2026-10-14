import { isGoogleClientIdValid, isGoogleSecretValid } from '../utils/credentialValidators';

function assert(condition: boolean, msg: string) {
  if (!condition) throw new Error(`Assertion failed: ${msg}`);
}

export function testCredentialValidators(): boolean {
  assert(isGoogleClientIdValid('sample-id.apps.googleusercontent.com'), 'valid Google client ID');
  assert(!isGoogleClientIdValid('invalid-id'), 'invalid Google client ID');
  assert(isGoogleSecretValid('GOCSPX-ValidSecret123'), 'valid Google secret');
  assert(!isGoogleSecretValid('wrong-secret'), 'invalid Google secret');
  return true;
}
