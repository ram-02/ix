/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function renderDefaultItem(item, context, update) {
  const el = document.createElement('ix-tree-item');
  el.hasChildren = item.hasChildren;
  el.context = context;
  el.text = item.data.name;
  update((updateTreeItem) => {
    el.text = updateTreeItem.data.name;
  });
  return el;
}