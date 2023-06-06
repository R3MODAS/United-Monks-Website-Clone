import React, { useEffect, useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Project({heading}) {

    const layer6 = useRef(null);

    const mouseEvent = (event) => {
         
        let xPos = 1 - event.x * 0.03 + "px";
        let yPos = 1 - event.y * 0.03 + "px";
    
        layer6.current.style.transform = `translate3d(${xPos},${yPos},0)`;
      }

    useEffect(() => {
        window.addEventListener("mousemove", mouseEvent);
    
        return () => {
            window.removeEventListener("mousemove", mouseEvent);
        }
      }, [])

    return (
        <section id='portfolio__section'>
            <h2>{heading}</h2>
            <div className="container">

                <div className="portfolio__carousel">

                    <div className="parallax">
                        <div className="layer layer6" ref={layer6}>
                            <div className="some__space2">
                                <div className="large__circle bg__green"></div>
                            </div>
                        </div>
                    </div>

                    <OwlCarousel className="owl-theme carousel" loop={true} nav={true} margin={25} dots={false} items={1} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} navText={["<img src='asset/left.png' alt='img' />", "<img src='asset/right.png' alt='img' />"]}>

                        <div className="item">
                            <div className="carousel__item__container row">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                    <div className="portfolio__item__img">
                                        <img loading='lazy' src="asset/mac.png" alt="mac__img" className='img' />

                                        <div className="portfolio__item__parent">
                                            <div className="blockside"><div className="blocker"></div></div>
                                            <div className="reveal__content">
                                                <img loading='lazy' src="asset/portfolio/1.jpg" alt="img" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                    <div className="portfolio__text">
                                        <h4>Quid Tutor</h4>
                                        <p>Quid Tutor is an online teaching platform which covers 45 minutes of Tutoring at just £1</p>
                                        <span>UI/UX</span>
                                        <span>Front End Development</span>
                                        <span>Product Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel__item__container row">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                    <div className="portfolio__item__img">
                                        <img loading='lazy' src="asset/mac.png" alt="mac__img" className='img' />

                                        <div className="portfolio__item__parent">
                                            <div className="blockside"><div className="blocker"></div></div>
                                            <div className="reveal__content">
                                                <img loading='lazy' src="asset/portfolio/2.jpg" alt="img" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                    <div className="portfolio__text">
                                        <h4>FPV Lifestyle</h4>
                                        <p>FPV Lifestyle is an e-Commerce platform for customized drone.</p>
                                        <span>UI/UX</span>
                                        <span>Front End Development</span>
                                        <span>Product Development</span>
                                        <div className="clear"></div>
                                        <a href="/">VIEW WEBSITE</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel__item__container row">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                    <div className="portfolio__item__img">
                                        <img loading='lazy' src="asset/mac.png" alt="mac__img" className='img' />

                                        <div className="portfolio__item__parent">
                                            <div className="blockside"><div className="blocker"></div></div>
                                            <div className="reveal__content">
                                                <img loading='lazy' src="asset/portfolio/3.jpg" alt="img" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                    <div className="portfolio__text">
                                        <h4>Engage</h4>
                                        <p>Engage is a FinTech platform that leverages financial institutions for tracking,
                                            monitoring and generating report for all international payment transfers done around the world via their startup.</p>
                                        <span>UI/UX</span>
                                        <span>Front End Development</span>
                                        <span>Product Development</span>
                                        <div className="clear"></div>
                                        <a href="/">VIEW CASE STUDY</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel__item__container row">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                    <div className="portfolio__item__img">
                                        <img loading='lazy' src="asset/mac.png" alt="mac__img" className='img' />

                                        <div className="portfolio__item__parent">
                                            <div className="blockside"><div className="blocker"></div></div>
                                            <div className="reveal__content">
                                                <img loading='lazy' src="asset/portfolio/4.jpg" alt="img" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                    <div className="portfolio__text">
                                        <h4>MyProGamer</h4>
                                        <p>MyProGamer is an online gaming platform for players who want to improve their gaming skills.</p>
                                        <span>UI/UX</span>
                                        <span>Front End Development</span>
                                        <span>Product Development</span>
                                        <div className="clear"></div>
                                        <a href="/">VIEW CASE STUDY</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel__item__container row">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                    <div className="portfolio__item__img">
                                        <img loading='lazy' src="asset/mac.png" alt="mac__img" className='img' />

                                        <div className="portfolio__item__parent">
                                            <div className="blockside"><div className="blocker"></div></div>
                                            <div className="reveal__content">
                                                <img loading='lazy' src="asset/portfolio/5.jpg" alt="img" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                    <div className="portfolio__text">
                                        <h4>Adfluencehub</h4>
                                        <p>A new-age platform for brands and influencers to collaborate and create magic.</p>
                                        <span>UI/UX</span>
                                        <span>Front End Development</span>
                                        <span>Product Development</span>
                                        <div className="clear"></div>
                                        <a href="/">VIEW CASE STUDY</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel__item__container row">
                                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 nopadding">
                                    <div className="portfolio__item__img">
                                        <img loading='lazy' src="asset/mac.png" alt="mac__img" className='img' />

                                        <div className="portfolio__item__parent">
                                            <div className="blockside"><div className="blocker"></div></div>
                                            <div className="reveal__content">
                                                <img loading='lazy' src="asset/portfolio/6.jpg" alt="img" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nopadding">
                                    <div className="portfolio__text">
                                        <h4>HealthSetGO</h4>
                                        <p>HealthSetGo is India’s largest healthcare organization for schools with the mission to nurture the world’s largest network of health promoting schools. </p>
                                        <span>UI/UX</span>
                                        <span>Front End Development</span>
                                        <div className="clear"></div>
                                        <a href="/">VISIT WEBSITE</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </OwlCarousel>

                </div>
            </div>
        </section>
    )
}

export default Project