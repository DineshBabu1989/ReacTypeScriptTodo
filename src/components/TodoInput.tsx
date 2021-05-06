import React from 'react';
import { AddTodo } from '../types';
import styled from 'styled-components';

interface Props {
  addTodo: AddTodo
}

const StyledButton = styled.button`
  margin: 20px;
  line-height: 50px;
  min-width: 150px;
  text-align: center;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 5px;
  color:${props => props.theme.textColorPrimary};
  border: 0;
  cursor: pointer;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  transition: background-color 0.3s ease-in-out;
  font-size: 18px;

  &:disabled {
    background-color: ${props => props.theme.primaryColor};
  }
`
const StyledInput = styled.input`
  color: ${props => props.theme.textColorSecondary};
  width: 300px;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid ${props => props.theme.borderBottom};

  &:focus-visible{
    outline: none;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
  }
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <StyledInputWrapper>
      <StyledInput type="text" value={text} onChange={handleOnChange}/> 
      <StyledButton onClick={handleSubmit} disabled={!text}>Add todo</StyledButton>
    </StyledInputWrapper>
  )
}

export default TodoInput;