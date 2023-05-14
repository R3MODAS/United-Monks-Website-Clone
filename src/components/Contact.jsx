import React, { useEffect } from 'react'
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Contact() {

    const MouseMove = (event) => {
        const layer1 = document.querySelector(".layer1");
        const layer2 = document.querySelector(".layer2");
        const layer3 = document.querySelector(".layer3");
        const layer4 = document.querySelector(".layer4");
        const layer5 = document.querySelector(".layer5");

        let xPos1 = event.x * 0.04 + "px";
        let yPos1 = event.y * 0.04 + "px";

        let xPos2 = 1 - event.x * 0.04 + "px";
        let yPos2 = 1 - event.y * 0.04 + "px";

        let xPos3 = 1 - event.x * 0.015 + "px";
        let yPos3 = 1 - event.y * 0.015 + "px";

        layer1.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
        layer2.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
        layer3.style.transform = "translate3d(" + xPos3 + ", " + yPos3 + ", 0)";
        layer4.style.transform = "translate3d(" + xPos1 + ", " + yPos1 + ", 0)";
        layer5.style.transform = "translate3d(" + xPos2 + ", " + yPos2 + ", 0)";
    }

    const ScrollUp = () => {
        const sliderContainer = document.querySelector(".slider__container");
        const sliderText = document.querySelector(".slider__text");
        const sliderBanner = document.querySelector(".slider__caption");
        let value = window.scrollY;
        let pos1 = -(value * 40 / 100)

        sliderContainer.setAttribute('style', 'transform: translate3d(0px, ' + pos1 + 'px, 0px)');
        sliderText.style.opacity = (1 - value / 700);
        sliderBanner.style.opacity = (1 - value / 700);
    }

    useEffect(() => {
        document.title = "Contact Us - United Monks";
        const wrapper = document.querySelector(".wrapper");
        window.addEventListener("scroll", ScrollUp);
        wrapper.addEventListener("mousemove", MouseMove);

        return () => {
            window.removeEventListener("scroll", ScrollUp);
            wrapper.removeEventListener("mousemove", MouseMove);
        }

    }, [])

    return (
        <div className='wrapper'>
            <div className="left__border"></div>
            <div className="right__border"></div>

            {/* ================== Navbar Section =================== */}
            <header className='header__section'>
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
                    <li><Link to='/' className='header__link' >our story</Link></li>
                    <li><Link to='/services' className='header__link' >services</Link></li>
                    <li><Link to='/' className='header__link' >career</Link></li>
                    <li><Link to='/portfolio' className='header__link' >portfolio</Link></li>
                    <li><Link to='/contact' className='header__link active' >contact</Link></li>
                </ul>
            </header>

            {/* ================== Slider Section =================== */}
            <section id='slider__section2' className='clearfix'>
                <div className="slider__container">
                    <div className="parallax">
                        <div className="layer layer1">
                            <div className="some__space2">
                                <div className="large__circle bg__green"></div>
                            </div>
                        </div>

                        <div className="layer layer2">
                            <div className="some__space3">
                                <div className="dotted__element"></div>
                            </div>
                        </div>

                        <div className="layer layer3">
                            <div className="some__space1">
                                <div className="small__circle bg__green"></div>
                            </div>
                        </div>

                        <div className="layer layer4">
                            <div className="some__space2">
                                <div className="largest__circle bg__blue"></div>
                            </div>
                        </div>

                        <div className="layer layer5">
                            <div className="some__space1">
                                <div className="dotted__green__element"></div>
                            </div>
                        </div>

                    </div>

                    <div className="container clearfix">
                        <div className="slider__text">
                            <h1> Don’t be a stranger —</h1>
                            <h2>Say hello<span className='green'>.</span></h2>
                        </div>
                        <div className="slider__caption">A little interest goes a long way. So,
                            if you’re curious about us, want to collaborate with us, or be part of the United Monks team, don’t hesitate to reach out to us. Walk in, call us, or drop us a line, we’ll be glad to hear from you. </div>
                    </div>
                </div>
            </section>

            {/* ================== Main Content Section =============== */}
            <div id='content'>
                <div className="content__wrapper nopadding">

                    {/* ============= Contact Section =============== */}
                    <section id='contact__section' className='bg__green'>
                        <h2>Contact</h2>
                        <div className="section">
                            <div className="container">
                                <div className="contact__container row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                        <div className="contact__child">
                                            <img loading='lazy' src="asset/seattle.png" alt="img" />
                                            <div className="contact__address">
                                                <h4>Seattle</h4>
                                                <p>918 S Horton ST Suite 902,<br />Seattle, <br />WA 98134</p>
                                                <div className="contact__address__child">
                                                    <label className='black'>TEL:</label>
                                                    <a href="tel:+918442970533">+1 206-499-7747</a>
                                                </div>
                                                <div className="contact__address__child">
                                                    <label className='black'>EMAIL:</label>
                                                    <a href="mailto:info@unitedmonks.com" className='link'>info@unitedmonks.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                        <div className="contact__child">
                                            <img loading='lazy' src="asset/west-bengal.png" alt="img" />
                                            <div className="contact__address">
                                                <h4>Kolkata</h4>
                                                <p>528 Vip Nagar, 3rd Floor,<br />Sector 3,<br /> Kolkata-700100</p>
                                                <div className="contact__address__child">
                                                    <label className='black'>TEL:</label>
                                                    <a href="tel:+919836682530">+91 983-668-2530</a>
                                                </div>
                                                <div className="contact__address__child">
                                                    <label className='black'>EMAIL:</label>
                                                    <a href="mailto:info@unitedmonks.com" className='link'>info@unitedmonks.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                        <div className="contact__child">
                                            <img loading='lazy' src="asset/delhi.png" alt="img" />
                                            <div className="contact__address">
                                                <h4>Delhi</h4>
                                                <p>39 Nehru Place, <br />New Delhi, <br />Delhi- 110019</p>
                                                <div className="contact__address__child">
                                                    <label className='black'>TEL:</label>
                                                    <a href="tel:+918442970533">+91 844-297-0533</a>
                                                </div>
                                                <div className="contact__address__child">
                                                    <label className='black'>EMAIL:</label>
                                                    <a href="mailto:info@unitedmonks.com" className='link'>info@unitedmonks.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="contact__text">
                                        <h4>Got a project for us?</h4>
                                        <p>Send us your details, and we’ll take the conversation forward.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ============= How can we Contact you Section =============== */}
                    <section id='contact__us__section'>
                        <form id='contact__form'>
                            <h4>How can we contact you?</h4>
                            <div className="contact__form__text row">
                                <div className="col-xl-6 col-md-6 col-sm-6 nopadding">
                                    <div className="contact__text__left">
                                        <div className='text__group'>
                                            <input type="text" className='text__input' placeholder='Name' name='name' required autoComplete='off' />
                                            <span className='required__alert'></span>
                                        </div>
                                        <div className='text__group'>
                                            <input type="number" className='text__input' placeholder='Phone' name='phone' required autoComplete='off' />
                                            <span className='required__alert'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-sm-6 nopadding">
                                    <div className="contact__text__right">
                                        <div className="contact__text__left">
                                            <div className='text__group'>
                                                <input type="text" className='text__input' placeholder='Organisation' name='organisation' required autoComplete='off' />
                                                <span className='required__alert'></span>
                                            </div>
                                            <div className='text__group'>
                                                <input type="email" className='text__input' placeholder='Email' name='email' required autoComplete='off' />
                                                <span className='required__alert'></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>What services are you interested in?</h4>
                            <div className="contact__checkbox row">
                                <ul>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-10' className='checkbox' name='service__one' value="UI/UX" />
                                                <label htmlFor="checkbox-10" className='label'>UI/UX</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-20' className='checkbox' name='service__one' value="Front End Development" />
                                                <label htmlFor="checkbox-20" className='label'>Front End Development</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-30' className='checkbox' name='service__one' value="Web Application" />
                                                <label htmlFor="checkbox-30" className='label'>Web Application</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-40' className='checkbox' name='service__one' value="Product Development" />
                                                <label htmlFor="checkbox-40" className='label'>Product Development</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-50' className='checkbox' name='service__one' value="Cloud Management" />
                                                <label htmlFor="checkbox-50" className='label'>Cloud Management</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-60' className='checkbox' name='service__one' value="Digital Marketing" />
                                                <label htmlFor="checkbox-60" className='label'>Digital Marketing</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-70' className='checkbox' name='service__one' value="Graphics Designing" />
                                                <label htmlFor="checkbox-70" className='label'>Graphics Designing</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-80' className='checkbox' name='service__one' value="App Development" />
                                                <label htmlFor="checkbox-80" className='label'>App Development</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input type="checkbox" id='checkbox-90' className='checkbox' name='service__one' value="Ecommerce" />
                                                <label htmlFor="checkbox-90" className='label'>Ecommerce</label>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* <div className="contact-recaptcha">
                                <script src="https://www.google.com/recaptcha/api.js" async="" defer=""></script>
                                <div className="g-recaptcha" data-sitekey="6Lcq1PQUAAAAAAFCbD4Y2lY4r_ZBMw3Ceb1ZhblU"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lcq1PQUAAAAAAFCbD4Y2lY4r_ZBMw3Ceb1ZhblU&amp;co=aHR0cHM6Ly93d3cudW5pdGVkbW9ua3MuY29tOjQ0Mw..&amp;hl=en&amp;v=4q6CtudrwcI-LSEYlfoEbDXg&amp;size=normal&amp;cb=d1xm0tt7rusr" width="304" height="78" role="presentation" name="a-pc4dsq5fi7p1" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                                <input type="hidden" name="gresponse" id="gresponse" value="" />
                            </div> */}
                            <div className="contact__submit">
                                <input type="submit" value="Submit" className='bg__green' />
                            </div>
                        </form>
                    </section>

                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Contact