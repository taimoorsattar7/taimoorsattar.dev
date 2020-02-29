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
    
return (<>
    <PrimaryLayout>
    <SEO 
        title = {post.frontmatter.title}
        description = {post.frontmatter.description}
        keywords = {post.frontmatter.keywords}
        image = {post.frontmatter.cover_image}
    />

    

    <div className="wrapper wrapper--narrow">
        
        <div className="blogPost">
        
            <h1 className="headline headline--b-margin-large">
                {post.frontmatter.title}
            </h1> 
    
    <div className="blogPost__info">
       
        <img 
            className="blogPost__profile"
            src={"https://en.gravatar.com/userimage/79583073/62db78fcd1392e6b7a17e6cb82bffbd8?size=100"}
            alt="profile" />
        <span className="headline headline__sml headline--dull">
            Taimoor Sattar
        </span>
        <span>・</span>
        <time className="headline headline__sml  headline--dull"
              datetime={post.frontmatter.date}> 
            {format_date(post.frontmatter.date)}
        </time>

    </div>

            {
                post.frontmatter.featuredimage &&
                <img className="blogPost__img-main"
                     src={post.frontmatter.featuredimage} />
            }

            <div className="headline headline__text"
                 dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>

    
    <div className="blogscontent__socialite">


        <div className="btn btn__simple btn__r-margin">

            <a href={`https://www.facebook.com/sharer.php?u=${url}`}
                rel="nofollow"
                target="_blank">

                <span className="count">Share on Facebook</span>
            </a>

        </div>


        <div className="btn btn__simple btn__r-margin">

            <a href={`https://twitter.com/intent/tweet?original_referer=${url}`}
                className="socialite twitter"
                rel="nofollow"
                target="_blank"
                title="Share on Twitter">
                <span className="count">Share on Twitter</span>
            </a>

        </div>


        <div className="btn btn__simple btn__r-margin">

            <a href={`https://www.linkedin.com/cws/share?url=${url}`}
                rel="nofollow" target="_blank">
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
        }
    }
}
`