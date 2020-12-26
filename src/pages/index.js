import React from "react"

import Layout from "../components/Layout"
import PageFooter from "../components/PageFooter"
import SideBar from "../components/SideBar"
import ContactForm from "../components/contactForm"

import pic1 from "../assets/images/pic01.png"
import pic8 from "../assets/images/avatar.jpg"
import Scroll from "../components/Scroll"
import Resume from "../assets/docs/Resume.pdf"
import pic2 from "../assets/images/pic02.png"

const sections = [
  { id: "top", name: "Intro", icon: "fa-home" },
  { id: "portfolio", name: "Portfolio", icon: "fa-th" },
  { id: "about", name: "About Me", icon: "fa-user" },
  { id: "skills", name: "Skills", icon: "fa-cog" },
  { id: "contact", name: "Contact", icon: "fa-envelope" },
]

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
            <p>Here are some of my projects.</p>
          </header>

          <footer>
            <Scroll type="id" element={"portfolio"}>
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
            ' The art of programming is the skill of controlling complexity '
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              {/* CAN FIT ANOTHER PROJECT HERE */}
              <article className="item">
                {/* edited line below to change home route? */}
                <a href="https://github.com/kceron/pm-front-end" className="image fit">
                  <img src={pic1} alt="" />
                </a>
                <header>
                  <h3>Pronto Meal</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
            {/* CAN FIT ANOTHER PROJECT HERE */}
             <article className="item">
                <a href="https://github.com/kceron/mod3-arte-luz-backend" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Arte Luz</h3>
                </header>
              </article>
            </div>
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

          <a href="/about" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>Hello all!</p>
          <p>
            I am Karem, a Full-Stack Developer with experience building web
            applications in React, Redux, JavaScript, Ruby on Rails and
            PostgreSQL.
          </p>
          <p>Currently located in NYC.</p>

          <p className="Download-butt">
            <a href={Resume} className="button" download>
              <i className="fa fa-download"></i>
              Download Resume
            </a>
          </p>
        </div>
      </section>

      <section id="skills" className="four">
        <div className="container">
          <header>
            <h2>Skills</h2>
          </header>

          {/* <div>
            <h3>Languages</h3>
            <div>
              <svg></svg>
              <p>JavaScript</p>
            </div>
            <div>
                <svg></svg>
                <p>Ruby</p>
            </div>
            <div>
                <svg></svg>
                <p>HTML</p>
            </div>
            <div> */}
                {/* <svg></svg>
                <p>CSS</p>
            </div>
          </div>

          <div>
            <h3>Frontend</h3>
            <div>
                <svg></svg>
                <p>React</p>
            </div>
            <div>
                <svg></svg>
                <p>Redux</p>
            </div>
            <div>
                <svg></svg>
                <p>Gatsby</p> */}
            {/* </div>
          </div>

          <div>
            <h3>Backend</h3>
            <div>
                <svg></svg>
                <p>Ruby on Rails</p>
            </div>
            <div>
                <svg></svg>
                <p>Node.js</p>
            </div>
          </div>

          <div>
            <h3>Database</h3>
            <div>
                <svg></svg>
                <p>PostgreSQL</p>
            </div>
            <div>
                <svg></svg>
                <p>MySQL</p>
            </div> */}
          {/* </div> */}

        
        </div>
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2> Let's talk!</h2>
          </header>
          <ContactForm />
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
)

export default IndexPage
