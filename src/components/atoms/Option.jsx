import styled from "styled-components";

export const Option = ({ text, isCorrect }) => {
  return <StyledWrapper isCorrect={isCorrect}>{text}</StyledWrapper>;
};

const StyledWrapper = styled("button")(({ isCorrect }) => ({
  height: "32px",
  width: "128px",
  background: "blue",
  color: "white",

  ...(isCorrect ? { background: "green" } : { background: "red" }),
}));
