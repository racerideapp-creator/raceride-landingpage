// Cloudflare Pages Function: greift auf JEDES /live/{token}-Segment vor
// der statischen Asset-Aufloesung — kein Namens-Overlap mit .html-Dateien,
// keine Redirect-Loops durch Clean-URL-Kanonisierung.
// Dateiname [token].js = CF-Pages-Convention fuer ein einzelnes dynamisches
// Segment; context.params.token enthaelt den Wert (wird hier aktuell nicht
// gelesen — der Client-JS im HTML-Body liest den Token selbst aus
// window.location.pathname, damit dieselbe Seite auch bei manuellem Aufruf
// mit ?token=... funktioniert und wir kein Server-Templating brauchen).
import {LIVE_HTML} from './_html.js';

export function onRequest() {
  return new Response(LIVE_HTML, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300', // 5 min Edge-Cache reicht — Datenteil kommt live via RPC
    },
  });
}
