import React from "react";
import styled from "styled-components";
import AddEditItem from "./modalViews/addEditItem";
import DeleteItem from "./modalViews/deleteItem";

const Modal = (props) => {
  return (
    <Backdrop>
      <Wrapper>
        <Title>{props.title}</Title>
        {props.action === "add-item" || props.action === "edit-item" ? (
          <AddEditItem />
        ) : props.action === "delete-item" ? (
          <DeleteItem />
        ) : (
          ""
        )}
      </Wrapper>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  min-width: 50%;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  padding: 25px;
`;

const Title = styled.h3``;
