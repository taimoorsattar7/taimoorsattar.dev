import React from 'react';
import { Link } from 'gatsby';

import './_wrapper.scss';
import './_headline.scss';
import './_primary-nav.scss';
import './_footer.scss';
import './_flex.scss';

const Footer = () => (
  <footer className="footer">

    <div className="primary-nav">
      <ul className="footer-links">
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/resources/">Resources</Link>
        </li>
        <li>
          <Link to="/blogs/">Blogs</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <a href="https://github.com/taimoorsattar7/taimoorsattar.dev">
            View Source
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
