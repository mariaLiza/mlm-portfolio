import React from "react";
import "./App.css";
import logo from "./mlmLogo.png";
import covid from "./img/covid.jpg";
import pokemon from "./img/pokemon.jpg";
import tweets from "./img/tweets.jpg";
import twittericon from "./img/twitter.png";
import linkedin from "./img/linkedin.png";
import github from "./img/githubwhite.png";

function App() {
  return (
    <div id="page-top">
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div class="container">
          {/* <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#services">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
              <h1 class="text-uppercase text-white font-weight-bold">
                Maria Liza Martinez
              </h1>
              <hr class="divider my-4" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 font-weight-light mb-5">
                Fullstack Engineer | UX/UI
              </p>
              <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
                Dive In
              </a>
            </div>
          </div>
        </div>
      </header>

      <section class="page-section bg-primary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 id="aboutMe" class="mt-0">
                About Me
              </h2>
              <hr class="divider light my-4" />
              <p class="text-white-50 mb-4">
                Caribbean born, New York City based.
                <br />
                <br />
                I am passionate about programming, especially creating beautiful
                applications that are both user friendly and accessible for all.
                <br />
                <br />
                Enrolled in an intensive 12-month, Google-funded software
                engineering fellowship with a 9% acceptance rate, at{" "}
                <a href="https://www.pursuit.org/">Pursuit </a>in Long Island
                City, Queens.
                <br />
                Having majored in film and tv, and specializing in traditional
                animation, I'm thrilled to bring my creativity and artistic
                background to web development.
                <br />
                <br />
                I'm also a professional baker and chocolatier and love to dabble
                in the visual arts!
              </p>
              <a
                class="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
              >
                Check Out My Skills
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section" id="services">
        <div class="container">
          <h2 class="text-center mt-0">Skills</h2>
          <hr class="divider my-4" />

          <div class="row">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    className="skillsIcons2"
                    src="https://www.broughtondesigns.com.au/wp-content/uploads/2014/07/html-css-js.png"
                    alt="javascript icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    className="skillsIcons1"
                    src="https://www.cloudanalogy.co.uk/wp-content/uploads/2019/06/react.png"
                    alt="react icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    className="skillsIcons1"
                    src="https://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png"
                    alt="redux icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    className="skillsIcons1"
                    src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png"
                    alt="postgresql icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    className="skillsIcons1"
                    src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_634/https://huddle.eurostarsoftwaretesting.com/wp-content/uploads/2018/10/pm-logo-vert.png"
                    alt="postman icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    id="node"
                    className="skillsIcons2"
                    src="https://transang.me/content/images/2019/11/ExpressJS.png"
                    alt="express icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    id="node"
                    className="skillsIcons1"
                    src="https://pluspng.com/img-png/nodejs-png-node-js-on-light-background-1843.png"
                    alt="node icon"
                  />
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <p class="text-muted mb-0">
                  <img
                    id="git"
                    className="skillsIcons1"
                    src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png"
                    alt="git icon"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 id="portfolioH1" class="text-center mt-0">
        Portfolio
      </h2>
      <section id="portfolioSection" class="page-section">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src={pokemon} alt="" />
              <div class="portfolio-box-caption">
                <a
                  class="portfolio-box"
                  href="https://getyourpokemon.netlify.app/"
                >
                  <div id="category" class="project-category">
                    Get Your Pokemon!
                  </div>
                </a>
                <div class="project-name">
                  A simple frontend React application, utilizing restful API to
                  get pokemon by type and learn about specific pokemon stats
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <img id="covid" class="img-fluid" src={covid} alt="" />
              <div class="portfolio-box-caption">
                <a
                  class="portfolio-box"
                  href="https://covidnearus.netlify.app/"
                >
                  <div id="category" class="project-category">
                    COVIDNearUS
                  </div>
                </a>
                <div class="project-name">
                  A Covid-19 tracking React app created for Codecademy
                  sponsored, 48HR-Hackathon! Users can look up state-specific
                  covid information, view tweets and news feed, and find testing
                  locations nearby. Winner of Most Ambitious award from
                  Codecademy judges!
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <img id="tweet" class="img-fluid" src={tweets} alt="" />
              <div class="portfolio-box-caption">
                <a
                  class="portfolio-box"
                  href={"https://maria-martinez-cta.netlify.app/"}
                >
                  <div id="category" class="project-category">
                    CTA Project
                  </div>
                </a>
                <div class="project-name">
                  Fullstack React app, where a user may create an account, view
                  and create posts, check out other user profiles, and search
                  posts by hashtag. <br />
                  Future implementation: adapt to mobile
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider my-4" />
              <p class="text-muted mb-5">
                I'd love to hear from you! Please feel free to call or send an
                email and I'll get back to you as soon as possible!
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div id="phone">+1 (646) 349-0455</div>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>

              <a class="d-block" href="mailto:mariamartinez@pursuit.org">
                mariamartinez@pursuit.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="contactRow">
        <ul class="row">
          <li>
            <a href="https://twitter.com/xomarializaxo">
              <img id="twit"
                className="contactIcons"
                src={twittericon}
                alt="twittericon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marializamartinez/">
              <img id="linkd" className="contactIcons" src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mariaLiza">
              <img id="gh" className="contactIcons" src={github} alt="github" />
            </a>
          </li>
        </ul>
      </div>

      <footer class="bg-light py-5">
        <div class="container">
          <div class="small text-center text-muted">
            Copyright © 2020 Maria Liza Martinez
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
