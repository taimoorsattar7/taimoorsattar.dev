
import React from 'react';

import './_site-banner.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_btn.scss'

import oceanImg from "../images/ocean.jpg"

const Banner = (props) => {

  const image = props.img ? props.img: oceanImg;
  const title = props.title ? props.title : "Page";

    return (
      <div className="site-banner">
    <img className="site-banner__bg-image" src={image} alt="ocean" />
    <div className="site-banner__up">

    <div className="wrapper wrapper--narrow">

      <div className="site-banner__title-wrapper">
        <h1 className="headline headline__title">{title}</h1>
      </div>

      

      <div className="sect__links-bar">

        <div className="primary-nav">
          <ul className="social">

            <li >
              <a className="btn btn--small" rel="noopener noreferrer" target="_blank" href="https://twitter.com/taimoorsattar7">
                twitter
              </a>
            </li>

            <li>
              <a className="btn btn--small" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/taimoorsattar">linkedin</a>
            </li>

            <li>
              <a className="btn btn--small" rel="noopener noreferrer" target="_blank" href="https://github.com/taimoorsattar7">
                github
              </a>
            </li>

          </ul>
        </div>
      </div>

    </div>
    </div>  

</div>);
};

export default Banner;