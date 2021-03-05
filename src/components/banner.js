import React from 'react';

import './_site-banner.scss';
import './_wrapper.scss';
import './_headline.scss';
import './_primary-nav.scss';
import './_btn.scss';

import ProfileGallery from './ProfileGallery';

const Banner = props => {
  return (
    <div className="site-banner">
      <div className="wrapper wrapper--narrow">
        <div className="site-banner__info">
          <h1 className="headline">
            {props.data.title}
          </h1>
          <div className="headline headline__text headline--dull headline--b-margin-medium">
            Full-Stack Developer
          </div>
          <p className="headline headline__text">{props.data.about}</p>
        </div>

        {/* <ProfileGallery /> */}
      </div>
    </div>
  );
};

export default Banner;
