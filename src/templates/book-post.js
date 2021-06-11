import React, { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

import Axios from "axios"

import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricetable from "../components/Pricetable"

import Modal from "../components/Modal"
import SubscribeForm from "../components/subscribeForm"

import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe("pk_test_heihxmHj6gtm3NHz42v9CfEZ")

import { graphql } from "gatsby"
import "../components/_blog-post.scss"
import "../components/_social.scss"
import "../components/_img.scss"
import "../styles/_btn.scss"

const BookPost = ({ data, location }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  const post = data.markdownRemark
  const slug = data.markdownRemark.fields.slug
  let featureImg = post.frontmatter?.featuredimage?.childImageSharp?.fluid

  const [showModal, setShowModal] = useState(false)
  const [issuccess, setIsSuccess] = useState(false)
  const avatar = data?.avatar?.childImageSharp?.fixed

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  async function redirectck() {
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1Ht2ahHfTgknHIBMqeQYrruP",
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "http://localhost:8000",
      cancelUrl: "http://localhost:8000",
    })

    if (error) {
      console.log(error)
    }
  }

  async function handleSubmit(data) {
    try {
      try {
        let response
        response = await Axios.post(`/.netlify/functions/addUser`, {
          name: data.name,
          email: data.email,
        })
      } catch (e) {
        // no problem
      }

      if (validateEmail(data.email)) {
        const mailSent = await Axios.post(`/.netlify/functions/nmSend`, {
          email: data.email,
          subject: "How To Build JAMstack Site - Free chapter 📕",
          html: `

          <body class="" style="font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

              <p>Hey ${data.name} 👋</p>
              <p>Thanks for your interest. Click the below button to get the link to the free chapter of the book.</p>

              <div><!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://storage.googleapis.com/masterpro/How_To_Build_JAMstack_Site_starter.pdf" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%" strokecolor="#1e3650" fill="t">
                  <v:fill type="tile" src="https://i.imgur.com/0xPEf.gif" color="#556270" />
                  <w:anchorlock/>
                  <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">
                    Grab your's free chapter
                  </center>
                </v:roundrect>
              <![endif]-->
              
                <a href="https://storage.googleapis.com/masterpro/How_To_Build_JAMstack_Site_starter.pdf"
                  style="background-color:#556270;background-image:url(https://i.imgur.com/0xPEf.gif);border:1px solid #1e3650;border-radius:4px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;mso-hide:all;">
                  
                  Grab your's free chapter
                </a>
              </div>

              <p>
              You can enroll in the full book (course) at, <a href="https://taimoorsattar.dev/books/how-to-build-JAMstack-site">How To Build JAMstack Site →</a>.
              </p>

            <p>Best Regards</p>
            <p>Taimoor Sattar</p>

            </body>
            `,
        })
        setIsSuccess(true)
        toast.success("Please check your email.")
        return true;
      } else {
        toast.error("Please enter valid email.")
        return false;
      }
    } catch (e) {
      toast.error("Refresh the page and try Again...")
      return false;
    }
  }

  return (
    <Layout location={location}>
      <Toaster />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.exerpt || post.excerpt}
        image={featureImg?.src ?? ""}
        slug={slug}
        schemaType={"book"}
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

        <Pricetable
          pricing={post.frontmatter?.pricing}
          onFreebie={() => {
            setShowModal(true)
          }}
        />

        <div>
          <Modal
            title="Grab free chapter of this ebook 👀"
            body={`By filling the below information, you subscribe to my newsletter and get access to the free chapter of this book 📕.`}
            onClose={() => setShowModal(false)}
            show={showModal}
            success={showModal && issuccess}
            successmsg="Thanks for you interest. Please check your email for the free chapter of the book 👀📕"
          >
            <SubscribeForm show={issuccess} onSubmit={handleSubmit} />
          </Modal>
        </div>

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
      fields {
        slug
      }
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
          freebie
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
