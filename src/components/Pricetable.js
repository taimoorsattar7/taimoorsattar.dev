import React from "react"

import "./_Pricetable.scss"

const Pricetable = props => {
  let pricing = props.pricing

  return (
    <div id="pricing" className="container">
      {pricing.map(item => (
        <div
          key={item.name}
          className={`plan ${item.popular ? "popular" : ""}`}
        >
          <div className="plan__body">
            <div className="plan__title">{item.name}</div>
            {item.price == 0 ? (
              <div className="plan__price">
                <i>Free</i>
              </div>
            ) : (
              <div className="plan__price">
                {`€ ${item.price}`}{" "}
                <span className="month">{`/ ${item.interval}`}</span>
              </div>
            )}

            {item.price == 0 ? (
              <div>
                <a
                  onClick={() => {
                    props.onFreebie()
                  }}
                  href={item.btnlink}
                >
                  <button>{item.btntxt}</button>
                </a>
              </div>
            ) : (
              <div>
                <a href={item.btnlink}>
                  <button>{item.btntxt}</button>
                </a>
              </div>
            )}
          </div>
          <div className="plan__items">
            <span className="headline headline__sml headline--dull">
              {item.exerpt}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Pricetable
