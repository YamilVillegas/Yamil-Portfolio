import React from 'react';
import './App.css';
import ProjectsList from './features/projects/ProjectsList.js';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

library.add(faHtml5, faCss3Alt, faJs, faReact);

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <ProjectsList/>
      <ContactForm />
    </div>
  );
}
export default App;
