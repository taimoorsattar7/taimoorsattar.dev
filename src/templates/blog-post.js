import React, { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

import Axios from "axios"

import { graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import SubscribeForm from "../components/subscribeForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/Modal"

import "../styles/markdown.scss"

const month_name = num => {
  const monthName = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  }
  return monthName[num]
}

const format_date = date => {
  let date_var = new Date(date)
  var format_date = `${month_name(
    date_var.getUTCMonth()
  )} ${date_var.getDate()},${date_var.getFullYear()}`
  return format_date
}

const BlogPostTemplate = ({ data, location }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  const post = data.markdownRemark
  const slug = data.markdownRemark.fields.slug
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const [showModal, setShowModal] = useState(false)

  let featureImg = post.frontmatter?.featuredimage?.childImageSharp?.fluid
  const avatar = data?.avatar?.childImageSharp?.fixed

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  async function handleSubmit(data) {
    try {
      let response

      console.log(data);

      if (validateEmail(data.email)) {
          response = await Axios.post(`/.netlify/functions/addUser`, {
            name: data.name,
            email: data.email,
          }) 
      }

      console.log(response);

      if (response.data) {
        localStorage.setItem("subscribe", true)
        toast.success("You are subscribe to the list")
        setShowModal(false)
      } else {
        toast.error("Something went wrong")
      }
    } catch (e) {
      toast.error("Refresh the page and try Again...")
    }
  }

  useEffect(() => {
    const subscribe = localStorage.getItem("subscribe")
    // const close = localStorage.getItem("close")
    // const date = localStorage.getItem("date")
    
    setShowModal(subscribe == "true" ? false : true)
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Toaster />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.exerpt || post.excerpt}
        image={featureImg?.src ?? ""}
        slug={slug}
        schemaType={"blog"}
      />

      <div className="wrapper wrapper--narrow">
        <div className="blogPost">
          <h1 className="headline">
            <b>{post.frontmatter.title}</b>
          </h1>

          <div className="blogPost__info">
            {avatar && (
              <Image
                fixed={avatar}
                className="img__margin-r"
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            )}

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
            <Image className="blogPost__img-main" fluid={featureImg} />
          )}

          <div
            className="headline headline__text markdown"
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

          <div>
            <Modal
              title="Subscribe to my Newsletter"
              body={`<i>I'm Taimoor Sattar, full-stack developer.</i> Subscribe to my newsletter to get updates about web tech. Check out my recent release book <a href="/books/how-to-build-JAMstack-site/">
                how to build JAMstack site 📕 →
              </a>`}
              onClose={() => {
                setShowModal(false)
              }}
              timer={7000}
              show={showModal}
            >
              <SubscribeForm show={true} onSubmit={handleSubmit} />
            </Modal>
          </div>

          <iframe
            title="Substack"
            src="https://taimoor.substack.com/embed"
            width="480"
            height="320"
            Style={
              "width: 100%;display:block;border:1px solid #EEE;background:white;margin:auto;margin-top: 50px;"
            }
            frameBorder="0"
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 40, height: 40, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
      fields {
        slug
      }
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
