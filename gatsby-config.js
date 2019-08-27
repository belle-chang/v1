/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: "Anabelle Chang",
    title: "student-athlete"
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     useMozJpeg: false,
    //     stripMetadata: true,
    //     defaultQuality: 75,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false
                  }
              },
              'gatsby-remark-copy-images'
          ]
      }
  },
    `gatsby-transformer-yaml`,
  ]
}
