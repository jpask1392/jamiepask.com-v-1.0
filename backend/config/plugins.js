module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: env('SMTP_USERNAME'),
        clientId: env('GMAIL_CLIENTID'),
        clientSecret: env('GMAIL_CLIENTSECRET'),
        refreshToken: env('GMAIL_REFRESHTOKEN')
      },
    },
    settings: {
      defaultFrom: 'hello@example.com',
      defaultReplyTo: 'hello@example.com',
    },
  },
});