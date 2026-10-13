const callback = 'https://shanmugampraveen81-pixel.github.io/devassist-oauth/oauth/';

/** No arbitrary redirect targets, token storage, network requests or provider text reflection. */
export function returnLink(address) {
  const url = new URL(address);
  const expected = new URL(callback);
  if (url.origin !== expected.origin || url.pathname !== expected.pathname || url.hash) throw new Error('Unexpected callback');
  const keys = [...url.searchParams.keys()];
  if (new Set(keys).size !== keys.length) throw new Error('Duplicate callback parameters');
  const state = url.searchParams.get('state') || '';
  if (!/^[A-Za-z0-9_-]{43}$/.test(state)) throw new Error('Missing login state');
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  if (!!code === !!error) throw new Error('Missing or ambiguous login result');
  if (code && (code.length > 4096 || /[\u0000-\u001f\u007f]/.test(code))) throw new Error('Invalid code');
  if (error && !/^[a-z_]{1,100}$/.test(error)) throw new Error('Invalid error');
  const query = new URLSearchParams({ state });
  query.set(code ? 'code' : 'error', code || error);
  return `intent://swiggy/oauth?${query}#Intent;scheme=devassist;package=app.devora.mobile;end`;
}
