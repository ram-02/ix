/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/application.css';

import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuAbout>
          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
        </IxMenuAbout>
        <IxMenuAboutNews label="Test" show about-item-label="Example">
          Test
        </IxMenuAboutNews>
      </IxMenu>
    </IxApplication>
  );
};
