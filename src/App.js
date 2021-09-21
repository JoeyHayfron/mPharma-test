import React from "react";
import styled from "styled-components";
import Button from "./components/button.jsx";
import ProductsList from "./components/productsList";
import Modal from "./components/modal.jsx";

function App() {
  return (
    <Wrapper>
      {/* <Modal /> */}

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

        <Button text="Add Item" />
      </Header>
      <ProductsList />
    </Wrapper>
  );
}

export default App;

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
