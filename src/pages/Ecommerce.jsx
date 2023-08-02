import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ServicesWork from "../components/ServicesWork"

function Ecommerce() {
    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const layer1 = useRef(null);
    const layer2 = useRef(null);
    const layer3 = useRef(null);
    const layer4 = useRef(null);
    const layer5 = useRef(null);
    const layer6 = useRef(null);
    const layer7 = useRef(null);

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
        layer6.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer7.current.style.transform = `translate3d(${xPos4},${yPos4},0)`;

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
        document.title = "E-commerce Solutions";
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
        <div className='ecommerce__wrapper overflow'>

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
                            <label className='text-white'>Ecommerce</label>
                            <h1 className="text-white"><span className="green">Build a money-making</span> <span className="white last__child">Ecommerce Website</span></h1>
                            <ul>
                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/ecommerce/woo.png" alt="img" />
                                        </div>
                                        <p className='text-white'>WooCommerce</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/ecommerce/shopify.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Shopify</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/ecommerce/prestashop.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Prestashop</p>
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

                {/* =================== Dry Spell Section ================== */}
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
                                        Dry spell on your E-commerce website?
                                        <Link to="/services">We can make it rain!</Link>
                                    </h2>
                                    <p>Who doesn’t want to own an income-generating, sales-making business? We can make this a reality for your E-commerce projects.<br />
                                        To get the best value on your investment, choose from our vast range of E-commerce packages, software and shopping cart systems.
                                        After that, our experts will pour their blood, sweat, and tears into designing and developing a website that’ll make you Richie Rich.
                                        But our commitment doesn’t end there. With tight competition in the online marketplace, you might need a little help, and that’s exactly
                                        what we’ll provide. We’ll continue giving you the support and the maintenance you need to hold your own and become the best E-commerce site there is.</p>
                                    <ul>
                                        <li>
                                            <a href="#hosted_ecommerce__section">
                                                <i className="fa-solid fa-circle-check green"></i>
                                                Hosted Ecommerce Solution
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#advance_ecommerce__section">
                                                <i className="fa-solid fa-circle-check green"></i>
                                                Advance Ecommerce Solution
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================== Frontend Section ================== */}
                <div className='container-fluid'>
                    <div className="hosted_ecommerce row" id='hosted_ecommerce__section'>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding mobile__visible">
                            <div className="hosted_ecommerce_right">
                                <img src="/asset/ecommerce/hosted-ecommerce-img.png" alt="img" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="hosted_ecommerce_left">
                                <h2>Hosted Ecommerce Solutions</h2>
                                <p>Heard of Software as a Service (SaaS)? In case you’re a newbie and this jargon is all Greek to you, let us put it simply: This is the solution to all your questions. With this option, you get the whole online shopping cart system, a preconfigured integrated product catalogue tool for easy implementation and a customized website that is dripping with your brand identity.</p>
                                <span>What all do you choose from? It’s yours for the picking:</span>
                                <ul>
                                    <li>Shopping Cart</li>
                                    <li>Product Database</li>
                                    <li>Online Payment Processing</li>
                                    <li>Shipping Options</li>
                                    <li>Promotional Tools</li>
                                    <li>Traffic/Customer Reports</li>
                                    <li>Content Management Tools</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding desktop__visible">
                            <div className="hosted_ecommerce_right">
                                <img src="/asset/ecommerce/hosted-ecommerce-img.png" alt="img" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding tab__visible">
                            <div className="hosted_ecommerce_right">
                                <img src="/asset/ecommerce/hosted-ecommerce-img.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================== Advance Ecommerce Section ================== */}
                <div className='container-fluid'>
                    <div className="advance_ecommerce row" id='advance_ecommerce__section'>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="advance_ecommerce_left">
                                <img src="/asset/ecommerce/advanced-ecommerce-img.png" alt="img" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="advance_ecommerce_right">

                                <div className="parallax">
                                    <div className="layer" ref={layer6}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hosted_ecommerce_left">
                                    <h2>Advance Ecommerce Solutions</h2>
                                    <p>Want to get everything without making a compromise? Well, this is just for you. With advanced E-commerce solutions, your potential online revenue grows higher and you won’t have to sacrifice anything. It’s because our customized solutions will integrate and fit right in with your existing product database and enterprise system.</p>
                                    <span>Along with the features with a hosted solution, you also get:</span>
                                    <ul>
                                        <li>Open-Source technologies</li>
                                        <li>Custom application interface programming</li>
                                        <li>Product database integration</li>
                                        <li>Legacy system integration</li>
                                        <li>Enterprise system integration development</li>
                                        <li>Scalability with full feature capacity</li>
                                        <li>If you need something that isn’t on the above list, just ask. We’re happy to provide precisely what works best for you</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================== We can Get you Section =================== */}
                <section id='we_can_get_you__section'>
                    <div className="our_values bg__green">
                        <div className="container">
                            <h2>The results will make you love us</h2>
                            <div className="values_point row">

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="our_value_unit">
                                        <label className="montserrat">01</label>
                                        <p>Customers,<br />Customers Everywhere</p>
                                        <span>Be it desktops, tablets or mobile devices, we’ll make your E-commerce website responsive on every device, making you more visible. And greater the visibility for your business, the wider its reach, and more your profit.</span>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="our_value_unit">
                                        <label className="montserrat">02</label>
                                        <p>Shopping<br />Made Easy</p>
                                        <span>The most annoying thing when visiting an E-commerce website is the loading time. And that’s what our developers avoid with tried and tested methods coupled with the latest techniques. We make your user’s shopping experience lightning fast, taking them from browsing to check out in just seconds.</span>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="our_value_unit">
                                        <label className="montserrat">03</label>
                                        <p>All About<br />the Products</p>
                                        <span>It doesn’t matter what your products are, we provide you a host of options for all of them. From customizing your product options based on your requirements to providing a completely new set of product features and functionality, there’s plenty that you can do with your E-commerce site.</span>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="our_value_unit">
                                        <label className="montserrat">04</label>
                                        <p>Manage Content<br />with Ease</p>
                                        <span>No more fuss when it comes to updating pages, categories, products and other content on your website. We will design a content management system so easy, anyone will be able to breeze through it like a pro.</span>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="our_value_unit">
                                        <label className="montserrat">05</label>
                                        <p>Marketing<br />Matters Always</p>
                                        <span>When running an E-commerce website, marketing is vital. We will help you boost your marketing abilities with tools that help optimize your page for search engines, create landing pages, and run promotions to drive revenue.</span>
                                    </div>
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
                                    <div className="layer layer4" ref={layer7} style={{ position: "relative" }}>
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

export default Ecommerce