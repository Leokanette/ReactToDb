
import '../css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import '../assets/img/favicon.png'
import '../assets/img/apple-touch-icon.png'
import '../assets/vendor/animate.css/animate.min.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'

import '../assets/vendor/purecounter/purecounter_vanilla.js'
import '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../assets/vendor/glightbox/js/glightbox.min.js'
import '../assets/vendor/isotope-layout/isotope.pkgd.min.js'
import '../assets/vendor/swiper/swiper-bundle.min.js'
import '../assets/vendor/php-email-form/validate.js'
import {Link} from 'react-router-dom'


export default function Naaviagte() {
  return (
    <div>

<header id="header" className="fixed-top d-flex align-items-center ">
        <div className="container d-flex align-items-center justify-content-between p-0">
          <h1 className="logo"><a href="index.html">RAILEX</a></h1>
         
          <nav id="navbar" className="navbar">
            <ul>
              <li> <Link to="/">Home </Link></li>
              <li><a className="nav-link scrollto" href="/#about">About</a></li>
              <li><a className="nav-link scrollto" href="/#services">Viewing</a></li>
              <li><a className="nav-link scrollto" href="/#portfolio">Trains</a></li>
              <li><a className="nav-link scrollto" href="/#team">Team</a></li>
              <li className="dropdown">
                <a href="#"><span>ACCOUNT</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li className="dropdown">
                    <a href="#"><span>Passenger</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <Link to="/signin"> Sign in </Link>
                      <Link to="/register">Create Account </Link>
                     
                    </ul>
                  </li>
                  <Link to="/adminpage">Admin</Link>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
              <li><Link to ="/register" className="getstarted scrollto" >REGISTER</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
           
          </nav>
          
        </div>
      </header>

    </div>
  )
}
