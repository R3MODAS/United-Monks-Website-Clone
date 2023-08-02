import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ServicesWork from "../components/ServicesWork"
import AOS from 'aos';
import 'aos/dist/aos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Mobile() {
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

        let xPos3 = event.clientX * 0.05 + "px";
        let yPos3 = event.clientY * 0.05 + "px";

        let xPos4 = 1 - event.clientX * 0.03 + "px";
        let yPos4 = 1 - event.clientY * 0.03 + "px";

        layer1.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
        layer2.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
        layer3.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
        layer4.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer5.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
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
        document.title = "Mobile Application Development";
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

        <div className='mobile__wrapper overflow'>

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
                            <label className='text-white'>Mobile Application Development</label>
                            <h1 className="text-white"><span className="green">Boost your business with</span> <span className="white last__child"> slick mobile apps</span></h1>
                            <ul>
                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/mobile-app/1.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Android</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/mobile-app/2.png" alt="img" />
                                        </div>
                                        <p className='text-white'>IOS</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/mobile-app/3.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Flutter</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/mobile-app/4.png" alt="img" />
                                        </div>
                                        <p className='text-white'>React Native</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/mobile-app/5.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Ionic</p>
                                    </div>
                                </li>

                            </ul>
                            <Link to="/contact" className='bg__green'>get in touch with us</Link>
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

                {/* =================== Ios and Android Section ============= */}
                <section id='mobile_help__section'>
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
                                    Want iOS &amp; Android mobile apps that users will love! <br />
                                    <Link to="/services">We can help?</Link>
                                </h2>
                                <p>We are a team of capable developers with proactive and innovative ideas. Our expertise in
                                    mobile App development goes beyond creating a compelling user interface. We take your unbaked
                                    mobile app vision and transform it into a high-end, customer-drawing, and secure application for iOS and Android.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================== Consumer App Section ============= */}
                <section id='consumer_app__section'>
                    <div className="container">
                        <div className="section">
                            <div className="consumer_app_content row">

                                <div className="col-xl-6 col-lg-5 col-md-5 nopadding">
                                    <div className="consume_app_content_left">
                                        <img src="/asset/mobile-app/home_mobile.png" alt="img" />
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-7 col-md-7 nopadding">
                                    <div className="consume_app_content_right">
                                        <h2 className='green'>Consumer Apps</h2>
                                        <p className="text-white">Focusing on the individual needs of your customers, we build a mobile app that not only
                                            attracts them to explore your products and service but also retains them.</p>
                                        <span className="text-white">Here’s what we can do:</span>
                                        <ul className="text-white">

                                            <li>Create a personalized theme and design</li>

                                            <li>Make it compatible across various devices</li>

                                            <li>Brainstorm and create an excellent user experience</li>

                                            <li>Optimize for speed, performance, and navigation</li>

                                            <li>Release them on Apple Store and Google Play Store</li>

                                            <li>Provide ongoing service and up-gradation</li>

                                        </ul>
                                        <span className="text-white">Develop an App for:</span>
                                        <ul className="text-white">

                                            <li>e-Commerce</li>

                                            <li>Social media</li>

                                            <li>Education</li>

                                            <li>News portal</li>

                                            <li>Entertainment media</li>

                                            <li>Job portal</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clearfix"></div>

                {/* ================ Enterprise App Section ================ */}
                <section id='enterprise_app__section'>
                    <div className="container">
                        <div className="section">
                            <div className="enterprise_app_content row">
                                <div className="col-sm-12 col-xs-12 nopadding mobile__visible">
                                    <div className="enterprise_app_content_right">
                                        <img src="/asset/mobile-app/enterprise-app-img.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-7 nopadding">
                                    <div className="enterprise_app_content_left">
                                        <h2 className="text-black">Enterprise Apps</h2>
                                        <p className="text-white">Focusing on the functional needs of your business, we develop a mobile app that increases efficiency,
                                            productivity, and employee satisfaction. Combining the core strengths of enterprise CRM, data analytics, and the latest
                                            mobile techniques, we aim to deliver an efficient, fast, and secure workforce app.</p>
                                        <span className="text-black">Develop an App for:</span>
                                        <ul className="text-white">
                                            <li>Accounting management</li>
                                            <li>Document management</li>
                                            <li>Executive dashboards</li>
                                            <li>HR management</li>
                                            <li>Automated billing systems</li>
                                            <li>Customer service</li>
                                            <li>Business intelligence</li>
                                            <li>Payment processing</li>
                                            <li>Customer relationship management (CRM)</li>
                                            <li>Enterprise resource planning (ERP)</li>
                                            <li>Business continuity planning (BCP)</li>
                                            <li>Remote sales and field force enablement</li>
                                            <li>Messaging and collaboration systems.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5 nopadding desktop__visible">
                                    <div className="enterprise_app_content_right">
                                        <img src="/asset/mobile-app/mpg_mobile.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5 nopadding tab__visible">
                                    <div className="enterprise_app_content_right">
                                        <img src="/asset/mobile-app/mpg_mobile.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================ Our Process Section =================== */}
                <section id='our_application_process__section' className='bg__blue'>
                    <div className="container">
                        <div className="section">
                            <div className="our_process_content">
                                <h2 className="green">Our Process</h2>
                                <div className="mobile_app_process row clearfix">

                                    <div className="col-md-6 offset-md-6 nopadding">
                                        <div className="mobile_app_process_child">

                                            <div data-aos="zoom-in" data-aos-delay="100" className='mobile_app_process_circle'>
                                                <div className="mobile_app_process_circle_child"></div>
                                            </div>

                                            <div data-aos="fade-down" data-aos-delay="100" className="mobile_app_progress_bar"></div>

                                            <div data-aos="fade-left" data-aos-delay="100" className="mobile_app_process_content">
                                                <span className='green'>Research</span>
                                                <p className="text-white">It is the fundamental stage of our association. Apart from understanding your requirements,
                                                    we try to determine and streamline the best features and functionality of your app that respond to human needs
                                                    and market expectations. After hours of risk-mitigation and market analysis, we present you with app ideas that
                                                    can drive the performance and growth of your business.   </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="col-md-6 nopadding">
                                        <div className="mobile_app_process_child">

                                            <div data-aos="zoom-in" data-aos-delay="400" className='mobile_app_process_circle two'>
                                                <div className="mobile_app_process_circle_child"></div>
                                            </div>

                                            <div data-aos="fade-down" data-aos-delay="500" className="mobile_app_progress_bar two"></div>

                                            <div data-aos="fade-right" data-aos-delay="400" className="mobile_app_process_content two">
                                                <span className="green">Designing</span>
                                                <p className="text-white">We understand that the design of the mobile app is just as important as its features and
                                                    functionality. Hence, our team, working closely with you, designs a product that is not only up to taste and
                                                    expectations but also unique, innovative, and engaging from the user’s point of view. And to maintain
                                                    transparency of our work-in-progress, we share regular updates in the form of mockups and progress
                                                    reports for you to evaluate and give feedback if necessary.  </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="col-md-6 offset-md-6 nopadding">
                                        <div className="mobile_app_process_child">

                                            <div data-aos="zoom-in" data-aos-delay="700" className='mobile_app_process_circle'>
                                                <div className="mobile_app_process_circle_child"></div>
                                            </div>

                                            <div data-aos="fade-down" data-aos-delay="800" className="mobile_app_progress_bar three"></div>

                                            <div data-aos="fade-left" data-aos-delay="700" className="mobile_app_process_content">
                                                <span className="green">Development</span>
                                                <p className="text-white">At this stage, it’s time to bring our vision to life. Our team of developers,
                                                    reformulating the way humans and technology interact, builds an app that brings a competitive edge
                                                    to your business. We aim to give shape to an app that not only provides solutions to users’ needs
                                                    but also makes headway to excellence, thereby maximizing your profits. And this is done taking in
                                                    various aspects like sporadic connectivity, variable bandwidth, device form factor, UI/UX, and multi-platform support. </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="col-md-6 nopadding">
                                        <div className="mobile_app_process_child">

                                            <div data-aos="zoom-in" data-aos-delay="1000" className='mobile_app_process_circle two'>
                                                <div className="mobile_app_process_circle_child"></div>
                                            </div>

                                            <div data-aos="fade-right" data-aos-delay="400" className="mobile_app_process_content two">
                                                <span className="green">Deployment  &amp; Service</span>
                                                <p className="text-white">At this final stage, after rounds of trial and testing, we stimulate the deployment of the app
                                                    on the Apple Store and Google Play. Or, if it’s an enterprise App, we deploy it on your company system for you
                                                    to see results. But wait! Now that your app is up and running, it doesn’t mean we are done with our responsibilities.
                                                    We assist you with its maintenance too. And if you want an up-gradation, we can start working on it within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= Project Mobile Section =============== */}
                <section id='project_mobile__section'>
                    <div className="project_frontend">
                        <div className="portfolio__container">
                            <h2>Projects</h2>
                            <div className="container">
                                <div className="portfolio_carousel">
                                    <div className="parallax">
                                        <div className="layer" ref={layer5}>
                                            <div className="some__space2">
                                                <div className="large__circle bg__green"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <OwlCarousel nav={true} items={1} animateIn="fadeIn" animateOut="fadeOut" loop={true} autoPlay={true} autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]} dots={false}>
                                        <div className="item">
                                            <div className="portfolio_item row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 nopadding">
                                                    <div className="portfolio_item_img">
                                                        <img src="/asset/mobile-app/mobile_njoys_portfolio.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 nopadding">
                                                    <div className="portfolio_item_text">
                                                        <h5>Njoy's Kratom</h5>
                                                        <p>Njoy's is the leading Kratom brand based out of USA. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="portfolio_item row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 nopadding">
                                                    <div className="portfolio_item_img">
                                                        <img src="/asset/mobile-app/mobile_fnb_portfolio.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 nopadding">
                                                    <div className="portfolio_item_text">
                                                        <h5>Farm in Box</h5>
                                                        <p>Farm in Box is one of the leading and most-trusted Hydroponic farms in the Delhi-NCR.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="portfolio_item row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 nopadding">
                                                    <div className="portfolio_item_img">
                                                        <img src="/asset/mobile-app/mobile_njoys_portfolio.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 nopadding">
                                                    <div className="portfolio_item_text">
                                                        <h5>Njoy's Kratom</h5>
                                                        <p>Njoy's is the leading Kratom brand based out of USA. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
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

export default Mobile