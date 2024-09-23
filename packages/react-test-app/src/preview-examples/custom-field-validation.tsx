/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCustomField, IxFieldLabel } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxFieldLabel htmlFor="first-name">First name</IxFieldLabel>
        <IxCustomField valid-text="Valid first name">
          <input id="first-name" className="ix-valid" value="Jane"></input>
        </IxCustomField>
      </div>

      <div>
        <IxFieldLabel htmlFor="last-name">Last name</IxFieldLabel>
        <IxCustomField info-text="Family name">
          <input id="last-name" className="ix-info" value="Doe"></input>
        </IxCustomField>
      </div>

      <div>
        <IxFieldLabel htmlFor="email">Email</IxFieldLabel>
        <IxCustomField warning-text="Not a valid email address">
          <input id="email" className="ix-warning" value="info@"></input>
        </IxCustomField>
      </div>

      <div>
        <IxFieldLabel htmlFor="address">Address</IxFieldLabel>
        <IxCustomField invalid-text="Required">
          <input id="address" className="ix-invalid"></input>
        </IxCustomField>
      </div>
    </>
  );
};