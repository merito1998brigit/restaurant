import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menucomponent';
import Dishdetail from './Dishdetailcomponent'
import {DISHES} from '../shared/dishes';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      selectedish:null
    };
  }
  onDishelect(dishId){
    this.setState({selectedish:dishId})
}
  render(){
     
  return (
    <div>
         <Navbar dark color="primary" >
             <div className="cotainer">
                  <NavbarBrand href="/">Ristorant con fusion</NavbarBrand>
                 
             </div>
            
         </Navbar>
         <Menu dishes={this.state.dishes}
              onClick={(dishId) => this.onDishelect(dishId)}/>
         <Dishdetail dishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedish)[0]}/>
    </div>
  );
  }
}

export default Main;
