import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Story() {

    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);

    const MouseMove = (event) => {
        const layer1 = document.querySelector(".layer1");
        const layer2 = document.querySelector(".layer2");
        const layer3 = document.querySelector(".layer3");
        const layer4 = document.querySelector(".layer4");
        const layer5 = document.querySelector(".layer5");
        const layer6 = document.querySelector(".layer6");

        let xPos1 = 1 - event.x * 0.06 + "px";
        let yPos1 = 1 - event.y * 0.06 + "px";

        let xPos2 = event.x * 0.05 + "px";
        let yPos2 = event.y * 0.05 + "px";

        layer1.style.transform = `translate3d(${xPos1},${yPos1},0)`;
        layer2.style.transform = `translate3d(${xPos2},${yPos2},0)`;
        layer3.style.transform = `translate3d(${xPos2},${yPos2},0)`;
        layer4.style.transform = `translate3d(${xPos1},${yPos1},0)`;
        layer5.style.transform = `translate3d(${xPos2},${yPos2},0)`;
        layer6.style.transform = `translate3d(${xPos1},${yPos1},0)`;

    }

    const scrollBehaviour = () => {
        const sliderContainer = document.querySelector(".slider__container");
        const sliderText = document.querySelector(".slider__text__container");
        const sliderBanner = document.querySelector(".banner__caption");
        let value = window.scrollY;
        let pos1 = -(value * 35 / 100)

        sliderContainer.setAttribute('style', `transform: translate3d(0px, ${pos1}px, 0px)`);
        sliderText.style.opacity = (1 - value / 700);
        sliderBanner.style.opacity = (1 - value / 700);
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

    useEffect(() => {
        document.title = "About Us | Story and Team of United Monks"
        window.addEventListener("scroll", toggleVisible);
        const wrapper = document.querySelector(".wrapper");
        wrapper.addEventListener("mousemove", MouseMove);
        window.addEventListener("scroll", scrollBehaviour);
        AOS.init();

        return () => {
            window.removeEventListener("scroll", toggleVisible);
            wrapper.removeEventListener("mousemove", MouseMove);
            window.removeEventListener("scroll", scrollBehaviour);
        }
    }, [])

    return (
        <div className='wrapper overflow'>

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
                            <li><Link to="/story" className='active'>Our Story</Link></li>
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
                    <li><Link to='/story' className='header__link active' >our story</Link></li>
                    <li><Link to='/services' className='header__link' >services</Link></li>
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
                            <div className="some__space2">
                                <div className="large__circle bg__green"></div>
                            </div>
                        </div>

                        <div className="layer layer2">
                            <div className="some__space3">
                                <div className="small__circle bg__green"></div>
                            </div>
                        </div>

                        <div className="layer layer3">
                            <div className="some__space2">
                                <div className="medium__circle bg__blue"></div>
                            </div>
                        </div>

                        <div className="layer layer4">
                            <div className="some__space1">
                                <div className="dotted__green"></div>
                            </div>
                        </div>

                    </div>

                    <div className="container clearfix">
                        <div className="slider__story slider__text__container">
                            <h1>
                                <span className="desktop__visible">
                                    We know the value <br /> of great experiences,
                                    <br />  so we build<br />
                                    the best ones<span className="green">.</span>
                                </span>
                                <span className="tab__visible">
                                    We know the value <br /> of great experiences,
                                    <br />  so we build<br />
                                    the best ones<span className="green">.</span>
                                </span>
                                <span className="mobile__visible">
                                    We know the value <br /> of great experiences,
                                    <br />  so we build<br />
                                    the best ones<span className="green">.</span>
                                </span>
                            </h1>
                            <div className="banner__story banner__caption">Simplicity is the mark of a true genius, and of new age digital monks (Meaning us!). Anybody can find complex solutions to complex problems. But it takes exceptional skill to look for the perfection that lies in simplicity. And that’s what our developers, designers, and strategists love to do. </div>
                        </div>
                    </div>

                    <a href="#content" className='scroll__animation__parent tab__visible'>
                        <i className="ri-arrow-down-double-line scroll__animation"></i>
                    </a>

                </div>
            </section>

            {/* ================== Main Content Section =============== */}
            <div id='content'>

                <div className="content__wrapper nopadding">
                    {/* =================== How it Started Section =============== */}
                    <section id='how__it__started__section'>
                        <div className="container">
                            <h2>One<br />Milestone<br />To Another<span className="green">.</span></h2>
                            <div data-aos="fade-up" data-aos-duration="2000">
                                <p>United Monks was established by a group of people driven by a strong desire to explore the full potential of their talent. We left behind office politics, 12-hour work days, crappy coffee and everything bad, ugly, and ugliest to pursue creativity without drama. And that’s how, 6 years ago, we began our journey to greatness and beyond.</p>
                            </div>
                        </div>
                    </section>

                    {/* =================== Our Values Section =============== */}
                    <section id='our__values__section' className='bg__blue'>
                        <div className="container">
                            <h2 className='green'>What<br />Defines Us</h2>
                            <p className="text-white desktop__visible">If there’s one thing United Monks runs on, it’s values. They are our Holy Grail, our Book of God, <br />and the only constant in a world of change. </p>
                            <p className="text-white mobile__visible">If there’s one thing United Monks runs on, it’s values. They are our Holy Grail, our Book of God, and the only constant in a world of change. </p>

                            <div className="values__point row">

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="value__unit">
                                        <label className="montserrat">01</label>
                                        <p>Be Passionate<br />in your work</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="value__unit">
                                        <label className="montserrat">02</label>
                                        <p>Be Innovative<br />in your approach</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="value__unit">
                                        <label className="montserrat">03</label>
                                        <p>Be Professional<br />in your conduct</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-lg-4 col-md-4 col-sm-4 nopadding">

                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="value__unit">
                                        <label className="montserrat">04</label>
                                        <p>Be Relentless<br />in pursuing excellent</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 nopadding">
                                    <div className="value__unit">
                                        <label className="montserrat">05</label>
                                        <p>Be Transparent<br />with the clients </p>
                                    </div>
                                </div>




                            </div>

                            <div className="parallax">
                                <div className="layer layer5">
                                    <div className="some__space2">
                                        <div className="large__circle bg__green"></div>
                                    </div>
                                </div>

                                <div className="layer layer6">
                                    <div className="some__space3">
                                        <div className="dotted__element"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* =================== How we work Section ================ */}
                    <section className='section'>
                        <div className="container">
                            <div className="how__we__work__container row">

                                <div className="col-xl-7 col-lg-7 col-md-7 nopadding">

                                    <div className="how__we__work__left">

                                        <label className="green">How We Work</label>

                                        <p>Achieving perfection isn’t easy, but we’ve managed to create a process that works like a charm every single time. </p>

                                        <h2>There is a<br />method<br />to our<br />madness<span className="green">.</span></h2>

                                        <Link to="/services">
                                            <button className="desktop__visible bg__green">Know More</button>
                                        </Link>

                                        <Link to="/services">
                                            <button className="tab__visible bg__green">Know More</button>
                                        </Link>

                                    </div>

                                </div>

                                <div className="col-xl-1 col-lg-1 col-md-1 nopadding">

                                    <div className="how__we__work__img">

                                        <img src="/asset/vertical-line.png" alt="Unitedmonks Vertical Line" />

                                    </div>

                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">

                                    <div className="how__we__work__right">

                                        <div className="list__item">

                                            <label className="black">You Choose</label>

                                            <p>what expertise you want</p>

                                        </div>

                                        <div className="list__item">

                                            <label className="black">We Place</label>

                                            <p>the perfect team at your disposal<br />(no freelancers)</p>

                                        </div>

                                        <div className="list__item">

                                            <label className="black">A Successful Takeoff</label>

                                            <p>backed by a dedicated team</p>

                                        </div>

                                        <div className="list__item">

                                            <label className="black">We Collaborate</label>

                                            <p>effectively with your team</p>

                                        </div>

                                        <div className="list__item">

                                            <label className="black">We Achieve</label>

                                            <p>success together</p>

                                        </div>

                                        <div className="list__item">

                                            <label className="black">You Scale Up</label>

                                            <p>efficiently and successfully</p>

                                        </div>



                                        <Link to="/services">
                                            <button className="mobile__visible bg__green">Know More</button>
                                        </Link>


                                    </div>

                                </div>


                            </div>
                        </div>
                    </section>
                </div>

            </div >

            <div className='extrapadding'></div>


            {/* ==================== Footer Section ====================== */}
            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}>
                <i className="ri-arrow-up-s-line"></i>
            </div>

        </div >
    )
}

export default Story