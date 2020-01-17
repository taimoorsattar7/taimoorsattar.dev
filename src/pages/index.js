import React from "react"

import Banner from '../components/banner'
import PrimaryLayout from '../templates/primarylayout'
import SEO from '../components/SEO'

import { Link } from "gatsby"

const info = {
  title: `I'm Taimoor Sattar`,
  about: "I am front end engineer with over 5-year experience of graphic and web development with high standard. I have a bachelor degree and work with technology like WordPress, React, Javascript and Gatsby. Besides of which framework/ language is used, I used to break down complex concepts in an accessible and intuitive way."
}

const IndexPage = ({data}) => {

  const posts = data.allMarkdownRemark.nodes;

  return(<>

    <PrimaryLayout>
    <SEO />

      <Banner data={info}></Banner>

      <div className="wrapper wrapper--narrow wrapper--no-padding">

        <div className="site-banner__tech">
        
          <img src="/img/tech/javascript.png" alt="javascript" />
          <img src="/img/tech/gatsby.png" alt="gatsby" />
          <img src="/img/tech/reactjs.svg" alt="reactjs" />
          <img src="/img/tech/wordpress.svg" alt="wordpress" />
          <img src="/img/tech/svelte.png" alt="svelte" />
          <img src="/img/tech/netlify.png" alt="netlify" />


        </div>

        <div className="site-banner__post">

          <h2 className="headline headline__feature headline--mid">Feature Post</h2>

          {posts.map(post=>{
            return(
              <div className="site-banner__post-block">
                <Link to={post.fields.slug}>
                  <h2 className="headline headline__medium headline--mid">{post.frontmatter.title}</h2>
                  <span className="headline headline__date headline--mid">{post.frontmatter.date}</span>
                  <p className="headline headline__text headline--mid">This is Info about blog.</p>
                  </Link>
              </div>)
          })}

          

        </div>

      </div>

    </PrimaryLayout>

  </>)
}

export default IndexPage

export const query = graphql`{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
        author
        cover_image
      }
      fields {
        slug
      }
    }
  }
}
`