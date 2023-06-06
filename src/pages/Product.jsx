import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Project from "../components/Project";
import ServicesWork from "../components/ServicesWork"
import Testimonial from '../components/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Product() {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);
  const layer4 = useRef(null);
  const layer5 = useRef(null);
  const SliderContainer = useRef(null);
  const SliderText = useRef(null);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const gotoTop = document.querySelector("#gotoTop");
    if (scrolled > 500) {
      gotoTop.classList.add("fade");
      gotoTop.classList.remove("fadeOut");
      setVisible(true);
    }
    else if (scrolled <= 500) {
      gotoTop.classList.remove("fade");
      gotoTop.classList.add("fadeOut");
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }
  }

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const Mousemove = (event) => {
    let xPos1 = 1 - event.clientX * 0.09 + "px";
    let yPos1 = 1 - event.clientY * 0.09 + "px";

    let xPos2 = event.clientX * 0.09 + "px";
    let yPos2 = event.clientY * 0.09 + "px";


    layer1.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
    layer2.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
    layer3.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
    layer4.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
    layer5.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;

  }

  const scrollBehaviour = () => {
    let value = window.scrollY;
    let pos1 = -(value * 35 / 100);
    SliderContainer.current.setAttribute('style', `transform: translate3d(0px, ${pos1}px, 0px)`);
    SliderText.current.style.opacity = (1 - value / 700);
  }

  useEffect(() => {
    AOS.init();
    document.title = "Product Development";
    window.addEventListener("scroll", toggleVisible);
    window.addEventListener("mousemove", Mousemove);
    window.addEventListener("scroll", scrollBehaviour);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
      window.removeEventListener("mousemove", Mousemove);
      window.removeEventListener("scroll", scrollBehaviour);
    }

  }, [])

  return (

    <div className='product__wrapper'>

      <div className="left__border"></div>
      <div className="right__border"></div>

      {/* ============== Side Panel For Mobile Screens ============= */}
      <div id="side__panel" onClick={() => setToggle(false)} className={`${toggle && "show__panel"}`}>

        <div className="side__panel__wrap">
          <span id='close__menu'>
            <i className="ri-close-circle-fill"></i>
          </span>
          <div className="mobile__logo">
            <a href="/" className='retina__logo'>
              <img loading='lazy' src="asset/unitedmonks-logo@2x.png" alt="img" />
            </a>
          </div>

          <nav className='side__panel__nav'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/portfolio" >Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

      </div>

      {/* ======================= Navbar Section ===================== */}
      <header className="header__section">

        <div id="ham__menu" onClick={() => setToggle(true)}>
          <div className="bar__one"></div>
          <div className="bar__two"></div>
          <div className="bar__three"></div>
        </div>

        <div className="logo">
          <a href="/" className='standard__logo'>
            <img loading='lazy' src="asset/unitedmonks-logo.png" alt="img" />
          </a>
          <a href="/" className='retina__logo'>
            <img loading='lazy' src="asset/unitedmonks-logo@2x.png" alt="img" />
          </a>
        </div>

        <ul className='header__ul'>
          <li><Link to='/' className='header__link' >home</Link></li>
          <li><Link to='/story' className='header__link' >our story</Link></li>
          <li><Link to='/services' className='header__link' >services</Link></li>
          <li><Link to='/career' className='header__link' >career</Link></li>
          <li><Link to='/portfolio' className='header__link' >portfolio</Link></li>
          <li><Link to='/contact' className='header__link' >contact</Link></li>
        </ul>
      </header>

      {/* ======================= Slider Section ====================== */}
      <section id="slider__section" >
        <div className="slider__container" ref={SliderContainer}>

          <div className="parallax">
            <div className="layer layer1" ref={layer1}>
              <div className="some__space2">
                <div className="green__circle"></div>
              </div>
            </div>

            <div className="layer layer2" ref={layer2}>
              <div className="some__space2">
                <div className="medium__circle"></div>
              </div>
            </div>
          </div>

          <div className="container clearfix">
            <div className="ui__banner" ref={SliderText}>
              <label className='text-white'>Product Development</label>
              <h1 className="text-white"><span className="green">Got an idea?</span> <span className="white last__child">Let’s build on it.</span></h1>
              <ul>
                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/product icons/1.png" alt="img" />
                    </div>
                    <p className='text-white'>AWS</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/product icons/2.png" alt="img" />
                    </div>
                    <p className='text-white'>React</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/product icons/3.png" alt="img" />
                    </div>
                    <p className='text-white'>Node.js</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/product icons/4.png" alt="img" />
                    </div>
                    <p className='text-white'>Laravel</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/product icons/5.png" alt="img" />
                    </div>
                    <p className='text-white'>Wordpress</p>
                  </div>
                </li>

              </ul>
              <Link to="/contact" className='bg__green'>Let's get started</Link>
            </div>
          </div>

          <a href="#content" className='scroll__animation__parent tab__visible'>
            <i className="ri-arrow-down-double-line scroll__animation"></i>
          </a>


        </div>
      </section>

      <div id='main__content'>

        {/* =================== Carousel Section ====================== */}
        <Carousel />

        {/* =================== Attract Customer Section =============== */}
        <section id='attract_customer__section'>
          <div className="parallax">
            <div className="layer layer3" ref={layer3}>
              <div className="some__space2">
                <div className="large__circle bg__green"></div>
              </div>
            </div>
            <div className="layer layer4" ref={layer4}>
              <div className="some__space2">
                <div className="small__circle bg__green"></div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="section">
              <div className="ecommerce_solution_content">
                <h2>
                  Want to build a scalable web and mobile platform? <br />
                  <Link to="/contact">We can help</Link>
                </h2>
                <p>At United Monks, we design, engineer, and develop scalable products for entrepreneurs, inventors, startups,
                  and businesses alike. From conceptualization to realization, our team of experienced fullstack developers,
                  UI/UX designers, QAs and DevOps engineer does it all. Masters of our
                  craft, we create products that look good, work even better, and make an impact on the market, all while
                  sticking to the client requirements. We don’t just propose innovative ideas and concepts, we see them
                  through and make them work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================== What we Offer Section =============== */}
        <div className="container" id='what_we_offer__section'>
          <div className="web_app_offer">
            <h2 className="text-black">What We Offer</h2>
            <p>As an experienced team of engineers, we address all your product requirements with the best technologies.
              After analyzing all the specifics of your platform, we propose a combination of tools and methodology that is business-effective
              while tackling your industrial challenges at the same time.</p>
            <div className="web_app_offer_child row">

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/1.png" alt="img" />
                  <span>Node.js <br />Websites</span>
                  <p>We build Node.js based web applications that are stable, powerful, and profitable. In short, they meet with, and exceed, your expectations.</p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/2.png" alt="img" />
                  <span>Laravel <br />Websites</span>
                  <p>While laravel based websites are known to be plain and simple, we add the beauty and elegance that will blow your mind.</p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/3.png" alt="img" />
                  <span>CMS Based <br />Websites</span>
                  <p>With customized CMS based applications, we ensure that you are in control of creation, modification, or removal of content from your website.</p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/4.png" alt="img" />
                  <span>Wordpress <br />Websites</span>
                  <p>Stay ahead of your competitor while staying current with market trends with our cost-effective and customisable WordPress based website.  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/5.png" alt="img" />
                  <span>API <br />Development</span>
                  <p>For a complete API development environment, from voice and video to payment and cloud and more, we got you covered.</p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/6.png" alt="img" />
                  <span>Web <br />Optimisation</span>
                  <p>Under controlled experimentation, we thrive to improve your web application's ability to drive business and profits. </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/7.png" alt="img" />
                  <span>ECommerce <br />Applications</span>
                  <p>We build easy-to-navigate and scalable e-commerce applications so that you stand out in the competitive landscape. </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 nopadding">
                <div className="what_we_offer_child_content">
                  <img src="/asset/what we offer icons/8.png" alt="img" />
                  <span>Fixing Bugs <br />and Issues</span>
                  <p>Our team of experts manages support services so that your operating system keeps on going fail-safe and bug-free.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =================== Our Values Section =============== */}
        <section id='our__values__section' className='bg__blue'>
          <div className="container">
            <h2 className='green'>Why you need our dedicated team of web developers</h2>

            <div className="values__point row">

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                <div className="value__unit">
                  <label className="montserrat">01</label>
                  <p className="text-white">Expert<br />Team</p>
                  <span className="text-white">As a team, we aim to exceed your expectations in terms of quality and services.</span>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                <div className="value__unit">
                  <label className="montserrat">02</label>
                  <p className="text-white">Ironclad <br/>NDA’s</p>
                  <span className="text-white">We understand the privacy and confidentiality you would like to maintain.</span>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                <div className="value__unit">
                  <label className="montserrat">03</label>
                  <p className="text-white">Top-grade <br/>Services</p>
                  <span className="text-white">Our services are designed to help you and your business grow.</span>
                </div>
              </div>

              <div className="col-xl-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-lg-4 col-md-4 col-sm-4 nopadding">

              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                <div className="value__unit">
                  <label className="montserrat">04</label>
                  <p className="text-white">No Setup <br/>fees</p>
                  <span className="text-white">Because you trust us, installation and set-up cost is on the house.</span>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                <div className="value__unit">
                  <label className="montserrat">05</label>
                  <p className="text-white">Marketing Power</p>
                  <span className="text-white">We promote your website leveraging techniques like SEO and Google listing.</span>
                </div>
              </div>

            </div>

            <div className="parallax">
              <div className="layer layer5" ref={layer5}>
                <div className="some__space2">
                  <div className="medium__circle bg__green"></div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =================== Project Section ================ */}
        <Project heading='Projects' />

        <div className="extraextrapadding"></div>

        {/* =================== Testimonial Section ===================== */}
        <Testimonial />

        <ServicesWork />

      </div>

      <Footer />

      <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}> <i className="ri-arrow-up-s-line"></i> </div>

    </div>

  )
}

export default Product