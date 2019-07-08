import React from "react"

import Header from '../components/header'

import Banner from '../components/banner'

import Footer from '../components/footer'


import aboutImg from "../images/resource.jpg"

const Resources = () => (
  <div>
    <Header></Header>
    <Banner title="Resources Page" img={aboutImg}></Banner>

    <Footer></Footer>

  </div>
)

export default Resources
