/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * Cleanup Policy grid.
 *
 * @since 3.14
 */
Ext.define('NX.coreui.view.cleanuppolicy.CleanupPolicyList', {
  extend: 'NX.view.drilldown.Master',
  alias: 'widget.nx-coreui-cleanuppolicy-list',
  requires: [
    'NX.I18n'
  ],

  stateful: true,
  stateId: 'nx-coreui-cleanuppolicy-list',

  /**
   * @override
   */
  initComponent: function() {
    Ext.apply(this, {
      store: 'CleanupPolicies',

      columns: [
        {
          xtype: 'nx-iconcolumn',
          width: 36,
          iconVariant: 'x16',
          iconName: function () {
            return 'cleanuppolicy-default';
          }
        },
        { header: NX.I18n.get('CleanupPolicy_CleanupPolicyList_Name_Header'), dataIndex: 'name', stateId: 'name', flex: 1, renderer: Ext.htmlEncode },
        { header: NX.I18n.get('CleanupPolicy_CleanupPolicyList_Format_Header'), dataIndex: 'format', stateId: 'format', flex: 1, renderer: Ext.htmlEncode },
        { header: NX.I18n.get('CleanupPolicy_CleanupPolicyList_Notes_Header'), dataIndex: 'notes', stateId: 'notes', flex: 1, renderer: Ext.htmlEncode }
      ],

      viewConfig: {
        emptyText: NX.I18n.get('CleanupPolicy_CleanupPolicyList_EmptyState'),
        deferEmptyText: false
      },

      dockedItems: [{
        xtype: 'nx-actions',
        items: [
          {
            xtype: 'button',
            text: NX.I18n.get('CleanupPolicy_CleanupPolicyList_New_Button'),
            glyph: 'xf055@FontAwesome',
            action: 'new',
            disabled: true
          }
        ]
      }],

      plugins: [
        { ptype: 'gridfilterbox', emptyText: NX.I18n.get('CleanupPolicy_CleanupPolicyList_Filter_EmptyState') }
      ]
    });

    this.callParent();
  }
});
