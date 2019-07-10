import React from "react"

import Banner from '../components/banner'

import aboutImg from "../images/about.jpg"

import PrimaryLayout from '../templates/primarylayout'


const IndexPage = () => (
  <div>
    <PrimaryLayout>
    
      <Banner title="About Me" img={aboutImg}></Banner>

    </PrimaryLayout>

  </div>
)

export default IndexPage
