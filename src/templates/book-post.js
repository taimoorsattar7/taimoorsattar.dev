import React from "react"

import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricetable from "../components/Pricetable"

import { graphql } from "gatsby"
import "../components/_blog-post.scss"
import "../components/_social.scss"
import "../components/_img.scss"
import "../styles/_btn.scss"

const BookPost = ({ data, location }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  const post = data.markdownRemark
  let featureImg = post.frontmatter?.featuredimage?.childImageSharp?.fluid

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={featureImg?.src ?? ""}
      />

      <div className="wrapper wrapper--narrow">
        <div className="blogPost">
          <h1 className="headline">
            <b>{post.frontmatter.title}</b>
          </h1>

          <div className="blogPost__info">
            <span className="headline headline__sml headline--r-margin-sml">
              By
            </span>

            {avatar && (
              <Image
                fixed={avatar}
                className="img__margin-r"
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            )}

            <span className="headline headline__sml">
              <a className="headline--no-decor" href="/">
                Taimoor Sattar
              </a>
            </span>
          </div>

          <p className="headline headline__text headline--b-margin-medium headline--dull">
            {post.frontmatter.exerpt}
          </p>

          <div>
            <a className="headline--no-decor" href="#pricing">
              <button className="btn btn__slice btn--ctr-Atmed btn__r-margin">
                <span className="headline headline__text headline--b">
                  BUY THE BOOK
                </span>
              </button>
            </a>
          </div>

          {featureImg && (
            <Image className="blogPost__img-main" fluid={featureImg} />
          )}

          <div
            className="headline headline__text"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>

        <section>
          <h2>About the Author</h2>
          <Bio />
        </section>

        <Pricetable pricing={post.frontmatter?.pricing} />

        <div className="blogscontent__socialite">
          <iframe
            title="Substack"
            src="https://taimoor.substack.com/embed"
            width="480"
            height="320"
            Style={
              "width: 100%;display:block;border:1px solid #EEE;background:white;margin:auto;margin-top: 50px;"
            }
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default BookPost

export const query = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 40, height: 40, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { regex: "/books/" } }) {
      html
      frontmatter {
        title
        exerpt
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          btntxt
          btnlink
          exerpt
          name
          price
          interval
          popular
        }
      }
      id
      fields {
        slug
      }
    }
  }
`
