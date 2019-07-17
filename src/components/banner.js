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

        <h1 className="headline headline__title">{props.data.title}</h1>
        <p className="headline headline__info">{props.data.about}</p>
      </div>

      <Social />

    </div> 

</div>);
};

export default Banner;