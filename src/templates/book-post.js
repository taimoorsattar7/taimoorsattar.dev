import React from 'react';

import Image from "gatsby-image"

import SEO from '../components/SEO';
import PrimaryLayout from './primarylayout';
import Pricetable from '../components/Pricetable';

import { graphql } from 'gatsby';
import '../components/_blog-post.scss';
import '../components/_social.scss';
import '../components/_img.scss';
import '../styles/_btn.scss';
import '../styles/markdown.scss';

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

const BookPost = ({ data }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const post = data.markdownRemark;
  // let featureImg = post.frontmatter?.featuredimage?.childImageSharp?.fluid;

  let featureImg = "/img/cover.jpg"

  return (
    <>
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
          schemaType="blog"
        />

        <div className="wrapper wrapper--narrow">
          <div className="blogPost">
            <h1 className="headline">
              {post.frontmatter.title}
            </h1>

            <div className="blogPost__info">

              <span className="headline headline__sml headline--dull">
                <a className="headline--no-decor" href="/">
                  Taimoor Sattar
                </a>
              </span>

            </div>

            <p className="headline headline__text headline--b-margin-medium headline--dull">
              {post.frontmatter.exerpt}
            </p>

            <div>
              <a className="headline--no-decor" href="#pricing">
                <button className="btn btn--ctr-Atmed btn__r-margin">
                  <span className="headline headline__text headline--b">
                    BUY THE BOOK
                  </span>
                </button>
              </a>

            </div>

            {true && (

              <img className="img img__float-r img__300w" src={featureImg} />

              // <Image fluid={featureImg} className="img img__float-r img__350w" />

            )}

            <div
              className="headline headline__text markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
          </div>

          <Pricetable pricing={post.frontmatter?.pricing} />

          <div className="blogscontent__socialite">
            <div className="btn btn__simple btn__r-margin">
              <a
                href={`https://www.facebook.com/sharer.php?u=${url}`}
                rel="nofollow"
              >
                <span className="count">Share on Facebook</span>
              </a>
            </div>

            <div className="btn btn__simple btn__r-margin">
              <a
                href={`https://twitter.com/intent/tweet?original_referer=${url}`}
                className="socialite twitter"
                rel="nofollow"
                title="Share on Twitter"
              >
                <span className="count">Share on Twitter</span>
              </a>
            </div>

            <div className="btn btn__simple btn__r-margin">
              <a
                href={`https://www.linkedin.com/cws/share?url=${url}`}
                rel="nofollow"
              >
                <span className="count">Share on Linkedin</span>
              </a>
            </div>

            <iframe
              title="Substack"
              src="https://taimoor.substack.com/embed"
              width="480"
              height="320"
              Style={
                'display:block;border:1px solid #EEE; background:white;margin:auto;margin-top: 50px;'
              }
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>


        </div>
      </PrimaryLayout>
    </>
  );
};

export default BookPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug, regex: "/book/" } }) {
      html
      frontmatter {
        title
        date
        keywords
        exerpt
        featuredimage
        author
        pricing {
          btntxt
          btnlink
          exerpt
          name
          price
          interval
          popular
        }
      }
      id
      fields {
        slug
      }
    }
  }
`;