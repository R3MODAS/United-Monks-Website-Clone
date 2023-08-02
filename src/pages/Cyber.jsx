import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ServicesWork from "../components/ServicesWork"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Cyber() {
    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const layer1 = useRef(null);
    const layer2 = useRef(null);
    const layer3 = useRef(null);

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

        let xPos3 = 1 - event.clientX * 0.03 + "px";
        let yPos3 = 1 - event.clientY * 0.03 + "px";

        layer1.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
        layer2.current.style.transform = `translate3d(${xPos2},${yPos2},0)`;
        layer3.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
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
        document.title = "Cyber Security";
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

        <div className='cyber__wrapper overflow'>

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
                            <label className='text-white'>Cyber Security</label>
                            <h1 className="text-white"><span className="green">Full Stack</span> <span className="white last__child">Security Assessments</span></h1>
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

                {/* =================== Ui/Ux Section =============== */}
                <section id='ui_ux__section'>

                    <div className="container">
                        <div className="section">
                            <div className="ecommerce_solution_content">
                                <h2>
                                    Looking for a partner that looks at your entire system for threat? <br />
                                    <Link to="/services">We can help</Link>
                                </h2>
                                <p>With our state-of-the-art Full Stack Security assessments, we identify potential gaps throughout your environment.
                                    We drill all the way down to the facility and semiconductor level; we go all the way up to strategic impacts of personnel,
                                    process, and supply-chain security. We also carefully assess every layer in between.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-fluid bg__gray nopadding">
                    <div className="section bp70">
                        <div className="cyber_security_content row">

                            <div className="col-xl-6 col-lg-6 col-md-6 order-md-1 order-2 nopadding">
                                <div className="cyber_content_left">
                                    <h2 className="desktop__visible black">Penetration Testing</h2>
                                    <h2 className="tab__visible black">Penetration Testing</h2>
                                    <p>Advanced Penetration Testing on the network allows us to simulate an attack of a skilled hacker. As today hackers are getting more and more sophisticated, penetration testing must keep up and allow simulation of advance forms of attack.</p>
                                    <p className="notopmargin">Customer data and your intellectual property are two essential pillars your company depends upon. Loosing your data may result in significant loss at best and may even put you out of business.  Exposing your customer data may cause serious reputational risk. Penetration testing is the process of identifying and exploiting vulnerabilities in your environment to understand which systems may be affected in case of an attack and what would be its remedies.</p>
                                    <span className="black">United Monks has been at the forefront of penetration testing across the full spectrum of technologies:</span>
                                    <ul>

                                        <li>Mobile Applications</li>

                                        <li>IT Infrastructure</li>

                                        <li>Wireless Communications</li>

                                        <li>Enterprise Cloud Environment</li>

                                        <li>Embedded Devices</li>

                                        <li>Web Services</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 order-md-2 order-1 nopadding">
                                <div className="cyber_content_right">
                                    <h2 className="mobile__visible black">Penetration Testing</h2>
                                    <img src="/asset/cyber/penetration_testing.jpg" alt="Penetration Testing" title="Penetration Testing" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid bg__white nopadding">
                    <div className="section bp70">
                        <div className="cyber_security_content row">

                            <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                <div className="cyber_content_right">
                                    <h2 className="mobile__visible black">Code Review</h2>
                                    <img src="/asset/cyber/code_review.jpg" alt="CodeReview" title="CodeReview" />
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                <div className="cyber_content_left">
                                    <h2 className="desktop__visible black">Code Review</h2>
                                    <h2 className="tab__visible black">Code Review</h2>
                                    <p>Years of experience and expertise in many programming languages allow our experts at United Monks to detect vulnerabilities in code and assist organizations with the highly complex security challenges during product development.</p>
                                    <span>Our manual code review diagnostics include</span>
                                    <ul>

                                        <li>Instrumented fuzzing</li>

                                        <li>Entry-point analysis</li>

                                        <li>Risk-based reviews</li>

                                        <li>Comprehensive reviews</li>

                                        <li>Reverse engineering</li>

                                        <li>Provision of ongoing support and new features</li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid bg__gray nopadding bm50">
                    <div className="section bp70">
                        <div className="cyber_security_content row">

                            <div className="col-xl-6 col-lg-6 col-md-6 order-md-1 order-2 nopadding">
                                <div className="cyber_content_left">
                                    <h2 className="desktop__visible black">Reverse Engineering</h2>
                                    <h2 className="tab__visible black">Reverse Engineering</h2>
                                    <p>A deeper examination from the attacker's point of view. United Monks engineers scan and reverse engineer your solution for vulnerabilities that could be exploited by malicious hacker to steal your confidential information or misuse the system for unintended purposes, or to make a harmful assault. Our experts scan both, physical and logical security and use advance methods to detect implementation weaknesses, usage of cryptographic primitives, and to reveal intentionally or incidentally hidden back doors. </p>
                                    <span className="black">United Monks will reverse engineer binaries to:</span>
                                    <ul>

                                        <li>Find vulnerabilities</li>

                                        <li>Determine functionality, such as an authentication method</li>

                                        <li>Document existing proprietary network protocols or file formats</li>

                                        <li>Obtain required information for other testing approaches, e.g. fuzzing</li>

                                        <li>Trace the handling and preservation of critical data, such as accounts, certificates, encryption keys</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 order-md-2 order-1 nopadding">
                                <div className="cyber_content_right">
                                    <h2 className="mobile__visible black">Reverse Engineering</h2>
                                    <img src="/asset/cyber/reverse_engineering.jpg" alt="Why Choose UI/UX" title="Why Choose UI/UX" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =================== Testimonial Section ===================== */}
                <section id='testimonial__section'>
                    <h3>Testimonial</h3>
                    <div className="container">
                        <span className='green top__text'>a word from our clients</span>
                        <div className="testimonial__container">

                            <div className="testimonial__carousel">

                                <div className="parallax">
                                    <div className="layer layer4" ref={layer3} style={{ position: "relative" }}>
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

export default Cyber