module.exports = {
  siteMetadata: {
    siteUrl: `https://taimoorsattar.dev`,
    title: `Taimoor Sattar`,
    description: `Profile: taimoorsattar.com`,
    author: `Taimoor Sattar`,
    keywords: "taimoorsattar, taimoor, profile, front-end",
    image: './static/ocean.jpg'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-69828471-5",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{ resolve: `gatsby-remark-prismjs`, },],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],

}