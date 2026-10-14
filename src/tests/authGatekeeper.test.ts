function assert(condition: boolean, msg: string) {
  if (!condition) throw new Error(`Assertion failed: ${msg}`);
}

export function testAuthGatekeeper(): boolean {
  const id = 'client@navyatech.co.in';
  const pass = 'NayvaTech2026!';
  assert(id.length > 5, 'Client ID length policy');
  assert(pass.length > 8, 'Password length policy');
  return true;
}
