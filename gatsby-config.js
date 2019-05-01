const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    languages,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Baskerville', 'Just Another Hand'],
        },
        typekit: { id: 'fns0atl' },
      },
    },
  ],
};
