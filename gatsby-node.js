/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const { createFilePath } = require("gatsby-source-filesystem")

const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: slug,

    })
  }
}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


  return graphql(`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 1000
    ){
      nodes{
        id
        fields{
          slug
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.nodes.forEach(node => {
      let slug = node.fields.slug;

      if (slug.includes("/blogs")) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      }
      else if (slug.includes("/book")) {
        createPage({

          path: node.fields.slug,
          component: path.resolve(`src/templates/book-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      }
      else {
        createPage({

          path: node.fields.slug,
          component: path.resolve(`src/templates/page.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      }

    })
  })
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
