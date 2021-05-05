import React from 'react';
import { Todo } from '../types';

interface Props {
  todos: Todo[],
  deleteTodo: (index: number) => void,
  completeTodo: (index: number) => void
}

const TodoList: React.FC<Props> = ({todos, deleteTodo, completeTodo}) => {
  const listItems = Array.isArray(todos) ? 
    todos.map((todo, i) => (
    <li key={i} >
      {todo.text}
      <button onClick={() => completeTodo(i)}>
        { todo.completed ? 'Complete' : 'Incomplete'}
      </button>
      <button onClick={() => deleteTodo(i)}>x</button>
    </li>)) :
    <li>Loading...</li>;
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default TodoList;