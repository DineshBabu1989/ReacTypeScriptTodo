import React, { useState } from "react";
import { AddTodo } from "../types";
import styled from "styled-components";
import { emptyStringValidator } from "../utils/Validators";
import { ValidationMessage } from "../types";

interface Props {
  addTodo: AddTodo;
}

const StyledButton = styled.button`
  margin: 20px;
  line-height: 50px;
  min-width: 150px;
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  color: ${(props) => props.theme.textColorPrimary};
  border: 0;
  cursor: pointer;
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  transition: background-color 0.3s ease-in-out;
  font-size: 18px;

  &:disabled {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

const StyledInput = styled.input`
  color: ${(props) => props.theme.textColorSecondary};
  width: 300px;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};
  transition: border-bottom 0.3s ease-in-out;
  background-color: transparent;
 
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primaryColor};
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const StyledValidationMessage = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};
`;

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");
  const [validation, setValidationMsg] = useState<ValidationMessage>(
    { error: false, message: "valid string" }
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatorResponse = emptyStringValidator(e.target.value);
    setValidationMsg(validatorResponse);
    setText(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <StyledWrapper>
      <div>
        <StyledLabel htmlFor="todo">Todo: 
          <StyledInput type="text" value={text} name="todo" onChange={handleOnChange} />
        </StyledLabel>
        {validation.error && (
          <StyledValidationMessage>
            {validation.message}
          </StyledValidationMessage>
        )}
      </div>
      <StyledButton onClick={handleSubmit} disabled={!text.trim()}>
        Add todo
      </StyledButton>
    </StyledWrapper>
  );
};

export default TodoInput;
