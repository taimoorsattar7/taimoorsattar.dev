import React from "react"

import Header from '../components/header'

import Banner from '../components/banner'

import Post from '../components/posts'

import Footer from '../components/footer'

import blogImg from "../images/blog.jpg"


const Blogs = ({data}) => {

  return (<div>
    <Header></Header>
    <Banner title="Blogs" img={blogImg}></Banner>
    <div className="wrapper wrapper--narrow">
      {
        data.allMarkdownRemark.nodes.map( node => (
          <Post
            title={node.frontmatter.title}
            slug={node.fields.slug}
          />
        )

        )
      }
    </div>
    
    
    <Footer></Footer>

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
