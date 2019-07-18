import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'

import SEO from '../components/SEO'

const BlogPost = ({data}) => {
    const post = data.markdownRemark;
    return (<div>
        <Header />
        <SEO 
            title = {post.frontmatter.title}
            description = {post.frontmatter.description}
            keywords = {post.frontmatter.keywords}
            image = {post.frontmatter.cover_image}
        />

        

        <div className="wrapper wrapper--narrow">

            <img src={post.frontmatter.cover_image} width="100%" border="1px solid lightblue"/>
            
            <h1>{post.frontmatter.title}</h1> 

            <div className="headline headline__text" dangerouslySetInnerHTML={{__html: post.html}}></div>

        </div>
        
        <Footer />

    </div>);
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
          	cover_image 	
        }
    }
}
`