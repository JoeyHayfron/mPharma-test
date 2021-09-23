import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import AddEditItem from "../modalViews/addEditItem";
import DeleteItem from "../modalViews/deleteItem";
import { hideModal } from "../../redux/actions/ui";
import { addEntityAsync } from "../../redux/actions/app";
import { editEntityAsync } from "../../redux/actions/app";

const Modal = ({
  show,
  modalData,
  hideModal,
  addEntityAsync,
  editEntityAsync,
  isAdding,
  isEditing,
}) => {
  const [formInputs, setFormInputs] = useState({});

  useEffect(() => {
    if (modalData && modalData.action === "edit-product") {
      setFormInputs({
        productName: modalData.name,
        productPrice: modalData.price,
      });
    }
  }, [modalData]);

  const handleOnChangeProductName = (e) => {
    setFormInputs((val) => ({
      ...val,
      productName: e.target.value,
    }));
  };
  const handleOnChangePrice = (e) => {
    setFormInputs((val) => ({ ...val, productPrice: e.target.value }));
  };
  const handleAddButtonClicked = () => {
    if (modalData.action === "add-product") {
      let entity = {
        name: formInputs.productName,
        price: formInputs.productPrice,
      };
      addEntityAsync(entity)
        .then(() => {
          hideModal();
          setFormInputs({
            productName: "",
            productPrice: "",
          });
        })
        .catch((err) => alert("an error occurred"));
    } else if (modalData.action === "edit-product") {
      let entity = {
        name: formInputs.productName,
        price: formInputs.productPrice,
        productId: modalData.productId,
        priceId: modalData.priceId,
      };
      editEntityAsync(entity)
        .then(() => {
          hideModal();
          setFormInputs({
            productName: "",
            productPrice: "",
          });
        })
        .catch((err) => alert("An error occurred"));
    }
  };
  return (
    <Wrapper show={show}>
      {modalData ? (
        <Content>
          <Title>{modalData.title}</Title>
          {modalData.action === "add-product" ||
          modalData.action === "edit-product" ? (
            <AddEditItem
              action={modalData.action}
              onActionClicked={handleAddButtonClicked}
              onChangeProduct={handleOnChangeProductName}
              onChangePrice={handleOnChangePrice}
              data={formInputs}
              isAdding={isAdding}
              isEditing={isEditing}
            />
          ) : modalData.action === "delete-item" ? (
            <DeleteItem body={modalData.body} entityId={modalData.entityId} />
          ) : (
            ""
          )}
        </Content>
      ) : (
        ""
      )}

      <Backdrop
        onClick={() => {
          hideModal();
          setFormInputs({
            productName: "",
            productPrice: "",
          });
        }}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    modalData: state.ui.modalData,
    errorMessage: state.app.errorMessage,
    isAdding: state.app.isAdding,
    isEditing: state.app.isEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    addEntityAsync: (entity) => dispatch(addEntityAsync(entity)),
    editEntityAsync: (entity) => dispatch(editEntityAsync(entity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

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
