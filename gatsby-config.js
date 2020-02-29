module.exports = {
  siteMetadata: {
    siteUrl: `https://taimoorsattar.dev`,
    title: `Taimoor Sattar`,
    description: `Profile: taimoorsattar.com`,
    author: `@taimoorsattar7`,
    keywords: "taimoorsattar, taimoor, profile, front-end",
    image: './static/ocean.jpg'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [ { resolve: `gatsby-remark-prismjs`, }, ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
  
}