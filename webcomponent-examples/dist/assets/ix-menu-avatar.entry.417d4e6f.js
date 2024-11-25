import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.2bfd6008.js";
import { g as getSlottedElements } from "./shadow-dom-cc0bc152.fe0cdd32.js";
const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--theme-default-time);border-radius:1.25rem}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const IxMenuAvatarStyle0 = menuAvatarCss;
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
    this.avatarElementId = "ix-menu-avatar-id";
    this.top = void 0;
    this.bottom = void 0;
    this.image = void 0;
    this.initials = void 0;
    this.i18nLogout = "Logout";
    this.showLogoutButton = true;
    this.showContextMenu = false;
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
  }
  render() {
    return h(Host, { key: "c1fa0cee8afddf06bb3d3920d395305a9b911b3c", slot: "ix-menu-avatar" }, h("button", { key: "5012c1e35df4627a9fddb131f545f6e35042250c", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "2a1d4585720d023caeb9a008ee779537fca91715", image: this.image, initials: this.initials }), h("div", { key: "de59499988b75887263c47c4d9612e8ec7ad3e9d", class: "avatar-name" }, h("span", { key: "7f824012aacf351597139c302ffccaf45df95d22", class: "text-default-single", title: this.top }, this.top), h("span", { key: "8f5d667ac1a6c82c1fd3a30994202457ee007c5a", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "5345172d53852effd5bd360122079476c3894e24", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "5ded6f40210ba408b6dd2313568c700f5cb56797", onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? h("ix-menu-avatar-item", { label: this.i18nLogout, icon: "log-out", onClick: (e) => {
      this.logoutClick.emit(e);
    } }) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatar.style = IxMenuAvatarStyle0;
export {
  MenuAvatar as ix_menu_avatar
};
