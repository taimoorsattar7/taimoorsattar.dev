import React from 'react';

import Header from '../components/header'
import Banner from '../components/banner'
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
        <Banner title={post.frontmatter.title} img={post.frontmatter.cover_image} />

        <div className="wrapper wrapper--narrow">

            <div className="headline headline__sect" dangerouslySetInnerHTML={{__html: post.html}}></div>

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