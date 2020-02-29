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
    const slug = createFilePath({ node, getNode, basePath: "posts", trailingSlash: false })
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

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`
  {
    allMarkdownRemark{
      nodes{
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
      createPage({
        
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
