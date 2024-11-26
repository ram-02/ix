'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type IxInputCustomEvent } from "@siemens/ix";
import { IxInput as IxInputElement, defineCustomElement as defineIxInput } from "@siemens/ix/components/ix-input.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxInputEvents = {
    onValueChange: EventName<CustomEvent<string>>,
    onValidityStateChange: EventName<IxInputCustomEvent<ValidityState>>,
    onIxBlur: EventName<CustomEvent<void>>
};

const IxInput: StencilReactComponent<IxInputElement, IxInputEvents> = /*@__PURE__*/ createComponent<IxInputElement, IxInputEvents>({
    tagName: 'ix-input',
    elementClass: IxInputElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onValueChange: 'valueChange',
        onValidityStateChange: 'validityStateChange',
        onIxBlur: 'ixBlur'
    } as IxInputEvents,
    defineCustomElement: defineIxInput
});

export default IxInput;
