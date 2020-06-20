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
import {postComment,fetchDishes, fetchComments, fetchPromos } from '../redux/Actioncreators';
import {actions} from 'react-redux-form';

const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders :state.leaders
  }
} 

const mapDispatchToProps =(dispatch) =>({
  postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes:() => {dispatch(fetchDishes())},
  resetFeedbackForm: ()=> {dispatch(actions.reset('feedback'))},
  fetchComments:() => {dispatch(fetchComments())},
  fetchPromos:() => {dispatch(fetchPromos())},
})

class Main extends Component{
  constructor(props){
    super(props);
  
  }
 
componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
}
  render(){
  const Homepage =() => {
    return (
      <Home dishes={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMess={this.props.dishes.errMess}
      promotion={this.props.promotions.promotions.filter((prom)=>prom.featured)[0]}
      promosLoading={this.props.promotions.isLoading}
      promosErrMess={this.props.promotions.errMess}
      leader={this.props.leaders.filter((lead)=>lead.featured)[0]}/>
    )
  }   

  const Dishwithid = ({match}) =>{
       return(
         <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
         isLoading={this.props.dishes.isLoading}
         ErrMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}/>
       )
  }


  return (
    <div>
          <Header/>
          <Switch>
              <Route path="/home" component={Homepage}/>
              <Route path="/contactus" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
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
