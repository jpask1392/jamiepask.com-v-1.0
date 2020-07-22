const { Text, Relationship } = require('@keystonejs/fields');

exports.Tag = {
  access: true,
  fields: {
    name: { type: Text },
    projects: {
      type: Relationship,
      ref: 'Project.tags',
      many: true
    }
  }
}
