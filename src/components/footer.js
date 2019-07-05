import React from "react"
import { Link } from "gatsby"

import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_footer.scss'


const Footer = () => (
  <div>
    <footer className="footer">
  <div className="sect__par">
    <div className="wrapper wrapper--narrow">

      <div className="primary-nav">

        <ul className="footer">
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/resources/">Resources</Link></li>
          <li><Link to="/blogs/">Blogs</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          <li><a href="https://github.com/taimoorsattar7/taimoorsattar.com">View Source</a></li>
        </ul>

      </div>

    </div>

  </div>

</footer>
  </div>
)

export default Footer



