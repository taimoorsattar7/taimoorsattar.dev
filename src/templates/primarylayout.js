import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/SEO'

const PrimaryLayout = (props) => (
    <div>
        <SEO />
        <Header></Header>
            {props.children}
        <Footer></Footer>
    </div>
);

export default PrimaryLayout;