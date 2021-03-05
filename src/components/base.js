import React from 'react';

import './_wrapper.scss';
import './_headline.scss';
import './_primary-nav.scss';
import './_sect.scss';

const Base = () => (
  <div>
    <main>
      <section className="sect__par">
        <div className="wrapper wrapper--narrow">
          <h2 className="headline headline__sect">About, Taimoor Sattar</h2>

          <div className="headline headline__sect">
            <p>
              I am a Full Stack Web Developer and love to code as a profession.
              I have a bachelor degree and always curious to learn new things.
              For past years, I have been involved in designing stuff and
              Photoshop veteran. I have also experienced web developer; learn
              many framework and language. Besides of which framework/ language
              is used, I used to break down complex concepts in an accessible
              and intuitive way.
            </p>

            <p className="headline headline__sect">
              I have experience to write website from scratch with modern
              practice. Hand on experience with cloud platform and traditional
              services.
            </p>
          </div>
        </div>
      </section>

      <div className="sect__par">
        <div className="wrapper wrapper--narrow">
          <h2 className="headline headline__sect">Core Skills</h2>

          <div className="sect">
            <ul>
              <li>Exceptional Communication Skills</li>
              <li>Bridge the gap between design and development</li>
              <li>Problem solver</li>
              <li>Understand and Explain the problem well.</li>
            </ul>
          </div>

          <h2 className="headline headline__sect">Technical Skills</h2>

          <div className="sect">
            <ul>
              <li>Git collaboration & deployments</li>
              <li>Craft beautiful website from scratch</li>
              <li>Responsive & mobile layouts</li>
              <li>Single Page Application (React)</li>
              <li>WordPress theme development</li>
              <li>Docker and Kubernetes</li>
              <li>SEO & Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper--narrow">
        <h2 className="headline headline__sect">People I Follow</h2>

        <div className="sect">
          <ul>
            <li>
              <a href="https://twitter.com/learnwebcode">Brad Schiff</a> - HTML,
              CSS, JavaScript, and custom WordPress development stuff.
            </li>
            <li>
              <a href="https://twitter.com/taniarascia">Tania Rascia</a> - Full
              Stack Web Developer.
            </li>
            <li>
              <a href="https://twitter.com/chris_noring">Chris Noring</a> -
              Cloud Developer Advocate.
            </li>
          </ul>
        </div>
      </div>

      <div className="sect__par">
        <div className="wrapper wrapper--narrow">
          <h2>Contact me</h2>

          <div className="headline headline__sect">
            <p>
              Email me at{' '}
              <a href="mailtio:taimoorsattar7@gmail.com">
                taimoorsattar7@gmail.com
              </a>
              . I would like to hear from you and will respond to your email in
              timely fashion.
            </p>
          </div>

          <span>
            <a
              href="https://twitter.com/taimoorsattar7?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-show-count="true"
            >
              Follow @taimoorsattar7
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </span>
        </div>
      </div>
    </main>
  </div>
);

export default Base;
