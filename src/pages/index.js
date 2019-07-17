import React from "react"

import Banner from '../components/banner'

import PrimaryLayout from '../templates/primarylayout'

const info = {
  title: `I'm Taimoor Sattar`,
  about: "I am front end engineer with over 5-year experience of graphic and web development with high standard. I have a bachelor degree and work with technology like WordPress, React, Javascript and Gatsby. Besides of which framework/ language is used, I used to break down complex concepts in an accessible and intuitive way."
}

const IndexPage = () => (
  <div>

    <PrimaryLayout>

      <Banner data={info}></Banner>

    </PrimaryLayout>

  </div>
)

export default IndexPage
