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
} = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

exports.FeaturedProjects = {
  access: true,
  labelResolver: item => (
    `featured_projects_${item.id}`
  ),
  fields: {
    blockOrder: {
      type: Relationship,
      ref: 'Block.featured_project_layout',
      many: false
    },
    title: { 
      type: Text 
    },
    intro: { 
      type: Markdown,
    },
    projectOne: { 
      type: Relationship,
      ref: 'Project'
    },
    projectTwo: { 
      type: Relationship,
      ref: 'Project'
    },
  },
}
