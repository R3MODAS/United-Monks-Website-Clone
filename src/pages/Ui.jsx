import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Ui() {

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

    useEffect(() => {
        document.title = "UI/UX";
        window.addEventListener("scroll", toggleVisible);

        return () => {
            window.removeEventListener("scroll", toggleVisible);
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

            <section id="slider__section">
                <div className="slider__container">

                    <div className="parallax">
                        <div className="layer layer1">
                            <div className="some__space2">
                                <div className="green__circle"></div>
                            </div>
                        </div>

                        <div className="layer layer2">
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

            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}> <i className="ri-arrow-up-s-line"></i> </div>

        </div>
    )
}

export default Ui