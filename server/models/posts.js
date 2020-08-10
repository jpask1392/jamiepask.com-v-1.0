require('dotenv').config();
const { 
  Text,
  Slug,
  CloudinaryImage,
  OEmbed,
  Relationship
} = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { Content } = require('@keystonejs/field-content');
const { IframelyOEmbedAdapter } = require('@keystonejs/oembed-adapters');

const adapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
});

const iframelyAdapter = new IframelyOEmbedAdapter({
  apiKey: process.env.IFRAMELY_API_KEY, // Get one from https://iframely.com
});

exports.Posts = {
  access: true,
  fields: {
    title: { type: Text },
    slug: { type: Slug },
    excerpt: { type: Markdown },
    intro: { type: Markdown },
    featuredImage: { type: CloudinaryImage, adapter },
    body: { type: Wysiwyg },
    categories: { type: Relationship, ref: 'Category', many: true },
    blockstest: {
      type: Content,
      blocks: [
        Content.blocks.heading, [CloudinaryImage.blocks.image, { adapter }],
      ],
    },
  },
  labelField: 'title',
}
