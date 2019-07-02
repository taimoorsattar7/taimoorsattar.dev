import React from "react"


import './_wrapper.scss'
import './_headline.scss'
import './_primary-nav.scss'
import './_sect.scss'


const Base = () => (<div>
    <main>
  <section class="sect__par">

    <div class="wrapper wrapper--narrow">


      <h2 class="headline headline__sect">About, Taimoor Sattar</h2>

      <p class="headline headline__sect-p">
        I am a Full Stack Web Developer and love to code as a profession. I have a bachelor degree and always curious to learn new things. For past years, I have been involved in designing stuff and Photoshop veteran. I have also experienced web developer; learn many framework and language. Besides of which framework/ language is used, I used to break down complex concepts in an accessible and intuitive way.
      </p>

      <p class="headline headline__sect-p">
        I have experience to write website from scratch with modern practice. Hand on experience with cloud platform and traditional services. 
      </p>

    </div>

  </section>
  
<div class="sect__par">

  <div class="wrapper wrapper--narrow">

        <h2 class="headline headline__sect">Core Skills</h2>

        <div class="sect">

          <ul>

            <li>Exceptional Communication Skills</li>
            <li>Bridge the gap between design and development</li>
            <li>Problem solver</li>
            <li>Understand and Explain the problem well.</li>

          </ul>
        </div>

        <h2 class="headline headline__sect">Technical Skills</h2>

        <div class="sect">
          <ul>
            <li>Git collaboration & deployments</li>
            <li>Craft beautiful website from scratch</li>
            <li>Responsive & mobile layouts</li>
            <li>Single Page Application (React)</li>
            <li>WordPress theme development.</li>
            <li>Docker and Kubernetes</li>

          </ul>
        </div>


  </div>
</div>

<div class="wrapper wrapper--narrow">
  <h2 class="headline headline__sect">People I Follow</h2 >

  <div class="sect">

    <ul>

      <li><a href="https://twitter.com/learnwebcode">Brad Schiff</a> - HTML, CSS, JavaScript, and custom WordPress development stuff.</li>
      <li><a href="https://twitter.com/taniarascia">Tania Rascia</a> - Full Stack Web Developer.</li>
      <li><a href="https://twitter.com/chris_noring">Chris Noring</a> - Cloud Developer Advocate.</li>

    </ul>
  </div>

</div>


<div class="sect__par">
  <div class="wrapper wrapper--narrow">

    <h2>Contact me</h2>
    <p class="headline headline__sect-p">Email me at <a href="mailtio:taimoorsattar7@gmail.com">taimoorsattar7@gmail.com</a>. I would like to hear from you and will respond to your email in timely fashion.</p>

    <span>
      <a href="https://twitter.com/taimoorsattar7?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true">Follow @taimoorsattar7</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </span>

  </div>
</div>

</main>
  </div>)

export default Base



