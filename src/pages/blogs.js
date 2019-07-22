import React from "react"

import PrimaryLayout from '../templates/primarylayout'
import SEO from '../components/SEO'

import { Link } from "gatsby"

const Blogs = ({data}) => {

  const posts = data.allMarkdownRemark.nodes;

  return (<>
    <PrimaryLayout>
    <SEO />

      <div className="wrapper wrapper--narrow">

        <h1 className="headline headline--b-margin-small">Recent Blogs</h1>
        
        {posts.map(post=>{
              return(<>

                <div className="site-banner__post-block">

                  <Link to={post.fields.slug}>
                    <h2 className="headline headline__medium">{post.frontmatter.title}</h2>
                    <span className="headline headline__date">{post.frontmatter.date}</span>
                    <p className="headline headline__text">This is Info about blog.</p>
                    </Link>
                </div>

                </>)
        })}
        
      </div>
    
    </PrimaryLayout>

  </>)
}

export default Blogs

export const query = graphql`
  {
    allMarkdownRemark{
        nodes{
          frontmatter{
            title, date, keywords
          }
          excerpt
          internal{
            content
          }
          fields{
            slug
          }
        }
      }
  }
`
