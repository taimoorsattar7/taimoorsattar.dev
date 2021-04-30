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
  const { site } = useStaticQuery(
    graphql`
      query {
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

  const metaSiteUrl = site.siteMetadata.siteUrl
  const metaDescription = description || site.siteMetadata.description

  const metaImage = image ? `${metaSiteUrl}${image}` : ""
  const metaPageUrl = `${metaSiteUrl}${slug}`

  const defaultTitle = site.siteMetadata?.title

  const main_schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Taimoor Sattar",
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
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        { property: `twitter:card`, content: "summary_large_image" },
        { property: `og:title`, content: title },
        { name: `twitter:title`, content: title },

        { name: `description`, content: metaDescription },
        { property: `og:description`, content: metaDescription },
        { name: `twitter:description`, content: metaDescription },

        { name: `image`, content: metaImage },
        { name: `og:image`, content: metaImage },
        { name: `twitter:image`, content: metaImage },

        { property: `og:type`, content: `website` },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },

        { name: `og:url`, content: metaSiteUrl },
        { name: `twitter:url`, content: metaSiteUrl },
      ].concat(meta)}
    >
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
