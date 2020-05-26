
import React, { Component } from 'react';
import { Card , CardImg,CardBody,CardImgOverlay,CardText,CardTitle } from 'reactstrap';
import Dishdetail from './Dishdetailcomponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedish:null
          };
      }
      onDishelect(dish){
          this.setState({selectedish:dish})
      }
    /*  renderdish(dish){
        if(dish!=null){
              return(
                  <Card>
                       <CardImg width="100%" src={dish.image} alt={dish.name} />
                
                      <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
              )
        }
        
        else{
            return(
                <div></div>
            )
        }
      } */
     

      render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                
              <div key={dish.id} className="col-12 col-md-5 m-2">
                <Card onClick={()=> this.onDishelect(dish)}>
                 
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                   
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row d-flex justify-content-center ">
              
                  {menu}
              </div>
              
                <Dishdetail dishes={this.state.selectedish}/>
             
          </div>
        );
    }
}

export default Menu;  