import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
       
           if(comments!=null){
               
                   return comments.map((comment) =>{
                       return(
                        <div >
                        <h4>comments</h4>
                        <ul className="list-unstyled">
                         <li >{comment.comment}</li>
                        <li>-- {comment.author}, {RenderDate(comment.date)}</li>
                        </ul>
                    </div>
                       )
                   })
                      
                   
                   
               
           }
           
       
    }

  function  RenderDate(date) {
        const d = new Date(Date.parse(date))
        return d.toDateString().slice(4)
    }

    const DishDetail=(props)=> {
        if (props.dishes == null) {
            return <div></div>
        }
        else {
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dishes}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dishes.comments}/> 
                    </div>
                </div>
            );
        }
    }




export default DishDetail;