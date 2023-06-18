import React, { useEffect } from 'react';

const CountsSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.purecounter');

    const options = {
      threshold: 1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const start = parseInt(entry.target.dataset.purecounterStart, 10) || 0;
          const end = parseInt(entry.target.dataset.purecounterEnd, 10) || 0;
          const duration = parseInt(entry.target.dataset.purecounterDuration, 10) || 0;

          const range = end - start;
          const increment = end > start ? 1 : -1;
          const stepTime = Math.abs(Math.floor(duration / range));

          let current = start;
          const counter = setInterval(() => {
            entry.target.innerText = current;
            current += increment;

            if ((increment > 0 && current > end) || (increment < 0 && current < end)) {
              clearInterval(counter);
              entry.target.innerText = end;
            }
          }, stepTime);
        }
      });
    }, options);

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="2000"
                className="purecounter"
              ></span>
              <p>No of Bookings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="2000"
                className="purecounter"
              ></span>
              <p>Total passengers each day</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="2000"
                className="purecounter"
              ></span>
              <p>Support Hours</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="10"
                data-purecounter-duration="2000"
                className="purecounter"
              ></span>
              <p>No of Trains</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
