import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>GET YOUR TICKET NOW</h2>
          <p>Ticket prices vary upon the category of the seat slot. Here's what we've got. Have your choice seat. Happy Ride... Happy Travel...</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box">
              <h3>General</h3>
              <h4></h4>
              <ul>
                <li>Normal Seat, no Aircon</li>
                <li>Php 300.00 per head</li>
                <li>10 seats per train</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Get Ticket</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>AC</h3>
              <h4></h4>
              <ul>
                <li>Fully Airconditioned</li>
                <li>Php 500.00 per head</li>
                <li>10 seat slots per train</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Get Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
