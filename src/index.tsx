import React from "react";
import ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo, AddTodo, DeleteTodo, CompleteTodo } from "./types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
  const [todos, setTodos] = React.useState<Todo[] | []>([]);
  const [theme, setTheme] = React.useState<any>('light');

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

  const toggleTheme: any = () => {
   if(theme === 'light') {
     setTheme('dark');
   } else {
     setTheme('light');
   }
  };

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <button onClick={toggleTheme}>Toggle button</button>
        {/* Input for todo */}
        <TodoInput addTodo={addTodo} />
        {/* Todo list */}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
