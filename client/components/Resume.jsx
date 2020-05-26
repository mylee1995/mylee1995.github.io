import React from 'react';

function Resume() {
  return (
    <section id='resume' class='resume'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title'>
          <h2>Resume</h2>
        </div>

        <div class='row'>
          <div class='col-lg-6'>
            <h3 class='resume-title'>Summary</h3>
            <div class='resume-item pb-0'>
              <h4>Bryan Lee</h4>
              <p>
                <em>
                  Software Engineer passionate with scalablity and data driven
                  products.
                </em>
              </p>
              <ul>
                <li>2016 Commonwealth Ave, Chestnut Hill, MA</li>
                <li>(551) 259-7779</li>
                <li>mylee1995@gmail.com</li>
              </ul>
            </div>

            <h3 class='resume-title'>Education</h3>
            <div class='resume-item'>
              <h4>Bachelor of Arts &amp; Computer Science</h4>
              <h5>2015 - 2021 (Expected)</h5>
              <p>
                <em>Boston College, Chestnut Hill, MA</em>
              </p>
              <p>
                <strong>GPA: </strong> 3.56/4.00
                <br />
                <strong>Major: </strong> Computer Science
                <br />
                <strong>Minor: </strong> Mathematics
                <br />
                <strong>Courseworks: </strong>
                <br />
                &nbsp;&nbsp;Algorithms, Network Science, Computer Systems
                <br />
                &nbsp;&nbsp;Database Systems &amp; Applications, Data Science
                <br />
                &nbsp;&nbsp;Linear Algebra, Abstract Mathematics <br />
                &nbsp;&nbsp;Probability, Mathematical Statistics <br />
              </p>
            </div>
            <div class='resume-item'>
              <h4>Codesmith Software Engineering Immersive Program</h4>
              <h5>2019 June - 2019 Aug</h5>
              <p>
                <em>New York, NY</em>
              </p>
              <p>
                Codesmith is a 13-week Fullstack engineering immersive program
                for anyone interested in Software Engineering Industry. In the
                program, I participated in multiple software developement
                projects utliizing skills such as HTML/CSS/JS, React.js,
                Node.js, SQL/noSQL and AWS.
              </p>
            </div>

            <h3 class='resume-title'>Activtities &amp; Interests</h3>
            {/* <!-- Activtities --> */}
            <div class='resume-item'>
              <h4>Public Talk: "SQL Databse Management"</h4>
              <h5>Aug 2019</h5>
              <p>
                <em>New York, NY</em>
              </p>
              <p>
                At Build with Code, I have delievered a public speech regarding
                DMBS in relational databse, covering Sharding, Concurrency,
                Failover &amp; Failback and Procedure with Trigger.
              </p>
            </div>
            {/* <!-- End of Activtities --> */}

            {/* <!-- Interests --> */}
            <div class='resume-item'>
              <h4>Interests</h4>
              <p>
                Weight Lifting, Table Tennis, Investing , European Soccer, Lofi
                Hiphop, Cooking
              </p>
            </div>
            {/* <!-- End of Interests --> */}
          </div>
          <div class='col-lg-6'>
            <h3 class='resume-title'>Development Experience</h3>
            <div class='resume-item'>
              <h4>Reactime</h4>
              <h5>2019</h5>
              <p>
                <em>New York, NY </em>
              </p>
              <ul>
                <li>
                  Reactime is a Chrome Extension for state debugging for React
                  developers. Reactime has been featured in React Status, a
                  newsletter for React developers, and has been nominated as the
                  productivity booster in React Summit 2020
                </li>
                <li>
                  Developed an NPM module and a browser extension for React that
                  provides time travel functionality among state changes and
                  displays interactive graphical representation of components to
                  improve development workflow and debugging process
                </li>
                <li>
                  Configured recursive traversal algorithm for React Fiber’s
                  FiberNode tree that inspects stateful components and adds
                  middleware to setState methods to record state changes and
                  enable communication between the application and Reactime
                </li>
                <li>
                  Utilized Chrome API’s message methods to create
                  publisher/subscriber pattern, with background script as the
                  message broker handling multiple instances of ports in sync,
                  maintaining streamlined network between the application and
                  Devtool panels
                </li>
                <li>
                  Integrated D3 library to React to display data-driven
                  visualization for stateful component hierarchy by formulating
                  SVG elements in a tree diagram within lifecycle methods,
                  enhancing user experience with interactive display of state
                  changes and relationships
                </li>
                <li>
                  Implemented React Hooks and Context API by refactoring class
                  components to functional components, creating a single store
                  of state using Flux design patterns, handling complex state
                  logic with useReducer and eliminating unnecessary prop
                  drilling
                </li>
                <li>
                  Adopted Sass in designing the application interface to
                  modularize styling and improve scalability by sharing common
                  attributes
                </li>

                <li>
                  Published package in npm registry to work in conjunction with
                  Chrome Web Store App to provide easier accessibility on
                  Reactime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
