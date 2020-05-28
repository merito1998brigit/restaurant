import React, { Component } from 'react';
import Home from './Homecomponent';
import Header from './Headercomponent';
import Footer from './Footercomponent';
import Menu from './Menucomponent';
import Dishdetail from './Dishdetailcomponent'
import {DISHES} from '../shared/dishes';
import {Switch , Router , Redirect, Route} from 'react-router-dom';
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES, 
     
    };
  }
 
  render(){
  const Homepage =() => {
    return (
      <Home/>
    )
  }   
  return (
    <div>
          <Header/>
          <Switch>
              <Route path="/home" component={Homepage}/>
              <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
              <Redirect to="/home"/>
          </Switch>
         <Footer/>
    </div>
  );
  }
}

export default Main;
