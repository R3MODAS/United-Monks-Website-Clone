import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ServicesWork from "../components/ServicesWork"
import Testimonial from '../components/Testimonial';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Powerpoint() {
    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const layer1 = useRef(null);
    const layer2 = useRef(null);
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

    }

    const scrollBehaviour = () => {
        let value = window.scrollY;
        let pos1 = -(value * 35 / 100);
        SliderContainer.current.setAttribute('style', `transform: translate3d(0px, ${pos1}px, 0px)`);
        SliderText.current.style.opacity = (1 - value / 700);
    }

    useEffect(() => {
        document.title = "PowerPoint Presentation";
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

        <div className='powerpoint__wrapper'>

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

                    <div className="container clearfix">
                        <div className="ui__banner" ref={SliderText}>
                            <label className='text-white'>PowerPoint Presentations</label>
                            <h1 className="text-white"><span className="green">Get engaging</span> <span className="white last__child">PowerPoint Presentation</span></h1>
                            <Link to="/contact" className='bg__green'>GET IN TOUCH WITH US</Link>
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

                {/* =================== Powerpoint Section =============== */}
                <section id='powerpoint__section'>
                    <div className="parallax">
                        <div className="layer layer3" ref={layer1}>
                            <div className="some__space2">
                                <div className="large__circle bg__green"></div>
                            </div>
                        </div>
                        <div className="layer layer4" ref={layer2}>
                            <div className="some__space2">
                                <div className="small__circle bg__green"></div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="section">
                            <div className="ecommerce_solution_content">
                                <h2>
                                    Time to ditch boring presentations and win clients.
                                    <Link to="/services">We can help?</Link>
                                </h2>
                                <p>Our agency doesn’t do boring and we don’t believe in off-the-shelf PowerPoint templates. Our aim is to not just
                                    design but also tell stories via slide decks. From writing content to developing graphics, we create bespoke
                                    presentations that narrate your tales in the most engaging ways possible. Our presentations fit you, your brand,
                                    your audience, and your brand communication in every way possible.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================== Presentation Section =============== */}
                <section id='presentation__section' className="container">

                    <div className="powerpoint_desktop desktop__visible">

                        <div className="presentation_services row">
                            <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                <div className="presentation_services_left">
                                    <h2>Presentation Services</h2>
                                    <p>With deep understanding and years of experience of design and digital storytelling and communication,
                                        our team delivers presentations that are crafted to match your expectations. Our multi-dimensional expertise
                                        and dynamic work portfolio have given us the upper hand to create tailormade presentation designs that suit
                                        diversified use cases and scenarios.</p>
                                    <div className="presentation_services_child row">

                                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                            <div className="services_child_element odd">
                                                <img src="/asset/powerpoint/1.png" alt="img" />
                                                <span>Business <br />Presentations</span>
                                                <p>From pitch deck and client proposals to investor updates and company profiles, we ace every business presentation.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                            <div className="services_child_element even">
                                                <img src="/asset/powerpoint/2.png" alt="img" />
                                                <span>Marketing <br />Presentations</span>
                                                <p>From marketing proposals to monthly metric reports, our expertise covers all the key elements of PR presentations.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                            <div className="services_child_element odd">
                                                <img src="/asset/powerpoint/3.png" alt="img" />
                                                <span>Sales <br />Presentations</span>
                                                <p>With our sales presentation, you not only initiate a deal on a positive note but also close it successfully. </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                            <div className="services_child_element even">
                                                <img src="/asset/powerpoint/4.png" alt="img" />
                                                <span>Education <br />Presentations</span>
                                                <p>Whether you are a student handling a college assignment or a professor turning in a thesis, we’ve got you covered. </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                <div className="presentation_services_carousel">
                                    <OwlCarousel className="owl-carousel owl-theme" loop={true} nav={false} margin={20} dots={true} items={1} autoplayHoverPause={true} autoplay={true} autoplayTimeout={3000}>
                                        <div className="item">
                                            <img src="/asset/powerpoint/presentation-carousel-img1.png" alt="img" />
                                        </div>
                                        <div className="item">
                                            <img src="/asset/powerpoint/presentation-carousel-img2.png" alt="img" />
                                        </div>
                                        <div className="item">
                                            <img src="/asset/powerpoint/presentation-carousel-img3.png" alt="img" />
                                        </div>
                                        <div className="item">
                                            <img src="/asset/powerpoint/presentation-carousel-img4.png" alt="img" />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="powerpoint_services row tab__visible">
                        <div className="col-xl-6 col-lg-12 col-md-12 nopadding">
                            <div className="presentation_services_left">
                                <h2>Presentation Services</h2>
                                <p>With deep understanding and years of experience of design and digital storytelling and communication,
                                    our team delivers presentations that are crafted to match your expectations. Our multi-dimensional expertise
                                    and dynamic work portfolio have given us the upper hand to create tailormade presentation designs that suit
                                    diversified use cases and scenarios.</p>

                                <div className="presentation_services_child row">

                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element odd">
                                            <img src="/asset/powerpoint/1.png" alt="img" />
                                            <span>Business <br />Presentations</span>
                                            <p>From pitch deck and client proposals to investor updates and company profiles, we ace every business presentation.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element even">
                                            <img src="/asset/powerpoint/2.png" alt="img" />
                                            <span>Marketing <br />Presentations</span>
                                            <p>From marketing proposals to monthly metric reports, our expertise covers all the key elements of PR presentations.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element odd">
                                            <img src="/asset/powerpoint/3.png" alt="img" />
                                            <span>Sales <br />Presentations</span>
                                            <p>With our sales presentation, you not only initiate a deal on a positive note but also close it successfully. </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element even">
                                            <img src="/asset/powerpoint/4.png" alt="img" />
                                            <span>Education <br />Presentations</span>
                                            <p>Whether you are a student handling a college assignment or a professor turning in a thesis, we’ve got you covered. </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="powerpoint_services row mobile__visible">

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="presentation_services_left">
                                <h2>Presentation Services</h2>
                                <p>With deep understanding and years of experience of design and digital storytelling and communication,
                                    our team delivers presentations that are crafted to match your expectations. Our multi-dimensional expertise
                                    and dynamic work portfolio have given us the upper hand to create tailormade presentation designs that suit
                                    diversified use cases and scenarios.</p>
                                <div className="presentation_services_child row">

                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element odd">
                                            <img src="/asset/powerpoint/1.png" alt="img" />
                                            <span>Business <br />Presentations</span>
                                            <p>From pitch deck and client proposals to investor updates and company profiles, we ace every business presentation.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element even">
                                            <img src="/asset/powerpoint/2.png" alt="img" />
                                            <span>Marketing <br />Presentations</span>
                                            <p>From marketing proposals to monthly metric reports, our expertise covers all the key elements of PR presentations.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element odd">
                                            <img src="/asset/powerpoint/3.png" alt="img" />
                                            <span>Sales <br />Presentations</span>
                                            <p>With our sales presentation, you not only initiate a deal on a positive note but also close it successfully. </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                        <div className="services_child_element even">
                                            <img src="/asset/powerpoint/4.png" alt="img" />
                                            <span>Education <br />Presentations</span>
                                            <p>Whether you are a student handling a college assignment or a professor turning in a thesis, we’ve got you covered. </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="presentation_services_carousel">
                                <OwlCarousel className="owl-carousel owl-theme" loop={true} nav={false} margin={20} dots={true} items={1} autoplayHoverPause={true} autoplay={true} autoplayTimeout={3000}>
                                    <div className="item">
                                        <img src="/asset/powerpoint/presentation-carousel-img1.png" alt="img" />
                                    </div>
                                    <div className="item">
                                        <img src="/asset/powerpoint/presentation-carousel-img2.png" alt="img" />
                                    </div>
                                    <div className="item">
                                        <img src="/asset/powerpoint/presentation-carousel-img3.png" alt="img" />
                                    </div>
                                    <div className="item">
                                        <img src="/asset/powerpoint/presentation-carousel-img4.png" alt="img" />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>

                    </div>

                </section>

                {/* ================= Our Process Section ================== */}
                <section id='our_process__section' className='bg__blue'>
                    <div className="container">
                        <div className="section">
                            <div className="presentation_process_content">
                                <h2 className="green">The Process <br />we follow</h2>
                                <p className="text-white">The value and importance of eye-catching PowerPoint presentations has permeated into every
                                    sphere of marketing and communication. Hence, with our professionally designed and innovative presentations,
                                    we aim to set your brand apart.</p>
                                <div className="presentation_process_child row">

                                    <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                        <div className="presentation_child_content">
                                            <span className="green">01</span>
                                            <label className="text-white">Research <br />&amp; Concepts</label>
                                            <p className="text-white">To understand the essence of your company, our initial research revolves around
                                                you and your business. Once we have everything we need, we conceptualize and present you with ideas
                                                that cover everything from plain and simple to on-the-face and daring.</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                        <div className="presentation_child_content">
                                            <span className="green">02</span>
                                            <label className="text-white">Content <br />Analysis</label>
                                            <p className="text-white">That’s a lot that’s possible with a PPT presentation. After analyzing your preferences
                                                and the type of content you want, we can take your presentation to the next level. We can also customize
                                                graphics, illustrations, and animations to present your content in a more engaging manner. </p>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                        <div className="presentation_child_content">
                                            <span className="green">03</span>
                                            <label className="text-white">Design <br />&amp; Implementation</label>
                                            <p className="text-white">Cutting through corporate fluff, here we plan how to create a fusion of storytelling
                                                and design that’s crisp, easy to follow, and fun to listen for you and others. We plan an appropriate
                                                color scheme and graphics so that you have an immersive visual journey to present.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================== Testimonial Section ===================== */}
                <Testimonial />

                <ServicesWork />

            </div>

            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}> <i className="ri-arrow-up-s-line"></i> </div>

        </div>

    )
}

export default Powerpoint