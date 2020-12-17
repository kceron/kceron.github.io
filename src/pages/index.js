import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic1 from '../assets/images/pic01.png';
import pic8 from '../assets/images/avatar.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              <strong>Karem Ceron</strong>
              <br />
              Full-Stack Web Developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
          'The art of programming is the skill of controlling complexity'
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              {/* CAN FIT ANOTHER PROJECT HERE */}
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic1} alt="" />
                </a>
                <header>
                  <h3>Pronto Meal</h3>
                </header>
              </article>
            </div>
            {/* <div className="col-4 col-12-mobile"> */}
              {/* CAN FIT ANOTHER PROJECT HERE */}
              {/* <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Arte Luz</h3>
                </header>
              </article>
            </div> */}
            {/* <div className="col-4 col-12-mobile"> */}
              {/* CAN FIT ANOTHER PROJECT HERE */}
              {/* <article className="item"> */}
                {/* <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Under Construction</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Karem with an "m"</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
          Hello all!
          </p>
          <p>
          I am Karem with an "m", a Full-Stack Developer with experience building web applications in React, Redux, JavaScript, Ruby on Rails and PostgreSQL.
          </p>
          <p>
          Currently located in NYC.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2> Let's talk!</h2>
          </header>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;