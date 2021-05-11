import React from "react";
import { ChangeTheme } from "../types";
import styled from "styled-components";

interface Props {
  toggleTheme: ChangeTheme;
  selectedTheme: string;
}

const StyledOuterButton = styled.button`
  width: 50px;
  height: 24px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  position: relative;
  cursor: pointer;
  margin: 5px;
  color: transparent;
`;

const StyledInnerHandle = styled.div<{selectedTheme: string}>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.primaryColor};;
  border-radius: 50%;
  ${props => props.selectedTheme === 'dark' ? ({
    position: 'absolute',
    top: '1px',
    right: '1px',
    transition: 'all .5s cubic-bezier(.23,1,.32,1) 0ms'
  }) : ({
    position: 'absolute',
    top: '1px',
    left: '1px',
    transition: 'all .5s cubic-bezier(.23,1,.32,1) 0ms'
  })};
`;

const ToggleTheme: React.FC<Props> = ({ toggleTheme, selectedTheme }) => {
  return (
    <StyledOuterButton onClick={toggleTheme}>
      toggle theme
      <StyledInnerHandle selectedTheme={selectedTheme}></StyledInnerHandle>
    </StyledOuterButton>
  );
};

export default ToggleTheme;
