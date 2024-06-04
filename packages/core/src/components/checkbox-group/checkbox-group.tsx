import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import {
  FieldWrapperInterface,
  HookValidationLifecycle,
  IxFormValidationState,
  ValidationResults,
} from '../utils/field';

@Component({
  tag: 'ix-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
})
export class CheckboxGroup
  implements FieldWrapperInterface, IxFormValidationState
{
  @Element() hostElement: HTMLIxCheckboxGroupElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * Error text for the field component
   */
  @Prop() errorText: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;
  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;
  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  showTextAsTooltip = false;
  showTextBehind = false;

  @State() isInvalid = false;
  @State() isInfo = false;
  @State() isValid = false;
  @State() isWarning = false;

  @HookValidationLifecycle({
    includeChildren: true,
  })
  onClassFieldUpdate({
    isInvalid,
    isInvalidByRequired,
    isInfo,
    isValid,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
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
          validText={this.validText}
          warningText={this.warningText}
          showTextAsTooltip={this.showTextAsTooltip}
          showTextBehind={this.showTextBehind}
          isInvalid={this.isInvalid}
          isInfo={this.isInfo}
          isValid={this.isValid}
          isWarning={this.isWarning}
        >
          <div class={'checkbox-container'}>
            <slot></slot>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}