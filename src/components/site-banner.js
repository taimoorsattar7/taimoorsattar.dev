import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Image from "gatsby-image"

import './_wrapper.scss';
import './_headline.scss';
import './_site-banner.scss';
import './_img.scss';
import "../styles/_btn.scss"


const SiteBanner = (props) => {

    const data = useStaticQuery(graphql`
    query PicQuery {
      avatar: file(absolutePath: { regex: "/full-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 270, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const avatar = data.avatar?.childImageSharp?.fixed

    return(
        <div className="wrapper margin-b-large">
            <section className="grid info">
            <div className="column-xs-12 column-md-1">
                <div className="about">
                <h1 className="section-heading">About Me</h1>
                </div>
            </div>
            <div className="column-xs-12 column-md-4 img__not_med_size">
            <Image
                fixed={avatar}
                />
            </div>

            <div className="column-xs-12 column-md-7">
                <div className="intro">
                    <h2>I'm Taimoor Sattar, full-stack developer.</h2>
                    <p>My name is Taimoor Sattar. I've experienced in developing UI/UX for modern websites and populate the data from the back-end to visualize in the front-end.</p>

                    <p>
                      I've written a book about JAMstack. JAMstack is the modern way to build the websites as the front-end is decoupled from the back-end. You can read more about it below.
                    </p>

                    <Link className="headline--no-decor" to="/books/how-to-build-JAMstack-site">

                        <button className="btn btn__black">
                            <span className="headline headline__text headline--white">
                             <b>Read more →</b>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            </section>
        </div>
    )
};

export default SiteBanner;
