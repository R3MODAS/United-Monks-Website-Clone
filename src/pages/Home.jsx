import React, { useEffect, useRef, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typed from 'typed.js';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import anime from 'animejs/lib/anime.es.js';

function Home() {
  const el = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  const stickyNav = () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 0) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  }

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

  const mouseEvent = (event) => {

    const layer1 = document.querySelector(".layer1");
    const layer2 = document.querySelector(".layer2");
    const layer3 = document.querySelector(".layer3");
    const layer4 = document.querySelector(".layer4");
    const layer5 = document.querySelector(".layer5");
    const layer6 = document.querySelector(".layer6");

    let xPos1 = 1 - event.x * 0.015 + "px";
    let yPos1 = 1 - event.y * 0.015 + "px";

    let xPos2 = event.x * 0.03 + "px";
    let yPos2 = event.y * 0.03 + "px";

    let xPos3 = 1 - event.x * 0.03 + "px";
    let yPos3 = 1 - event.y * 0.03 + "px";

    let xPos4 = event.clientX * 0.05 + "px";
    let yPos4 = event.clientY * 0.05 + "px";

    layer1.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
    layer2.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
    layer3.style.transform = "translate3d(" + xPos3 + ", " + yPos3 + ", 0)";
    layer4.style.transform = "translate3d(" + xPos3 + ", " + yPos3 + ", 0)";
    layer5.style.transform = "translate3d(" + xPos3 + ", " + yPos3 + ", 0)";
    layer6.style.transform = "translate3d(" + xPos4 + ", " + yPos4 + ", 0)";
  }

  function animation1() {
    const text = document.querySelector(".text");
    text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>")

    anime.timeline({ loop: false }).add({
      targets: ".text .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: function (el, i) {
        return 50 * (i + 1);
      },
    })
  }

  function animation2() {
    const text2 = document.querySelector(".text2");
    text2.innerHTML = text2.textContent.replace(/([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>")

    anime.timeline({ loop: false }).add({
      targets: ".text2 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: function (el, i) {
        return 50 * (i + 1);
      },
    })
  }

  function setDate() {

    const secondHand = document.querySelector('#second');
    const minHand = document.querySelector('#minute');
    const hourHand = document.querySelector('#hour');

    const now = new Date();
    const second = now.getSeconds();
    const secondsDegree = ((360 / 60) * second) + 90;
    secondHand.style.transition = secondsDegree === 90 ? 'all 0s' : 'all 0.05s';
    secondHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const min = now.getMinutes()
    const minsDegree = ((360 / 60) * min) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;
    minHand.style.transition = minsDegree === 90 ? 'all 0s' : 'all 0.05s';
    minHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    const hour = now.getHours();
    const hoursDegree = ((360 / 12) * hour) + 90 + (minsDegree / 12 - 8);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    hourHand.style.transition = hoursDegree === 90 ? 'all 0s' : 'all 0.05s';
    hourHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  }

  useEffect(() => {
    document.title = "UI UX Design Agency | Offshore Software Development | Mobile App & Web Development";

    const timerId = setInterval(setDate, 1000);
    
    const typed = new Typed(el.current, {
      strings: [
        "architect your Product ?",
        "design UI &amp; UX ?",
        "build Responsive Websites?",
        "develop Mobile Apps?",
        "create CMS ?",
        "build an E-commerce?",
        "manage your Cloud ?",
        "design Graphics ?",
        "take care of Branding?",
      ],
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 800,
      loop: true,
      startDelay: 100,
      showCursor: false,
      smartBackspace: true
    })

    const scroll = new ScrollWatcher();
    scroll.watch(".text").on("enter", animation1)
    scroll.watch(".text2").on("enter", animation2)

    const wrapper = document.querySelector(".wrapper");
    window.addEventListener('scroll', stickyNav, { passive: true });
    wrapper.addEventListener("mousemove", mouseEvent, { passive: true });
    window.addEventListener("scroll", toggleVisible, { passive: true });
    AOS.init();

    return () => {
      window.removeEventListener('scroll', stickyNav);
      window.removeEventListener('mousemove', mouseEvent);
      window.removeEventListener("scroll", toggleVisible);
      typed.destroy();
      clearInterval(timerId)
    }
  }, [])


  return (
    <div className='wrapper'>

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
              <li><Link to="/" className='active'>Home</Link></li>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

      </div>

      {/* ====================== Header Section ========================== */}
      <header className={`navbar__section ${scroll && "sticky__navbar"}`}>

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

        <ul className='nav__menu'>
          <li><Link to='/' className={`nav__link active ${scroll && "black"}`}>home</Link></li>
          <li><Link to="/story" className={`nav__link ${scroll && "black"}`}>our story</Link></li>
          <li><Link to="/services" className={`nav__link ${scroll && "black"}`}>services</Link></li>
          <li><Link to="/career" className={`nav__link ${scroll && "black"}`}>career</Link></li>
          <li><Link to='/portfolio' className={`nav__link ${scroll && "black"}`}>portfolio</Link></li>
          <li><Link to="/contact" className={`nav__link ${scroll && "black"}`}>contact</Link></li>
        </ul>

      </header>

      {/* ====================== Hero Section ========================== */}
      <section id='hero__section' className='clearfix gradient__bg'>
        <div className="hero__right">
          <h1 className='text'>Master crafters of digital experiences</h1>
          <div className="clock__web">
            <div id="clock">
              <div className='hand' id="hour"></div>
              <div className='hand' id="minute"></div>
              <div className='hand' id="second"></div>
            </div>
          </div>
        </div>
        <div className="hero__left">
          <img src="asset/unitedmonks-banner-logo.svg" alt="United Monks" />
          <div className="hero__text">
            <h2>We are a Full Stack Development Agency <span className="hero__text__span">ready to <span className='after'>build your next product</span></span> or
              <span className='after'> join your team remotely.</span></h2>
          </div>
        </div>
      </section>

      <div id="main__content">
        {/* =================== Carousel Section 1 ====================== */}
        <Carousel />

        {/* ====================== Looking for Team Section ========================== */}
        <section id='looking__section' className='section'>
          <div className="container">
            {/* Looking Container */}
            <div className='looking__container'>

              <h2 className='looking__title'>Looking for a team to <br />
                <span ref={el}></span><span className='typed-cursor'>|</span> <br />
                <Link to="/services">We can help<span className='green'>.</span></Link>
              </h2>

              {/* Looking Paragraph */}
              <div className='looking__para' data-aos="fade-up" data-aos-duration="2000">
                <p>In an industry crammed with development agencies in every nook and corner, United Monks stands a class apart. We not only offer a fixed price model but  also provide remote teams that will join your business in any corner of the world. Defined by our professionalism and commitment to each project we undertake, we make your requirements the driving force behind our work. We work with businesses of all sizes, ranging from top MNCs to mid-sized enterprises to recent start-up, and our agile and transparent methodologies help you get the most out of the collaboration.</p>
              </div>

              {/* Looking Button */}
              <div className='looking__button' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50">
                <Link to='/story' className='looking__btn'>know more</Link>
              </div>

              <div className="parallax">

                <div className="layer layer1">
                  <div className="some__space1">
                    <div className="small__circle bg__green"></div>
                  </div>
                </div>

                <div className="layer layer2">
                  <div className="some__space2">
                    <div className="large__circle bg__green"></div>
                  </div>
                </div>

                <div className="layer layer3">
                  <div className="some__space3">
                    <div className="dotted__element"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ==================== What we are good at Section ================= */}
        <section id='goodAt__section' className='bg__blue section'>
          <div className="container">
            <div className="goodAt__container">

              <div className="goodAt__text">
                <h3 className='green text2'>What we are good at</h3>
                <div className='goodAt__para' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50">
                  <p className='text-white'>We take your business right from ideation & strategy to final execution with a host of web solutions like Full stack development, UI/UX, DevOps, Influencer Marketing and more.
                    And the best part? All these solutions are tailor-made for you. <br />
                    That’s enough talking for the moment. Let’s bring our services into the spotlight.</p>
                </div>
              </div>

              <div className="goodAt__technology row">

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                  <div className="goodAt__left">
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50">
                      <Link to="/ui-ux">
                        <img loading='lazy' src="asset/desc/1.webp" alt="desc-img" />
                        <span className='text-white'>UI/UX</span>
                      </Link>
                    </div>
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="250">
                      <Link to="/product">
                        <img loading='lazy' src="asset/desc/2.webp" alt="desc-img" />
                        <span className='text-white'>Product <br /> Development</span>
                      </Link>
                    </div>
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                      <Link to="/ecommerce">
                        <img loading='lazy' src="asset/desc/3.webp" alt="desc-img" />
                        <span className='text-white'>Ecommerce</span>
                      </Link>
                    </div>
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="350">
                      <Link to="/graphics">
                        <img loading='lazy' src="asset/desc/4.webp" alt="desc-img" />
                        <span className='text-white'>Graphic <br /> Designing</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                  <div className="goodAt__right">
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150">
                      <Link to="/frontend">
                        <img loading='lazy' src="asset/desc/5.webp" alt="desc-img" />
                        <span className='text-white'>Front End <br /> Development</span>
                      </Link>
                    </div>
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                      <Link to="/mobile">
                        <img loading='lazy' src="asset/desc/6.webp" alt="desc-img" />
                        <span className='text-white'>Mobile App <br /> Development</span>
                      </Link>
                    </div>
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="450">
                      <Link to="/powerpoint">
                        <img loading='lazy' src="asset/desc/7.webp" alt="desc-img" />
                        <span className='text-white'>Powerpoint<br /> Presentation</span>
                      </Link>
                    </div>
                    <div className='goodAt__tech_item' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="350">
                      <Link to="/cyber">
                        <img loading='lazy' src="asset/desc/8.webp" alt="desc-img" />
                        <span className='text-white'>Cyber <br />security</span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className="goodAt__button" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <Link to="/services">know more</Link>
              </div>

            </div>
          </div>
        </section>

        {/* =================== Carousel Section 2 ====================== */}
        <section id='carousel__section' className='bg__gray'>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 nopadding">
              <div className="carousel__text">
                <h2>Technologies <br /> we work on<span className='raleway green'>.</span></h2>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8 nopadding">
              <div className="carousel trusted__carousel">
                <OwlCarousel className="owl-theme" loop={true} nav={false} margin={22} dots={false} items={5} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} responsive={{
                  0: {
                    items: 1
                  },
                  766: {
                    items: 3
                  },
                  1000: {
                    items: 4
                  },
                  1200: {
                    items: 5
                  }

                }}>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/1.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/2.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/3.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/4.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/5.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/6.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/7.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/8.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/9.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/10.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/11.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/12.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/13.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/14.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/15.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/16.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/17.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/18.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/19.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/20.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/21.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img loading='lazy' src="asset/technology/22.webp" alt="img" />
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
                  <div className="layer layer4" style={{ position: "relative" }}>
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

        {/* ================= Work with us Feature Section =================== */}
        <section id='work_feature__section' className='bg__green'>
          <div className="section">
            <div className="container">

              <div className="work_feature__total">
                <div className='work_feature__text'>
                  <h2>You are bound <br /> to work with us</h2>
                  <span>because we are great</span>
                </div>

                <div className="parallax">
                  <div className="layer layer5">
                    <div className="some__space2">
                      <div className="large__circle bg__green"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="work_feature__carousel">
                <OwlCarousel className="owl-theme" loop={true} nav={true} margin={20} dots={false} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]}>
                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/1.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Client Centric<br />Development</h4>
                          <p>‘Customer before Everything’ - We’ve let that motto guide us in everything we do. And that’s why the design, development, and marketing solutions that we provide to clients are custom-made and result-oriented.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/2.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Agile<br />Development</h4>
                          <p>Using the principles of Agile Development, we maintain utmost transparency throughout the project development stage, while maintaining efficiency and quality as well.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/3.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Dedicated<br />Development Team</h4>
                          <p>Say goodbye to tiresome hiring processes and hello to a team almost as perfect as the Avengers. With a qualified and professional team working for you remotely, you won’t have to think about added infrastructure expenses or human resource management ever.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/4.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Excellent<br />Support</h4>
                          <p>Our support team has always got your back, even after the project is complete. And if you are looking to expand your business, we’ll see you through that too.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/5.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Data<br />Backup</h4>
                          <p>Losing data because you didn’t back it up is so 2012. But if you are still stuck in the past, allow us to be your guiding monks who take you to the future and save you from mishaps like losing precious data. </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/6.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Quality<br />Deliverance</h4>
                          <p>They say quality over quantity, but we say quality over everything! We will always keep your unique business requirements in mind and deliver nothing but the best.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="item">

                    <div className='work_feature__itemContainer row'>

                      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_img'>
                          <img loading='lazy' src="asset/youarebound/7.webp" alt="img" />
                        </div>
                      </div>

                      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 nopadding'>
                        <div className='work_feature__carousel_text bg__white'>
                          <h4>Data<br />Protection</h4>
                          <p>What happens in United Monks, stays in United Monks. Need further assurance? Let’s sign an NDA.</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </OwlCarousel>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== Portfolio Section ==================== */}
        <section id='portfolio__section'>
          <h2>Portfolio</h2>
          <div className="container">

            <div className="portfolio__carousel">

              <div className="parallax">
                <div className="layer layer6">
                  <div className="some__space2">
                    <div className="large__circle bg__green"></div>
                  </div>
                </div>
              </div>

              <OwlCarousel className="owl-theme carousel" loop={true} nav={true} margin={25} dots={false} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]}>

                <div className="item">
                  <div className="carousel__item__container row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                      <div className="portfolio__item__img">
                        <img loading='lazy' src="asset/mac.webp" alt="mac__img" className='img' />

                        <div className="portfolio__item__parent">
                          <div className="blockside"><div className="blocker"></div></div>
                          <div className="reveal__content">
                            <img loading='lazy' src="asset/portfolio/1.webp" alt="img" />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                      <div className="portfolio__text">
                        <h4>Quid Tutor</h4>
                        <p>Quid Tutor is an online teaching platform which covers 45 minutes of Tutoring at just £1</p>
                        <span>UI/UX</span>
                        <span>Front End Development</span>
                        <span>Product Development</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="carousel__item__container row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                      <div className="portfolio__item__img">
                        <img loading='lazy' src="asset/mac.webp" alt="mac__img" className='img' />

                        <div className="portfolio__item__parent">
                          <div className="blockside"><div className="blocker"></div></div>
                          <div className="reveal__content">
                            <img loading='lazy' src="asset/portfolio/2.webp" alt="img" />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                      <div className="portfolio__text">
                        <h4>FPV Lifestyle</h4>
                        <p>FPV Lifestyle is an e-Commerce platform for customized drone.</p>
                        <span>UI/UX</span>
                        <span>Front End Development</span>
                        <span>Product Development</span>
                        <div className="clear"></div>
                        <a target='_blank' href="https://www.fpvlifestyle.com/">VIEW WEBSITE</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="carousel__item__container row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                      <div className="portfolio__item__img">
                        <img loading='lazy' src="asset/mac.webp" alt="mac__img" className='img' />

                        <div className="portfolio__item__parent">
                          <div className="blockside"><div className="blocker"></div></div>
                          <div className="reveal__content">
                            <img loading='lazy' src="asset/portfolio/3.webp" alt="img" />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                      <div className="portfolio__text">
                        <h4>Engage</h4>
                        <p>Engage is a FinTech platform that leverages financial institutions for tracking,
                          monitoring and generating report for all international payment transfers done around the world via their startup.</p>
                        <span>UI/UX</span>
                        <span>Front End Development</span>
                        <span>Product Development</span>
                        <div className="clear"></div>
                        <a target='_blank' href="https://www.unitedmonks.com/engage.php">VIEW CASE STUDY</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="carousel__item__container row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                      <div className="portfolio__item__img">
                        <img loading='lazy' src="asset/mac.webp" alt="mac__img" className='img' />

                        <div className="portfolio__item__parent">
                          <div className="blockside"><div className="blocker"></div></div>
                          <div className="reveal__content">
                            <img loading='lazy' src="asset/portfolio/4.webp" alt="img" />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                      <div className="portfolio__text">
                        <h4>MyProGamer</h4>
                        <p>MyProGamer is an online gaming platform for players who want to improve their gaming skills.</p>
                        <span>UI/UX</span>
                        <span>Front End Development</span>
                        <span>Product Development</span>
                        <div className="clear"></div>
                        <a target='_blank' href="https://www.unitedmonks.com/mpg.php">VIEW CASE STUDY</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="carousel__item__container row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                      <div className="portfolio__item__img">
                        <img loading='lazy' src="asset/mac.webp" alt="mac__img" className='img' />

                        <div className="portfolio__item__parent">
                          <div className="blockside"><div className="blocker"></div></div>
                          <div className="reveal__content">
                            <img loading='lazy' src="asset/portfolio/5.webp" alt="img" />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                      <div className="portfolio__text">
                        <h4>Adfluencehub</h4>
                        <p>A new-age platform for brands and influencers to collaborate and create magic.</p>
                        <span>UI/UX</span>
                        <span>Front End Development</span>
                        <span>Product Development</span>
                        <div className="clear"></div>
                        <a target='_blank' href="https://www.behance.net/gallery/97762167/Adfluence">VIEW CASE STUDY</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="carousel__item__container row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                      <div className="portfolio__item__img">
                        <img loading='lazy' src="asset/mac.webp" alt="mac__img" className='img' />

                        <div className="portfolio__item__parent">
                          <div className="blockside"><div className="blocker"></div></div>
                          <div className="reveal__content">
                            <img loading='lazy' src="asset/portfolio/6.webp" alt="img" />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                      <div className="portfolio__text">
                        <h4>HealthSetGO</h4>
                        <p>HealthSetGo is India’s largest healthcare organization for schools with the mission to nurture the world’s largest network of health promoting schools. </p>
                        <span>UI/UX</span>
                        <span>Front End Development</span>
                        <div className="clear"></div>
                        <a target='_blank' href="https://www.healthsetgo.com/">VISIT WEBSITE</a>
                      </div>
                    </div>
                  </div>
                </div>


              </OwlCarousel>

            </div>
          </div>
        </section>

        {/* =================== Call to Action Section ====================== */}
        <section id='call_to_action__section' className='section'>
          <div className="container-fluid">
            <div className="call_to_action__container clearfix">

              <div className="call__left bg__blue">
                <div className="call__left__content">
                  <Link to="/portfolio" className='text-white'>
                    Take a look at what <br /> <span>we've made for others.</span>
                  </Link>
                </div>
              </div>

              <div className="call__right bg__green">
                <div className="call__right__content">
                  <Link to="/contact">Let’s build something if <br /><span>you are convinced.</span></Link>
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>

      {/* ==================== Footer Section ====================== */}
      <Footer />

      <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}>
        <i className="ri-arrow-up-s-line"></i>
      </div>

    </div>
  )
}

export default Home