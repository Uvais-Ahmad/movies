//Reducers is a pure function which is used to change something in the state
//This is a reducer function
//If there is no send State it auto recerve empty state
export default function movies( state=[], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies
    }
    return state;
}