import React from "react"

import Header from '../components/header'

import Banner from '../components/banner'

import Footer from '../components/footer'

import contactImg from "../images/contact.jpg"



const IndexPage = () => (
  <div>
    <Header></Header>
    <Banner title="Contact Me" img={contactImg}></Banner>

    <div className="wrapper wrapper--narrow">
        For any information contact me at <a href="mailto:taimoorsattar7@gmail.com">taimoorsattar7@gmail.com</a>
    </div>

    <Footer></Footer>

  </div>
)

export default IndexPage
