import React from "react";

const Footer = () => {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
  
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Railex</h3>
                  <p>
                    C.M Recto Avenue, Lapasan <br />
                    Cagayan De Oro City, Philippines<br /><br />
                    <strong>Phone:</strong> +1 2345 6789 10<br />
                    <strong>Email:</strong> it2r1@ustp.edu.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
  
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>
  
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Newsletter</h4>
                <p>Subscribe for more updates and news with Railex the fastest railway express in the </p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>
  
            </div>
          </div>
        </div>
  
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>RAILEX</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">Leokanette and Karen</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  