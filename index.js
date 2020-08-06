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
var nodemailer = require('nodemailer');
const bodyParser = require("body-parser");

// init keystone instance
const keystone = new Keystone({
  name: 'ec2-us-west-2-2a-p-nodejs.eba-ma3mmbfb.us-west-2.elasticbeanstalk.com',
  adapter: new Adapter(adapterConfig),
  cookie: { secure: process.env.NODE_ENV === 'production' },
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
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.route('/submit-form').post((req, res) => {
      const {
        name,
        company,
        phone,
        email
      } = req.body;

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          type: 'OAuth2',
          user: 'jamiepask1392@gmail.com',
          clientId: process.env.GMAIL_CLIENTID,
          clientSecret: process.env.GMAIL_CLIENTSECRET,
          refreshToken: process.env.GMAIL_REFRESHTOKEN
        }
      });
      
      var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'contact@jamiepask.com',
        subject: 'Query sent from jamiepask.com',
        text: `
        My Name is ${name} from ${company}. 
        I'm currently looking for 20. You can call me on ${phone} or email me at ${email}. 
        I look forward to talking further!
        `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("jp error: ",error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
		});
  },
};
