import React from 'react';
import './App.css';
import ProjectsList from './features/projects/ProjectsList.js';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <ProjectsList/>
    </div>
  );
}
export default App;
