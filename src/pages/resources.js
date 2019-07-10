import React from "react"

import Banner from '../components/banner'
import aboutImg from "../images/resource.jpg"

import PrimaryLayout from '../templates/primarylayout'

const Resources = () => (
  <div>
    <PrimaryLayout>
      <Banner title="Resources Page" img={aboutImg}></Banner>
    </PrimaryLayout>

  </div>
)

export default Resources
