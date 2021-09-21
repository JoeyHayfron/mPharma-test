import React from "react";
import styled from "styled-components";
import ListItem from "./listItem";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductsList = () => {
  return (
    <Wrapper className="container">
      {products.map((item, index) => (
        <ListItem key={index} />
      ))}
    </Wrapper>
  );
};

export default ProductsList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
