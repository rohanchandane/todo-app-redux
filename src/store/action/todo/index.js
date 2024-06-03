
import { ADD_TODO } from "../../constants/todo";
export function addTodoAction(todo) {
    console.log("action: ", todo);
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function addTodoAfterDataFetchAction(todo) {
    return function(trigger) {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                data.map((item) => {
                    trigger(addTodoAction(item.title));    
                });
                // adding input text in todo store after data fetch
                trigger(addTodoAction(todo));
             }
            catch(err) {
                console.log(err);
             }
        } 

        fetchData();
    }
}