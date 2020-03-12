module.exports = {
  siteMetadata: {
    title: `William Dodson`,
    description: `An HTML version of my resume.`,
    author: `@williamvdodson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `william-dodson-resume`,
        short_name: `resume`,
        start_url: `/`,
        background_color: `#F1F0EF`,
        theme_color: `#7A568F`,
        display: `minimal-ui`,
        icon: `src/images/william-dodson-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
