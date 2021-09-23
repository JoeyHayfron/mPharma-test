import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "./components/button/button.jsx";
import ProductsList from "./components/productList/productsList";
import { connect } from "react-redux";
import Modal from "./components/modal/modal.jsx";
import { showModal } from "./redux/actions/ui";
import { fetchEntitiesAsync } from "./redux/actions/app/index.js";
import ClipLoader from "react-spinners/ClipLoader";

export function App({
  modalVisible,
  showModal,
  fetchEntitiesAsync,
  isLoading,
  entities,
}) {
  useEffect(() => {
    fetchEntitiesAsync();
  }, []);

  if (isLoading)
    return (
      <ClipLoader
        color="#fe5100"
        loading={isLoading}
        size={50}
        css={{ alignSelf: "center" }}
      />
    );

  return (
    <Wrapper>
      <Modal show={modalVisible} />
      <Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Logo src="/images/mPharma.jpeg" />
          <h2>mPharma Products List</h2>
        </div>
        <Button
          onClick={() =>
            showModal({ action: "add-product", title: "Add Product" })
          }
        >
          Add Item
        </Button>
      </Header>
      <ProductsList productList={entities} />
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.ui.showModal,
    isLoading: state.app.isLoading,
    entities: state.app.entities,
    errorMessage: state.app.errorMessage,
    isAdding: state.app.isAdding,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (data) => dispatch(showModal(data)),
    fetchEntitiesAsync: () => dispatch(fetchEntitiesAsync()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

const Wrapper = styled.div``;

const Header = styled.nav`
  background: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  position: fixed;
  justify-content: space-between;
  z-index: 1;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  margin-right: 10px;
`;
