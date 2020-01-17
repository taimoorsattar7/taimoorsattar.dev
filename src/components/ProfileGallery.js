
import React from 'react';

import './_site-banner.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'

/*
import socialTwitter from "../images/social/twitter.svg"
import socialDev from "../images/social/dev.svg"
import socialGithub from "../images/social/github.svg"
import socialMedium from "../images/social/medium.svg"
import socialLinkedin from "../images/social/linkedin.svg"
*/


const ProfileGallery = (props) => {

    return (

        <div className="site-banner__frame">
            <img src="/img/profile.jpeg" alt="Taimoor Sattar" />
        </div>

      );
};
export default ProfileGallery;