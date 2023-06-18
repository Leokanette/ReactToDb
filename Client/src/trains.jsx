import React from 'react';

const Train = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Trains</h2>
          <p>Rail-Ex offers affordable tickets for your travel experience. Comfortable air-conditioned seats or cheapest general seats. HAPPY TRAVEL</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Air-Conditioned</li>
              <li data-filter=".filter-card">General</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="src/assets/img/portfolio/train.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Train_01</h4>
                <p>CDO to DAVAO</p>
                <p>PHP 500</p>
                <div className="portfolio-links">
                  <a href="src/assets/img/portfolio/train.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                    <i className="bx bx-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Train;
