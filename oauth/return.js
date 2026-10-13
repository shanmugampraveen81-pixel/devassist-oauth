import { returnLink } from './link.mjs';

const incoming = window.location.href;
// Remove the temporary code/state from browser history; never store them or log them.
window.history.replaceState(null, '', window.location.pathname);
const status = document.getElementById('status');
const button = document.getElementById('return');
try {
  const link = returnLink(incoming);
  button.href = link;
  button.hidden = false;
  status.textContent = 'Swiggy returned a login result. Tap below to continue in DevAssist.';
  // Chrome can require a user gesture; the visible button always remains available.
  window.location.replace(link);
} catch {
  status.textContent = 'This link has no valid pending login result. Open DevAssist and start Connect Swiggy again.';
}
