
import React from 'react';
import './_site-header.scss'
import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'

const Header = () => {
    return (<header class="site-header">
            <div class="wrapper">
                <h1 class="headline headline--logo"><a href="#"><strong>Taimoor Sattar</strong></a></h1>

                <div class="site-header__menu group">

                    <nav class="primary-nav primary-nav--pull-right">

                        <ul class="nav">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                    </nav>

                </div>

            </div>
        </header>);
};

export default Header;