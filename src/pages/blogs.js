import React from "react"

import Banner from '../components/banner'
import Post from '../components/posts'

import blogImg from "../images/blogs.jpg"

import PrimaryLayout from '../templates/primarylayout'

const Blogs = ({data}) => {

  return (<div>
    <PrimaryLayout>

      <Banner title="Blogs" img={blogImg}></Banner>
      <div className="wrapper wrapper--narrow">
        {
          data.allMarkdownRemark.nodes.map( (node, index) => (

            <div key={index} className="row__large-4">
            <Post
              title={node.frontmatter.title}
              slug={node.fields.slug}
              excerpt={node.excerpt}
            />
            </div>
          ))
        }
        
      </div>
    
    </PrimaryLayout>

  </div>)
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
