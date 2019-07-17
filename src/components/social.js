
import React from 'react';

import './_site-banner.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'

import socialTwitter from "../images/social/twitter.svg"
import socialEmail from "../images/social/email.svg"
import socialDev from "../images/social/dev.svg"
import socialGithub from "../images/social/github.svg"
import socialMedium from "../images/social/medium.svg"
import socialLinkedin from "../images/social/linkedin.svg"


const Social = (props) => {


    return (

      <div className="sect__links-bar">

        <div className="primary-nav">
          <ul className="social">

            <li >
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/taimoorsattar7">
                <img src={socialTwitter} alt="Twitter" />
              </a>
            </li>

            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/taimoorsattar">
                <img src={socialLinkedin} alt="Linkedin" />
              </a>
            </li>

            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/taimoorsattar7">
                <img src={socialGithub} alt="Medium" />
              </a>
            </li>

            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@taimoorsattar">
                <img src={socialMedium} alt="Medium" />
              </a>
            </li>

            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://dev.to/taimoorsattar7">
                <img src={socialDev} alt="DEV" />
              </a>
            </li>

            <li>
              <a rel="noopener noreferrer" target="_blank" href="mailto:taimoorsattar7@gmail.com">
                <img src={socialEmail} alt="Mail" />
              </a>
            </li>

          </ul>
        </div>
      </div>);
};
export default Social;