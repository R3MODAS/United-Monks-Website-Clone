import React, { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

function Contact() {
    const form = useRef();

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
        const sliderText = document.querySelector(".slider__text__container");
        let value = window.scrollY;
        let pos1 = -(value * 40 / 100)

        sliderContainer.setAttribute('style', 'transform: translate3d(0px, ' + pos1 + 'px, 0px)');
        sliderText.style.opacity = (1 - value / 700);
    }

    // ============= Validation of Input ================
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [org, setOrg] = useState("")
    const [mobile, setMobile] = useState('')
    const [checkVal, setCheckVal] = useState([]);

    const getCheckVal = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setCheckVal([...checkVal, value])
        }
        else {
            setCheckVal(checkVal.filter((e) => e !== value))
        }
    }

    const InputBlank = () => {
        let inputs = document.querySelectorAll(".text__input");
        inputs.forEach((input) => {
            input.classList.add("error");
        })
    }

    let inputs = document.querySelectorAll(".text__input");
    inputs.forEach((input) => {
        input.classList.remove("error");
    })


    const sendEmail = (e) => {
        e.preventDefault();

        if (name.length === 0 && email.length === 0 && org.length === 0 && mobile.length === 0) {
            InputBlank();
        }

        if (name.length !== 0 && email.length !== 0 && org.length !== 0 && mobile.length !== 0) {
            let services = checkVal.toString();
            fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": import.meta.env.VITE_STMP_API_KEY,
                    "content-type": "application/json",
                    charset: "utf-8",
                },
                body: `{  
              "sender":{  
                  "name": "${name}",
                  "email": "${email}"
              },
              "to":[  
                  {  
                    "email":"remodas7774@gmail.com",
                    "name":"Sharadindu Das"
                  }
              ],
              "subject":"Contact Form Fillup",
              "htmlContent":
              "<html><head></head><body><h2>Contact Form Fillup</h2><div><i> <b>Name</b> : ${name} </i></div><div><i> <b>Email</b> : ${email} </i></div><div><i> <b>Organisation</b> : ${org} </i></div><div><i> <b>Phone Number</b> : ${mobile} </i></div><div><i> <b>Services</b> : ${services} </i></div></body></html>"
            }`
        })
        .then(() => {
            toast.success("Thank you for Filling out the Form")
            e.target.reset()
        })
        .then((data) => data)
        .catch((err) => err);
}
    }

    useEffect(() => {
        document.title = "Contact Us - United Monks";
        const wrapper = document.querySelector(".wrapper");
        window.addEventListener("scroll", ScrollUp);
        wrapper.addEventListener("mousemove", MouseMove);
        window.addEventListener("scroll", toggleVisible);

        return () => {
            window.removeEventListener("scroll", ScrollUp);
            wrapper.removeEventListener("mousemove", MouseMove);
            window.removeEventListener("scroll", toggleVisible);
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
                            <li><Link to="/story">Our Story</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact" className='active'>Contact</Link></li>
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
                        <div className="slider__text__container">
                            <h1> Don’t be a stranger —</h1>
                            <h2>Say hello<span className='green'>.</span></h2>
                            <div className="slider__caption">A little interest goes a long way. So, if you’re curious about us, want to collaborate with us, or be part of the United Monks team, don’t hesitate to reach out to us. Walk in, call us, or drop us a line, we’ll be glad to hear from you. </div>
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
                    <Toaster toastOptions={{ success: { duration: 4000 } }} />

                    {/* ============= How can we Contact you Section =============== */}
                    <section id='contact__us__section'>
                        <form id='contact__form' ref={form} onSubmit={sendEmail}>
                            <h4>How can we contact you?</h4>
                            <div className="contact__form__text row">
                                <div className="col-xl-6 col-md-6 col-sm-6 nopadding">
                                    <div className="contact__text__left">
                                        <div className='text__group'>
                                            <input
                                                onChange={e => setName(e.target.value)}
                                                type="text" className="text__input" placeholder='Name' name='name' autoComplete='off' />
                                        </div>
                                        <div className='text__group'>
                                            <input
                                                onChange={e => setMobile(e.target.value)}
                                                type="number"
                                                className='text__input' placeholder='Phone' name='phone' autoComplete='off' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-sm-6 nopadding">
                                    <div className="contact__text__right">
                                        <div className="contact__text__left">
                                            <div className='text__group'>
                                                <input
                                                    onChange={e => setOrg(e.target.value)}
                                                    type="text" className='text__input' placeholder='Organisation' name='organisation' autoComplete='off' />
                                            </div>
                                            <div className='text__group'>
                                                <input
                                                    onChange={e => setEmail(e.target.value)}
                                                    type="email" className='text__input' placeholder='Email' name='email' autoComplete='off' />
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
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-10' className='checkbox' name='services' value="UI/UX" />
                                                <label htmlFor="checkbox-10" className='label'>UI/UX</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-20' className='checkbox' name='services' value="Front End Development" />
                                                <label htmlFor="checkbox-20" className='label'>Front End Development</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-30' className='checkbox' name='services' value="Web Application" />
                                                <label htmlFor="checkbox-30" className='label'>Web Application</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-40' className='checkbox' name='services' value="Product Development" />
                                                <label htmlFor="checkbox-40" className='label'>Product Development</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-50' className='checkbox' name='services' value="Cloud Management" />
                                                <label htmlFor="checkbox-50" className='label'>Cloud Management</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-60' className='checkbox' name='services' value="Digital Marketing" />
                                                <label htmlFor="checkbox-60" className='label'>Digital Marketing</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-70' className='checkbox' name='services' value="Graphics Designing" />
                                                <label htmlFor="checkbox-70" className='label'>Graphics Designing</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-80' className='checkbox' name='services' value="App Development" />
                                                <label htmlFor="checkbox-80" className='label'>App Development</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="checkbox__parent">
                                            <div className="checkbox__child">
                                                <input onChange={(e) => getCheckVal(e)} type="checkbox" id='checkbox-90' className='checkbox' name='services' value="Ecommerce" />
                                                <label htmlFor="checkbox-90" className='label'>Ecommerce</label>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="contact__submit">
                                <input type="submit" value="Submit" className='bg__green' />
                            </div>
                        </form>
                    </section>

                </div>
            </div>

            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}>
                <i className="ri-arrow-up-s-line"></i>
            </div>


        </div>
    )
}

export default Contact