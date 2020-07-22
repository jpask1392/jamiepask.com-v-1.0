require('dotenv').config();
const { 
  Text,
  Slug,
  CloudinaryImage,
  Relationship,
  Integer
} = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
// const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const adapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
});

exports.Project = {
  access: true,
  fields: {
    title: { type: Text },
    slug: { type: Slug },
    order: { type: Integer },
    site: { type: Text },
    tags: { type: Relationship, ref: 'Tag.projects', many: true },
    excerpt: { type: Markdown },
    overview: { type: Markdown },
    thumbnailImage: { type: CloudinaryImage, adapter },
    introImage: { type: CloudinaryImage, adapter },
    featuredImage: { type: CloudinaryImage, adapter },
    needs: { type: Markdown },
    body: { type: Markdown },
    howBody: { type: Markdown },
    howImage: { type: CloudinaryImage, adapter }
  },
  labelField: 'title',
}
