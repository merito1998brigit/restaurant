import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/Menucomponent';
import './App.css';

function App() {
  return (
    <div>
         <Navbar dark color="primary" >
             <div className="cotainer">
                  <NavbarBrand href="/">Ristorant con fusion</NavbarBrand>
                 
             </div>
            
         </Navbar>
         <Menu />
    </div>
  );
}

export default App;
