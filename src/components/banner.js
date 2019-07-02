
import React from 'react';

import './_site-banner.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_btn.scss'

import oceanImg from "../images/ocean.jpg"

const Banner = () => {
    return (
        <div class="site-banner">
<img class="site-banner__bg-image" src={oceanImg} alt="ocean" />
<div class="site-banner__up">

  <div class="wrapper wrapper--narrow">

    <h1 class="headline headline__title">Front-end Engineer</h1>

    <div class="sect__links-bar">

      <div class="primary-nav">
        <ul class="social">

          <li >
            <a class="btn btn--small" target="_blank" href="https://twitter.com/taimoorsattar7">
              twitter
            </a>
          </li>

          <li>
            <a class="btn btn--small" target="_blank" href="https://www.linkedin.com/in/taimoorsattar">linkedin</a>
          </li>

          <li>
            <a class="btn btn--small" target="_blank" href="https://github.com/taimoorsattar7">
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