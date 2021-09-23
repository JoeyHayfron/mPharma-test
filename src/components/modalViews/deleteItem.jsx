import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import { connect } from "react-redux";
import { deleteEntityAsync } from "../../redux/actions/app";
import { hideModal } from "../../redux/actions/ui";
import { ClipLoader } from "react-spinners";

const DeleteItem = ({
  body,
  entityId,
  deleteEntityAsync,
  hideModal,
  isDeleting,
  ...props
}) => {
  return (
    <Wrapper style={props.style}>
      <Message>{body}</Message>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => hideModal()}>Cancel</Button>
        <Button
          onClick={() => {
            deleteEntityAsync(entityId)
              .then(() => {
                hideModal();
              })
              .catch((err) => {});
          }}
        >
          {isDeleting ? (
            <ClipLoader
              color="##ffffff"
              loading={isDeleting}
              size={30}
              css={{ alignSelf: "center" }}
            />
          ) : (
            "Delete"
          )}
        </Button>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isDeleting: state.app.isDeleting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntityAsync: (entityId) => dispatch(deleteEntityAsync(entityId)),
    hideModal: () => dispatch(hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);

const Wrapper = styled.div``;

const Message = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
