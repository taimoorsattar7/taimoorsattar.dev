import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import '../components/_misc.scss'

const PrimaryLayout = (props) => (<>
        
            <Header></Header>
            
                <div className="misc">
                    {props.children}
                </div>
            <Footer></Footer>
    
    </>);

export default PrimaryLayout;