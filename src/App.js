import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { addTodoAction } from './store/action/todo';

function App() {
  // const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const dispatch  = useDispatch();
  const stateTodos = useSelector((state) => state.todoReducer.todos);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodo()  {
    console.log(inputValue)
    dispatch(addTodoAction(inputValue));
    // setItems([...items, inputValue]);
    // setInputValue('');
  }

  return (
    <div className="App">
      <div>
        <input type='text' value={inputValue} onChange={handleChange}></input>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
          { 
            stateTodos?.map((item, index) => {
              return <h3 key={index}>{item}</h3>
            })
          }
      </div>

    </div>
  );
}

export default App;