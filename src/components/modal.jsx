import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import AddEditItem from "./modalViews/addEditItem";
import DeleteItem from "./modalViews/deleteItem";
import { hideModal } from "../redux/actions/ui";

const Modal = (props) => {
  return (
    <Wrapper show={props.show}>
      <Content>
        <Title>{props.title}</Title>
        {props.action === "add-item" || props.action === "edit-item" ? (
          <AddEditItem />
        ) : props.action === "delete-item" ? (
          <DeleteItem />
        ) : (
          ""
        )}
      </Content>
      <Backdrop onClick={props.hideModal} />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
  };
};

export default connect(null, mapDispatchToProps)(Modal);

const Wrapper = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

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

const Content = styled.div`
  position: absolute;
  background-color: white;
  min-width: 50%;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  padding: 25px;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Title = styled.h3``;
