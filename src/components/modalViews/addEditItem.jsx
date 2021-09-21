import React from "react";
import styled from "styled-components";
import CustomInput from "../CustomInput";
import Button from "../button";

const AddEditItem = ({ action }) => {
  return (
    <Wrapper>
      <CustomInput label="Product" />
      <CustomInput label="Price" />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button text={action} />
      </div>
    </Wrapper>
  );
};

export default AddEditItem;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
