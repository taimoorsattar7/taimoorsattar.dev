import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const month_name = num => {
  const monthName = {
    '0': 'Jan',
    '1': 'Feb',
    '2': 'Mar',
    '3': 'Apr',
    '4': 'May',
    '5': 'Jun',
    '6': 'Jul',
    '7': 'Aug',
    '8': 'Sep',
    '9': 'Oct',
    '10': 'Nov',
    '11': 'Dec',
  };
  return monthName[num];
};

const format_date = date => {
  let date_var = new Date(date);
  var format_date = `${month_name(
    date_var.getUTCMonth()
  )} ${date_var.getDate()},${date_var.getFullYear()}`;
  return format_date;
};


const BlogPostTemplate = ({ data, location }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  let featureImg = post.frontmatter?.featuredimage?.childImageSharp?.fluid;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="wrapper wrapper--narrow">
        <div className="blogPost">
          <h1 className="headline">
            {post.frontmatter.title}
          </h1>

          <div className="blogPost__info">
            <span className="headline headline__sml headline--dull">
              Taimoor Sattar
              </span>
            <span>・</span>
            <time
              className="headline headline__sml  headline--dull"
              dateTime={post.frontmatter.date}
            >
              {format_date(post.frontmatter.date)}
            </time>
          </div>

          {featureImg && (
            <Image className="blogPost__img-main"
              fluid={featureImg} />
          )}

          <div
            className="markdown headline headline__text"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>

        <section>
          <h2>About the Author</h2>
          <Bio />
        </section>

        <div className="blogscontent__socialite">
          <div className="btn btn--inblk btn--sm btn__r-margin">
            <a
              href={`https://www.facebook.com/sharer.php?u=${url}`}
              rel="nofollow"
            >
              <span className="count">Share on Facebook</span>
            </a>
          </div>

          <div className="btn btn--inblk btn--sm btn__r-margin">
            <a
              href={`https://twitter.com/intent/tweet?original_referer=${url}`}
              className="socialite twitter"
              rel="nofollow"
              title="Share on Twitter"
            >
              <span className="count">Share on Twitter</span>
            </a>
          </div>

          <div className="btn btn--inblk btn--sm">
            <a
              href={`https://www.linkedin.com/cws/share?url=${url}`}
              rel="nofollow"
            >
              <span className="count">Share on Linkedin</span>
            </a>
          </div>

          <iframe
            title="Substack"
            src="https://taimoor.substack.com/embed"
            width="480"
            height="320"
            Style={
              'display:block;border:1px solid #EEE; background:white;margin:auto;margin-top: 50px;'
            }
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`