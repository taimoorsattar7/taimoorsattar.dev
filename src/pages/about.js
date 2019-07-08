import React from "react"

import Header from '../components/header'

import Banner from '../components/banner'

import Footer from '../components/footer'

import aboutImg from "../images/about.jpg"



const IndexPage = () => (
  <div>
    <Header></Header>
    <Banner title="About Me" img={aboutImg}></Banner>

    <Footer></Footer>

  </div>
)

export default IndexPage
