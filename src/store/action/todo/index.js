
import { ADD_TODO } from "../../constants/todo";
export function addTodoAction(todo) {
    console.log("action: ", todo);
    return {
        type: ADD_TODO,
        payload: todo
    }
}