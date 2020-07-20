import React from 'react';
import Homepage from './components/Homepage'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import './App.css';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Homepage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
