import React from 'react';
import './App.css';
import ProjectsList from './features/projects/ProjectsList.js';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <ProjectsList/>
    </div>
  );
}
export default App;
