import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Button;

const Wrapper = styled.div`
  background-color: #fe5100;
  border-radius: 10px;
  color: white;
  padding: 12px;
  margin: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #fc6a43;
  }
`;
