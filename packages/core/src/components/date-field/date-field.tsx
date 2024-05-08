/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { dropdownController } from '../dropdown/dropdown-controller';
import { IxFieldComponent } from '../utils/field';
import { makeRef } from '../utils/make-ref';

export type ClassMutationObserver = {
  destroy: () => void;
};

function createClassMutationObserver(
  element: HTMLElement,
  callback: () => void
): ClassMutationObserver {
  const observer = new MutationObserver(callback);
  observer.observe(element, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

@Component({
  tag: 'ix-date-field',
  styleUrl: 'date-field.scss',
  shadow: true,
  formAssociated: true,
})
export class DateField implements IxFieldComponent {
  @Element() hostElement: HTMLIxDateFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * tbd
   */
  @Prop({ reflect: true }) name: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * tbd
   */
  @Prop({ reflect: true, mutable: true }) value: any;

  /**
   * Date format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * tbd
   */
  @Prop() required: boolean;

  /**
   * tbd
   */
  @Prop() helperText: string;

  /**
   * tbd
   */
  @Prop() label: string;

  /** @internal */
  @Prop() combineDateStart = false;

  /** @internal */
  @Prop() combineDateEnd = false;

  /**
   * tbd
   */
  @Prop({ reflect: true }) errorText: string;

  /**
   * tbd
   */
  @Event() valueChanged: EventEmitter<string>;

  /** @internal */
  @Event() ixFocus: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur: EventEmitter<void>;

  @State() show = false;
  @State() from: string;
  @State() isInputInvalid = false;
  @State() isInvalid = false;

  @State() focus = false;

  private inputElementRef = makeRef<HTMLInputElement>();
  private dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  private classObserver: ClassMutationObserver;
  /**
   * tbd
   */
  updateFormInternalValue(value: any): void {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  connectedCallback(): void {
    this.classObserver = createClassMutationObserver(this.hostElement, () =>
      this.checkClassList()
    );
  }

  componentWillLoad(): void {
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }

    this.checkClassList();
  }

  disconnectedCallback(): void {
    if (this.classObserver) {
      this.classObserver.destroy();
    }
  }

  @Watch('value')
  watchValue() {
    this.from = this.value;
  }

  async onInput(value: string) {
    if (DateTime.fromFormat(value, this.format).isValid) {
      this.isInputInvalid = false;

      this.updateFormInternalValue(value);
      this.valueChanged.emit(value);

      this.closeDropdown();
    } else {
      this.isInputInvalid = true;
    }
  }

  async openDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    dropdownController.dismissAll();
    dropdownController.present(dropdownController.getDropdownById(id));
  }

  async closeDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    if (id) {
      dropdownController.dismiss(dropdownController.getDropdownById(id));
    }
  }

  private checkClassList() {
    this.isInvalid = this.hostElement.classList.contains('ix-invalid');
  }

  render() {
    return (
      <Host>
        <ix-helper-text-wrapper
          helperText={this.helperText}
          label={this.label}
          isInvalid={this.isInvalid}
          errorText={this.errorText}
        >
          <input
            class={{
              'is-invalid': this.isInputInvalid,
              'combine-start': this.combineDateStart,
              'combine-end': this.combineDateEnd,
            }}
            required={this.required}
            ref={this.inputElementRef}
            type="text"
            value={this.value}
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              this.onInput(target.value);
            }}
            onClick={(event) => {
              if (this.show) {
                event.stopPropagation();
                event.preventDefault();
              }
            }}
            onFocus={async () => {
              this.openDropdown();
              this.ixFocus.emit();
            }}
            onBlur={() => this.ixBlur.emit()}
          ></input>
        </ix-helper-text-wrapper>
        <ix-dropdown
          trigger={this.inputElementRef.waitForCurrent()}
          ref={this.dropdownElementRef}
          closeBehavior="outside"
          show={this.show}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
        >
          <ix-date-picker
            format={this.format}
            range={false}
            from={this.from}
            onDateChange={(event) => {
              const { from } = event.detail;
              this.onInput(from);
            }}
          ></ix-date-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
