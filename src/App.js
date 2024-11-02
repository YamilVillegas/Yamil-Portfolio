import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import YLogo from './app/assets/img/YLogo.png';
import ProjectsList from './features/projects/ProjectsList.js';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={YLogo} alt='YLogo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            <ProjectsList/>
    </div>
  );
}
export default App;
