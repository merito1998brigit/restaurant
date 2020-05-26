import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    renderComments(comments) {
       
           if(comments!=null){
               
                   return comments.map((comment) =>{
                       return(
                        <div key={comment.id}>
                        <h4>comments</h4>
                        <ul className="list-unstyled">
                         <li>{comment.comment}</li>
                        <li>-- {comment.author}, {this.renderDate(comment.date)}</li>
                        </ul>
                    </div>
                       )
                   })
                      
                   
                   
               
           }
           
       
    }

    renderDate(date) {
        const d = new Date(Date.parse(date))
        return d.toDateString().slice(4)
    }

    render() {
        if (this.props.dishes == null) {
            return <div></div>
        }
        else {
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dishes)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dishes.comments)}
                    </div>
                </div>
            );
        }
    }


}

export default DishDetail;