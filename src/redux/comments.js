
import * as Actiontypes from './Actiontypes';
export const Comments = (state={errMess:null,comments:[]},action) =>{
    switch(action.type){
        case Actiontypes.ADD_COMMENTS:
             
            return {...state, isLoading:false,errMess:null,comments:action.payload};

            
            case Actiontypes.COMMENTS_FAILED:
                return {...state, isLoading:false, errMess:action.payload ,comments:[]};

        case Actiontypes.ADD_COMMENT:
             var Comment = action.payload;
             Comment.id= state.comments.length;
             Comment.date= new Date().toISOString();
             return {...state, comments: state.comments.concat(Comment)};
        default:
            return state;
    }
}