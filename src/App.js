import React from 'react';
import './App.css';
import ProjectsList from './features/projects/ProjectsList.js';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm.js';

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
