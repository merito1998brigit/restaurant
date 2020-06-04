import React, { Component } from 'react';
import Home from './Homecomponent';
import Header from './Headercomponent';
import Footer from './Footercomponent';
import Menu from './Menucomponent';
import Contact from './Contactcomponent';
import {Switch , Redirect, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import DishDetail from './Dishdetailcomponent';
import About from './Aboutcomponent';
import {addComment} from '../redux/Actioncreators';

const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments: state.comments,
    Promotions: state.promotions,
    leaders :state.leaders
  }
} 

const mapDispatchToProps =(dispatch) =>({
  addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment))
})

class Main extends Component{
  constructor(props){
    super(props);
  
  }
 

  render(){
  const Homepage =() => {
    return (
      <Home dishes={this.props.dishes.filter((dish)=>dish.featured)[0]}
      Promotion={this.props.Promotions.filter((prom)=>prom.featured)[0]}
      leader={this.props.leaders.filter((lead)=>lead.featured)[0]}/>
    )
  }   

  const Dishwithid = ({match}) =>{
       return(
         <DishDetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
 comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
 addComment={this.props.addComment}/>
       )
  }


  return (
    <div>
          <Header/>
          <Switch>
              <Route path="/home" component={Homepage}/>
              <Route path="/contactus" component={Contact}/>}/>
              <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
              <Route path="/menu/:dishId" component={Dishwithid}/>
              <Redirect to="/home"/>
          </Switch>
         <Footer/>
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)) ;
