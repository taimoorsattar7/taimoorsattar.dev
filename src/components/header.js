import React, { useState } from 'react';
import { Link } from 'gatsby';

import './_site-header.scss';
import './_wrapper.scss';
import './_headline.scss';
import './_primary-nav.scss';
import './_sect.scss';
import './_page.scss';

import logo from '../images/logo.svg';
import send from '../images/send.svg';

import about from '../images/about-icon.svg';
import blogs from '../images/blogs-icon.svg';
import contact from '../images/contact-icon.svg';

const Header = () => {
  const [hamBurger, handleHamBurger] = useState(true);

  return (
    <>
      <header className="site-header">
        <div
          className={
            'wrapper wrapper--narrow' +
            (hamBurger ? '' : ' wrapper--no-bottom-padd')
          }
        >
          <h1 className="headline headline--logo">
            <Link to="/?from=header">
              <img
                className="site-header__logo"
                src={logo}
                alt="Taimoor Sattar"
              />
              <span className="site-header__logo-text">Taimoor Sattar</span>
            </Link>
          </h1>

          <div
            onClick={() => handleHamBurger(!hamBurger)}
            className={
              hamBurger
                ? 'site-header__menu-icon'
                : 'site-header__menu-icon--close-x'
            }
          >
            <div className="site-header__menu-icon__middle"></div>
          </div>

          <div className="site-header__logo-send">
            <a href="mailto:taimoorsattar7@gmail.com">
              <img
                className="site-header__logo"
                src={send}
                alt="Taimoor Sattar"
              />
            </a>
          </div>

          <nav
            className={
              'primary-nav primary-nav--pull-right' +
              (hamBurger ? ' primary-nav--vanish' : '')
            }
          >
            <ul className="nav">
              <li>
                <Link to="/about?from=header">
                  <img src={about} alt="Taimoor Sattar" />
                  <span>About</span>
                </Link>
              </li>

              <li>
                <Link to="/blogs?from=header">
                  <img src={blogs} alt="Taimoor Sattar" />
                  <span>Blogs</span>
                </Link>
              </li>

              <li>
                <Link to="/books?from=header">
                  <img src={blogs} alt="Taimoor Sattar" />
                  <span>Books</span>
                </Link>
              </li>

              <li>
                <Link to="/contact?from=header">
                  <img src={contact} alt="Taimoor Sattar" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
