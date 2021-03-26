import React from 'react';

import SEO from '../components/seo';

import PrimaryLayout from '../templates/primarylayout';

const seoConfigure = {
  title: 'Contact',
  description: 'Contact me.',
  keywords: 'contact, inform',
};

const IndexPage = () => (
  <>
    <PrimaryLayout>
      <SEO
        title={seoConfigure.title}
        description={seoConfigure.description}
        keywords={seoConfigure.keywords}
      />

      <div className="wrapper wrapper--narrow">
        <h2 className="headline headline--b-margin-small">Contact</h2>

        <div className="headline headline__text">
          For any information contact me at{' '}
          <a href="mailto:taimoorsattar7@gmail.com">taimoorsattar7@gmail.com</a>
        </div>
      </div>
    </PrimaryLayout>
  </>
);

export default IndexPage;
