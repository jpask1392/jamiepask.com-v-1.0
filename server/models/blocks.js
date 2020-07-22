const { 
  Text,
  Relationship,
  Integer
} = require('@keystonejs/fields');

exports.Blocks = {
  access: true,
  fields: {
    onpage: { type: Text },
    order: { 
      type: Integer,
    },
    // connect page the block list relates to
    page: {
      type: Relationship,
      ref: 'Page.blocks',
      many: false,
    },
    grid_layout: {
      type: Relationship,
      ref: 'Grid_layout.blockOrder',
      many: false,
    },
    standard_layout: {
      type: Relationship,
      ref: 'Standard_layout.blockOrder',
      many: false,
    },
    featured_project_layout: {
      type: Relationship,
      ref: 'Featured_projects_layout.blockOrder',
      many: false,
    },
    two_column_layout: {
      type: Relationship,
      ref: 'TwoColumn.blockOrder',
      many: false,
    },
  },
  labelResolver: item => `${item.onpage}_section_${item.order}`
}
