import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, lang, meta }) => {
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
  const metaDescription = site.siteMetadata.description || description
  const metaImage = image;
  const defaultTitle = site.siteMetadata?.title

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

        { name: `image`, content: `${metaSiteUrl}${metaImage}` },
        { name: `og:image`, content: `${metaSiteUrl}${metaImage}` },
        { name: `twitter:image`, content: `${metaSiteUrl}${metaImage}` },

        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata?.social?.twitter || `` },

        { name: `og:url`, content: metaSiteUrl },
        { name: `twitter:url`, content: metaSiteUrl }

      ].concat(meta)}
    />
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
