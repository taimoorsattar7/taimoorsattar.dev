import React from "react"

import PrimaryLayout from '../templates/primarylayout'
import SEO from '../components/SEO'

import { Link } from "gatsby"
import { graphql } from 'gatsby'


const month_name = (num) => {
  const monthName ={
      "0":"Jan",
      "1":"Feb",
      "2":"Mar",
      "3":"Apr",
      "4":"May",
      "5":"Jun",
      "6":"Jul",
      "7":"Aug",
      "8": "Sep",
      "9": "Oct",
      "10": "Nov",
      "11": "Dec"
  }
  return monthName[num];
}

const format_date = (date) => {
  let date_var = new Date(date);
  var format_date =  `${month_name(date_var.getUTCMonth())} ${date_var.getDate()},${date_var.getFullYear()}`;
  return format_date;
}

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
                    <span className="headline headline__sml headline--dull">
                      {format_date(post.frontmatter.date)}
                    </span>

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
