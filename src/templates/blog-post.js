import React from 'react';

import SEO from '../components/SEO'
import PrimaryLayout from '../templates/primarylayout'

const BlogPost = ({data}) => {
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
            
            <h1 className="headline headline--b-margin-small">{post.frontmatter.title}</h1> 

            {post.frontmatter.cover_image && <img src={post.frontmatter.cover_image} width="100%" border="1px solid lightblue"/>}

            <div className="headline headline__text" dangerouslySetInnerHTML={{__html: post.html}}></div>

            <div className="">
                <span className="">Edit on GitHub</span>
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
          	cover_image 	
        }
    }
}
`