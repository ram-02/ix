import "./index.03ad1244.js";
import { s as showModalLoading } from "./index.7f919368.js";
import "./init.db3e6f8b.js";
import "./logical-filter-operator-f6701df5.246c3a20.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-8bc5477b.0d0b5edc.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
import "./theme-switcher-b10fb4da.be4a72f4.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", () => {
  let count = 0;
  const progress = showModalLoading("Loading 0/2");
  const interval = setInterval(() => {
    count++;
    progress.update(`Loading ${count}/2`);
    if (count === 2) {
      progress.finish("Done");
      clearInterval(interval);
    }
  }, 1e3);
});