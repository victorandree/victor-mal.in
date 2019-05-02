const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    languages,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Victor & Malin 2019`,
        short_name: `V&M 2019`,
        start_url: `/?utm_source=a2hs`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/images/icon.png'
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Baskerville:400,400i', 'Just Another Hand'],
        },
        typekit: { id: 'fns0atl' },
      },
    },
  ],
};
