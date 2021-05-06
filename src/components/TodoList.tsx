import React from "react";
import { Todo } from "../types";
import styled from "styled-components";

interface Props {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  completeTodo: (index: number) => void;
}

const StyledList = styled.li`
  list-style: none;
  letter-spacing: 1px;
  border: 1px solid #f77777;
  border-radius: 5px;
  padding: 10px;
  width: 500px;
  background-color: white;
  text-align: center;
  font-size: 24px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCompleteButton = styled.button<{ completed: boolean }>`
  line-height: 30px;
  min-width: 150px;
  text-align: center;
  border: 1px solid #f77777;
  border-radius: 5px;
  color: ${(props) => (props.completed ? "white" : "black")};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 14px;
  background-color: ${(props) => (props.completed ? "#FD310F" : "white")};
`;
const StyledDeleteButton = styled.button`
  line-height: 30px;
  min-width: 50px;
  text-align: center;
  border: 1px solid #f77777;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 24px;
  background-color: white;
`;

const StyledText = styled.button`
  line-height: 30px;
  letter-spacing: 1px;
  width: 300px;
  background-color: white;
  border: none;
`;

const StyledListContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList: React.FC<Props> = ({ todos, deleteTodo, completeTodo }) => {
  const listItems = Array.isArray(todos) ? (
    todos.map((todo, i) => (
      <StyledList key={i}>
        <StyledText>{todo.text}</StyledText>
        <StyledCompleteButton
          onClick={() => completeTodo(i)}
          completed={todo.completed}
        >
          {todo.completed ? "Complete" : "In complete"}
        </StyledCompleteButton>
        <StyledDeleteButton onClick={() => deleteTodo(i)}>x</StyledDeleteButton>
      </StyledList>
    ))
  ) : (
    <li>Loading...</li>
  );
  return <StyledListContainer>{listItems}</StyledListContainer>;
};

export default TodoList;
