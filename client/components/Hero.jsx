import React from 'react';

function Header() {
  return (
    <section id='hero' class='d-flex flex-column justify-content-center'>
      <div class='container' data-aos='zoom-in' data-aos-delay='100'>
        <h1>Bryan Mooyeong Lee</h1>
        <p>
          I'm a
          <span
            class='typed'
            data-typed-items='Software Engineer, Fullstack Developer'
          ></span>
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
      </div>
    </section>
  );
}

export default Header;
