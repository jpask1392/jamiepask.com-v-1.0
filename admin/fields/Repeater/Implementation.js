const { Text } = require('@keystonejs/fields');

// Using the text implementation because we're going to stringify the array of results.
// We could store this in another table, but this would require writing a complex controller.
// JSON.stringify feels good enough for this simple field.

class Repeater extends Text.implementation {
  constructor(path, { options }) {
    super(...arguments);
    this.options = options;
    this.isOrderable = false;
  }

  extendAdminMeta(meta) {
    // Remove additions to extendMeta by the text implementation
    // Add options to adminMeta
    // disable sorting as we don't know how this should be sorted

    return { ...meta, options: this.options, isOrderable: false };
  }

}

module.exports = {
  Implementation: Repeater,
  MongoIntegerInterface: Text.adapters.mongoose,
  KnexIntegerInterface: Text.adapters.knex,
};
