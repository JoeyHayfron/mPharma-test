import React from "react";
import styled from "styled-components";
import ListItem from "./listItem";
import { getLatestPrice } from "../utils/helper";

const ProductsList = ({ productList }) => {
  const getLatestProductPrice = (product) => {
    return getLatestPrice(
      product.prices.map((item) => productList.entities.prices[item])
    );
  };
  return (
    <Wrapper className="container">
      {productList.entities
        ? Object.keys(productList.entities.products).map((item, index) => (
            <ListItem
              key={index}
              name={productList.entities.products[item].name}
              price={
                getLatestProductPrice(productList.entities.products[item]).price
              }
            />
          ))
        : ""}
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
