import React from 'react';
import { AddTodo } from '../types'

interface Props {
  addTodo: AddTodo
}

const TodoInput: React.FC<Props> = ({addTodo}) => {
  const [text, setText] = React.useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange}/> 
      <button onClick={handleSubmit} disabled={!text}>Add todo</button>
    </div>
  )
}

export default TodoInput;