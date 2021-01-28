'use strict';

var _ = require('lodash');

/**
 * A set of functions called "actions" for `email`
 */

module.exports = {
  sendEmail: async (ctx, next) => {
    const data = ctx.request.body;
    console.log(data)

    const emailTemplate = {
      subject: 'Message from <%= user.name %>',
      text: `Welcome on mywebsite.fr!
        Your account is now linked with: <%= user.email %>.`,
      html: `<h1>Welcome on mywebsite.fr!</h1>
        <p>Your account is now linked with: <%= user.email %>.<p>`,
    };

    try {
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'jamiepask1392@gmail.com'
        },
        emailTemplate,
        {
          user: _.pick(data, ['name', 'company', 'phone', 'email'])
        }
      )
    } catch (err) {
      console.log(err) 
    }
    
  }
};
