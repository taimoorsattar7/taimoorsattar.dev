import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import logo from "../images/logo.png"

const SEO = ({ id,
  url,
  title,
  description,
  keywords,
  image,
  date,
  modifiedDate,
  schemaType }) => (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultKeywords,
            defaultURL,
            defaultAuthor
          },
        },
      }) => {

        const main_schema = {
          "@context": "http://schema.org",
          "@type": "Person",
          "name": "Taimoor Sattar",
          "url": "https://taimoorsattar.dev",
          "sameAs": [
            "https://www.linkedin.com/in/taimoorsattar",
            "https://twitter.com/taimoorsattar7"
          ]
        }

        const blog_schema = {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          "@id": id,
          "headline": title || defaultTitle,
          "description": description || defaultDescription,
          "thumbnailUrl": image || logo,
          "author": defaultAuthor,
          "datePublished": date,
          "dateModified": date,
          "image": image || logo,
          "publisher": [{
            "@type": "Person",
            "name": defaultAuthor || "Taimoor Sattar"
          }],
          "mainEntityOfPage": url
        }

        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          keywords: keywords || defaultKeywords,
          image: image,
        }
        return (
          <Helmet>

            <script type="application/ld+json">
              {JSON.stringify(main_schema)}
            </script>

            {
              schemaType === "blog" ?
                (
                  <script type="application/ld+json">
                    {JSON.stringify(blog_schema)}
                  </script>
                ) : ""
            }

            <title>{seo.title}</title>
            <meta property="title" content={seo.title} />
            <meta property="og:title" content={seo.title} />

            <meta property="og:site_name" content="Taimoor Sattar" />
            <meta name="image" content={seo.image} />

            <meta name="description" content={seo.description} />
            <meta property="og:description" content={seo.description} />

            <meta name="keywords" content={seo.keywords} />
            <meta name="robots" content="index,follow" />
            <html lang="en" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@taimoorsattar7" />

            <meta name="twitter:image" content={image} />
            <meta property="og:image" content={image} />

            <meta property="fb:app_id" content="217416985985327" />

          </Helmet>
        )
      }}
    />
  )

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        defaultURL: siteUrl
        defaultAuthor: author
      }
    }
  }
`
