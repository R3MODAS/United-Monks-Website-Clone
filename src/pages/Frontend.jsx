import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ServicesWork from "../components/ServicesWork"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Frontend() {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);
  const layer4 = useRef(null);
  const layer5 = useRef(null);
  const layer6 = useRef(null);

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

    let xPos3 = 1 - event.clientX * 0.05 + "px";
    let yPos3 = 1 - event.clientY * 0.05 + "px";

    let xPos4 = 1 - event.clientX * 0.03 + "px";
    let yPos4 = 1 - event.clientY * 0.03 + "px";


    layer1.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
    layer2.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
    layer3.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
    layer4.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
    layer5.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
    layer6.current.style.transform = `translate3d(${xPos4},${yPos4},0)`;

  }

  const scrollBehaviour = () => {
    const sliderContainer = document.querySelector(".slider__container");
    const sliderText = document.querySelector(".ui__banner");
    let value = window.scrollY;
    let pos1 = -(value * 35 / 100);
    sliderContainer.setAttribute('style', `transform: translate3d(0px, ${pos1}px, 0px)`);
    sliderText.style.opacity = (1 - value / 700);
  }

  useEffect(() => {
    AOS.init();
    document.title = "Frontend Development";
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
    <div className='frontend__wrapper overflow'>

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
              <img src="asset/unitedmonks-logo@2x.webp" alt="img" />
            </a>
          </div>

          <nav className='side__panel__nav'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
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
            <img src="asset/unitedmonks-logo.webp" alt="img" />
          </a>
          <a href="/" className='retina__logo'>
            <img src="asset/unitedmonks-logo@2x.webp" alt="img" />
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
        <div className="slider__container">

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
            <div className="ui__banner">
              <label className='text-white'>FrontEnd Development</label>
              <h1 className="text-white"><span className="green">Get a high performing</span> <span className="white last__child">frontend application</span></h1>
              <ul>
                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/1.png" alt="img" />
                    </div>
                    <p className='text-white'>HTML5</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/2.png" alt="img" />
                    </div>
                    <p className='text-white'>CSS3</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/3.png" alt="img" />
                    </div>
                    <p className='text-white'>Bootstrap</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/4.png" alt="img" />
                    </div>
                    <p className='text-white'>Jquery</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/5.png" alt="img" />
                    </div>
                    <p className='text-white'>React</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/6.png" alt="img" />
                    </div>
                    <p className='text-white'>Angular</p>
                  </div>
                </li>

                <li>
                  <div className='ui__icon__container'>
                    <div className="ui__icon">
                      <img src="/asset/frontend icons/7.png" alt="img" />
                    </div>
                    <p className='text-white'>Vue</p>
                  </div>
                </li>
              </ul>
              <Link to="/contact" className='bg__green'>Get in Touch with us</Link>
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

        {/* =================== Ecommerce Section ================== */}
        <section id='ecommerce__section'>
          <div className="ecommerce__container">

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
                <div className="ecommerce__content">
                  <h2>
                    Want a pixel perfect, responsive frontend?
                    <Link to="/services">We can help</Link>
                  </h2>
                  <p>We are a team of proficient and skillful web architects and software engineers. Based on advanced
                    and latest industry trends, we aim to provide the most competent frontend development services, giving
                    you the best value for your investment. Our innovative ideas, combined with the technical expertise in
                    the field, ensure you get a product that compliments the user interface and user experience you are
                    targeting for. </p>
                  <ul>
                    <li>
                      <a href="#frontend__section">
                        <i className="fa-solid fa-circle-check green"></i>
                        Complete FrontEnd Solution
                      </a>
                    </li>
                    <li>
                      <a href="#psd_to_html__section">
                        <i className="fa-solid fa-circle-check green"></i>
                        PSD to HTML Solution
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== Frontend Section ================== */}
        <section id='frontend__section' className='bg__green clearfix'>
          <div className="section">
            <div className="container">
              <div className="frontend__container">
                <h2>Complete FrontEnd Solutions</h2>
                <p>Every user has a different navigation pattern and browsing preferences. That’s why we rely on
                  a frontend solution that is creative and pushes all the boundaries. We aim to cater to the user’s
                  needs and demands with the same efficiency on all the devices. And we create a frontend that looks
                  great, loads fast, and works without any glitches on all the screens. We develop interfaces that
                  are loved by one and all.</p>

                <ul className='clearfix'>

                  <li className="progress_bar__1">
                    <div data-aos="zoom-in" data-aos-delay="100" className="frontend_solution_circle">
                      <div className="frontend_solution_child"></div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="100" className="frontend_bar__progress_one"></div>
                    <div data-aos="fade-up" data-aos-delay="100" className='frontend_solution__text'>
                      <label>Fast</label>
                      <p>To speed up user interactivity and your business growth</p>
                    </div>
                  </li>

                  <li className="progress_bar__2">
                    <div data-aos="zoom-in" data-aos-delay="400" className="frontend_solution_circle">
                      <div className="frontend_solution_child"></div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400" className="frontend_bar__progress_two"></div>
                    <div data-aos="fade-up" data-aos-delay="400" className='frontend_solution__text'>
                      <label>Tailored</label>
                      <p>To meet up your expectations and industry standards</p>
                    </div>
                  </li>

                  <li className="progress_bar__3">
                    <div data-aos="zoom-in" data-aos-delay="700" className="frontend_solution_circle">
                      <div className="frontend_solution_child"></div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="700" className="frontend_bar__progress_three"></div>
                    <div data-aos="fade-up" data-aos-delay="700" className='frontend_solution__text'>
                      <label>Modern</label>
                      <p>To keep you up to date with the latest industry trends</p>
                    </div>
                  </li>

                  <li className="progress_bar__4">
                    <div data-aos="zoom-in" data-aos-delay="1000" className="frontend_solution_circle">
                      <div className="frontend_solution_child"></div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1000" className='frontend_solution__text'>
                      <label>Responsive</label>
                      <p>For excellent user experience and product performance</p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =================== PSD to HTML Section ================== */}
        <section id='psd_to_html__section' className='bg__blue'>
          <div className="container-fluid">
            <div className="hosted_ecommerce row">

              <div className="col-xl-6 col-lg-6 col-md-6 nopadding mobile__visible">
                <div className="hosted_ecommerce_right">
                  <img src="/asset/psd-to-html-img.png" alt="Psd To HTML Image" title="Psd To HTML Image" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                <div className="hosted_ecommerce_left">
                  <h2 className="text-white">PSD to HTML Solutions</h2>
                  <p className="text-white">From designing your website on Photoshop and Figma to converting it to code using HTML, we ace at everything. We take pride in providing customized solutions for your business challenges, using
                    the latest industrial trends and technologies. We weave our industrial expertise and technological innovation
                    to transform PSD files into responsive and high-performing website pages.</p>
                  <ul className='text-white'>
                    <li>Fully responsive HTML that is compliant with all the devices. </li>
                    <li>Hand-coded and pixel perfect HTML/CSS as per the design file.</li>
                    <li>Semantic code tested and compliant with all the browsers.</li>
                    <li>jQuery animations - sliders, tooltips, and more.</li>
                    <li>Custom fonts to bring a unique look to your website.</li>
                    <li>W3C validated code which means a clean and bug-free website.</li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 nopadding desktop__visible">
                <div className="hosted_ecommerce_right">
                  <img src="/asset/psd-to-html-img.png" alt="Psd To HTML Image" title="Psd To HTML Image" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 nopadding tab__visible">
                <div className="hosted_ecommerce_right">
                  <img src="/asset/psd-to-html-img.png" alt="Psd To HTML Image" title="Psd To HTML Image" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================== Project Section ================ */}
        <section id='project__portfolio__section'>
          <div className="project__container">
            <h2>Projects</h2>
            <div className="container">
              <div className="portfolio__carousel">
                <div className="parallax">
                  <div className="layer" ref={layer5}>
                    <div className="some__space2">
                      <div className="large__circle bg__green"></div>
                    </div>
                  </div>
                </div>
                <OwlCarousel className="owl-theme" loop={true} nav={true} margin={20} dots={false} items={1} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]} autoplay={true} autoplayTimeout={3000}>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/1.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>Njoy's</h5>
                          <p>Njoy's is the leading Kratom brand based out of USA.</p>
                          <span>E-commerce</span>
                          <span>UI/UX</span>
                          <span>Branding</span>
                          <span>Package Design</span>
                          <div className="clear"></div>
                          <a href="https://www.njoyskratom.com/" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/2.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>Farm in Box</h5>
                          <p>Farm in Box is one of the leading and most-trusted Hydroponic farms in the Delhi-NCR.</p>
                          <span>E-commerce</span>
                          <span>UI/UX</span>
                          <span>Branding</span>
                          <span>Package Design</span>
                          <span>Social Media</span>
                          <div className="clear"></div>
                          <a href="https://www.farminbox.in/" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/3.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>Karbonn Mobiles</h5>
                          <p>This brand needs no introduction. Nevertheless, Karbonn Mobiles is one of the frontliners of
                            the Indian mobile industry with a presence in 40 countries. </p>
                          <span>UI/UX</span>
                          <span>FrontEnd Development</span>
                          <div className="clear"></div>
                          <a href="https://karbonn.in/" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/4.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>HealthSetGo</h5>
                          <p>HealthSetGo is India’s largest healthcare organization for schools with the mission to nurture the world’s largest network of health promoting schools. </p>
                          <span>UI/UX</span>
                          <span>FrontEnd Development</span>
                          <div className="clear"></div>
                          <a href="https://www.healthsetgo.com/" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/5.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>Anges Bags</h5>
                          <p>With an experience of 80 years in marketing and manufacturing, Anges Bags is one of the leading manufacturer and exporters of jute bags.</p>
                          <span>UI/UX</span>
                          <span>FrontEnd Development</span>
                          <div className="clear"></div>
                          <a href="https://www.healthsetgo.com/" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/6.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>Adfluencehub</h5>
                          <p>A new-age platform for brands and influencers to collaborate and create magic.</p>
                          <span>UI/UX</span>
                          <span>FrontEnd Development</span>
                          <span>Product Development</span>
                          <div className="clear"></div>
                          <a href="https://www.behance.net/gallery/97762167/Adfluence" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="portfolio__item row">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                        <div className="portfolio__item__img">
                          <img src="/asset/tab-frame.png" alt="macbook" />
                          <div className="portfolio__item__parent">
                            <div className="blockside"><div className="blocker"></div></div>
                            <div className="reveal__content">
                              <img loading='lazy' src="asset/projects__tab/7.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                        <div className="portfolio__item__text">
                          <h5>Consus Global</h5>
                          <p>Consus is a result-oriented team with offices in 10 countries. They have 10+ years of experience in selling, implementing, supporting, and operating Source-to-Pay solutions.</p>
                          <span>UI/UX</span>
                          <span>FrontEnd Development</span>
                          <span>Product Development</span>
                          <div className="clear"></div>
                          <a href="https://www.angesbags.com/" target='_blank'>Visit Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        {/* =================== Testimonial Section ===================== */}
        <section id='testimonial__section'>
          <h3>Testimonial</h3>
          <div className="container">
            <span className='green top__text'>a word from our clients</span>
            <div className="testimonial__container">

              <div className="testimonial__carousel">

                <div className="parallax">
                  <div className="layer layer4" ref={layer6} style={{ position: "relative" }}>
                    <div className="some__space1">
                      <div className="small__circle bg__green"></div>
                    </div>
                  </div>
                </div>

                <OwlCarousel className="owl-theme testi__carousel" loop={true} nav={false} margin={20} dots={true} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                  <div className="item">
                    <div className="testimonial__item">
                      <p>They are a nice bunch of young talents,
                        always aspiring to deliver the best. They possess good aesthetic sense, will recommend them for all operations related to brand/company website.</p>
                      <span className='green'>Alok Kumar</span>
                      <ul>
                        <li>GM Marketing</li>
                        <li>Karbonn Mobiles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimonial__item">
                      <p>I had a great experience working with United Monks.
                        Professional,  friendly, responded in a timely manner and did a great job. Built and designed a website for us with a great UX/UI. Highly recommend.</p>
                      <span className='green'>Shaun Marriner</span>
                      <ul>
                        <li>Director of Operations</li>
                        <li>Channel Mobile</li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimonial__item">
                      <p>Great experience working with them. They have been very interactive and always open to suggestions.</p>
                      <span className='green'>Pankaj Raghbeer</span>
                      <ul>
                        <li>Chairman &amp; Managing Director</li>
                        <li>Panalfa Group</li>
                      </ul>
                    </div>
                  </div>
                </OwlCarousel>

              </div>
            </div>
          </div>
        </section>

        <ServicesWork />

      </div>

      <Footer />

      <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}> <i className="ri-arrow-up-s-line"></i> </div>

    </div>


  )
}

export default Frontend