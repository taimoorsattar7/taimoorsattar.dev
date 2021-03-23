import React from 'react';

import './_Pricetable.scss';

const Pricetable = props => {
    let pricing = props.pricing;
    return (
        <div id="pricing" className="container">

            {pricing.map((item) => (
                <div className={`plan ${item.popular ? "popular" : ""}`}>
                    <div className="plan__body">
                        <div className="plan__title">{item.name}</div>
                        <div className="plan__price">
                            {`€ ${item.price}`} <span className="month">{`/ ${item.interval}`}</span>
                        </div>
                        <div>
                            <a href={item.btnlink}>
                                <button>{item.btntxt}</button>
                            </a>
                        </div>
                    </div>
                    <div className="plan__items">
                        <span className="headline headline__sml headline--dull">
                            {item.exerpt}
                        </span>
                    </div>
                </div>
            ))}

        </div>
    );
};
export default Pricetable;
