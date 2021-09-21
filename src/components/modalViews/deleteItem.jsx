import React from "react";
import styled from "styled-components";
import Button from "../button";

const DeleteItem = (props) => {
  return (
    <Wrapper style={props.style}>
      <Message>Are u sure you want to delete?</Message>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button text="Delete" />
      </div>
    </Wrapper>
  );
};

export default DeleteItem;

const Wrapper = styled.div``;

const Message = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
