import "./global.2bfd6008.js";
import "./index.50971e87.js";
import { s as showMessage } from "./modal-101eef04.04114a11.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./animation-4a73b1c3.59b7eda0.js";
import "./theme-switcher-5fcf712d.42146bb7.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", async () => {
  (await showMessage.success(
    "Example title",
    "message",
    "Save",
    "Cancel",
    "payload:save",
    "payload:cancel"
  )).once(console.log);
});
