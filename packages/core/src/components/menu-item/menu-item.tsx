/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';

/**
 * @slot menu-item-label Custom label
 */
@Component({
  tag: 'ix-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true,
})
export class MenuItem {
  /**
   * Move the Tab to a top position.
   */
  @Prop() home = false;

  /**
   * Caution: this is no longer working. Please use slot="bottom" instead.
   *
   * Place tab on bottom
   */
  @Prop() bottom = false;

  /**
   * Name of the icon you want to display. Icon names can be resolved from the documentation @link https://ix.siemens.io/docs/icon-library/icons
   *
   * @deprecated since 2.0.0 use `icon` property. Will be removed in 3.0.0
   */
  @Prop({ mutable: true }) tabIcon: string;

  /**
   * Name of the icon you want to display. Icon names can be resolved from the documentation @link https://ix.siemens.io/docs/icon-library/icons
   */
  @Prop({ mutable: true }) icon: string;

  /**
   * Show notification count on tab
   */
  @Prop() notifications: number;

  /**
   * State to display active
   */
  @Prop() active: boolean;

  /**
   * Disable tab and remove event handlers
   */
  @Prop() disabled: boolean;

  @Element() hostElement: HTMLIxMenuItemElement;

  @State() title: string;

  private observer: MutationObserver;
  private isHostedInsideCategory = false;

  componentWillLoad() {
    this.isHostedInsideCategory =
      !!this.hostElement.closest('ix-menu-category');

    this.onIconChange();
    this.onTabIconChange();
  }

  componentWillRender() {
    this.title = this.hostElement.innerText;
  }

  connectedCallback() {
    this.observer = createMutationObserver(() => {
      this.title = this.hostElement.innerText;
    });

    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @Watch('icon')
  onIconChange() {
    if (
      !this.isHostedInsideCategory &&
      !this.hostElement.icon &&
      !this.hostElement.tabIcon
    ) {
      this.icon = 'document';
    }
  }

  @Watch('tabIcon')
  onTabIconChange() {
    if (
      !this.isHostedInsideCategory &&
      !this.hostElement.icon &&
      !this.hostElement.tabIcon
    ) {
      this.tabIcon = 'document';
    }
  }

  render() {
    let extendedAttributes = {};
    if (this.home) {
      extendedAttributes = {
        slot: 'home',
      };
    }

    if (this.bottom) {
      extendedAttributes = {
        slot: 'bottom',
      };
    }
    return (
      <Host
        class={{
          disabled: this.disabled,
          'home-tab': this.home,
          'bottom-tab': this.bottom,
          active: this.active,
          'tab-nested': this.isHostedInsideCategory,
        }}
        {...extendedAttributes}
      >
        <button
          class="tab"
          title={this.title}
          tabIndex={this.disabled ? -1 : 0}
          role="listitem"
        >
          {(this.icon || this.tabIcon) && (
            <ix-icon
              class={'tab-icon'}
              name={this.icon ?? this.tabIcon}
            ></ix-icon>
          )}
          {this.notifications ? (
            <div class="notification">
              <div class="pill">{this.notifications}</div>
            </div>
          ) : null}
          <span class="tab-text text-default">
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
