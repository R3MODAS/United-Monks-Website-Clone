import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Ui() {

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
        document.title = "UI/UX";
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
        <div className='ui__wrapper'>

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
                            <label className='text-white'>UI and UX</label>
                            <h1 className="text-white"><span className="green">Get a high-profit</span> <span className="white last__child">UI and UX design</span></h1>
                            <ul>
                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/1.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Figma</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/2.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Sketch</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/3.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Zeplin</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/4.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Xd</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/5.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Lottie</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/6.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Photoshop</p>
                                    </div>
                                </li>

                                <li>
                                    <div className='ui__icon__container'>
                                        <div className="ui__icon">
                                            <img src="/asset/Ui Icons/7.png" alt="img" />
                                        </div>
                                        <p className='text-white'>Illustrator</p>
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

                {/* =================== UI/UX Section ================== */}
                <section id='ui_ux__section'>
                    <div className="container">
                        <div className="extrapadding">
                            <div className="ui_ux__container">
                                <h2>Is your product hard to use &amp; face high bounce rate?
                                    <Link to="/contact">We can help</Link>
                                </h2>

                                <p>At United Monks, we believe your product can be complex, but the UI design must be easy. We use an user-centered approach and proven CX/UX methodology to design and create successful solutions that match three perspectives: user needs, business goals, and product capabilities.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================== What we Love Section ============== */}
                <section id='what_we_love__section'>
                    <div className="container">
                        <h2>
                            What we
                            <img src="asset/heart.png" alt="icon" />
                            to work on
                        </h2>
                        <p>Tough problems are our forte, whether that’s domain complexity or human complexity (like facilitating new behaviours).</p>
                    </div>
                    <div className="wwl__slider">
                        <OwlCarousel className="owl-theme" loop={true} nav={true} margin={20} dots={false} items={5} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]} responsive={{
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
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>FinTech</p>
                                    </div>
                                    <img src="asset/what we love/1.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                            <div className="item">
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>FoodTech</p>
                                    </div>
                                    <img src="asset/what we love/2.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                            <div className="item">
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>Enterprise</p>
                                    </div>
                                    <img src="asset/what we love/3.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                            <div className="item">
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>HRTech</p>
                                    </div>
                                    <img src="asset/what we love/4.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                            <div className="item">
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>EduTech</p>
                                    </div>
                                    <img src="asset/what we love/5.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                            <div className="item">
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>Startups</p>
                                    </div>
                                    <img src="asset/what we love/6.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                            <div className="item">
                                <div className="wwl__box">
                                    <div className="box__header">
                                        <p>BioTech</p>
                                    </div>
                                    <img src="asset/what we love/2.png" alt="img" className='wwl__img' />
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </section>

                {/* =================== UI/UX Process =============== */}
                <section id='ui_ui_process__section'>
                    <div className="container">
                        <h2>Our UI/UX Process</h2>
                        <div className="ui_ux_steps__container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ui_ux__info">
                                        <p className='number__bg'>01</p>
                                        <div className="info__top">
                                            <h3 className='info__title'>Understanding Business Requirement</h3>
                                            <p className='info__subtitle'>Identify key stakeholders & capture their requirements</p>
                                            <ul className='info__list'>
                                                <li className="info__item">
                                                    <p>Using stakeholder interviews</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Agree on project goals.</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Know precisely what we’re building (defined scope)</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Know how we’re going to approach the problem.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6"></div>

                                <div className="parallax"></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}> <i className="ri-arrow-up-s-line"></i> </div>

        </div>
    )
}

export default Ui