import React, { useEffect, useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {

  const layer = useRef(null);

  const Mousemove = (event) => {
    let xPos1 = 1 - event.clientX * 0.03 + "px";
    let yPos1 = 1 - event.clientY * 0.03 + "px";

    layer.current.style.transform = `translate3d(${xPos1},${yPos1},0)`;
  }

  useEffect(() => {
    window.addEventListener("mousemove", Mousemove);

    return () => {
      window.removeEventListener("mousemove", Mousemove);
    }
  }, [])

  return (
    <section id='testimonial__section'>
      <h3>Testimonial</h3>
      <div className="container">
        <span className='green top__text'>a word from our clients</span>
        <div className="testimonial__container">

          <div className="testimonial__carousel">

            <div className="parallax">
              <div className="layer layer4" ref={layer}>
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
  )
}

export default Testimonial