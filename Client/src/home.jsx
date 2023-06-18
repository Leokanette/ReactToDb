import React from 'react';
import BookingForm from './component/form';
import './css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/img/favicon.png'
import '../src/assets/img/apple-touch-icon.png'
import '../src/assets/vendor/animate.css/animate.min.css'
import '../src/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../src/assets/vendor/boxicons/css/boxicons.min.css'
import '../src/assets/vendor/glightbox/css/glightbox.min.css'
import '../src/assets/vendor/swiper/swiper-bundle.min.css'

import '../src/assets/vendor/purecounter/purecounter_vanilla.js'
import '../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../src/assets/vendor/glightbox/js/glightbox.min.js'
import '../src/assets/vendor/isotope-layout/isotope.pkgd.min.js'
import '../src/assets/vendor/swiper/swiper-bundle.min.js'
import '../src/assets/vendor/php-email-form/validate.js'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../src/js/main.js'
import About from './about';
import CountsSection from './counts';
import ClientsSection from './component/separator';
import ServicesSection from './viewing';
import Train from './trains';
import PricingSection from './pricing';
import TeamSection from './team';
import ContactSection from './contacts';
import Footer from './footer';




function Home() {

  return (
    <div>
    
 {/* --------------------------------------------------------------------------------------------------------------- */}
 <section id="hero">
      <div className="hero-container justify-content-center">

        <Carousel showIndicators={true} autoPlay={true} interval={5000} infiniteLoop={true}>
          <div className="carousel-item active" style={{ backgroundImage: 'url(src/assets/img/slide/slide-1.jpg)' }}>
            <div className="carousel-content">
              <div className="carousel-content-center">
              <BookingForm />
              </div>
            </div>
          </div>

          <div className="justify-content-center carousel-item active " style={{ backgroundImage: 'url(src/assets/img/slide/slide-2.jpg)' }}>
            <div className="carousel-content">
              <div className="carousel-content-center">
               <h1 className="title1">WELCOME TO RAILEX</h1>
              </div>
            </div>
          </div>

          <div className="carousel-item active" style={{ backgroundImage: 'url(src/assets/img/slide/slide-3.jpg)' }}>
            <div className="carousel-content">
              <div className="carousel-content-center">
              <h1 className="title2">BOOK NOW</h1>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
{/* --------------------------------------------------------------------------------------------------------------- */}
      <ClientsSection/>

    <main id="main">

    <section id="about" className="about">
      <About/>
    </section>

      <ClientsSection/>
      <CountsSection/>
      <ClientsSection/>
      <ServicesSection/>
      <ClientsSection/>
      <Train/>
      <ClientsSection/>
      <PricingSection/>
      <ClientsSection/>
      <TeamSection/>
      <ClientsSection/>
      <ContactSection/>
      <ClientsSection/>
    </main>
      <Footer/>

</div>
    
      

  );
}

export default Home;
