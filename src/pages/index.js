import React from "react"

import Banner from '../components/banner'
import PrimaryLayout from '../templates/primarylayout'
import SEO from '../components/SEO'

import { graphql } from 'gatsby'
import { Link } from "gatsby"

const info = {
  title: `I'm Taimoor Sattar`,
  about: "I am front end engineer with over 5-year experience of graphic and web development with high standard. I have a bachelor degree and work with technology like WordPress, React, Javascript and Gatsby. Besides of which framework/ language is used, I used to break down complex concepts in an accessible and intuitive way."
}

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

const IndexPage = ({data}) => {

  const posts = data.allMarkdownRemark.nodes;

  return(<>

    <PrimaryLayout>
    <SEO />

      <Banner data={info}></Banner>

      <div className="wrapper wrapper--narrow wrapper--no-padding">

        <div className="site-banner__post">

          <h2 className="headline headline__feature">Feature Post</h2>

  {posts.map(post=>{
    return(
      <div key={post.id} className="site-banner__post-block">
        <Link to={post.fields.slug}>
          <h2 className="headline headline__medium">
            {post.frontmatter.title}
          </h2>

          <span className="headline headline__sml headline--dull headline--block">
            {format_date(post.frontmatter.date)}
          </span>
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
        description
        date
        keywords
        author
        featuredimage
      }
      fields {
        slug
      }
      id
    }
  }
}
`