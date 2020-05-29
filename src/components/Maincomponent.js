import React, { Component } from 'react';
import Home from './Homecomponent';
import Header from './Headercomponent';
import Footer from './Footercomponent';
import Menu from './Menucomponent';
import Contact from './Contactcomponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/Comments';
import {PROMOTIONS} from '../shared/Promotions';
import {LEADERS} from '../shared/leaders';
import {Switch , Router , Redirect, Route} from 'react-router-dom';
import DishDetail from './Dishdetailcomponent';
import About from './Aboutcomponent';
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      comments:COMMENTS,
      Promotion :PROMOTIONS,
      leaders:LEADERS 
     
    };
  }
 
  render(){
  const Homepage =() => {
    return (
      <Home dishes={this.state.dishes.filter((dish)=>dish.featured)[0]}
      Promotion={this.state.Promotion.filter((prom)=>prom.featured)[0]}
      leader={this.state.leaders.filter((lead)=>lead.featured)[0]}/>
    )
  }   

  const Dishwithid = ({match}) =>{
       return(
         <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
 comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}/>
       )
  }


  return (
    <div>
          <Header/>
          <Switch>
              <Route path="/home" component={Homepage}/>
              <Route path="/contactus" component={Contact}/>}/>
              <Route path="/aboutus" component={() => <About leaders={this.state.leaders }/>}/>
              <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
              <Route path="/menu/:dishId" component={Dishwithid}/>
              <Redirect to="/home"/>
          </Switch>
         <Footer/>
    </div>
  );
  }
}

export default Main;
