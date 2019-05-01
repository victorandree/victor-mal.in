const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    languages,
  },

  plugins: ['gatsby-plugin-react-helmet'],
};
