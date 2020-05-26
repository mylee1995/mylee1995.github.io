import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';

function MainContainer() {
  return (
    <main id='main'>
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
      <Portfolio></Portfolio>
    </main>
  );
}

export default MainContainer;
