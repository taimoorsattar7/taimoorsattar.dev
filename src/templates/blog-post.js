import React from 'react';

import Header from '../components/header'

import Banner from '../components/banner'

import Footer from '../components/footer'

const BlogPost = ({data}) => {
    const post = data.markdownRemark;
    return (<div>
        <Header />
        <Banner title={post.frontmatter.title} />

        <div className="wrapper wrapper--narrow" dangerouslySetInnerHTML={{__html: post.html}}></div>
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
        }
    }
}
`