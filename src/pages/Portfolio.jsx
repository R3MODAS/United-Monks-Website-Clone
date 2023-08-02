import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Portfolio() {

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

    const MouseMove = (event) => {
        const layer1 = document.querySelector(".layer1");
        const layer2 = document.querySelector(".layer2");
        const layer3 = document.querySelector(".layer3");
        const layer4 = document.querySelector(".layer4");
        const layer5 = document.querySelector(".layer5");
        const layer6 = document.querySelector(".layer6");
        const layer7 = document.querySelector(".layer7");


        let xPos1 = event.x * 0.06 + "px";
        let yPos1 = event.y * 0.06 + "px";

        let xPos2 = 1 - event.x * 0.06 + "px";
        let yPos2 = 1 - event.y * 0.06 + "px";

        let xPos3 = 1 - event.x * 0.01 + "px";
        let yPos3 = 1 - event.y * 0.3 + "px";

        let xPos4 = 1 - event.x * 0.01 + "px";
        let yPos4 = 1 - event.y * 0.10 + "px";

        layer1.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
        layer2.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
        layer3.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
        layer4.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
        layer5.style.transform = "translate3d(" + xPos3 + ", " + yPos3 + ", 0)";
        layer6.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
        layer7.style.transform = "translate3d(" + xPos4 + ", " + yPos4 + ", 0)";
    }

    useEffect(() => {

        document.title = "Portfolio | Snapshots Of Our Most Prominent Work - United Monks";
        const wrapper = document.querySelector(".wrapper");
        wrapper.addEventListener("mousemove", MouseMove);
        window.addEventListener("scroll", toggleVisible);

        return () => {
            wrapper.removeEventListener("mousemove", MouseMove);
            window.removeEventListener("scroll", toggleVisible);
        }
    }, [])

    return (
        <div className='wrapper clearfix'>

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
                            <li><Link to="/portfolio" className='active'>Portfolio</Link></li>
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
                    <li><Link to='/portfolio' className='header__link active' >portfolio</Link></li>
                    <li><Link to='/contact' className='header__link' >contact</Link></li>
                </ul>
            </header>

            {/* ======================= Content Section ===================== */}
            <div id='content'>
                <div className="content__wrapper nopadding">

                    <div className="banner__container">

                        <div className="parallax">
                            <div className="layer layer1">
                                <div className="some__space2">
                                    <div className="large__circle bg__green"></div>
                                </div>
                            </div>

                            <div className="layer layer2">
                                <div className="some__space2">
                                    <div className="dotted__element"></div>
                                </div>
                            </div>

                            <div className="layer layer3">
                                <div className="some__space2">
                                    <div className="small__circle bg__green"></div>
                                </div>
                            </div>

                            <div className="layer layer4">
                                <div className="some__space2">
                                    <div className="medium__circle bg__blue"></div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="banner__text">
                                <h1>We are proud of our projects<span className="green">.</span></h1>
                            </div>
                        </div>

                    </div>

                    <div className="container">
                        <div className="portfolio__img__container row">
                            <div className="col-xl-6 col-md-6 col-sm-6 nopadding">
                                <div className="portfolio__img__left">

                                    <div className="parallax">
                                        <div className="layer layer5">
                                            <div className="some__space1">
                                                <div className="medium__circle bg__green"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="https://www.behance.net/gallery/128340601/MyProGamer" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/mpg_portfolio.webp" alt="img" />
                                            <div className="img__overlay">
                                                <p>MyProGamer is an online gaming platform for players who want to improve their gaming skills.</p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>MyProGamer</div>
                                            <div className="clearfix"></div>
                                            <span>Product development + UI/UX + FrontEnd Development</span>
                                        </div>

                                    </a>

                                    <a href="https://www.njoyskratom.com/" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/njoy.gif" alt="img" />
                                            <div className="img__overlay">
                                                <p>Njoy's is the leading Kratom brand based out of USA. </p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>Njoy's </div>
                                            <div className="clearfix"></div>
                                            <span>E-commerce + UI/UX + Branding + Package Design</span>
                                        </div>

                                    </a>

                                    <a href="https://www.behance.net/gallery/97762167/Adfluence" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/adfluance.webp" alt="img" />
                                            <div className="img__overlay">
                                                <p>Adfluence Hub is an influencer marketing platform with a vision to combine technology and influencer marketing.</p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>Adfluence</div>
                                            <div className="clearfix"></div>
                                            <span>UI/UX + FrontEnd Development + Product Development</span>
                                        </div>

                                    </a>

                                    <a href="https://karbonn.in/" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/karbonnmobile.gif" alt="img" />
                                            <div className="img__overlay">
                                                <p>This brand needs no introduction. Nevertheless, Karbonn Mobiles is one of the frontliners of the Indian mobile industry with a presence in 40 countries.</p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>Karbonn Mobiles</div>
                                            <div className="clearfix"></div>
                                            <span>UI/UX + FrontEnd Development</span>
                                        </div>

                                    </a>

                                    <a href="https://www.behance.net/gallery/86932015/Ayam-Meditation-Website-Design-and-Development" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/ayam_portfolio.webp" alt="img" />
                                            <div className="img__overlay">
                                                <p>AyamMeditation, a Mexico-based startup is on a mission to deliver digital experiences that are carefully designed to enrich customer's journey into a well-being state.</p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>Ayam</div>
                                            <div className="clearfix"></div>
                                            <span>UI/UX + FrontEnd Development</span>
                                        </div>

                                    </a>

                                    <a href="https://www.behance.net/gallery/110706737/The-Bump-To-Baby-Co" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/bumptobaby.webp" alt="img" />
                                            <div className="img__overlay">
                                                <p>The Bump to Baby Co is the Prenatal program that focuses on developing and enhancing your baby's emotional, physical, spiritual, and intelligence
                                                    quotient. </p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>The Bump To Baby</div>
                                            <div className="clearfix"></div>
                                            <span>UI/UX + FrontEnd Development</span>
                                        </div>

                                    </a>

                                    <a href="https://www.angesbags.com/" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/angesbags.gif" alt="img" />
                                            <div className="img__overlay">
                                                <p>With an experience of 80 years in marketing and manufacturing, Anges Bags is one of the leading manufacturers and exporters of jute bags.</p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>Anges Bags</div>
                                            <div className="clearfix"></div>
                                            <span>UI/UX + FrontEnd Development</span>
                                        </div>

                                    </a>

                                    <a href="http://www.celestebox.com/" className='portfolio__img__child' target='_blank'>

                                        <div className='child__img'>
                                            <img loading='lazy' src="asset/port__images/celestebox.webp" alt="img" />
                                            <div className="img__overlay">
                                                <p>Celeste Box finds and supplies fashion brands across a diverse set of countries through their network of showrooms, retailers, agents, and distributors.</p>
                                            </div>
                                        </div>

                                        <div className="child__text">
                                            <div className='text'>Celestebox</div>
                                            <div className="clearfix"></div>
                                            <span>UI/UX + FrontEnd Development + Corporate Identity</span>
                                        </div>

                                    </a>



                                </div>
                            </div>

                            <div className="col-xl-6 col-md-6 col-sm-6 nopadding">
                                <div className="portfolio__img__right">
                                    <div className="portfolio__img__left">

                                        <div className="parallax">
                                            <div className="layer layer6">
                                                <div className="some__space1">
                                                    <div className="small__circle bg__green"></div>
                                                </div>
                                            </div>

                                            <div className="layer layer7">
                                                <div className="some__space1">
                                                    <div className="dotted__element"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <a href="https://www.behance.net/gallery/86869395/Airline-Safety-Instruction-Card-Design" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <img loading='lazy' src="asset/port__images/sanjiv_goenka.webp" alt="img" />
                                                <div className="img__overlay">
                                                    <p>Sanjiv Goenka group needs no introduction. We helped them in creating the safety instruction card for their airline Global 5000</p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>RP-Sanjiv Goenka Group</div>
                                                <div className="clearfix"></div>
                                                <span>Airline Safety Instruction Card Design </span>
                                            </div>

                                        </a>

                                        <a href="https://www.farminbox.in/" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <video autoPlay muted loop playsInline>
                                                    <source src='asset/port__images/farm-in-box.mp4' />
                                                    <source src='asset/port__images/farm-in-box.ogv' />
                                                    <source src='asset/port__images/farm-in-box.webm' />
                                                </video>
                                                <div className="img__overlay">
                                                    <p>Farm in Box is one of the leading and most-trusted Hydroponic farms in the Delhi-NCR.<br /></p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>Farm in Box</div>
                                                <div className="clearfix"></div>
                                                <span>UI/UX + E-commerce + Branding + Package Design + Social Media</span>
                                            </div>

                                        </a>

                                        <a href="https://www.healthsetgo.com/" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <img loading='lazy' src="asset/port__images/hsg_portfolio.gif" alt="img" />
                                                <div className="img__overlay">
                                                    <p>HealthSetGo is India's largest healthcare organization for schools with the mission to nurture the world's largest network of health promoting schools. </p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>HealthSetGo</div>
                                                <div className="clearfix"></div>
                                                <span>UI/UX + FrontEnd Development</span>
                                            </div>

                                        </a>

                                        <a href="http://www.vintage-bloom.com/" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <img loading='lazy' src="asset/port__images/vintagebloom.webp" alt="img" />
                                                <div className="img__overlay">
                                                    <p>Vintage bloom are the people behind Dubai's most fabulous weddings, events, or parties. They take pleasure in luxury and aesthetics and have a passion for artistic expression.</p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>Vintage Bloom</div>
                                                <div className="clearfix"></div>
                                                <span>UI/UX + FrontEnd Development</span>
                                            </div>

                                        </a>

                                        <a href="https://www.behance.net/gallery/79683765/Mycloudhospitality" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <img loading='lazy' src="asset/port__images/mycloud-hospitality.webp" alt="img" />
                                                <div className="img__overlay">
                                                    <p>Mycloud hospitality is a global leader in providing PMS and POS solutions to the hospitality industry across UK, Asia, Africa, and the Middle East.</p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>My Cloud Hospitality</div>
                                                <div className="clearfix"></div>
                                                <span>UI/UX + FrontEnd Development</span>
                                            </div>

                                        </a>

                                        <a href="https://www.behance.net/gallery/61256591/Consus-Global-Website-Design-and-Development" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <img loading='lazy' src="asset/port__images/consus.webp" alt="img" />
                                                <div className="img__overlay">
                                                    <p>Consus is a result-oriented team with offices in 10 countries. They have 10+ years of experience in selling, implementing, supporting, and operating Source-to-Pay solutions.</p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>Consus Global</div>
                                                <div className="clearfix"></div>
                                                <span>UI/UX + FrontEnd Development</span>
                                            </div>

                                        </a>

                                        <a href="https://www.behance.net/gallery/79090163/Ms-Travel-Bee" className='portfolio__img__child' target='_blank'>

                                            <div className='child__img'>
                                                <img loading='lazy' src="asset/port__images/mstravelbee_portfolio.webp" alt="img" />
                                                <div className="img__overlay">
                                                    <p>A one of a kind an exclusive women travel portal which is an alliance by the women, of the women &amp; only for the women<br />
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="child__text">
                                                <div className='text'>Ms Travel Bee</div>
                                                <div className="clearfix"></div>
                                                <span>UI/UX + FrontEnd Development + Product Development</span>
                                            </div>

                                        </a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}>
                <i className="ri-arrow-up-s-line"></i>
            </div>

        </div>
    )
}

export default Portfolio