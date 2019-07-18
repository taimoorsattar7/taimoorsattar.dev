import React from "react"
import { Link } from "gatsby"

import PrimaryLayout from '../templates/primarylayout'

import '../components/_error.scss'


const Four0Four = () => (
  <div>

    <PrimaryLayout>

    <div className="wrapper wrapper--narrow">

      <div className="error">
        <div className="headline headline__error-text headline--mid">404 PAGE</div>
        
        <div className="headline headline__text headline--mid">
          <Link to="/">HOME PAGE</Link>
        </div>

      </div>
    
    </div>

    </PrimaryLayout>

  </div>
)

export default Four0Four
