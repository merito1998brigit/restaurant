import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
         <Navbar dark color="primary"className="navbar-expand-lg fixed-top" >
             <div className="cotainer">
                  <NavbarBrand href="/">Ristorant con fusion</NavbarBrand>
                 
             </div>
             < div className="navbar-collapse">
                          <ul className="navbar-nav  mr-0" >
                              <li className="nav-item">
                                <a className="nav-link">home</a>
                              </li>
                          </ul>
                  </div>
         </Navbar>
    </div>
  );
}

export default App;
