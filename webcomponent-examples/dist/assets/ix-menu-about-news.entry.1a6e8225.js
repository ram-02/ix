import { r as registerInstance, c as createEvent, h, H as Host } from "./global.2bfd6008.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const IxMenuAboutNewsStyle0 = menuAboutNewsCss;
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.label = void 0;
    this.i18nShowMore = "Show more";
    this.aboutItemLabel = void 0;
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "83f1ba400d8000a12796a2817259ad56b442d177", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "908c7d853a4e51cd9ff1511d03256de50ee1ff28", class: "banner-container" }, h("ix-icon", { key: "66f28b4daa8e7b3779718de1cbb9a8adc53a88df", color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { key: "6825e46de08ee4ee0d7cea4a5e7bce0c7f843189", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "8126f241e46af7c27a316e8d3938bc4fdd5c9eda", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "26eddce36c663f819d76fb99660150358e1e46cd", class: "cui-popover-news-header" }, h("ix-typography", { key: "010285ae6e2a5f171febbe764ef36d3a6a90a75f", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "c6d685ef430721c8364c8ddf78c7f76d41f7c634", size: "24", icon: "close", ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "1f98461c288ac98e75c1d9504e01673b35d5488a", class: "slot-container" }, h("slot", { key: "42806d437962511fd3469f2ce14fc8bf8e186dbe" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "64671055f20f56aa598beca6bd017c1ecfc4e412", id: "arrow" }));
  }
};
MenuAboutNews.style = IxMenuAboutNewsStyle0;
export {
  MenuAboutNews as ix_menu_about_news
};
