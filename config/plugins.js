module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', 'ds8sl0kcw'),
        api_key: env('CLOUDINARY_KEY', '754934432122962'),
        api_secret: env('CLOUDINARY_SECRET', 'GGbYdxTnfNsrdPTrVoWkPmmbivU'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },




  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },



});

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-mailjet",
      providerOptions: {
        publicApiKey: env("MAILJET_PUBLIC_KEY"),
        secretApiKey: env("MAILJET_SECRET_KEY"),
       
      },
      settings: {
        defaultFrom: env("MAILJET_SENDER_MAIL"),
        
       
      },
    },     

  },
});  

 
