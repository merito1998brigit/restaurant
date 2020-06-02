import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/Comments';
import {PROMOTIONS} from '../shared/Promotions';
import {LEADERS} from '../shared/leaders';

export const initialState={
    dishes: DISHES,
    comments:COMMENTS,
    Promotions :PROMOTIONS,
    leaders:LEADERS 
}

export const reducer=(state =initialState,action) =>{
return state;
};