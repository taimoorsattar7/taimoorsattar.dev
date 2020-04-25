import React from 'react';

import SEO from '../components/SEO'
import PrimaryLayout from '../templates/primarylayout'

import { graphql } from 'gatsby'
import '../components/_blog-post.scss'
import '../components/_btn.scss'

const Page = ({ data }) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const post = data.markdownRemark;

    return (<>

        <PrimaryLayout>
            <SEO
                id={post.id}
                url={post.fields.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                keywords={post.frontmatter.keywords}
                image={post.frontmatter.featuredimage}
                date={post.frontmatter.date}
                modifiedDate={post.frontmatter.date}
            />

            <div className="wrapper wrapper--narrow">

                <div className="blogPost">
                    <h1 className="headline headline--b-margin-small">
                        {post.frontmatter.title}
                    </h1>

                    <span className="headline headline__text headline--dotted headline--inline headline--dull headline--cap">
                        {post.frontmatter.tags.map(el => {
                            return (
                                el
                            );
                        }).join(', ')}
                    </span>

                    {
                        post.frontmatter.featuredimage &&
                        <img className="blogPost__img-main"
                            src={post.frontmatter.featuredimage}
                            alt={post.frontmatter.title} />
                    }

                    <div className="headline headline__text"
                        dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>

            </div>


        </PrimaryLayout>

    </>);
};

export default Page;

export const query = graphql`
query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}){
        html
        frontmatter{
            title
          	date
          	description
            featuredimage
            author
            tags
        }
        id
        fields {
            slug
          }
    }
}
`