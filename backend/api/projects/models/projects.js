'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      strapi.log.debug("beforeCreate")
      if (data.name) data.slug = slugify(data.name, {lower: true});
    },

    async beforeUpdate(params, data) {
      strapi.log.debug("beforeUpdate");
      if (data.name) data.slug = slugify(data.name, {lower: true});
    },
  },
};
