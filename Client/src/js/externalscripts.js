import React, { useEffect } from 'react';

const ExternalScripts = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'assets/vendor/purecounter/purecounter_vanilla.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'assets/vendor/glightbox/js/glightbox.min.js';
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = 'assets/vendor/isotope-layout/isotope.pkgd.min.js';
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = 'assets/vendor/swiper/swiper-bundle.min.js';
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = 'assets/vendor/php-email-form/validate.js';
    document.body.appendChild(script6);

    // Clean up function to remove the dynamically added scripts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
    };
  }, []);

  return null;
};

export default ExternalScripts;
