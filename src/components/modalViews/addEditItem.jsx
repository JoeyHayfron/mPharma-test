import React from "react";
import styled from "styled-components";
import CustomInput from "../custonInput/CustomInput";
import Button from "../button/button";
import { ClipLoader } from "react-spinners";

const AddEditItem = ({
  action,
  data,
  onChangeProduct,
  onChangePrice,
  isAdding,
  isEditing,
  onActionClicked,
}) => {
  return (
    <Wrapper>
      <CustomInput
        label="Product"
        value={data.productName}
        onChange={onChangeProduct}
      />
      <CustomInput
        label="Price"
        value={data.productPrice}
        onChange={onChangePrice}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={onActionClicked}>
          {isAdding || isEditing ? (
            <ClipLoader
              color="##ffffff"
              loading={isAdding}
              size={30}
              css={{ alignSelf: "center" }}
            />
          ) : action === "add-product" ? (
            "add"
          ) : (
            "edit"
          )}
        </Button>
      </div>
    </Wrapper>
  );
};

export default AddEditItem;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
