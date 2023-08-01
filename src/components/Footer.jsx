import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'


function Footer() {

    return (
        <footer id='footer' className='bg__blue'>
            <div className='bg__gray'>
                <div className="container">
                    <div className="partnership__container row">
                        <div className="col-xl-4 col-lg-4 col-md-4 nopadding">
                            <div className="partnership__text">
                                <h4>Accreditation & <br /> Partnership.</h4>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 nopadding">
                            <div className="partnership__img">
                                <ul>
                                    <li>
                                        <img loading='lazy' src="asset/amazon-web.webp" alt="img" />
                                    </li>
                                    <li>
                                        <img loading='lazy' src="asset/google.webp" alt="img" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer__middle">
                    <h2 className='green'>Great is Just the Beginning</h2>
                    <Link to="/contact" className='text-white'>Let’s talk business</Link>
                </div>
            </div>
            <div className="copyright__container">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="copyright__text">
                                <span className='green'>Copyright &copy; 2019 United Monks, All Rights Reserved</span>
                                <a href="/" className='green'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                </span>info@unitedmonks.com</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                            <div className="copyright__socials">
                                <a href="https://www.facebook.com/unitedmonksco" className='social_icon__container' aria-label="Facebook">
                                    <i className="ri-facebook-fill"></i>
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/unitedmonksco/" className='social_icon__container' aria-label="Instagram">
                                    <i className="ri-instagram-line"></i>
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.behance.net/unitedmonksco" className='social_icon__container' aria-label="Behance">
                                    <i className="ri-behance-line"></i>
                                    <i className="ri-behance-line"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/unitedmonksco/" className='social_icon__container' aria-label="Linkedln">
                                    <i className="ri-linkedin-fill"></i>
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer