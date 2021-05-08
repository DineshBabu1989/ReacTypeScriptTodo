export interface Todo {
  text: string;
  completed: boolean;
}

export interface ValidationMessage {
  error: boolean;
  message: string;
}

export type AddTodo = (text: string) => void;

export type DeleteTodo = (index: number) => void;

export type CompleteTodo = (index: number) => void;

export type ToggleTodo = (selectedTodo: Todo) => void;

export type ChangeTheme = () => void;
