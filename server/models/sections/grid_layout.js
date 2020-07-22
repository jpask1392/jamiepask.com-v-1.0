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
  OEmbed
} = require('@keystonejs/fields');
const { Content } = require('@keystonejs/field-content');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields');
const { IframelyOEmbedAdapter } = require('@keystonejs/oembed-adapters');

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: "djetpo84s",
  apiKey: "825515623114866",
  apiSecret: "jKKG68fjoi3ADsmaPd9LkASGYwc"
});

exports.Grid_layout = {
  access: true,
  labelResolver: item => (
    `grid_layout_${item.id}`
  ),
  fields: {
    title: { type: Text },
    blockOrder: {
      type: Relationship,
      ref: 'Block.grid_layout',
      many: false
    },
    body: {
      type: Content,
      blocks: [
        Content.blocks.blockquote,
        [CloudinaryImage.blocks.image, { adapter: cloudinaryAdapter }],
      ],
    },
  },
}
