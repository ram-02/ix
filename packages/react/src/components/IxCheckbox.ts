'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxCheckbox as IxCheckboxElement, defineCustomElement as defineIxCheckbox } from "@siemens/ix/components/ix-checkbox.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxCheckboxEvents = {
    onCheckedChange: EventName<CustomEvent<boolean>>,
    onValueChange: EventName<CustomEvent<string>>
};

const IxCheckbox: StencilReactComponent<IxCheckboxElement, IxCheckboxEvents> = /*@__PURE__*/ createComponent<IxCheckboxElement, IxCheckboxEvents>({
    tagName: 'ix-checkbox',
    elementClass: IxCheckboxElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onCheckedChange: 'checkedChange',
        onValueChange: 'valueChange'
    } as IxCheckboxEvents,
    defineCustomElement: defineIxCheckbox
});

export default IxCheckbox;
