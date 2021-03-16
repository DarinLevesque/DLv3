/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Darin Levesque | Technologist`,
    author: `Darin Levesque`,
    description: `With 10+ years of experience in various industries, I help tech
              startups from idea phase to high volumes. I design and build
              scalable solutions, implement internal processes that fit your
              organization, build teams that produce results.`,
    siteUrl: `https://darinlevesque.com/`,
    social: {
      twitter: `darinlevesque`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Darin Levesque | Technologist`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png'
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
