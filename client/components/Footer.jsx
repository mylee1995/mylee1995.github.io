import React from 'react';

function Footer() {
  return (
    <footer id='footer'>
      <div class='container'>
        <h3>Bryan Lee</h3>
        <p>
          Feel free to reach out to me via <email> mylee1995@gmail.com</email>
        </p>
        <div class='social-links'>
          <a
            href='assets/pdf/Bryan Lee Resume_04.17.2020.pdf'
            target='blank'
            class='pdf'
          >
            <i class='bx bx-file-blank'></i>
          </a>
          <a href='https://github.com/mylee1995' target='blank' class='github'>
            <i class='bx bxl-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/bryanm-lee/'
            target='blank'
            class='linkedin'
          >
            <i class='bx bxl-linkedin'></i>
          </a>
        </div>
        <div class='copyright'>
          &copy; Copyright{' '}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class='credits'>
          {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: [license-url] -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ --> */}
          Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
