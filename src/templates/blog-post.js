import React from 'react';

import SEO from '../components/SEO'
import PrimaryLayout from '../templates/primarylayout'

import { graphql } from 'gatsby'
import '../components/_blog-post.scss'

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

const BlogPost = ({data}) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const post = data.markdownRemark;
    const siteURL = data.site.host;

return (<>

    <PrimaryLayout>
    <SEO 
        id = {post.id}
        url = {siteURL + post.fields.slug}
        title = {post.frontmatter.title}
        description = {post.frontmatter.description}
        keywords = {post.frontmatter.keywords}
        image = {siteURL + post.frontmatter.featuredimage}
        date = {post.frontmatter.date}
        modifiedDate = {post.frontmatter.date}
        schemaType = "blog"
    />    

    <div className="wrapper wrapper--narrow">
        
        <div className="blogPost">
        
            <h1 className="headline headline--b-margin-large">
                {post.frontmatter.title}
            </h1> 
    
    <div className="blogPost__info">
       
        <img 
            className="blogPost__profile"
            src={"https://en.gravatar.com/userimage/79583073/1db067b0745be884c364c25811e1caa9.jpg?size=100"}
            alt="profile" />
        <span className="headline headline__sml headline--dull">
            Taimoor Sattar
        </span>
        <span>・</span>
        <time className="headline headline__sml  headline--dull"
              dateTime={post.frontmatter.date}> 
            {format_date(post.frontmatter.date)}
        </time>

    </div>

            {
                post.frontmatter.featuredimage &&
                <img className="blogPost__img-main"
                     src={post.frontmatter.featuredimage}
                     alt={post.frontmatter.title} />
            }

            <div className="headline headline__text"
                 dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>

    
    <div className="blogscontent__socialite">


        <div className="btn btn__simple btn__r-margin">

            <a href={`https://www.facebook.com/sharer.php?u=${url}`}
                rel="nofollow">

                <span className="count">Share on Facebook</span>
            </a>

        </div>


        <div className="btn btn__simple btn__r-margin">

            <a href={`https://twitter.com/intent/tweet?original_referer=${url}`}
                className="socialite twitter"
                rel="nofollow"
                title="Share on Twitter">
                <span className="count">Share on Twitter</span>
            </a>

        </div>


        <div className="btn btn__simple btn__r-margin">

            <a href={`https://www.linkedin.com/cws/share?url=${url}`}
                rel="nofollow">
                <span className="count">Share on Linkedin</span>
            </a>

        </div>

    </div>

</div>

    
    </PrimaryLayout>

</>);
};

export default BlogPost;

export const query = graphql`
query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}){
        html
        frontmatter{
            title
          	date
          	keywords
          	description
            featuredimage
            author
        }
        id
        fields {
            slug
          }
    }
    site {
        host
        port
      }
}
`