import React from "react"

import Banner from '../components/banner'

import contactImg from "../images/contact.jpg"
//const contactImg = React.lazy(() => import('../images/contact.jpg'));

import PrimaryLayout from '../templates/primarylayout'


const IndexPage = () => (
  <div>
    <PrimaryLayout>
      
      <Banner title="Contact Me" img={contactImg}></Banner>

      <div className="wrapper wrapper--narrow">
          For any information contact me at <a href="mailto:taimoorsattar7@gmail.com">taimoorsattar7@gmail.com</a>
      </div>

    </PrimaryLayout>

  </div>
)

export default IndexPage
