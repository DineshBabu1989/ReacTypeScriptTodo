import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ToggleTheme from './components/ToggleTheme'
import { Todo, AddTodo, DeleteTodo, CompleteTodo, ChangeTheme } from "./types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { MyGlobalStyle } from "./globals";

const App = () => {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [theme, setTheme] = useState<string>("light");

  /**
   * Add new todo to the local state
   */
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  /**
   * Delete a selected todo by index
   */
  const deleteTodo: DeleteTodo = (index: number) => {
    const array = [...todos];
    array.splice(index, 1);
    setTodos([...array]);
  };

  /**
   * Mark a selected todo as complete
   */
  const completeTodo: CompleteTodo = (index: number) => {
    const todo = todos[index];
    todo.completed = !todo.completed;
    setTodos([...todos]);
  };
  
  /**
   * Toggle them on a click event
   */
  const toggleTheme: ChangeTheme = (): void => {
    (theme === "light") ? setMode('dark') : setMode('light');
  };

  /**
   * Set selected theme to the local state and local storage
   */
  const setMode = (mode:string): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }
  
  /**
   * Look for stored theme in local storage when the app loads
   */
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

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
