const { 
  Text,
  Relationship,
  Url,
} = require('@keystonejs/fields');

exports.Pages = {
  access: true,
  fields: {
    name: { type: Text },
    title: { type: Text },
    cta_link: { type: Url },
    blocks: {
      type: Relationship,
      ref: 'Block.page',
      many: true
    }
  }
}
