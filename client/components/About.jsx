import React from 'react';

function About() {
  return (
    <section id='about' class='about'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title'>
          <h2>About</h2>
        </div>

        <div class='row'>
          <div class='col-lg-4'>
            <img
              src='assets/img/profile.png'
              class='img-fluid'
              alt='Bryan Lee Profile Image'
            />
          </div>
          <div class='col-lg-8 pt-4 pt-lg-0 content'>
            <h3>Bryan Lee</h3>
            <p class='font-italic'>Software Engineer</p>
            <div class='row'>
              <div class='col-lg-6'>
                <ul>
                  <li>
                    <i class='icofont-rounded-right'></i>
                    <strong>Birthday:</strong> 17 Oct 1995
                  </li>
                  <li>
                    <i class='icofont-rounded-right'></i>
                    <strong>Phone:</strong> (551) 259 7779
                  </li>
                  <li>
                    <i class='icofont-rounded-right'></i>
                    <strong>City:</strong> Boston, MA
                  </li>
                </ul>
              </div>
              <div class='col-lg-6'>
                <ul>
                  <li>
                    <i class='icofont-rounded-right'></i>
                    <strong>Age:</strong> 24
                  </li>
                  <li>
                    <i class='icofont-rounded-right'></i>
                    <strong>Degree:</strong> BA in Computer Science (21 Fall)
                  </li>
                  <li>
                    <i class='icofont-rounded-right'></i>
                    <strong>Email:</strong> mylee1995@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <p>
              A Senior at Boston College majoring in Computer Science, with a
              passion in Software Engineering and Data Analysis.
              <br />
              I have built multiple full stack applications using React and
              Node.js with a focus on scalability and usability.
              <br />
              I also have huge interests in Data Analysis and Business
              Development.
              <br />
              Co-creator of Reactime: A time travel debugger for React
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
