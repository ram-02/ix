/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxDateField value="1970/01/01" readonly></IxDateField>
    </>
  );
};