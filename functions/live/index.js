// Handler fuer bare /live (kein Token) — liefert dieselbe HTML-Seite;
// der Client-JS zeigt dann sein "Kein Live-Link"-Overlay, weil
// getToken() null zurueckliefert. Bewusst nicht auf / weiterleiten:
// klarere Fehlermeldung, wenn jemand den Link ohne Token teilt.
import {LIVE_HTML} from './_html.js';

export function onRequest() {
  return new Response(LIVE_HTML, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
