import * as Actiontypes from './Actiontypes';
import {baseUrl } from '../shared/baseUrl';

export const addComment = (dishId,rating, author,comment)=>({
    type: Actiontypes.ADD_COMMENT,
    payload :{
        dishId: dishId,
        rating:rating,
        author:author,
        comment:comment
    }
})
   
export const fetchDishes =() => (dispatch) => {
    dispatch(dishesLoading(true));
return fetch(baseUrl +'dishes')
.then(response => response.json())
.then(dishes=>dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: Actiontypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type:Actiontypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: Actiontypes.ADD_DISHES,
    payload:dishes
});

export const fetchComments =() => (dispatch) => {
    dispatch(dishesLoading(true));
return fetch(baseUrl +'comments')
.then(response => response.json())
.then(comments=>dispatch(addComments(comments)));
}
export const commentsFailed = (errmess) => ({
    type: Actiontypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments = (comments) => ({
    type:Actiontypes.ADD_COMMENTS,
    payload:comments
});


export const fetchPromos =() => (dispatch) => {
    dispatch(promosLoading(true));
return fetch(baseUrl +'promotions')
.then(response => response.json())
.then(promos=>dispatch(addDishes(promos)));
}

export const promosLoading = () => ({
    type: Actiontypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type:Actiontypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: Actiontypes.ADD_PROMOS,
    payload:promos
});
