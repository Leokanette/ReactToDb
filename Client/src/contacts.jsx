import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
           The page is built under the collaborative efforts of the developers mentioned above, If you ever encoounter any issues or problems in accessing the page kindly send us a report and contact us
           with informations provided below. Thank your for visiting the page.
          </p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <address>C.M Recto Avenue, Lapasan, CDO, Philippines</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">+1 2345 6789 10</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@example.com">it2r1@ustp.edu.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
