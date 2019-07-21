import React from "react"

import PrimaryLayout from '../templates/primarylayout'

import SEO from '../components/SEO'

const IndexPage = () => (<>
    <PrimaryLayout>

      <SEO />
    
      <div className="wrapper wrapper--narrow">
        <h2 className="headline headline--b-margin-small">About</h2>
        <div className="headline headline__text">
          My Name is Taimoor Sattar. I love to code as a profession. I am UX/UI designer, Writer and a developer. I have completed my bachelor degree.  
        </div>
      </div>

    </PrimaryLayout>

  </>)

export default IndexPage
