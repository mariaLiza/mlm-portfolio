import React from "react";
import "./App.css";
import logo from "./mlmLogo.png";

function App() {
  return (
    <div id="page-top">
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div class="container">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
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
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section class="page-section bg-primary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 id="aboutMe" class="mt-0">About me</h2>
              <hr class="divider light my-4" />
              <p class="text-white-50 mb-4">
                  Caribbean born, New York City based.
                  <br /><br />
                  I am passionate about programming, especially creating
                  beautiful applications that are both user friendly and
                  accessible for all.
                  <br /><br />
                  Enrolled in an intensive 12-month, Google-funded software engineering fellowship with a 9% acceptance rate, at <a href="https://www.pursuit.org/">Pursuit </a>in Long Island City, Queens.
                  Having majored in film and tv, and specializing in traditional
                  animation, I'm thrilled to bring my creativity and artistic
                  background to web development.
                  <br /><br />
                  I'm also a professional baker and chocolatier and love to
                  dabble in the visual arts!
                
              </p>
              <a
                class="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
              >
                Check out my skills
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
                <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                <h3 class="h4 mb-2">Sturdy Themes</h3>
                <p class="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                <h3 class="h4 mb-2">Up to Date</h3>
                <p class="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                <h3 class="h4 mb-2">Ready to Publish</h3>
                <p class="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                <h3 class="h4 mb-2">Made with Love</h3>
                <p class="text-muted mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="assets/img/portfolio/fullsize/1.jpg"
              >
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/thumbnails/1.jpg"
                  alt=""
                />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="assets/img/portfolio/fullsize/2.jpg"
              >
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/thumbnails/2.jpg"
                  alt=""
                />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="assets/img/portfolio/fullsize/3.jpg"
              >
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/thumbnails/3.jpg"
                  alt=""
                />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="assets/img/portfolio/fullsize/4.jpg"
              >
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/thumbnails/4.jpg"
                  alt=""
                />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="assets/img/portfolio/fullsize/5.jpg"
              >
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/thumbnails/5.jpg"
                  alt=""
                />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="assets/img/portfolio/fullsize/6.jpg"
              >
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/thumbnails/6.jpg"
                  alt=""
                />
                <div class="portfolio-box-caption p-3">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider my-4" />
              <p class="text-muted mb-5">
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (646) 349-0455</div>
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

      <footer class="bg-light py-5">
        <div class="container">
          <div class="small text-center text-muted">
            Copyright © 2020 Maria L. Martinez
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
