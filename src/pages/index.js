import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SiteBanner from "../components/site-banner"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const avatar = data.avatar?.childImageSharp?.fixed

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <SiteBanner />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        description="My name is Taimoor Sattar, a full-stack developer. I have a bachelor's degree in engineering, but love to code."
        image={avatar?.src ?? ""}
      />

      <div className="wrapper wrapper--narrow">
      <SiteBanner />
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small className="headline headline__sml">{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      className="headline headline__text"
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      fixed(width: 200, height: 200, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {slug: {regex: "/blogs/"}}}) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
}
`
