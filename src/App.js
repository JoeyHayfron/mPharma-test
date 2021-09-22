import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./components/button.jsx";
import ProductsList from "./components/productsList";
import { connect } from "react-redux";
import Modal from "./components/modal.jsx";
import { HTTP_GET_REQUEST } from "./services/http";
import { showModal } from "./redux/actions/ui";
import { normalizedData } from "./utils/helper";
import { storeData } from "./services/localStorage.js";

function App({ modalVisible, showModal }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    let url = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";
    HTTP_GET_REQUEST(
      url,
      (res) => {
        let data = normalizedData(res.data.products);
        setProductList(data);
        storeData("products", 1, data.entities.products[1]);
        console.log("RES", normalizedData(res.data.products));
      },
      (error) => console.log("ERROR", error),
      () => {}
    );
  }, []);

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
        <Button text="Add Item" onClick={() => showModal({ data: "DATA" })} />
      </Header>
      <ProductsList productList={productList} />
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    modalVisible: state.ui.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (data) => dispatch(showModal(data)),
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
