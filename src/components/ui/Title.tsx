import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
`;

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
