import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 150px;
  height: 150px;
  margin: 2rem;
  background-color: ${(props) => (props.isBlack ? "black" : "green")};

  &:hover {
  color: black;
  background-color: red;
`;


function BoxWithStyledComponents({ isBlack }) {
  return <Div isBlack={isBlack}/>;
}

export default BoxWithStyledComponents;