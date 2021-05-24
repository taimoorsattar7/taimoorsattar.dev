import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  title,
  description,
  slug,
  image,
  date,
  schemaType,
  lang,
  meta,
}) => {
  const { site, avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 300, height: 300, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const pic = avatar?.childImageSharp?.fixed?.src

  const metaSiteUrl = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description

  const metaImage = image
    ? `${metaSiteUrl}${image}`
    : `${metaSiteUrl}/banner.jpg`
  const metaPageUrl = `${metaSiteUrl}${slug}`

  const defaultTitle = title || site.siteMetadata?.title

  const main_schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    gender: "http://schema.org/Male",
    name: "Taimoor Sattar",
    image: pic ? `${metaSiteUrl}${pic}` : "",
    url: metaSiteUrl,
    sameAs: [
      "https://www.linkedin.com/in/taimoorsattar",
      "https://twitter.com/taimoorsattar7",
    ],
  }

  const blog_schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: defaultTitle,
    description: metaDescription,
    thumbnailUrl: metaImage,
    datePublished: date,
    dateModified: date,
    image: metaImage,
    publisher: [
      {
        "@type": "Person",
        name: "Taimoor Sattar",
      },
    ],
    mainEntityOfPage: metaPageUrl,
  }

  const book_schema = {
    "@context": "http://schema.org/",
    "@id": metaPageUrl,
    "@type": "Book",
    name: defaultTitle,
    bookFormat: { "@id": "http://schema.org/EBook" },
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <meta name="yandex-verification" content="42cde140c0068db5" />
      <title>{defaultTitle}</title>
      <meta name="title" content={`${defaultTitle} | Taimoor Sattar`}></meta>

      <meta name="author" content="Taimoor Sattar" />
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaPageUrl} />

      {/* Social: Twitter  */}
      {/* After inserting META need to validate at https://dev.twitter.com/docs/cards/validation/validator  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@taimoorsattar7" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:url" content={metaSiteUrl} />

      {/* Open Graph */}
      <meta property="og:url" content={metaPageUrl} />
      <meta
        property="og:type"
        content={
          schemaType === "blog"
            ? "article"
            : schemaType === "book"
            ? "book"
            : "website"
        }
      />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />

      <script type="application/ld+json">{JSON.stringify(main_schema)}</script>

      {schemaType === "blog" ? (
        <script type="application/ld+json">
          {JSON.stringify(blog_schema)}
        </script>
      ) : (
        ""
      )}

      {schemaType === "book" ? (
        <script type="application/ld+json">
          {JSON.stringify(book_schema)}
        </script>
      ) : (
        ""
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
