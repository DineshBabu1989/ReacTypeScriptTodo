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
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  padding: 10px;
  width: 500px;
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: center;
  font-size: 24px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const StyledCompleteButton = styled.button<{ completed: boolean }>`
  line-height: 30px;
  min-width: 150px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  color: ${(props) =>
    props.completed
      ? props.theme.textColorPrimary
      : props.theme.textColorSecondary};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 14px;
  background-color: ${(props) =>
    props.completed ? props.theme.primaryColor : props.theme.backgroundColor};
  margin-right: 5px;
`;
const StyledDeleteButton = styled.button`
  line-height: 30px;
  min-width: 50px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 24px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColorSecondary};
`;

const StyledText = styled.span`
  line-height: 30px;
  letter-spacing: 1px;
  width: 300px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 14px;
`;

const StyledListContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledControlsWrapper = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

const TodoList: React.FC<Props> = ({ todos, deleteTodo, completeTodo }) => {
  const listItems = Array.isArray(todos) ? (
    todos.map((todo, i) => (
      <StyledList key={i}>
        <StyledText>{todo.text}</StyledText>
        <StyledControlsWrapper>
          <StyledCompleteButton
            onClick={() => completeTodo(i)}
            completed={todo.completed}
          >
            {todo.completed ? "Complete" : "In complete"}
          </StyledCompleteButton>
          <StyledDeleteButton onClick={() => deleteTodo(i)}>
            x
          </StyledDeleteButton>
        </StyledControlsWrapper>
      </StyledList>
    ))
  ) : (
    <li>Loading...</li>
  );
  return <StyledListContainer>{listItems}</StyledListContainer>;
};

export default TodoList;
