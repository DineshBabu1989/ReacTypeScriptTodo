import React from "react";
import ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ToggleTheme from './components/ToggleTheme'
import { Todo, AddTodo, DeleteTodo, CompleteTodo, ChangeTheme } from "./types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { MyGlobalStyle } from "./globals";

const App = () => {
  const [todos, setTodos] = React.useState<Todo[] | []>([]);
  const [theme, setTheme] = React.useState<string>("light");

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

  const toggleTheme: ChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         <ToggleTheme toggleTheme={toggleTheme} selectedTheme={theme}/> 
          {/* Input for todo */}
          <TodoInput addTodo={addTodo} />
          {/* Todo list */}
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        <MyGlobalStyle />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
