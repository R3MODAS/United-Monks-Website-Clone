import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carousel() {
  return (
        <section id='carousel__section' className='bg__gray'>
          <div className="row clearfix">
            <div className="col-xl-3 col-lg-2 col-md-3 nopadding">
              <div className="carousel__text">
                <h2>Trusted by<span className='raleway green'>.</span></h2>
              </div>
            </div>
            <div className="col-xl-9 col-lg-10 col-md-9 nopadding">
              <div className="carousel trusted__carousel">
                <OwlCarousel className="owl-theme" loop={true} nav={false} margin={20} dots={false} items={5} autoplay={true} autoplayTimeout={3000} animateIn="fadeIn" animateOut="fadeOut" autoplayHoverPause={true} responsive={{
                  0: {
                    items: 1
                  },
                  576: {
                    items: 3
                  },
                  1000: {
                    items: 4
                  },
                  1200: {
                    items: 5
                  }

                }}>
                  <div className="item">
                    <img src="asset/clients/1.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/2.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/3.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/4.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/5.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/6.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/7.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/8.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/9.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/10.webp" alt="img" />
                  </div>
                  <div className="item">
                    <img src="asset/clients/11.webp" alt="img" />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Carousel