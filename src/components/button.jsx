import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  background-color: #fe5100;
  border-radius: 10px;
  color: white;
  padding: 12px;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  border: none;
  display: flex;

  &:hover {
    background: #fc6a43;
  }
`;
