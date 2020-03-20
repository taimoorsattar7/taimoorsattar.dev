import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import '../components/_misc.scss'
import '../components/_main.scss'

const PrimaryLayout = (props) => (<div className="main">
        
    <Header></Header>
        <div className="main--l-gap">
            {props.children}
        </div>
    <Footer></Footer>
    
</div>);

export default PrimaryLayout;