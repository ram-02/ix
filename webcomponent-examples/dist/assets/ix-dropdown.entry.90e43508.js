import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.2b5e1098.js";
import { i as inline, s as shift, o as offset, a as autoUpdate, f as flip, c as computePosition } from "./floating-ui.dom.esm-cbe44820.60534149.js";
function hasDropdownItemWrapperImplemented(item) {
  return item.getDropdownItemElement !== void 0 && typeof item.getDropdownItemElement === "function";
}
class DropdownController {
  constructor() {
    this.dropdowns = /* @__PURE__ */ new Map();
    this.submenuIds = {};
    this.isWindowListenerActive = false;
  }
  connected(dropdown) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.dropdowns.set(dropdown.getId(), dropdown);
    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }
  disconnected(dropdown) {
    this.dropdowns.delete(dropdown.getId());
  }
  discoverSubmenus() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }
  present(dropdown) {
    if (!dropdown.isPresent() && dropdown.willPresent()) {
      this.submenuIds[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
      dropdown.present();
    }
  }
  dismissChildren(uid) {
    const childIds = this.submenuIds[uid] || [];
    for (const id of childIds) {
      this.dismiss(this.dropdowns.get(id));
    }
  }
  dismiss(dropdown) {
    if (dropdown.isPresent() && dropdown.willDismiss()) {
      this.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      delete this.submenuIds[dropdown.getId()];
    }
  }
  dismissAll(includeUids) {
    this.dropdowns.forEach((dropdown) => {
      if (!(includeUids === null || includeUids === void 0 ? void 0 : includeUids.includes(dropdown.getId())) && (dropdown.closeBehavior === "inside" || dropdown.closeBehavior === false)) {
        return;
      }
      this.dismiss(dropdown);
    });
  }
  dismissOthers(uid) {
    let path = this.buildComposedPath(uid, /* @__PURE__ */ new Set());
    this.dropdowns.forEach((dropdown) => {
      if (dropdown.isPresent() && dropdown.closeBehavior !== "inside" && dropdown.closeBehavior !== false && !path.has(dropdown.getId())) {
        this.dismiss(dropdown);
      }
    });
  }
  pathIncludesTrigger(eventTargets) {
    return !!eventTargets.find((element) => {
      var _a;
      return !!((_a = element.hasAttribute) === null || _a === void 0 ? void 0 : _a.call(element, "data-ix-dropdown-trigger"));
    });
  }
  pathIncludesDropdown(eventTargets) {
    return !!eventTargets.find((element) => element.tagName === "IX-DROPDOWN");
  }
  buildComposedPath(id, path) {
    if (this.submenuIds[id]) {
      path.add(id);
    }
    for (const ruleKey of Object.keys(this.submenuIds)) {
      if (this.submenuIds[ruleKey].includes(id)) {
        this.buildComposedPath(ruleKey, path).forEach((key) => path.add(key));
      }
    }
    return path;
  }
  addOverlayListeners() {
    this.isWindowListenerActive = true;
    window.addEventListener("click", (event) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasDropdown = this.pathIncludesDropdown(event.composedPath());
      if (!hasTrigger && !hasDropdown) {
        this.dismissAll();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.dismissAll([...this.dropdowns.keys()]);
      }
    });
  }
}
const addDisposableEventListener = (element, eventType, callback) => {
  element.addEventListener(eventType, callback);
  return () => {
    element.removeEventListener(eventType, callback);
  };
};
const dropdownController = new DropdownController();
const dropdownCss = ":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}";
const IxDropdownStyle0 = dropdownCss;
let sequenceId = 0;
const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showChanged = createEvent(this, "showChanged", 7);
    this.autoUpdateCleanup = null;
    this.localUId = `dropdown-${sequenceId++}`;
    this.assignedSubmenu = [];
    this.suppressAutomaticPlacement = false;
    this.show = false;
    this.trigger = void 0;
    this.anchor = void 0;
    this.closeBehavior = "both";
    this.placement = "bottom-start";
    this.positioningStrategy = "fixed";
    this.header = void 0;
    this.offset = void 0;
    this.overwriteDropdownStyle = void 0;
    this.discoverAllSubmenus = false;
  }
  connectedCallback() {
    dropdownController.connected(this);
  }
  cacheSubmenuId(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    const { detail } = event;
    if (this.assignedSubmenu.indexOf(detail) === -1) {
      this.assignedSubmenu.push(detail);
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.disposeListener) === null || _a === void 0 ? void 0 : _a.call(this);
    dropdownController.disconnected(this);
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }
  getAssignedSubmenuIds() {
    return this.assignedSubmenu;
  }
  isPresent() {
    return this.show;
  }
  present() {
    this.show = true;
  }
  dismiss() {
    this.show = false;
  }
  getId() {
    return this.localUId;
  }
  willDismiss() {
    const { defaultPrevented } = this.showChanged.emit(false);
    return !defaultPrevented;
  }
  willPresent() {
    const { defaultPrevented } = this.showChanged.emit(true);
    return !defaultPrevented;
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  get slotElement() {
    return this.hostElement.shadowRoot.querySelector("slot");
  }
  addEventListenersFor() {
    var _a;
    (_a = this.disposeListener) === null || _a === void 0 ? void 0 : _a.call(this);
    const toggleController = () => {
      if (!this.isPresent()) {
        dropdownController.present(this);
      } else {
        dropdownController.dismiss(this);
      }
      dropdownController.dismissOthers(this.getId());
    };
    this.disposeListener = addDisposableEventListener(this.triggerElement, "click", (event) => {
      if (!event.defaultPrevented)
        toggleController();
    });
    this.triggerElement.setAttribute("data-ix-dropdown-trigger", this.localUId);
  }
  async discoverSubmenu() {
    var _a;
    (_a = this.triggerElement) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("ix-assign-sub-menu", {
      bubbles: true,
      composed: false,
      cancelable: true,
      detail: this.localUId
    }));
  }
  async registerListener(element) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();
      this.discoverSubmenu();
    }
  }
  async resolveElement(element) {
    const el = await this.findElement(element);
    return this.checkForSubmenuAnchor(el);
  }
  async checkForSubmenuAnchor(element) {
    if (hasDropdownItemWrapperImplemented(element)) {
      const dropdownItem = await element.getDropdownItemElement();
      dropdownItem.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
      return dropdownItem;
    }
    if (element.tagName === "IX-DROPDOWN-ITEM") {
      element.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
    }
    return element;
  }
  findElement(element) {
    if (element instanceof Promise) {
      return element;
    }
    if (typeof element === "object") {
      return Promise.resolve(element);
    }
    const selector = `#${element}`;
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
  async changedShow(newShow) {
    if (newShow) {
      this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
      if (this.anchorElement) {
        this.applyDropdownPosition();
      }
    }
  }
  changedTrigger(newTriggerValue) {
    this.registerListener(newTriggerValue);
  }
  isAnchorSubmenu() {
    var _a;
    if (!hasDropdownItemWrapperImplemented(this.anchorElement)) {
      return !!((_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.closest("ix-dropdown-item"));
    }
    return true;
  }
  async applyDropdownPosition() {
    if (!this.anchorElement) {
      return;
    }
    if (!this.dropdownRef) {
      return;
    }
    const isSubmenu = this.isAnchorSubmenu();
    let positionConfig = {
      strategy: this.positioningStrategy,
      middleware: []
    };
    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware.push(flip({ fallbackStrategy: "initialPlacement" }));
    }
    positionConfig.placement = isSubmenu ? "right-start" : this.placement;
    positionConfig.middleware = [
      ...positionConfig.middleware,
      inline(),
      shift()
    ];
    if (this.offset) {
      positionConfig.middleware.push(offset(this.offset));
    }
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = null;
    }
    this.autoUpdateCleanup = autoUpdate(this.anchorElement, this.dropdownRef, async () => {
      const computeResponse = await computePosition(this.anchorElement, this.dropdownRef, positionConfig);
      Object.assign(this.dropdownRef.style, {
        top: "0",
        left: "0",
        transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`
      });
      if (this.overwriteDropdownStyle) {
        const overwriteStyle = await this.overwriteDropdownStyle({
          dropdownRef: this.dropdownRef,
          triggerRef: this.triggerElement
        });
        Object.assign(this.dropdownRef.style, overwriteStyle);
      }
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  async componentDidLoad() {
    this.changedTrigger(this.trigger);
  }
  async componentDidRender() {
    await this.applyDropdownPosition();
    this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
  }
  isTriggerElement(element) {
    const trigger = !!element.hasAttribute("data-ix-dropdown-trigger");
    return trigger;
  }
  onDropdownClick(event) {
    if (dropdownController.pathIncludesTrigger(event.composedPath())) {
      event.preventDefault();
      if (this.isTriggerElement(event.target))
        return;
    }
    if (this.closeBehavior === "inside" || this.closeBehavior === "both") {
      dropdownController.dismissAll([this.getId()]);
    }
    dropdownController.dismissOthers(this.getId());
  }
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    return h(Host, { key: "6747db1bc7c303781400a3ede0635fc84a32d61b", "data-ix-dropdown": this.localUId, ref: (ref) => this.dropdownRef = ref, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: true
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { key: "3407be8208d5fb220b80744afb9a5aa938b4b658", style: { display: "contents" } }, this.header && h("div", { class: "dropdown-header" }, this.header), h("slot", { key: "48df3c460330d7ef698b1624d93ad548e95902d0" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "show": ["changedShow"],
      "trigger": ["changedTrigger"]
    };
  }
};
Dropdown.style = IxDropdownStyle0;
export {
  Dropdown as ix_dropdown
};
