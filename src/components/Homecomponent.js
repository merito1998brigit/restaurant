import React from 'react';
import {Card,CardImg,CardBody, CardText,CardTitle,CardSubtitle} from 'reactstrap';
import { Loading } from './Loadingcomponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';


function RenderCard({item, isLoading,errMess}){
       if(isLoading){
              return(
                     <Loading/>
              )
       }
       else if(errMess){
              return(
              <h4>{errMess}</h4>
              )
       }
       else
             return(
                    <FadeTransform in transformprops={{
                           exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                      <Card>
                          <CardImg src={baseUrl + item.image}/>
                            <CardBody>
                                   <CardTitle>{item.name}</CardTitle>
                                     {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                                  <CardText>{item.description}</CardText>
                          </CardBody>
                     </Card>
                     </FadeTransform>
              );
}
function Home(props){
    return(
        <div className="container">
            <div className="row align-items-center">
            <div className="col-12 col-md m-1">
                   <RenderCard item={props.dishes}
                    isLoading={props.dishesLoading}
                    errMess={props.dishesErrMess}/> 
            </div>
            <div className="col-12 col-md m-1">
                   <RenderCard item={props.promotion}
                     isLoading={props.promosLoading}
                     errMess={props.promosErrMess}/> 
            </div>
            <div className="col-12 col-md m-1">
                   <RenderCard item={props.leader}/> 
            </div>
            </div>
                
        </div>
    )
}
export default Home;