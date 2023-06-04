import React from 'react'
import { Link } from 'react-router-dom';

function ServicesWork() {
    return (
        <>
            {/* =================== How we work Section =============== */}
            <section id='work__section' className='bg__blue'>
                <div className="section">
                    <div className="container">

                        <div className="work__text">
                            <h2 className="green">How we work</h2>
                            <p className="text-white">Our approach to work is simple – we like to keep things transparent and
                                easy to track for clients. After all, if you see the effort we put in, you’ll
                                appreciate us more!</p>
                        </div>

                        <div className="work__list row">

                            <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                <div className="work__model__one bg__green">
                                    <img loading='lazy' src="asset/most-popular.png" alt="most popular" />
                                    <span className="text-white montserrat">Model 1</span>
                                    <h3>Dedicated Team</h3>
                                    <p className="text-white">If you have a complex long term project or need technical support for multiple ongoing tasks then hiring a dedicated team will be the most feasible option for you. You’ll get the flexibility and expertise that comes with an in-house team without the hassle on managing the resources.</p>
                                    <ul className="text-white">
                                        <li>Clearly defined monthly costs</li>
                                        <li>Guaranteed hours of work from the predefined full-time and part-time team members</li>
                                        <li>Monthly billing for a fixed period</li>
                                        <li>Clear deliverables in accordance to the amount paid</li>
                                        <li>No initial setup cost</li>
                                    </ul>
                                    <Link to="/contact">
                                        <button aria-label='Contact us'>Contact us</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 nopadding">
                                <div className="work__model__two bg__white">
                                    <span className="green montserrat">Model 2</span>
                                    <h3>Fixed Price</h3>
                                    <p className="gray">A fixed price model is more suited for one-time projects, especially if there is well-defined scope and expected timelines. It’s a simpler model in terms of clarity in deliverables and the costs involved.</p>
                                    <ul className="gray">
                                        <li>Exact understanding of scope, cost and timelines</li>
                                        <li>No risk of price fluctuation as everything is agreed in advance</li>
                                        <li>Can take a milestone based approach</li>
                                        <li>Better understanding of cost per module / feature</li>
                                        <li>Easier to add new tasks at additional costs</li>
                                    </ul>
                                    <Link to="/contact">
                                        <button aria-label='Contact us'>Contact us</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="triangle__img">
                                <img src="asset/triangle.png" alt="img" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =================== Let's start a Project Section ================ */}
            <section className='section' id='project__section'>
                <div className="container">
                    <div className="project__container">

                        <div className="circle__container bg__green">
                            <div className="circle__child">
                                <h2>Let’s get cracking<br />on your project.</h2>
                                <Link to="/contact"><button aria-label='Contact us' className='bg__black text-white'>Contact us</button></Link>
                            </div>
                            <div className='small__circle bg__green'></div>
                            <div className="small__circle2 bg__green"></div>
                        </div>

                        <div className="map__img">
                            <img loading='lazy' src="asset/web-map.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesWork