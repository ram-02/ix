'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const anime_es = require('./anime.es-8822f296.js');
const animation = require('./animation-dfe01edc.js');
const rwd_util = require('./rwd.util-482d41d4.js');

const animatedTabCss = ".sc-ix-animated-tab-h{display:block;height:100%;width:100%;position:absolute}";

const AnimatedTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
AnimatedTab.style = animatedTabCss;

const animatedTabsCss = ".sc-ix-animated-tabs-h{--animate-duration:300ms;display:flex;flex-direction:column;align-items:center;height:100%;width:100%;position:relative}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs{display:flex;padding:0;margin:0;position:relative}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs{display:flex;justify-content:center;width:5rem;height:4.5rem;cursor:pointer;padding-top:0.625rem}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.bottom.sc-ix-animated-tabs{padding-top:0.875rem}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs{background:var(--theme-animated-tab-circle--background);border:solid 1px var(--theme-animated-tab-circle--border-color);display:flex;align-items:center;justify-content:center;border-radius:6.25rem;width:3rem;height:3rem;position:relative;transition:150ms}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):hover{background:var(--theme-animated-tab-circle--background--hover);border-color:var(--theme-animated-tab-circle--border-color--hover)}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):hover ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--hover) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):active{background:var(--theme-animated-tab-circle--background--active);border-color:var(--theme-animated-tab-circle--border-color--active)}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):active ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--active) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.selected.sc-ix-animated-tabs{background:var(--theme-animated-tab-circle--background--selected);border-color:var(--theme-animated-tab-circle--border-color--selected) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.selected.sc-ix-animated-tabs ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--selected) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.selected.sc-ix-animated-tabs .count.sc-ix-animated-tabs{border-color:var(--theme-tab-pill--border-color--selected) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.disabled.sc-ix-animated-tabs ix-icon.sc-ix-animated-tabs,.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:disabled ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--disabled) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-focus--border-color) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs .count.sc-ix-animated-tabs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);display:flex;align-items:center;height:1rem;position:absolute;background-color:var(--theme-pill-outline--background);bottom:-0.55rem;border:1px solid var(--theme-tab-pill--border-color);border-radius:6.25rem;color:var(--theme-pill-outline--color);padding:0 0.25rem;background:var(--theme-color-1);transition:150ms}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs .count.bottom.sc-ix-animated-tabs{top:-0.55rem}.sc-ix-animated-tabs-h .content-container.sc-ix-animated-tabs{display:flex;flex-direction:row;height:calc(100% - 4.5rem);width:100%;overflow-y:auto;overflow-x:hidden}.sc-ix-animated-tabs-h .tab-active-underline.sc-ix-animated-tabs{background-color:var(--theme-animated-tab-indicator--background--selected);height:0.125rem;width:5rem;margin-top:-0.125rem;transition:150ms;position:absolute;top:4.5rem}.sc-ix-animated-tabs-h .tab-active-underline.bottom.sc-ix-animated-tabs{top:0;margin-top:0}";

const AnimatedTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabClick = index.createEvent(this, "tabClick", 7);
    /**
     * @deprecated - For debugging purposes only
     */
    this.disableAnimations = false;
    /**
     * Current selected tab index
     */
    this.selectedIndex = 0;
    /**
     * Placement of the tabs
     */
    this.tabPlacement = 'top';
    this.easing = 'easeInOutSine';
    this.firstRender = true;
  }
  onTabSelectionChange(newSelectionIndex, oldSelectionIndex) {
    this.updateTabAnimation(oldSelectionIndex, newSelectionIndex);
  }
  onMouseDown() {
    this.activeIndex = undefined;
  }
  get animatedTabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-animated-tab'));
  }
  get tabsContainer() {
    return this.hostElement.querySelector('.tabs-container');
  }
  get contentContainer() {
    return this.hostElement.querySelector('.content-container');
  }
  componentWillLoad() {
    this.tabs = this.animatedTabs;
  }
  componentDidLoad() {
    this.onTabSelectionChange(this.selectedIndex, -1);
    this.observer = new MutationObserver(() => {
      // Will trigger a re-render even if only the count attribute of a child tab changed
      this.tabs = this.animatedTabs;
    });
    this.observer.observe(this.contentContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['count'],
    });
  }
  //@ts-expect-error
  disconnectCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  isSelected(tab) {
    return this.tabs.indexOf(tab) === this.selectedIndex;
  }
  showTab(tab) {
    if (this.isSelected(tab)) {
      tab.classList.remove('d-none');
    }
  }
  hideTab(tab) {
    if (!this.isSelected(tab)) {
      tab.classList.add('d-none');
    }
  }
  slideOutLeft(tab) {
    if (this.disableAnimations) {
      this.hideTab(tab);
      return;
    }
    anime_es.anime({
      targets: tab,
      duration: animation.Animation.mediumTime,
      opacity: [1, 0],
      translateX: [0, '-100%'],
      easing: this.easing,
      complete: () => {
        this.hideTab(tab);
      },
    });
  }
  slideOutRight(tab) {
    if (this.disableAnimations) {
      this.hideTab(tab);
      return;
    }
    anime_es.anime({
      targets: tab,
      duration: animation.Animation.mediumTime,
      opacity: [1, 0],
      translateX: [0, '100%'],
      easing: this.easing,
      complete: () => {
        this.hideTab(tab);
      },
    });
  }
  slideInLeft(tab) {
    if (this.firstRender) {
      tab.classList.remove('d-none');
      this.firstRender = false;
      return;
    }
    if (this.disableAnimations) {
      this.showTab(tab);
      return;
    }
    anime_es.anime({
      targets: tab,
      duration: animation.Animation.mediumTime,
      opacity: [0, 1],
      translateX: ['-100%', 0],
      easing: this.easing,
      begin: () => {
        this.showTab(tab);
      },
    });
  }
  slideInRight(tab) {
    if (this.firstRender) {
      tab.classList.remove('d-none');
      this.firstRender = false;
      return;
    }
    if (this.disableAnimations) {
      this.showTab(tab);
      return;
    }
    anime_es.anime({
      targets: tab,
      duration: animation.Animation.mediumTime,
      opacity: [0, 1],
      translateX: ['100%', 0],
      easing: this.easing,
      begin: () => {
        this.showTab(tab);
      },
    });
  }
  updateTabAnimation(oldIndex, newIndex) {
    var _a;
    (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, tabIndex) => {
      if (tabIndex === oldIndex) {
        if (tabIndex < newIndex) {
          this.slideOutLeft(tab);
        }
        else if (tabIndex > newIndex) {
          this.slideOutRight(tab);
        }
      }
      else if (tabIndex === newIndex) {
        if (tabIndex < oldIndex) {
          this.slideInLeft(tab);
        }
        else if (tabIndex > oldIndex) {
          this.slideInRight(tab);
        }
      }
      else {
        tab.classList.add('d-none');
      }
    });
  }
  onTabClick(index) {
    this.selectedIndex = index;
    this.tabClick.emit(index);
  }
  onTabMouseDown(index) {
    this.activeIndex = index;
  }
  render() {
    return (index.h(index.Host, { class: { 'flex-column-reverse': this.tabPlacement === 'bottom' } }, index.h("ul", { class: "tabs-container" }, this.animatedTabs.map((element, index$1) => (index.h("li", { class: { bottom: this.tabPlacement === 'bottom' }, onClick: () => this.onTabClick(index$1), onMouseDown: () => this.onTabMouseDown(index$1) }, index.h("div", { class: {
        'tab-container': true,
        selected: this.selectedIndex === index$1,
      } }, index.h("ix-icon", { name: element.icon }), element.count ? (index.h("span", { class: {
        count: true,
        bottom: this.tabPlacement === 'bottom',
      } }, rwd_util.convertToAbbreviationString(element.count))) : (''))))), index.h("div", { class: {
        'tab-active-underline': true,
        bottom: this.tabPlacement === 'bottom',
      }, style: { 'margin-left': `calc(${this.selectedIndex} * 5rem)` } })), index.h("div", { class: "content-container" }, index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "selectedIndex": ["onTabSelectionChange"]
  }; }
};
AnimatedTabs.style = animatedTabsCss;

exports.ix_animated_tab = AnimatedTab;
exports.ix_animated_tabs = AnimatedTabs;
