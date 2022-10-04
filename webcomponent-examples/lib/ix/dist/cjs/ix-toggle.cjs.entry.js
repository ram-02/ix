'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const toggleCss = ".sc-ix-toggle-h{display:flex;align-items:center;outline:none}.sc-ix-toggle-h .switch.sc-ix-toggle{position:relative;display:inline-flex;align-items:center;min-width:3rem;height:2rem}.sc-ix-toggle-h .switch.sc-ix-toggle:not(.disabled):not(:disabled):focus-visible{outline-color:var(--focus--border-color);outline-style:solid;outline-width:1px}.sc-ix-toggle-h .switch.sc-ix-toggle input.sc-ix-toggle{opacity:0;width:0;height:0}.sc-ix-toggle-h .slider.sc-ix-toggle{display:flex;align-items:center;justify-content:center;position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0}.sc-ix-toggle-h .slider.sc-ix-toggle .slider-track.sc-ix-toggle{background-color:var(--theme-switch-off--background);border-radius:2.125rem;border:1px solid var(--theme-switch-off--border-color);width:2.5rem;height:1rem}.sc-ix-toggle-h .slider.sc-ix-toggle:before{position:absolute;content:\"\";height:1.5rem;width:1.5rem;left:0.125rem;background-color:var(--theme-switch-thumb-off--background);transition:transform 150ms;border-radius:50%;border:1px solid var(--theme-switch-thumb-off--border-color);box-shadow:var(--theme-switch-thumb--box-shadow)}.sc-ix-toggle-h input.sc-ix-toggle:checked+.slider.sc-ix-toggle:before{transform:translateX(1.125rem);left:0.25rem}.sc-ix-toggle-h .text.sc-ix-toggle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-switch--color);padding:0 0.5rem;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sc-ix-toggle-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-off--background--hover);border-color:var(--theme-switch-thumb-off--border-color--hover)}.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .slider-track.sc-ix-toggle{background-color:var(--theme-switch-off--background--hover);border-color:var(--theme-switch-off--border-color--hover)}.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .text.sc-ix-toggle{color:var(--theme-switch--color--hover)}.sc-ix-toggle-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-toggle-h:not(.disabled):not(:disabled):active .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-off--background--active);border-color:var(--theme-switch-thumb-off--border-color--active)}.sc-ix-toggle-h:not(.disabled):not(:disabled):active .slider-track.sc-ix-toggle{background-color:var(--theme-switch-off--background--active);border-color:var(--theme-switch-off--border-color--active)}.sc-ix-toggle-h:not(.disabled):not(:disabled):active .text.sc-ix-toggle{color:var(--theme-switch--color--active)}.checked.sc-ix-toggle-h .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-on--background);border-color:var(--theme-switch-thumb-on--border-color)}.checked.sc-ix-toggle-h .slider.sc-ix-toggle .slider-track.sc-ix-toggle{background-color:var(--theme-switch-on--background);border-color:var(--theme-switch-on--border-color)}.checked.sc-ix-toggle-h .text.sc-ix-toggle{color:var(--theme-switch--color)}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled){cursor:pointer}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-on--background--hover);border-color:var(--theme-switch-thumb-on--border-color--hover)}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .slider.sc-ix-toggle .slider-track.sc-ix-toggle{background-color:var(--theme-switch-on--background--hover);border-color:var(--theme-switch-on--border-color--hover)}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .text.sc-ix-toggle{color:var(--theme-switch--color--hover)}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled){cursor:pointer}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled):active .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-on--background--active);border-color:var(--theme-switch-thumb-on--border-color--active)}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled):active .slider-track.sc-ix-toggle{background-color:var(--theme-switch-on--background--active);border-color:var(--theme-switch-on--border-color--active)}.checked.sc-ix-toggle-h:not(.disabled):not(:disabled):active .text.sc-ix-toggle{color:var(--theme-switch--color--active)}.indeterminate.sc-ix-toggle-h .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-mixed--background);border-color:var(--theme-switch-thumb-mixed--border-color)}.indeterminate.sc-ix-toggle-h .slider.sc-ix-toggle .slider-track.sc-ix-toggle{background-color:var(--theme-switch-mixed--background);border-color:var(--theme-switch-mixed--border-color)}.indeterminate.sc-ix-toggle-h .text.sc-ix-toggle{color:var(--theme-switch--color)}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled){cursor:pointer}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-mixed--background--hover);border-color:var(--theme-switch-thumb-mixed--border-color--hover)}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .slider.sc-ix-toggle .slider-track.sc-ix-toggle{background-color:var(--theme-switch-mixed--background--hover);border-color:var(--theme-switch-mixed--border-color--hover)}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled):hover .text.sc-ix-toggle{color:var(--theme-switch--color--hover)}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled){cursor:pointer}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled):active .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-mixed--background--active);border-color:var(--theme-switch-thumb-mixed--border-color--active)}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled):active .slider-track.sc-ix-toggle{background-color:var(--theme-switch-mixed--background--active);border-color:var(--theme-switch-mixed--border-color--active)}.indeterminate.sc-ix-toggle-h:not(.disabled):not(:disabled):active .text.sc-ix-toggle{color:var(--theme-switch--color--active)}.indeterminate.sc-ix-toggle-h .slider.sc-ix-toggle:before{transform:translateX(0.625rem)}[disabled].sc-ix-toggle-h .slider.sc-ix-toggle,.disabled.sc-ix-toggle-h .slider.sc-ix-toggle{cursor:initial}[disabled].sc-ix-toggle-h .slider.sc-ix-toggle:before,.disabled.sc-ix-toggle-h .slider.sc-ix-toggle:before{background-color:var(--theme-switch-thumb-off--background--disabled);border-color:var(--theme-switch-thumb-off--border-color--disabled)}[disabled].sc-ix-toggle-h .slider.sc-ix-toggle .slider-track.sc-ix-toggle,.disabled.sc-ix-toggle-h .slider.sc-ix-toggle .slider-track.sc-ix-toggle{background-color:var(--theme-switch-off--background--disabled);border-color:var(--theme-switch-off--border-color--disabled)}[disabled].sc-ix-toggle-h .text.sc-ix-toggle,.disabled.sc-ix-toggle-h .text.sc-ix-toggle{color:var(--theme-switch--color--disabled)}";

const CuiToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.checkedChange = index.createEvent(this, "checkedChange", 7);
    /**
     * Whether the slide-toggle element is checked or not.
     */
    this.checked = false;
    /**
     * Whether the slide-toggle element is disabled or not.
     */
    this.disabled = false;
    /**
     * If true the control is in indeterminate state
     */
    this.indeterminate = false;
    /**
     * Basic and status colors from color palette
     * @deprecated - Has no effect on the rendered control
     */
    this.color = 'accent';
    /**
     * Text for on state
     */
    this.textOn = 'On';
    /**
     * Text for off state
     */
    this.textOff = 'Off';
    /**
     * Text for indeterminate state
     */
    this.textIndeterminate = 'Mixed';
    /**
     * Hide `on` and `off` text
     */
    this.hideText = false;
  }
  async onKeyDown(event) {
    const targetElement = event.target;
    if (!this.hostElement.contains(targetElement)) {
      return;
    }
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.emitChange(event);
    }
  }
  emitChange(event) {
    if (this.disabled || this.indeterminate) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
  getText() {
    if (this.indeterminate || this.checked === undefined) {
      return this.textIndeterminate;
    }
    return this.checked ? this.textOn : this.textOff;
  }
  render() {
    return (index.h(index.Host, { class: {
        disabled: this.disabled,
        checked: this.checked,
        indeterminate: this.indeterminate || this.checked === undefined,
      } }, index.h("label", { class: "switch", tabindex: this.disabled ? -1 : 0 }, index.h("input", { tabindex: "-1", type: "checkbox", checked: this.checked, disabled: this.disabled, indeterminate: this.indeterminate || this.checked === undefined, id: this.hostElement.id, onChange: (e) => this.emitChange(e) }), index.h("span", { class: "slider" }, index.h("span", { class: "slider-track" }))), !this.hideText ? (index.h("span", { title: this.getText(), class: "text", onClick: (e) => this.emitChange(e) }, this.getText())) : null));
  }
  get hostElement() { return index.getElement(this); }
};
CuiToggle.style = toggleCss;

exports.ix_toggle = CuiToggle;