//Reducers is a pure function which is used to change something in the state
// import {ADD_MOVIES} from '../actions'
// //take initState 
// const initialState = {
//     list : [],
//     favourite : []
// }

//This is a reducer function
export default function movies( state=[], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies
    }
    return state;
}