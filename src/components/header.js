
import React from 'react';
import { Link } from "gatsby"

import './_site-header.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_sect.scss'

import logo from "../images/logo.svg"


const Header = () => {
    return (<header className="site-header">
            <div className="wrapper wrapper--narrow">

                <h1 className="headline headline--logo">
                    <img className="site-header__logo" src={logo} alt="Taimoor Sattar" />
                    <Link to="/">Taimoor Sattar</Link>
                </h1>

                <div className="site-header__menu group">
        
                    <nav className="primary-nav primary-nav--pull-right">

                        <ul className="nav">
                            <li><Link to="/about/">About</Link></li>
                            <li><Link to="/resources/">Resources</Link></li>
                            <li><Link to="/blogs/">Blogs</Link></li>
                            <li><Link to="/contact/">Contact</Link></li>
                        </ul>

                    </nav>

                </div>

            </div>
        </header>);
};

export default Header;