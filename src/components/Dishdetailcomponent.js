import React, {Component} from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Card, CardImg, CardText, CardBody, CardTitle ,BreadcrumbItem,Breadcrumb,Button,Modal,ModalBody,ModalHeader,Input,Label,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './Loadingcomponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';

    function RenderDish({dish}) {
            return(
                <FadeTransform in transformprops={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
             }}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
            );
    }

    function RenderComments({comments}) {
       
           if(comments!=null){
               
                  return(
                      <div>
                                <h4>comments</h4>
                                <ul className="list-unstyled">
                                    <Stagger in>
                                      {comments.map((comment) =>{
                                          return(
                                              <Fade in>
                                              <li key={comment.id}>
                                                  <p>{comment.comment}</p>
                                          <p>--{comment.author} <span>{RenderDate(comment.date)}</span></p>
                                              </li>
                                              </Fade>
                                          )
                                      }

                                      )}
                                    </Stagger>
                                      
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
        if(props.isLoading){
            return(
              <div className="container">
                  <div className="row">
                        <Loading/>
                  </div>
              </div>
            );
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                       <h4>{props.errMess}</h4>
                    </div>
                </div>
              );  
        }
       else if (props.dish == null) {
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
                        <CommentForm postComment={props.postComment} dishId={props.dish.id}/>
                    </div>
                </div>
          </div>    
            
            );
        }
    }




export default DishDetail;

const maxLength =(len) => (val) =>!(val) || (val.length <= len)
const minLength =(len) => (val) =>(val) && (val.length >= len)
class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state={
         ModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({ModalOpen: !this.state.ModalOpen})
    }
    handleSubmit(values){
    this.props.postComment(this.props.dishId,values.rating,values.name,values.comment);
     this.toggleModal();
    }
    render() {
        return (
            <React.Fragment>
            <div>
                 <Button outline onClick={this.toggleModal}>
                      <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                 </Button>
            </div>
            <Modal isOpen={this.state.ModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>
                          Submit Comment
                  </ModalHeader>
                  <ModalBody>
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                     <Row className="form-group">
                                     <Label htmlFor="rating" md={12}><strong>Rating</strong></Label>  
                                     <Col md={12}>
                                     <Control.select model=".rating" name="rating" 
                                      className="form-control">
                                        <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                     </Control.select>
                                     </Col>
                                     </Row>
                                     <Row className="form-group">
                                            <Label htmlFor="name" md={12}><strong>Name</strong></Label>
                                            <Col md={12}>
                                                 <Control.text model=".name" name="name" id="name"
                                                 className="form-control"  validators={{minLength:minLength(2),maxLength:maxLength(15)}}/>
                                                     <Errors className="text-danger" model=".name" show="touched" messages={{
                                                                  
                                                                  minLength:'must be  more than 2 characters',
                                                                  maxLength:'must be less than 15 characters'
                                                               }}/>  
                                            </Col>
                                     </Row>
                                     <Row className="form-group">
                                            <Label htmlFor="comment" md={12}><strong>Comments</strong></Label>
                                            <Col md={12}>
                                                 <Control.textarea model=".comment" name="comment" id="comment" rows="6"
                                                 className="form-control"/>
                                                     
                                            </Col>
                                     </Row>
                                     <Row className="form-group">
                                     <Col md={12}>
                                <Button type="submit" color="primary">Submit</Button>
                                     </Col>
                                     </Row>
                            </LocalForm>
                  </ModalBody>
            </Modal>
            </React.Fragment>
        );
    }
}
