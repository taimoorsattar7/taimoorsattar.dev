import React from 'react';
import { Link } from 'gatsby';

import './_headline.scss';
import './_FAQ.scss';

import './_wrapper.scss';

const Footer = (props) => {

    const FAQ = props.FAQ

    const toggle = (e) => {
        
        let isopen = e.currentTarget.getAttribute('aria-expanded');


        if(isopen == 'false'){
            e.currentTarget.setAttribute('aria-expanded', "true")
        }else{
            e.currentTarget.setAttribute('aria-expanded', "false")
        }
      }


    return(
        <div className="wrapper margin-b-large">
            <h2 className="headline headline--b-margin-medium">
                Frequently Asked Questions
            </h2>

            <div className="accordion">

            {FAQ.map(item => (
                <div className="accordion-item">
                <button id="accordion-button-1"
                        aria-expanded="true"
                        onClick={e => toggle(e)}>
                    
                    <span className="headline headline__text accordion-title">
                        <b>{item.question}</b>
                    </span>
                    <span className="icon" aria-hidden="true"></span>

                </button>
                    
                <div className="accordion-content">
                <p
                    dangerouslySetInnerHTML={{
                    __html: item.answer || "",
                    }}
                    className="headline headline__text headline--dull"
                    itemProp="description"
                />

                </div>
            </div>
            ))}
            
            </div>
        </div>
    )
};

export default Footer;
