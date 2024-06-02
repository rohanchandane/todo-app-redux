import { ADD_TODO } from "../../constants/todo";

const initialState = {
    todos: [],
}

export default function todoReducer (state = initialState, action) {
    console.log("reducer: ", state, action);
    const {type, payload} = action;  
    
    switch(type) {
        case ADD_TODO:{
            state.todos = [payload, ...state.todos];
            return {...state};
        }

        default:
            return state;
    }
}