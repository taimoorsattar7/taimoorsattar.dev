module.exports = {
  siteMetadata: {
    title: `Taimoor Sattar`,
    description: `Profile: taimoorsattar.com`,
    author: `@taimoorsattar7`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
  
}