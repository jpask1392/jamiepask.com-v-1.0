/**
 * Layout Schema
 * 
 * NOTES* 
 * block_order field must stay. It controls the order 
 * of the sections in the blocks.js schema
 */

const { 
  Text,
  Relationship,
  Select
} = require('@keystonejs/fields');

exports.Standard_layout = {
  access: true,
  labelResolver: item => (
    `standard_layout_${item.id}`
  ),
  fields: {
    title: { type: Text },
    blockOrder: {
      type: Relationship,
      ref: 'Block.standard_layout',
      many: false
    },
    contentWidth: {
      type: Select, 
      options: 'md, lg'
    },
    classNames: {
      type: Text
    },
  }
}
