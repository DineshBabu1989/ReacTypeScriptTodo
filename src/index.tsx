import React from "react";
import ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
import { Todo, AddTodo, DeleteTodo, CompleteTodo } from "./types";

const App = () => {
  const [todos, setTodos] = React.useState<Todo[] | []>([]);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo: DeleteTodo = (index: number) => {
    const array = [...todos];
    array.splice(index, 1);
    setTodos([...array]);
  };

  const completeTodo: CompleteTodo = (index: number) => {
    const todo = todos[index];
    todo.completed = !todo.completed;
    setTodos([...todos]);
  };

  return (
    <div>
      {/* Input for todo */}
      <TodoInput addTodo={addTodo} />
       {/* Todo list */}
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
