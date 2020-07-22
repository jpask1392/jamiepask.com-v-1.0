require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { User } = require('./server/models/users');
const { Posts } = require('./server/models/posts');
const { Pages } = require('./server/models/pages');
const { Project } = require('./server/models/projects');
const { Blocks } = require('./server/models/blocks');
const { Grid_layout } = require('./server/models/sections/grid_layout');
const { Standard_layout } = require('./server/models/sections/standard_layout');
const { FeaturedProjects } = require('./server/models/sections/featuredProjects');
const { TwoColumn } = require('./server/models/sections/twoColumn');
const { Categories } = require('./server/models/blog/categories');
const { Tag } = require('./server/models/tags');
const adapterConfig = { mongoUri: process.env.CONNECT_TO };

// init keystone instance
const keystone = new Keystone({
  name: 'jamiepask.com',
  adapter: new Adapter(adapterConfig),
  cookie: { secure: true },
  cookieSecret: process.env.COOKIE_SECRET
});

// create lists
keystone.createList('User', User);
keystone.createList('Post', Posts);
keystone.createList('Page', Pages);
keystone.createList('Block', Blocks);
keystone.createList('Project', Project);
keystone.createList('Category', Categories);
keystone.createList('Tag', Tag);

// layouts
keystone.createList('Grid_layout', Grid_layout);
keystone.createList('Standard_layout', Standard_layout);
keystone.createList('Featured_projects_layout', FeaturedProjects);
keystone.createList('TwoColumn', TwoColumn);

// create auth
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User'
});

// export keystone instance
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ 
      authStrategy, 
      enableDefaultRoute: false,
      // hooks: require.resolve('./admin/')
    }),
    new NextApp({ dir: 'app' }),
  ],
  configureExpress: app => {
    app.set('trust proxy', 1);
    const express = require('express')
    app.use(express.urlencoded())
    app.route('/submit-form').post((req, res) => {
      const name = req.body.name;
		});
  },
};
