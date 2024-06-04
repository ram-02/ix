import {
  Component,
  Element,
  EventEmitter,
  Host,
  Event,
  Listen,
  Prop,
  State,
  h,
  Watch,
} from '@stencil/core';
import {
  ValidationResults,
  HookValidationLifecycle,
  FieldWrapperInterface,
  IxFormValidationState,
} from '../utils/field';

@Component({
  tag: 'ix-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true,
})
export class RadiobuttonGroup
  implements FieldWrapperInterface, IxFormValidationState
{
  @Element() hostElement: HTMLIxRadioGroupElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * Value of the radiobutton group component
   */
  @Prop() value: string;

  /**
   * Error text for the field component
   */
  @Prop() errorText: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * Event emitted when the value of the radiobutton group changes
   */
  @Event() valueChange!: EventEmitter<string>;

  @State() isInvalid: boolean;
  @State() isValid: boolean;
  @State() isInfo: boolean;
  @State() isWarning: boolean;

  showTextBehind = false;

  private observer = new MutationObserver(() => {
    this.ensureOnlyLastRadioChecked();
  });

  private get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll('ix-radio'));
  }

  connectedCallback(): void {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked'],
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private selectInitialValue() {
    if (!this.value) {
      return;
    }
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === this.value;
    });
  }

  private ensureOnlyLastRadioChecked() {
    const checkedRadios = this.radiobuttonElements.filter(
      (radio) => radio.checked
    );
    checkedRadios.forEach((radio, index) => {
      if (index === checkedRadios.length - 1) {
        return;
      }
      radio.checked = false;
    });
  }

  @Watch('value')
  onValueChangeHandler(newValue: string) {
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === newValue;
    });
  }

  @Listen('checkedChange')
  onCheckedChangeHandler(event: CustomEvent<boolean>) {
    this.radiobuttonElements.forEach((radiobutton) => {
      if (radiobutton !== event.target) {
        radiobutton.checked = false;
        return;
      }
      radiobutton.checked = true;
      this.valueChange.emit(radiobutton.value);
    });
  }

  @HookValidationLifecycle({
    includeChildren: true,
  })
  onClassField({ isInvalid, isInfo, isValid, isWarning }: ValidationResults) {
    this.isInvalid = isInvalid;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }

  render() {
    return (
      <Host>
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          errorText={this.errorText}
          infoText={this.infoText}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          showTextBehind={this.showTextBehind}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          isInvalid={this.isInvalid}
        >
          <div class={'checkbox-container'}>
            <slot></slot>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}