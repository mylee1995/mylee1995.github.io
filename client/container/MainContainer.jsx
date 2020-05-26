import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

function MainContainer() {
  return (
    <main id='main'>
      <About />
      <Skills />
      <Resume />
      {/* <Portfolio /> */}
      <Contact />
    </main>
  );
}

export default MainContainer;
