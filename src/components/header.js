
import React from 'react';
import { Link } from "gatsby"

import './_site-header.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_sect.scss'


const Header = () => {
    return (<header className="site-header">
            <div className="wrapper">
                <h1 className="headline headline--logo"><Link to="/"><strong>Taimoor Sattar</strong></Link></h1>

                <div className="site-header__menu group">
        
                    <nav className="primary-nav primary-nav--pull-right">

                        <form className="sect__nav-form">
                            <input type="search" placeholder="search" id="search" name="search" />
                            <input className='sect__search' type="submit" value="Submit" />
                        </form>

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