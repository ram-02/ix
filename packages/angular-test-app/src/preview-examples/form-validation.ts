/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DateFieldValidityState } from '@siemens/ix';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

@Component({
  selector: 'app-example',
  templateUrl: `./form-validation.html`,
})
export default class FormValidation implements OnInit, OnDestroy {
  parentsErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  warningChildren = false;

  exampleForm = new FormGroup({
    name: new FormControl('John', [Validators.required]),
    'last-name': new FormControl('Muster', [Validators.required]),
    address: new FormControl('John Street 14', [Validators.required]),
    parents: new FormControl(6, [Validators.required, Validators.max(5)]),
    children: new FormControl(4, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.warningChildren = !!value.children && value.children > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['parents'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['parents'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.parentsErrorText = 'The number of parents must be less than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}