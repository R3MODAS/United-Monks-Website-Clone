import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ServicesWork from "../components/ServicesWork"
import Testimonial from '../components/Testimonial';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Graphics() {
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
        document.title = "Graphic Designing";
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

        <div className='graphics__wrapper'>

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
                            <label className='text-white'>Graphic Designing</label>
                            <h1 className="text-white"><span className="green">For graphics that</span> <span className="white last__child">make you drool</span></h1>
                            <Link to="/contact" className='bg__green'>Contact us soon</Link>
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

                {/* =================== Graphics Design Section =============== */}
                <section id='graphic_design__section'>
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
                                    Looking for designs that champion creativity and utility?
                                    <Link to="/services">We can help?</Link>
                                </h2>
                                <p>United monks specialize in taking your ideas and bringing them to life! How? We meditate on it. Ha-ha-ha, just kidding!
                                    We brainstorm ideas, come up with concepts, burn the midnight oil, drink copious amounts of caffeine, and then we do it
                                    all over again till we hit that sweet spot otherwise known as perfection. At United Monks, we craft designs that tell
                                    your story the way you’d like it to be told.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================== Hire us Part I Section =============== */}
                <section id='hire_section__1' className="container">
                    <div className="hire_us_for">
                        <h2>Hire Us For</h2>
                        <div className="hire_us_total row">

                            <div className="col-xl-6 col-lg-6 col-md-12 nopadding">
                                <div className="hire_us_child row">

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                                        <div className="hire_us_child_content first_child">
                                            <a href="#" className='hire_us_child_parent'>
                                                <img src="/asset/graphic/logo-and-branding.png" alt="img" />
                                                <span>Logo &amp; Brand <br />Identity</span>
                                                <p>A logo reflects the value of your brand. And we make it look polished, distinctive and memorable.</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                                        <div className="hire_us_child_content border_top_none border-left">
                                            <a href="#" className='hire_us_child_parent'>
                                                <img src="/asset/graphic/leaflet.png" alt="img" />
                                                <span>Leaflet, Brochure, <br />Pamphlet</span>
                                                <p>Searching for marketing collaterals that are creative, impactful, and memorable? Your quest ends here!</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                                        <div className="hire_us_child_content first_child border_bottom" >
                                            <a href="#" className='hire_us_child_parent'>
                                                <img src="/asset/graphic/infographics.png" alt="img" />
                                                <span>Infographics &amp; <br />Illustration</span>
                                                <p>Our infographics give shape to words while our illustrations bring even the most mundane visuals to life.</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                                        <div className="hire_us_child_content border-left border_bottom border_top_none">
                                            <a href="#" className='hire_us_child_parent'>
                                                <img src="/asset/graphic/standee.png" alt="img" />
                                                <span>Billboard, Flex, <br />Standee</span>
                                                <p>We enhance your brand’s visibility with out of the box designs to support your marketing strategy.</p>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12 nopadding">
                                <div className="hire_us_carousel">
                                    <OwlCarousel className="owl-carousel owl-theme" loop={true} nav={false} margin={20} dots={true} items={1} autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true}>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/brand_identity.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/packaging.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/brochure.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/tshirt_designing.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/menu_designing.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/billboard_design.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="hire_us_carousel_item">
                                                <img src="/asset/graphic/standee_design.png" alt="img" />
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= Hire us Part II Section ================== */}
                <section id='hire_section__2' className='container'>
                    <div className="hire_us_bottom row">

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child border_bottom">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/resturant-menu.png" alt="img" />
                                    <span>Restaurant <br/>Menu</span>
                                    <p>For mouthwatering menus with tasty descriptions, crisp fonts, and design panache, give us a call</p>
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/packaging-icon.png" alt="img" />
                                    <span>Packaging <br/>Design</span>
                                    <p>Packaging design so fine, your customers are going to fall over themselves ordering for your products.</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/tshirt.png" alt="img" />
                                    <span>Tshirt <br/>Design</span>
                                    <p>Fancy some customized T-shirt designs? We got you!</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child border_right">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/social-media-banner.png" alt="img" />
                                    <span>Social Media <br/>Banner</span>
                                    <p>Banners are what captures your audience hook, line and sinker, so say yay to captivating banners with us!</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child border_bottom">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/email-newsletter.png" alt="img" />
                                    <span>Email <br/>Newsletter</span>
                                    <p>Live that high click rate life with persuasive and creative newsletters that your customers will love.</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child border_top_none border_bottom">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/powerpoint-presentation.png" alt="img" />
                                    <span>PowerPoint <br/>Presentation</span>
                                    <p>Well structured, well-designed and absorbing in every way possible, your presentation will grab everyone’s attention in no time at all.</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child border_top_none border_bottom">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/word-template.png" alt="img" />
                                    <span>Word <br/>Template</span>
                                    <p>With templates so tasteful, even the humble MS Word will become a captivating ally in your work planning.</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 nopadding">
                            <div className="hire_us_child_content first_child border_top_none border_right border_bottom">
                                <a href="#" className='hire_us_child_parent'>
                                    <img src="/asset/graphic/website-banner.png" alt="img" />
                                    <span>Website <br/>Banners</span>
                                    <p>Is your dream banner made of all things eye-catching and traffic generating? Let’s talk!</p>
                                </a>
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

export default Graphics