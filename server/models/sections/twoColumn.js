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
  Select,
  Url,
  Checkbox
} = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

exports.TwoColumn = {
  access: true,
  labelResolver: item => (
    `two_column_${item.id}`
  ),
  fields: {
    blockOrder: {
      type: Relationship,
      ref: 'Block.two_column_layout',
      many: false
    },
    title: { 
      type: Text 
    },
    asymmetric: { type: Checkbox },
    column_1: { type: Markdown },
    column_2: { type: Markdown },
    linkButton: { type: Url },
    contentWidth: {
      type: Select, 
      options: 'md, lg'
    },
    classNames: { 
      type: Text 
    }
  },
}
