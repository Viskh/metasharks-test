import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  background-color: #006efc;
  color: #fefefe;
  font-size: 16px;
  padding: .4em 1em;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #509ff8;
  }
  &:active {
    transform: scale(0.98);
  }
`;

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
