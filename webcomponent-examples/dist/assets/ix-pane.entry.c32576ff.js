import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.2b5e1098.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { A as Animation } from "./animation-4a73b1c3.59b7eda0.js";
import { a as applicationLayoutService } from "./service-02cc9011.c0252da5.js";
import { m as matchBreakpoint } from "./breakpoints-d5c2f627.f0d6212d.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const paneCss = ":host{background-color:var(--theme-color-2);display:flex;position:relative;overflow:hidden;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host aside{width:100%;height:100%}:host .title-text{display:flex;align-items:center;gap:var(--theme-space-1);overflow:hidden}:host .title-text .title-text-overflow{width:100%;height:100%;display:contents}:host .title-text .title-text-overflow *{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .title-text .title-text-left-right-expanded{order:1}:host .header-gap{gap:var(--theme-space-1)}:host .top-bottom-pane{display:flex;flex-direction:column;flex-grow:1}:host .top-bottom-pane .title{display:flex;flex-direction:row;align-items:center;margin:var(--theme-space--1) var(--theme-space-2) var(--theme-space--1) var(--theme-space-2)}:host .top-bottom-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .top-bottom-pane .title-expanded{display:flex;flex-direction:row}:host .top-bottom-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane{display:flex;flex-grow:1}:host .left-right-pane .title{display:flex;flex-direction:column;align-items:center;margin:var(--theme-space-2) var(--theme-space--1) var(--theme-space-2) var(--theme-space--1)}:host .left-right-pane .title .title-text{flex-direction:row-reverse;justify-content:start}:host .left-right-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane .title-expanded{display:flex;flex-direction:row}:host .left-right-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane.expanded{flex-direction:column}:host .rotate{writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg)}:host .mobile-pane{display:flex;flex-direction:column;flex-grow:1}:host .mobile-pane .title-mobile{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-1) var(--theme-space-2)}:host .side-pane-content{padding:var(--theme-space-1) var(--theme-space-2);overflow:auto;height:100%;width:100%}:host(.not-visible){display:none}:host(.inline-color){background-color:var(--theme-color-1)}:host(.box-shadow){box-shadow:0 0 1rem black}:host(.nav-left-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-weak-bdr)}:host(.left-pane-border){border-right:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.right-pane-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-pane-border){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.bottom-pane-border){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-overlay){width:100%;position:absolute;z-index:100 !important}:host(.mobile-overlay) .side-pane-content{height:calc(100% - 2.5rem)}:host(.mobile-border-top){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-border-bottom){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-expanded){top:0}:host(.bottom-expanded){bottom:0}:host(.left-right-pane){height:100%}:host(.top-bottom-pane){width:100%}";
const IxPaneStyle0 = paneCss;
const Pane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expandedChanged = createEvent(this, "expandedChanged", 7);
    this.variantChanged = createEvent(this, "variantChanged", 7);
    this.borderlessChanged = createEvent(this, "borderlessChanged", 7);
    this.hideOnCollapseChanged = createEvent(this, "hideOnCollapseChanged", 7);
    this.slotChanged = createEvent(this, "slotChanged", 7);
    this.validPositions = ["top", "left", "bottom", "right"];
    this.collapsedPane = "40px";
    this.collapsedPaneMobile = "48px";
    this.heading = void 0;
    this.variant = "inline";
    this.hideOnCollapse = false;
    this.size = "240px";
    this.borderless = false;
    this.expanded = false;
    this.composition = "top";
    this.icon = void 0;
    this.ignoreLayoutSettings = false;
    this.isMobile = false;
    this.expandIcon = "";
    this.showContent = false;
    this.minimizeIcon = "";
    this.floating = false;
    this.parentWidthPx = 0;
    this.parentHeightPx = 0;
  }
  get currentSlot() {
    return this.hostElement.getAttribute("slot");
  }
  get isBottomTopPane() {
    return this.composition === "bottom" || this.composition === "top";
  }
  get isLeftRightPane() {
    return this.composition === "left" || this.composition === "right";
  }
  get isMobileTop() {
    return this.composition === "top" || this.composition === "left";
  }
  componentWillLoad() {
    this.setIcons();
    this.floating = this.variant === "floating";
    if (this.expanded) {
      this.onExpandedChange();
    }
    this.isMobile = matchBreakpoint("sm");
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint("sm");
    });
    this.setPosition(this.currentSlot);
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "slot") {
          const newSlot = this.currentSlot;
          const oldSlot = mutation.oldValue;
          if (newSlot !== oldSlot) {
            this.slotChanged.emit({
              slot: oldSlot,
              newSlot
            });
            this.setPosition(newSlot);
          }
        }
      });
    });
    this.mutationObserver.observe(this.hostElement, {
      attributes: true,
      attributeOldValue: true
    });
    const parentElement = this.hostElement.parentElement;
    this.resizeObserver = new ResizeObserver((entries) => {
      this.parentWidthPx = entries[0].borderBoxSize[0].inlineSize;
      this.parentHeightPx = entries[0].borderBoxSize[0].blockSize;
    });
    if (parentElement)
      this.resizeObserver.observe(parentElement);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
  setPosition(value) {
    if (this.validPositions.includes(value)) {
      this.composition = value;
    }
  }
  getExpandPaneSize() {
    let expandPaneSize;
    if (this.isBottomTopPane) {
      if (this.size.includes("px")) {
        const referenceValue = Math.round(this.parentHeightPx / 2);
        const currentValue = Number(this.size.replace("px", ""));
        if (referenceValue && referenceValue < currentValue) {
          expandPaneSize = `${referenceValue}px`;
        } else {
          expandPaneSize = `${currentValue}px`;
        }
      } else {
        if (this.size === "50%") {
          expandPaneSize = `${Math.round(this.parentHeightPx / 2)}px`;
        } else {
          expandPaneSize = `${Math.round(this.parentHeightPx / 3)}px`;
        }
      }
    } else {
      if (this.size.includes("px")) {
        const referenceValue = Math.round(this.parentWidthPx / 2);
        const currentValue = Number(this.size.replace("px", ""));
        if (referenceValue && referenceValue < currentValue) {
          expandPaneSize = `${referenceValue}px`;
        } else {
          expandPaneSize = `${currentValue}px`;
        }
      } else {
        if (this.size === "50%") {
          expandPaneSize = `${Math.round(this.parentWidthPx / 2)}px`;
        } else {
          expandPaneSize = `${Math.round(this.parentWidthPx / 3)}px`;
        }
      }
    }
    return expandPaneSize;
  }
  setIcons() {
    const { expandIcon, minimizeIcon } = this.getIconNames();
    this.expandIcon = expandIcon;
    this.minimizeIcon = minimizeIcon;
  }
  getIconNames() {
    let expandIcon = "";
    let minimizeIcon = "";
    switch (this.composition) {
      case "left":
        expandIcon = this.isMobile ? "double-chevron-up" : "double-chevron-left";
        minimizeIcon = this.isMobile ? "double-chevron-down" : "double-chevron-right";
        break;
      case "right":
        expandIcon = this.isMobile ? "double-chevron-down" : "double-chevron-right";
        minimizeIcon = this.isMobile ? "double-chevron-up" : "double-chevron-left";
        break;
      case "bottom":
        expandIcon = "double-chevron-down";
        minimizeIcon = "double-chevron-up";
        break;
      case "top":
        expandIcon = "double-chevron-up";
        minimizeIcon = "double-chevron-down";
        break;
    }
    return { expandIcon, minimizeIcon };
  }
  animateVerticalFadeIn(size) {
    anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      width: size,
      easing: "easeInOutSine",
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          this.animateVerticalPadding("0px");
        } else {
          this.animateVerticalPadding("8px");
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        }
      }
    });
  }
  animateHorizontalFadeIn(size) {
    anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      height: size,
      easing: "easeInOutSine",
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          this.animateHorizontalPadding("0px");
        } else {
          this.animateHorizontalPadding("8px");
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        }
      }
    });
  }
  removePadding() {
    anime({
      targets: this.hostElement.shadowRoot.querySelector("#title-div"),
      duration: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      delay: 0
    });
  }
  animateHorizontalPadding(size) {
    anime({
      targets: this.hostElement.shadowRoot.querySelector("#title-div"),
      duration: Animation.mediumTime,
      paddingTop: size,
      paddingBottom: size,
      easing: "easeInOutSine",
      delay: 0
    });
  }
  animateVerticalPadding(size) {
    anime({
      targets: this.hostElement.shadowRoot.querySelector("#title-div"),
      duration: Animation.mediumTime,
      paddingLeft: size,
      paddingRight: size,
      easing: "easeInOutSine",
      delay: 0
    });
  }
  onMobileChange() {
    this.setIcons();
    this.hostElement.style.removeProperty("width");
    this.hostElement.style.removeProperty("height");
    this.hostElement.style.removeProperty("min-height");
    this.onParentSizeChange();
  }
  onPositionChange() {
    this.setIcons();
    this.hostElement.style.removeProperty("width");
    this.hostElement.style.removeProperty("height");
    this.onParentSizeChange();
  }
  onHideOnCollapseChange(value) {
    this.onParentSizeChange();
    this.hideOnCollapseChanged.emit({
      slot: this.currentSlot,
      hideOnCollapse: value
    });
  }
  onVariantChange(value) {
    this.floating = value === "floating";
    this.variantChanged.emit({
      slot: this.currentSlot,
      variant: value
    });
  }
  onBorderlessChange(value) {
    this.borderlessChanged.emit({
      slot: this.currentSlot,
      borderless: value
    });
  }
  onExpandedChange() {
    this.onSizeChange();
    this.expandedChanged.emit({
      slot: this.currentSlot,
      expanded: this.expanded
    });
  }
  onParentSizeChange() {
    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.height = "100%";
      } else {
        const expandPaneSize = this.getExpandPaneSize();
        if (this.isBottomTopPane) {
          this.hostElement.style.height = expandPaneSize;
        } else {
          this.hostElement.style.width = expandPaneSize;
        }
      }
    } else {
      this.showContent = false;
      if (this.isMobile) {
        this.removePadding();
        this.hostElement.style.height = this.hideOnCollapse ? "0" : this.collapsedPaneMobile;
      } else {
        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.hideOnCollapse ? "0" : this.collapsedPane;
        } else {
          this.hostElement.style.width = this.hideOnCollapse ? "0" : this.collapsedPane;
        }
      }
    }
  }
  onSizeChange() {
    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.minHeight = this.hideOnCollapse ? "0" : this.collapsedPaneMobile;
        this.animateHorizontalFadeIn("100%");
      } else {
        const expandPaneSize = this.getExpandPaneSize();
        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.hideOnCollapse ? "0" : this.collapsedPane;
          this.animateHorizontalFadeIn(expandPaneSize);
        } else {
          this.hostElement.style.width = this.hideOnCollapse ? "0" : this.collapsedPane;
          this.animateVerticalFadeIn(expandPaneSize);
        }
      }
    } else {
      this.showContent = false;
      if (this.isMobile) {
        this.removePadding();
        this.hostElement.style.height = this.collapsedPaneMobile;
      } else {
        if (this.isBottomTopPane) {
          this.animateHorizontalFadeIn(this.collapsedPane);
        } else {
          this.animateVerticalFadeIn(this.collapsedPane);
        }
      }
    }
  }
  render() {
    return h(Host, { key: "64c609b1f94058357b4ac675c5879bc624af2a9e", class: {
      "inline-color": !this.floating,
      "mobile-overlay": this.expanded && this.isMobile,
      "top-expanded": this.expanded && this.isMobileTop && this.isMobile,
      "bottom-expanded": this.expanded && !this.isMobileTop && this.isMobile,
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      [`${this.composition}-pane-border`]: !this.borderless && !this.isMobile && !this.floating,
      "nav-left-border": !this.borderless && !this.isMobile && this.composition !== "right" && this.floating,
      "mobile-border-top": !this.borderless && this.isMobileTop && this.isMobile && !this.expanded && !this.floating,
      "mobile-border-bottom": !this.borderless && !this.isMobileTop && this.isMobile && !this.expanded && !this.floating,
      "box-shadow": this.floating,
      "aria-expanded": this.expanded,
      "not-visible": this.hideOnCollapse && !this.expanded
    } }, h("aside", { key: "2275f27c0af5b2f08826561daa23cd08a79e57cf", class: {
      "top-bottom-pane": this.isBottomTopPane && !this.isMobile,
      "left-right-pane": this.isLeftRightPane && !this.isMobile,
      "mobile-pane": this.isMobile,
      expanded: this.expanded
    } }, h("div", { key: "02ce98cae333c56b4bbe798dc2091955183d3775", id: "title-div", class: {
      title: !this.isMobile && !this.hideOnCollapse && !this.showContent,
      "title-finished": !this.isMobile && !this.hideOnCollapse && this.showContent,
      "title-expanded": !this.isMobile && !this.hideOnCollapse && this.expanded,
      "title-hide-on-collapse": !this.isMobile && this.hideOnCollapse,
      "title-mobile": this.isMobile,
      "header-gap": !this.isMobile && !this.hideOnCollapse
    } }, h("ix-icon-button", { key: "55a3da8047a5934bf48116fc06e4dff2d464bd3f", class: "title-icon", size: "24", icon: this.expanded ? this.isMobile || this.hideOnCollapse ? "close" : this.expandIcon : this.minimizeIcon, ghost: true, onClick: () => {
      this.expanded = !this.expanded;
    }, "aria-controls": this.composition + "ToggleButton" }), h("span", { key: "2137390b72e4530c03eb1c2b8a50a8eaab8dbfcb", class: {
      "title-text": true,
      rotate: !this.expanded && !this.isMobile && this.isLeftRightPane
    } }, this.icon ? h("ix-icon", { class: {
      "title-text-left-right-expanded": this.expanded && !this.isMobile && this.isLeftRightPane
    }, size: "24", name: this.icon }) : null, h("div", { key: "c39db2b899cd80cc04fd5ee8b2a6be3d9e31d8b8", class: "title-text-overflow" }, h("ix-typography", { key: "51bf92864892d1f39b949aaf33f418895f5a8723", format: "h4" }, this.heading)))), h("div", { key: "c15d4c6d9875a9e433a96ef4b813b127d7a1ffb3", class: "side-pane-content", hidden: !this.showContent }, h("slot", { key: "5df3005ed1b1c12d3536c573a0ae87347b31fe35" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isMobile": ["onMobileChange"],
      "composition": ["onPositionChange"],
      "hideOnCollapse": ["onHideOnCollapseChange"],
      "variant": ["onVariantChange"],
      "borderless": ["onBorderlessChange"],
      "expanded": ["onExpandedChange"],
      "parentHeightPx": ["onParentSizeChange"],
      "parentWidthPx": ["onParentSizeChange"],
      "size": ["onSizeChange"]
    };
  }
};
Pane.style = IxPaneStyle0;
export {
  Pane as ix_pane
};
