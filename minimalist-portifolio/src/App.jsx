import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portifolio from './components/Portifolio';
import Timeline from './components/Timeline';

function App() {

  return (
    <>
      <div className='App'>
       <Intro />
       <Portifolio />
       <Timeline />
       <Contact />
       <Footer />
      </div>
    </>
  )
}

export default App
