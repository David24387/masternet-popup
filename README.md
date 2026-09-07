# Masternet Aktivierungs-Popup – Staffbase Custom Widget

Dieses Projekt baut ein Staffbase Custom Widget mit dem Namen `Masternet Aktivierungs-Popup`.

## Verhalten
- Der Custom Block wird nur auf der Masternet-Home-Seite eingefügt.
- Beim Laden erzeugt er ein echtes Overlay direkt unter `document.body`.
- Nach Schließen oder Klick auf den CTA wird in `sessionStorage` gespeichert, dass das Popup in dieser Browser-Session bereits gezeigt wurde.
- Das Styling kommt aus dem bereits im Staffbase Overall CSS ergänzten `#masternet-activation-overlay` / `#masternet-activation-popup` CSS.

## GitHub
1. Alle Dateien dieses ZIP in das Repository `masternet-popup` hochladen.
2. In GitHub: Settings > Pages > Source auf **GitHub Actions** stellen.
3. Unter Actions warten, bis `Build and deploy Staffbase widget` grün ist.
4. Die Bundle-URL lautet danach voraussichtlich:
   `https://david24387.github.io/masternet-popup/euromaster.masternet-popup.js`
5. Diese URL in Staffbase Studio > Settings > Custom Widgets > Widget installieren eintragen.
6. Danach auf der Home-Seite einen Benutzerdefinierten Block hinzufügen und `Masternet Aktivierungs-Popup` auswählen.

## Technischer Hinweis
Das Projekt orientiert sich am offiziellen Staffbase Custom Widget Aufbau mit `@staffbase/widget-sdk`, `BlockFactory` und `window.defineBlock()`.
