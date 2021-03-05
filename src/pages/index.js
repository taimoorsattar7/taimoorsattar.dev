import React from 'react';

import Banner from '../components/banner';
import PrimaryLayout from '../templates/primarylayout';
import SEO from '../components/SEO';

import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const info = {
  title: `I'm Taimoor Sattar`,
  about:
    'I love to write code in an accessible and intuitive way.',
};

const month_name = num => {
  const monthName = {
    '0': 'Jan',
    '1': 'Feb',
    '2': 'Mar',
    '3': 'Apr',
    '4': 'May',
    '5': 'Jun',
    '6': 'Jul',
    '7': 'Aug',
    '8': 'Sep',
    '9': 'Oct',
    '10': 'Nov',
    '11': 'Dec',
  };
  return monthName[num];
};

const format_date = date => {
  let date_var = new Date(date);
  var format_date = `${month_name(
    date_var.getUTCMonth()
  )} ${date_var.getDate()},${date_var.getFullYear()}`;
  return format_date;
};

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <PrimaryLayout>
        <SEO />

        <Banner data={info}></Banner>

        <div className="wrapper wrapper--narrow wrapper--no-padding">
          <div className="site-banner__post">
            <h2 className="headline headline__feature">Latest Post</h2>

            {posts.map(post => {
              return post.fields.slug.includes('/blogs') ? (
                <div key={post.id} className="site-banner__post-block">
                  <Link to={post.fields.slug}>
                    <h2 className="headline headline__medium">
                      {post.frontmatter.title}
                    </h2>

                    <span className="headline headline__sml headline--dull headline--block">
                      {format_date(post.frontmatter.date)}
                    </span>
                  </Link>
                </div>
              ) : (
                ''
              );
            })}

            <Link className="headline headline__text" to="/blogs/">
              <span>View all blog post →</span>
            </Link>
          </div>
        </div>
      </PrimaryLayout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
{
  allMarkdownRemark(limit: 10) {
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
`;
