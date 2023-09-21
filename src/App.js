
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <main className="text-gray-400 bg-repeat body-font bg-background-image">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
