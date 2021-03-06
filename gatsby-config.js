const path = require('path');
const config = require('./src/config');
module.exports = {
  pathPrefix: "/gatsby-starter-builder",
  siteMetadata: {
    title: 'Gatsby + Builder.io Starter',
    description:
      'This repo contains an example website that is built with Builder.io, and generate with Gatsby'
  },
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    // 'gatsby-plugin-react-helmet',
    {
      resolve: '@builder.io/gatsby',
      options: {
        publicAPIKey: config.builderAPIKey,
        templates: {
          // Render every `landingPage` model as a new page using the 
          // src/templates/LandingPage.jsx template based on the URL provided in Builder.io
          blogPage: path.resolve('src/templates/BlogPage.jsx'),
          page: path.resolve('src/templates/Page.jsx'),
          articlePage: path.resolve('src/templates/Article.jsx'),
        }
      }
    }
  ]
};
