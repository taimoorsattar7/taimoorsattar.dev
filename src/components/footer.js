import React from "react"
import { Link } from "gatsby"

import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_footer.scss'

import heart from "../images/heart.svg"


const Footer = () => (
  
    <footer className="footer">
      <div className="wrapper wrapper--narrow">
      <div className="footer__content">

        <div className="footer__content-sect">
          <strong>Taimoor Sattar</strong> copyright 2019
        </div>

        <div className="footer__content-sect">

          <div className="primary-nav">

            <ul className="footer-links">
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/resources/">Resources</Link></li>
              <li><Link to="/blogs/">Blogs</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
              <li><a href="https://github.com/taimoorsattar7/taimoorsattar.com">View Source</a></li>
            </ul>

          </div>

        </div>

        <div>Made with <img src={heart} alt="love" width="15px" /></div>
      
      </div>
      </div>

      </footer>

)

export default Footer



