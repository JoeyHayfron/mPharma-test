import React from "react";
import styled from "styled-components";

const CustomInput = ({ label, ...props }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <Input
        type="text"
        onChange={props.onChange}
        value={props.value}
        data-testid="test_customInput"
      />
    </Wrapper>
  );
};

export default CustomInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Input = styled.input`
  margin-top: 10px;
  border: 1px solid;
  border-radius: 5px;
  padding: 8px;

  :focus {
    outline-color: #fe5100;
  }
`;
