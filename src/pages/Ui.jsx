import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ServicesWork from "../components/ServicesWork"

function Ui() {

    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const layer1 = useRef(null);
    const layer2 = useRef(null);
    const layer3 = useRef(null);
    const layer4 = useRef(null);
    const layer5 = useRef(null);
    const layer6 = useRef(null);
    const layer7 = useRef(null);
    const layer8 = useRef(null);
    const layer9 = useRef(null);
    const layer10 = useRef(null);

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
        layer3.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer4.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer5.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer6.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer7.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer8.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer9.current.style.transform = `translate3d(${xPos3},${yPos3},0)`;
        layer10.current.style.transform = `translate3d(${xPos4},${yPos4},0)`;

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
        <div className='ui__wrapper overflow'>

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
                            768: {
                                items: 3
                            },
                            1199: {
                                items: 4
                            },
                            1350: {
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

                {/* =================== UI/UX Process Section =============== */}
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

                                <div className="col-lg-6">
                                    <div className="step__slider">
                                        <OwlCarousel className="owl-theme" loop={false} nav={false} margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={5000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step1.png" alt="vector" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>

                                <div className="parallax">
                                    <div className="layer layer3" ref={layer3}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row step__reverse">
                                <div className="col-lg-6">
                                    <div className="ui_ux__info">
                                        <p className='number__bg'>02</p>
                                        <div className="info__top">
                                            <h3 className='info__title'>Conducting UX Research</h3>
                                            <p className='info__subtitle'>In this phase, our UX researcher employs a range of different discovery activities which brings more clarity to the project</p>
                                            <ul className='info__list'>
                                                <li className="info__item">
                                                    <p>Interview platform users</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Create User Personas</p>
                                                </li>
                                                <li className="info__item">
                                                    <p> Record research findings and user pain points</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Conduct UX audit</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="step__slider">
                                        <OwlCarousel className="owl-theme" loop={true} nav={false} margin={0} dots={true} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step2.png" alt="vector" />
                                            </div>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step3.png" alt="vector" />
                                            </div>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step4.png" alt="vector" />
                                            </div>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step10.png" alt="vector" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>

                                <div className="parallax">
                                    <div className="layer layer3" ref={layer4}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ui_ux__info">
                                        <p className='number__bg'>03</p>
                                        <div className="info__top">
                                            <h3 className='info__title'>Finalizing Content Architecture</h3>
                                            <p className='info__subtitle'>Our strategist find out what stakeholders are trying to achieve with the content and analyze what content, competitors are producing, and after going through various editing and review processes the website copy is finalized</p>
                                            <ul className='info__list'>
                                                <li className="info__item">
                                                    <p>Content audit</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Competitor analysis</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Content creation</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Logical grouping and structuring of content</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="step__slider">
                                        <OwlCarousel className="owl-theme" loop={true} nav={false} margin={0} dots={true} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step5.png" alt="vector" />
                                            </div>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step6.png" alt="vector" />
                                            </div>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step7.png" alt="vector" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>

                                <div className="parallax">
                                    <div className="layer layer3" ref={layer5}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row step__reverse">
                                <div className="col-lg-6">
                                    <div className="ui_ux__info">
                                        <p className='number__bg'>04</p>
                                        <div className="info__top">
                                            <h3 className='info__title'>Creating High and Low Fidelity Wireframes</h3>
                                            <p className='info__subtitle'>In the initial step, multiple ideas are generated so our designers start UX sketching by creating wireframes to consider different approaches and to decide which is the most efficient user journey to acheive the project goal.</p>
                                            <ul className='info__list'>
                                                <li className="info__item">
                                                    <p>UX Sketching</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>User Journey</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="step__slider">
                                        <OwlCarousel className="owl-theme" loop={false} nav={false} margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={5000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step8.png" alt="vector" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>

                                <div className="parallax">
                                    <div className="layer layer3" ref={layer6}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ui_ux__info">
                                        <p className='number__bg'>05</p>
                                        <div className="info__top">
                                            <h3 className='info__title'>Designing User Interface or Visual Designs</h3>
                                            <p className='info__subtitle'>We now create visual designs, focusing on the design aesthetics of the site and its related materials.</p>
                                            <ul className='info__list'>
                                                <li className="info__item">
                                                    <p>Lines</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Shapes</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Color</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Texture</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Typography</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Forms</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="step__slider">
                                        <OwlCarousel className="owl-theme" loop={false} nav={false} margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={5000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step9.png" alt="vector" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>

                                <div className="parallax">
                                    <div className="layer layer3" ref={layer7}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row step__reverse">
                                <div className="col-lg-6">
                                    <div className="ui_ux__info">
                                        <p className='number__bg'>06</p>
                                        <div className="info__top">
                                            <h3 className='info__title'>Interactive Proof Of Concept or IPoC</h3>
                                            <p className='info__subtitle'>This is our bread and butter. At the end of this phase, we will</p>
                                            <ul className='info__list'>
                                                <li className="info__item">
                                                    <p>Have interactive prototypes</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Bring the user interface design to life</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Allow users to provide valuable feedback on how well the design provides the solution to the project goal</p>
                                                </li>
                                                <li className="info__item">
                                                    <p>Have final designs, ready for developers</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="step__slider">
                                        <OwlCarousel className="owl-theme" loop={false} nav={false} margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={5000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true}>
                                            <div className="item">
                                                <img src="/asset/ui-ux/step12.png" alt="vector" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>

                                <div className="parallax">
                                    <div className="layer layer3" ref={layer8}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ================== Why Choose us Section =============== */}
                <section id='why_chose_us__section'>
                    <div className="container">
                        <h2>Why should you choose our UI/UX Designers</h2>
                        <p>We work exactly like an in-house UX team providing guarantee of on-time and perfect output. Our team includes professionals with multiple skill sets like researchers, analysts, UX designers and visual designers.</p>
                        <ul className='text-white'>
                            <li>Seasoned UX professionals with design thinking expertise </li>

                            <li>Business acumen and industry knowledge across Education, Finance, Health and Technology domains</li>

                            <li>Lean and Agile approach in product design to optimize cost and faster delivery</li>

                            <li>Experience in designing and managing large enterprise products</li>

                            <li>Avail great offers on hiring a complete team</li>

                            <li>You can start with just a two month retainer contract</li>
                        </ul>
                    </div>
                    <div className="why_us_absolute">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="why_container">
                                    <img src="/asset/ui-ux/contract.png" alt="vector" />
                                    <h2 className="why_heading">No Rigid <br /> Contract</h2>
                                    <p>No lock-in terms, no risk to your business. Just give one month's notice to terminate the work agreement. </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="why_container">
                                    <img src="/asset/ui-ux/artistic.png" alt="vector" />
                                    <h2 className="why_heading">Artistic <br /> Execution</h2>
                                    <p>We do it right the first time. Our designs don't just stand out but are innovative and engaging.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="why_container">
                                    <img src="/asset/ui-ux/nda.png" alt="vector" />
                                    <h2 className="why_heading">Ironclad <br /> NDA</h2>
                                    <p>We understand the privacy and confidentiality you would like us to maintain.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="why_container">
                                    <img src="/asset/ui-ux/support.png" alt="vector" />
                                    <h2 className="why_heading">Dedicated <br /> Support</h2>
                                    <p>As a team, we aim to exceed your expectations with our dedicated support which is available 24x7.</p>
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
                                    <div className="layer" ref={layer9}>
                                        <div className="some__space2">
                                            <div className="large__circle bg__green"></div>
                                        </div>
                                    </div>
                                </div>
                                <OwlCarousel className="owl-theme" loop={true} nav={true} margin={20} dots={false} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]}>

                                    <div className="item">
                                        <div className="portfolio__item row">
                                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                                <div className="portfolio__item__img">
                                                    <img src="/asset/tab-frame.png" alt="macbook" />
                                                    <div className="portfolio__item__parent">
                                                        <div className="blockside"><div className="blocker"></div></div>
                                                        <div className="reveal__content">
                                                            <img loading='lazy' src="asset/portfolio__tab/1.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                                <div className="portfolio__item__text">
                                                    <h5>Quid Tutor</h5>
                                                    <p>Quid Tutor is an online teaching platform which covers 45 minutes of Tutoring at just £1
                                                    </p>
                                                    <span>UI/UX</span>
                                                    <span>FrontEnd Development</span>
                                                    <span>Product Development</span>
                                                    <div className="clear"></div>
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
                                                            <img loading='lazy' src="asset/portfolio__tab/2.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                                <div className="portfolio__item__text">
                                                    <h5>FPV Lifestyle</h5>
                                                    <p>FPV Lifestyle is an e-Commerce platform for customized drone. </p>
                                                    <span>UI/UX</span>
                                                    <span>FrontEnd Development</span>
                                                    <span>Product Development</span>
                                                    <div className="clear"></div>
                                                    <a href="https://www.fpvlifestyle.com/" target='_blank'>Visit Website</a>
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
                                                            <img loading='lazy' src="asset/portfolio__tab/3.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                                <div className="portfolio__item__text">
                                                    <h5>Engage</h5>
                                                    <p>Engage is a FinTech platform that leverages financial institutions for tracking,
                                                        monitoring and generating report for all international payment transfers done around the world via their startup. </p>
                                                    <span>UI/UX</span>
                                                    <span>FrontEnd Development</span>
                                                    <span>Product Development</span>
                                                    <div className="clear"></div>
                                                    <a href="https://www.unitedmonks.com/engage.php" target='_blank'>View Case Study</a>
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
                                                            <img loading='lazy' src="asset/portfolio__tab/4.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                                <div className="portfolio__item__text">
                                                    <h5>MyProGamer</h5>
                                                    <p>MyProGamer is an online gaming platform for players who want to improve their gaming skills.</p>
                                                    <span>UI/UX</span>
                                                    <span>FrontEnd Development</span>
                                                    <span>Product Development</span>
                                                    <div className="clear"></div>
                                                    <a href="https://www.unitedmonks.com/mpg.php" target='_blank'>View Case Study</a>
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
                                                            <img loading='lazy' src="asset/portfolio__tab/5.jpg" alt="img" />
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
                                                    <a href="https://www.healthsetgo.com/" target='_blank'>VIEW WEBSITE</a>
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
                                                            <img loading='lazy' src="asset/portfolio__tab/6.jpg" alt="img" />
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
                                                    <a href="https://www.behance.net/gallery/97762167/Adfluence" target='_blank'>VIEW CASE STUDY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>

                <ServicesWork />

                {/* =================== Testimonial Section ===================== */}
                <section id='testimonial__section'>
                    <h3>Testimonial</h3>
                    <div className="container">
                        <span className='green top__text'>a word from our clients</span>
                        <div className="testimonial__container">

                            <div className="testimonial__carousel">

                                <div className="parallax">
                                    <div className="layer layer4" ref={layer10} style={{ position: "relative" }}>
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

            </div>


            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}> <i className="ri-arrow-up-s-line"></i> </div>

        </div>
    )
}

export default Ui