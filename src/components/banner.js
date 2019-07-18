import React from 'react';

import './_site-banner.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_btn.scss'

import Social from "./social"


const Banner = (props) => {


    return (
      <div className="site-banner">

    <div className="wrapper wrapper--narrow">

      <div className="site-banner__info">

        <h1 className="headline headline__title headline--mid">{props.data.title}</h1>
        <p className="headline headline__text headline--mid">{props.data.about}</p>
      </div>

      <Social />

      <div className="site-banner__post">

        <h2 className="headline headline__feature headline--mid">Feature Post</h2>

        <div className="site-banner__post-block">
          <h2 className="headline headline__subtitle headline--mid">WordPress? Things You should Know Before Learning It.</h2>
          <span className="headline headline__date headline--mid">July 10, 2019 • 6 min read</span>
          <p className="headline headline__text headline--mid">This is Info about blog.</p>
        </div>

        <div className="site-banner__post-block">
          <h2 className="headline headline__subtitle headline--mid">Making Sense of React.</h2>
          <span className="headline headline__date headline--mid">July 10, 2019 • 6 min read</span>
          <p className="headline headline__text headline--mid">This is Info about blog.</p>
        </div>

      </div>
    
    </div> 

</div>);
};

export default Banner;