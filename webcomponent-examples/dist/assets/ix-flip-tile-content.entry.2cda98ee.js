import { r as registerInstance, h, H as Host } from "./index.2b5e1098.js";
const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "861c12c524efa42bdcf52922898ceb4fd367ffb0" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = IxFlipTileContentStyle0;
export {
  FlipTileContent as ix_flip_tile_content
};
