import {COMMENTS} from '../shared/Comments';
import * as Actiontypes from './Actiontypes';
export const Comments = (state=COMMENTS,action) =>{
    switch(action.type){
        case Actiontypes.ADD_COMMENT:
             var Comment = action.payload;
             Comment.id= state.length;
             Comment.date= new Date().toISOString();
             return state.concat(Comment);
        default:
            return state;
    }
}