import React from 'react';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact';

const ContactUs = ({ location }) => (
  <>
    <Layout location={location} title="Contact Me">
      <SEO title="All posts" />
      <Bio />
      <Contact />
    </Layout>
  </>
);

export default ContactUs;
