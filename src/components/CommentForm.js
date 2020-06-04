import React, { Component } from 'react';
import {Button,Modal,ModalBody,ModalHeader,Input,Label,Row,Col} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

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
     alert("current state is:"+JSON.stringify(values))
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

export default CommentForm;