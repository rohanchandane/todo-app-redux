export function addTodoAction(todo) {
    console.log("action: ", todo);
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}