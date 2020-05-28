import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';


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
               
                  return(
                      <div>
                                <h4>comments</h4>
                                <ul className="list-unstyled">
                                      {comments.map((comment) =>{
                                          return(
                                              <li key={comment.id}>
                                                  <p>{comment.comment}</p>
                                          <p>--{comment.name} <span>{RenderDate(comment.date)}</span></p>
                                              </li>
                                          )
                                      }

                                      )}

                                      
                                </ul>
                      </div>
                  )
            }
           
       
    }

  function  RenderDate(date) {
        const d = new Date(Date.parse(date))
        return d.toDateString().slice(4)
    }

    const DishDetail=(props)=> {
        if (props.dish == null) {
            return <div></div>
        }
        else {
            return(
                
          <div className="container">
               <div className="row">
                      <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                 <h3>{props.dish.name}</h3>
                                 <hr />
                            </div>
                     
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}/> 
                    </div>
                </div>
          </div>    
            
            );
        }
    }




export default DishDetail;