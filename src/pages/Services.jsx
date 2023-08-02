import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ServicesWork from '../components/ServicesWork';

function Services() {

  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

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

  const scrollBehaviour = () => {
    const sliderContainer = document.querySelector(".slider__container");
    const sliderText = document.querySelector(".slider__text__container");
    const sliderBanner = document.querySelector(".banner__caption");
    let value = window.scrollY;
    let pos1 = -(value * 35 / 100);

    sliderContainer.setAttribute('style', `transform: translate3d(0px, ${pos1}px, 0px)`);
    sliderText.style.opacity = (1 - value / 700);
    sliderBanner.style.opacity = (1 - value / 700);
  }

  const MouseMove = (event) => {
    const layer1 = document.querySelector(".layer1");
    const layer2 = document.querySelector(".layer2");
    const layer3 = document.querySelector(".layer3");

    let xPos1 = event.x * 0.05 + "px";
    let yPos1 = event.y * 0.05 + "px";

    let xPos2 = 1 - event.x * 0.05 + "px";
    let yPos2 = 1 - event.y * 0.05 + "px";


    layer1.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
    layer2.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
    layer3.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
  }

  useEffect(() => {
    document.title = "Cloud Management, Web Development, Mobile App & Product Development Service";

    window.addEventListener("scroll", scrollBehaviour);
    const wrapper = document.querySelector(".services__wrapper");
    wrapper.addEventListener("mousemove", MouseMove);
    window.addEventListener("scroll", toggleVisible);

    return () => {
      wrapper.removeEventListener("mousemove", MouseMove);
      window.removeEventListener("scroll", scrollBehaviour);
      window.removeEventListener("scroll", toggleVisible);
    }
  }, [])

  return (

    <div className='services__wrapper clearfix'>

      <div className="left__border"></div>
      <div className="right__border"></div>

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
              <li><Link to="/services" className='active'>Services</Link></li>
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
          <li><Link to='/services' className='header__link active' >services</Link></li>
          <li><Link to='/career' className='header__link' >career</Link></li>
          <li><Link to='/portfolio' className='header__link' >portfolio</Link></li>
          <li><Link to='/contact' className='header__link' >contact</Link></li>
        </ul>
      </header>

      {/* ================== Slider Section =================== */}
      <section id='slider__section' className='clearfix'>
        <div className="slider__container">
          <div className="parallax">
            <div className="layer layer1">
              <div className="some__space1">
                <div className="large__circle bg__green"></div>
              </div>
            </div>

            <div className="layer layer2">
              <div className="some__space1">
                <div className="dotted__element"></div>
              </div>
            </div>

            <div className="layer layer3">
              <div className="some__space1">
                <div className="small__circle bg__green"></div>
              </div>
            </div>
          </div>

          <div className="container clearfix">
            <div className="slider__text__container">
              <h1>
                <span className="desktop__visible">
                  Each Service<br /> is a quest for perfection,<br /> And we deliver<br />
                  every single time<span className="green">.</span>
                </span>
                <span className="tab__visible">
                  Each Service<br /> is a quest for perfection,<br />
                  And we deliver<br /> every single time<span className="green">.</span>
                </span>
                <span className="mobile__visible">
                  Each Service is a quest for perfection,
                  And we deliver every single time<span className="green">.</span>
                </span>
              </h1>
              <div className="banner__caption">United we stand to ensure that our services will never have you in two minds. Flexible in our processes, we identify your needs and use them as our guiding force to exceed your expectations with impeccable results. </div>
            </div>
          </div>

          <a href="#content" className='scroll__animation__parent tab__visible'>
            <i className="ri-arrow-down-double-line scroll__animation"></i>
          </a>

        </div>
      </section>
      <div className="clear"></div>

      {/* ================== Main Content Section =============== */}
      <div id='content'>

        <div className="content__wrapper nopadding">

          {/* =================== Services Section =============== */}
          <section id='services__section'>
            <h2>Services</h2>
            <div className='section'>
              <div className="container">
                <div className="services__container">
                  <div className="portfolio__section">

                    <article className='portfolio__item pf__one'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>01</h3>
                        <h4>UI/UX</h4>
                        <p>With 5+ years of application design experience, United Monks is your best choice for UI/UX services.
                          We make your ideas and applications stand out with intelligently crafted intuitive designs. Everything
                          from the wireframes to prototypes is a reflection of our core strengths - exceptional user experiences
                          and perfection in user flow.</p>
                        <ul>
                          <li>UI/UX Audit</li>
                          <li>User Flow Analysis</li>
                          <li>Wireframe</li>
                          <li>Interface Design</li>
                          <li>KPI Led Design</li>
                        </ul>
                        <Link to="/ui-ux" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__two'>
                      <div className="portfolio__item__container pf__item2__container">
                        <h3 className='green'>02</h3>
                        <h4>Front End <br />Development</h4>
                        <p>Our skilled team of front-end developers creates software that looks impressive on all screen sizes. We create glitch free interfaces that also load fast. We offer front-end architecture and design services using cutting-edge technologies to give a smooth, fast, and intuitive navigation.</p>
                        <ul>
                          <li><img loading='lazy' src="asset/icons/1.png" alt="HTML 5" /> HTML 5</li>
                          <li><img loading='lazy' src="asset/icons/2.png" alt="CSS3" /> CSS3</li>
                          <li><img loading='lazy' src="asset/icons/3.png" alt="Bootstrap" /> Bootstrap</li>
                          <li><img loading='lazy' src="asset/icons/4.png" alt="Jquery" /> jQuery</li>
                          <li><img loading='lazy' src="asset/icons/5.png" alt="React" /> React</li>
                          <li><img loading='lazy' src="asset/icons/6.png" alt="Angular JS" /> Angular JS</li>
                          <li><img loading='lazy' src="asset/icons/7.png" alt="Vue Js" /> Vue Js</li>
                        </ul>
                        <Link to="/frontend" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__three'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>03</h3>
                        <h4>Web Application<br />Development</h4>
                        <p>Every app is an amalgamation of multiple technologies that are closely woven together. We offer customised and secure web application development solutions and have an expert team taking care of everything, whether it's Laravel for larger, more complex projects, or WordPress for ease of use and speed of deployment.</p>
                        <ul>
                          <li><img loading='lazy' src="asset/icons/8.png" alt="Php" /> Php</li>
                          <li><img loading='lazy' src="asset/icons/9.png" alt="CakePHP" /> CakePHP</li>
                          <li><img loading='lazy' src="asset/icons/10.png" alt="Laravel" /> Laravel</li>
                          <li><img loading='lazy' src="asset/icons/11.png" alt="Wordpress" /> Wordpress</li>
                          <li><img loading='lazy' src="asset/icons/12.png" alt="Node.Js" /> Node.Js</li>
                        </ul>
                        <Link to="/webapp" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__four'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>04</h3>
                        <h4>Product<br />Development</h4>
                        <p>Quality digital products aren’t built in a day, and for good reason. We put together powerful architecture, unique features and appropriate technology while understanding cost optimization. We offer complete product engineering services ranging from consulting and application development to technology engineering and product support to roll out a jaw-dropping final product.</p>
                        <ul>
                          <li>Product Architecture</li>
                          <li>User Research</li>
                          <li>UI/ UX Design</li>
                          <li>Full Stack Development</li>
                          <li>Beta Testing</li>
                          <li>Support &amp; Maintenance</li>
                        </ul>
                        <Link to="/product" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__five'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>05</h3>
                        <h4>Ecommerce</h4>
                        <p>If you want to take your business online you’ve come to the right place. We offer customized eCommerce solutions that have the best features and functionality. From advanced search engines to optimization tools and from fast browsing to easy checkout, we create portals that will meet your business goals and help your revenue shoot up.</p>
                        <ul>
                          <li><img loading='lazy' src="asset/icons/13.png" alt="WooCommerce" /> WooCommerce</li>
                          <li><img loading='lazy' src="asset/icons/14.png" alt="Shopify" /> Shopify</li>
                          <li>PrestaShop</li>
                          <li>Custom Ecommerce Solution</li>
                        </ul>
                        <Link to="/ecommerce" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__six'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>06</h3>
                        <h4>Mobile Application <br />Development</h4>
                        <p>We develop and deploy native and hybrid mobility solutions by using the latest tools and frameworks. To do so, we maintain global standards and methodology throughout the development process - from conceptualization to the launch - to deliver top performing mobile apps.</p>
                        <ul>
                          <li><img loading='lazy' src="asset/icons/15.png" alt="Android" /> Android</li>
                          <li><img loading='lazy' src="asset/icons/16.png" alt="IOS" /> IOS</li>
                          <li><img loading='lazy' src="asset/icons/17.png" alt="Hybrid" /> Hybrid</li>
                          <li><img loading='lazy' src="asset/icons/5.png" alt="React Native" /> React Native</li>
                          <li><img loading='lazy' src="asset/icons/18.png" alt="Ionic" /> Ionic</li>
                        </ul>
                        <Link to="/mobile" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__seven'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>07</h3>
                        <h4>Graphics<br />Designing</h4>
                        <p>From web banners and landing pages to ad designs and more, tell us what you need in a comprehensive brief and we will offer custom designs that match your requirements. We factor in business initiative and trends to improve our designs to transform your ideas into reality using refined design software and the most current technology.</p>
                        <ul>
                          <li>Marketing Collateral</li>
                          <li>Web banners</li>
                          <li>Social Media Banners</li>
                          <li>Landing Pages</li>
                          <li>Ad Design</li>
                          <li>Corporate Identity</li>
                        </ul>
                        <Link to="/graphics" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__eight'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>08</h3>
                        <h4>Powerpoint<br />Presentation</h4>
                        <p>From writing content to developing graphics, we create bespoke presentations that narrate your tales in the most engaging ways possible. Our presentations fit you, your brand, your audience, and your brand communication in every way possible.</p>
                        <ul>
                          <li>Business Presentations</li>
                          <li>Marketing Presentations</li>
                          <li>Sales Presentations</li>
                          <li>Education Presentations</li>
                        </ul>
                        <Link to="/powerpoint" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                    <article className='portfolio__item pf__nine'>
                      <div className="portfolio__item__container">
                        <h3 className='green'>09</h3>
                        <h4>Cyber<br />Security</h4>
                        <p>Cyber Security breaches are not to be taken lightly. Protect yourself from intruders by choosing a full-stack cyber security scan. Our experts will identify potential gaps throughout your environment, including software and hardware applications. Contact us today to learn more.</p>
                        <ul>
                          <li>Penetration Testing</li>
                          <li>Code Review</li>
                          <li>Reverse Engineering</li>
                        </ul>
                        <Link to="/cyber" className='bg__green'>Read More</Link>
                      </div>
                    </article>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServicesWork />

        </div>

      </div>

      <div className='section'></div>

      <Footer />

      <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}>
        <i className="ri-arrow-up-s-line"></i>
      </div>


    </div>
  )
}

export default Services