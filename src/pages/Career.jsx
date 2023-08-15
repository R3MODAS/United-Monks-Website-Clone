import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer';
import { Link, json } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

function Career() {

    const form = useRef();
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

    // ============= Validation of Input ================
    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
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

    const handleFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result
                .replace("data:", "")
                .replace(/^.+,/, "");
            setFile(base64String);
        }
        reader.readAsDataURL(file);
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

        if (fullname.length === 0 && email.length === 0 && message.length === "" && file === null) {
            InputBlank()
        }

        if (fullname.length !== 0 && email.length !== 0 && message.length !== 0 && file !== null) {
            let skills = checkVal.toString();
            fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "api-key": import.meta.env.VITE_STMP_API_KEY,
                    "content-type": "application/json",
                    "Content-Disposition": "attachment",
                    charset: "utf-8",
                },
                body: `{  
              "sender":{  
                  "name": "${fullname}",
                  "email": "${email}"
              },
              "to":[  
                  {  
                    "email":"remodas7774@gmail.com",
                    "name":"Sharadindu Das"
                  }
              ],
              "subject":"Career Form Fillup",
              "htmlContent":
              "<html><head></head><body><h2>Career Form Fillup</h2><div><i> <b>Name</b> : ${fullname} </i></div><div><i> <b>Email</b> : ${email} </i></div><div><i> <b>Skills</b> : ${skills} </i></div><div><i> <b>Message</b> : ${message} </i></div></body></html>",
              "attachment": [{"content": "${file}", "name":"${fullname}'s Resume.pdf"}]
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
        document.title = "Career | Always Happy To Meet New Talents - United Monks";
        window.addEventListener("scroll", toggleVisible);
        const wrapper = document.querySelector(".wrapper");
        wrapper.addEventListener("mousemove", MouseMove);
        window.addEventListener("scroll", scrollBehaviour)

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
                            <li><Link to="/story">Our Story</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/career" className='active'>Career</Link></li>
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
                    <li><Link to='/career' className='header__link active' >career</Link></li>
                    <li><Link to='/portfolio' className='header__link' >portfolio</Link></li>
                    <li><Link to='/contact' className='header__link' >contact</Link></li>
                </ul>
            </header>

            {/* ================== Slider Section =================== */}
            <section id='slider__section' className='clearfix'>
                <div className="slider__career slider__container">
                    <div className="parallax">
                        <div className="layer layer1">
                            <div className="some__space2">
                                <div className="large__circle bg__green"></div>
                            </div>
                        </div>

                        <div className="layer layer2">
                            <div className="some__space1">
                                <div className="dotted__element"></div>
                            </div>
                        </div>

                        <div className="layer layer3">
                            <div className="some__space3">
                                <div className="small__circle2 bg__green"></div>
                            </div>
                        </div>

                        <div className="layer layer4">
                            <div className="some__space1">
                                <div className="dotted__element2"></div>
                            </div>
                        </div>

                    </div>

                    <div className="container clearfix">
                        <div className="slider__career slider__text__container">

                            <h1>Dear rule-breakers, curious backbenchers &amp; straight-A students - <br />We want you all<span className="green">.</span></h1>

                            <div className="banner__career banner__caption">We’re hiring people who share our values and passion. You might be just starting out or have years of experience—either way, we’d like to hear from you and see the projects you’re proud of.</div>
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
                    <section id='career__section' className='bg__green'>
                        <h2>Career</h2>
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
                        <div className="container">
                            <div className="career__form__container">
                                <h4>Looking to join our team?</h4>
                                <p>Fill out the form, and we’ll get back to you.</p>
                                <form ref={form} id='career__form' onSubmit={sendEmail}>
                                    <h5>A little background maybe? </h5>
                                    <div className="career__textbox row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                                            <div className="career__textbox__left">
                                                <div className="form__group">
                                                    <input
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        type="text" placeholder='Full Name' name='fullName' className='text__input' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 nopadding">
                                            <div className="career__textbox__right">
                                                <div className="career__textbox__left">
                                                    <div className="form__group">
                                                        <input
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            type="email" name="email" placeholder='Email' className='text__input' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="last__form__group form__group">
                                            <div className='custom__file__input'>
                                                <input onChange={handleFile}
                                                    type="file" className='file__input text__input' accept='application/pdf' />
                                                <input type="text" id='resume' className='resume__input' placeholder='Attach Resume' />
                                                <span className='placeholder__text'>( 5MB MAX )</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="career__checkbox__total">
                                        <h5>You’re skilled as a …</h5>

                                        <div className="production__total">
                                            <h6>Designer</h6>
                                            <div className="career__checkbox row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__checkbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input id='checkbox18' className='checkbox' type="checkbox" onChange={(e) => getCheckVal(e)} name='designer' value="UI/UX Designer" />
                                                            <label htmlFor="checkbox18" className='label'>UI/UX Designer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__textbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input type="checkbox" onChange={(e) => getCheckVal(e)} id='checkbox20' name='designer' value="Graphics Designer" className='checkbox' />
                                                            <label htmlFor="checkbox20" className='label'>Graphics Designer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__textbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input type="checkbox" onChange={(e) => getCheckVal(e)} id='checkbox23' name='designer' value="Design Intern" className='checkbox' />
                                                            <label htmlFor="checkbox23" className='label'>Design Intern</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='planning__total'>
                                            <h6>Developer</h6>
                                            <div className="career__checkbox row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__checkbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input id='checkbox24' className='checkbox' type="checkbox" onChange={(e) => getCheckVal(e)} name='developer' value="Frontend Developer" />
                                                            <label htmlFor="checkbox24" className='label'>Frontend Developer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__textbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input type="checkbox" onChange={(e) => getCheckVal(e)} id='checkbox26' name='developer' value="Backend Developer" className='checkbox' />
                                                            <label htmlFor="checkbox26" className='label'>Backend Developer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__textbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input type="checkbox" onChange={(e) => getCheckVal(e)} id='checkbox29' name='developer' value="Full Stack Developer" className='checkbox' />
                                                            <label htmlFor="checkbox29" className='label'>Full Stack Developer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>

                                        <div className="develop__total">
                                            <h6>Marketing Expert</h6>
                                            <div className="career__checkbox row">

                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__checkbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input id='checkbox30' className='checkbox' type="checkbox" onChange={(e) => getCheckVal(e)} name='marketing expert' value="Social Media Guru" />
                                                            <label htmlFor="checkbox30" className='label'>Social Media Guru</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__textbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input type="checkbox" onChange={(e) => getCheckVal(e)} id='checkbox31' name='marketing expert' value="Influencer" className='checkbox' />
                                                            <label htmlFor="checkbox31" className='label'>Influencer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                                                    <div className="career__textbox__parent">
                                                        <div className="career__checkbox__child">
                                                            <input type="checkbox" onChange={(e) => getCheckVal(e)} id='checkbox32' name='marketing expert' value="Content Writer" className='checkbox' />
                                                            <label htmlFor="checkbox32" className='label'>Content Writer</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="career__description">
                                        <h5>Last few months what kept you busy?</h5>
                                        <textarea onChange={(e) => setMessage(e.target.value)} className="textarea__input raleway" name="career__desc"></textarea>
                                    </div>

                                    <div className="career__submit">
                                        <input type="submit" value="Submit" className='submit bg__black text-white' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <Toaster toastOptions={{ success: { duration: 4000 } }} />

                </div>
            </div>

            <div className="extraextrapadding"></div>


            {/* ==================== Footer Section ====================== */}
            <Footer />

            <div id='gotoTop' onClick={scrolltoTop} style={{ display: visible ? 'block' : 'none' }}>
                <i className="ri-arrow-up-s-line"></i>
            </div>

        </div>
    )
}

export default Career