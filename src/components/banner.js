import React from 'react';

import './_site-banner.scss';
import './_wrapper.scss';
import './_headline.scss';
import './_primary-nav.scss';
import '../styles/_btn.scss';

const Banner = props => {
  let siteMeta = props.data[0].siteMetadata;

  return (
    <div className="site-banner">
      <div className="wrapper wrapper--narrow">
        <div className="site-banner__info">
          <h1 className="headline">
            {siteMeta.name}
          </h1>
          <div className="headline headline__text headline--dull headline--b-margin-medium">
            {siteMeta.title}
          </div>
          <p className="headline headline__text">{siteMeta.exerpt}</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
