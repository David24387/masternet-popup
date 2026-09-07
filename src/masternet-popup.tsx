import React, { ReactElement, useEffect } from "react";

const STORAGE_KEY = "masternetActivationPopupShown";
const OVERLAY_ID = "masternet-activation-overlay";
const TARGET_URL = "https://david24387.github.io/masternet-aktivierungsdashboard/";

export const MasternetPopup = (): ReactElement | null => {
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (document.getElementById(OVERLAY_ID)) return;

    const overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "masternet-popup-title");

    overlay.innerHTML = `
      <div id="masternet-activation-popup">
        <button class="masternet-popup-close" type="button" aria-label="Schließen">×</button>
        <h2 id="masternet-popup-title">Wie aktiv ist Ihr Servicecenter?</h2>
        <p>Sehen Sie jetzt, wie viele Mitarbeitende Ihres Servicecenters bereits im Masternet registriert sind und wie Ihr Center im Vergleich abschneidet.</p>
        <a class="masternet-popup-button" href="${TARGET_URL}">Aktivierungsstand ansehen →</a>
      </div>
    `;

    document.body.appendChild(overlay);

    const closePopup = () => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      overlay.remove();
    };

    overlay.querySelector(".masternet-popup-close")?.addEventListener("click", closePopup);
    overlay.querySelector(".masternet-popup-button")?.addEventListener("click", () => {
      sessionStorage.setItem(STORAGE_KEY, "true");
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      overlay.remove();
    };
  }, []);

  return null;
};
