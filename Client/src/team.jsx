import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Team</h2>
          <p>The Developers behind this project</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member">
              <img src="src/assets/img/team/karen.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Karen Cadalo</h4>
                  <span>Front-end Developer</span>
                  <span>BS-IT</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="member">
              <img src="src/assets/img/team/leokanette.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Leokanette Cailing</h4>
                  <span>Front-end/Back-end Developer</span>
                  <span>BS-IT</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="member">
              <img src="src/assets/img/team/gerico.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Gerico Go</h4>
                  <span>Developer</span>
                  <span>BS-IT</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
