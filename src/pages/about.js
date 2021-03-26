import React from 'react';

import Layout from "../components/layout"


const IndexPage = ({ location }) => (
  <Layout location={location}>

    <div className="wrapper wrapper--narrow">
      <h2 className="headline headline--b-margin-small">About</h2>
      <div className="headline headline__text">
        <p>
          My Name is Taimoor Sattar and front-end developer. I love to code as
          a profession. I have completed my bachelor degree and work with
          technology like WordPress, React, Graphql and Jamstack. I have good
          taste of UX/UI designer. I appreciate white space, balance, impact,
          hierarchy; and all of the other hallmarks of good design. I enjoy
          collaborating with developers, growing and pushing the boundaries of
          development to craft elegant, modern user experiences.
          </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
