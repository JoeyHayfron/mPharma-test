import React from "react";
import styled from "styled-components";
import ListItem from "../listItem/listItem";
import { getLatestPrice } from "../../utils/helper";

const ProductsList = ({ productList }) => {
  const getLatestProductPrice = (product) => {
    let priceArray = [];

    product.prices.map((item) => priceArray.push(productList.prices[item]));
    return getLatestPrice(priceArray);
  };
  return (
    <Wrapper className="container" data-testid="test_productsList">
      {productList
        ? Object.keys(productList.products)
            .map((item, index) => (
              <ListItem
                id={item}
                key={index}
                name={productList.products[item].name}
                price={getLatestProductPrice(productList.products[item]).price}
                priceId={getLatestProductPrice(productList.products[item]).id}
              />
            ))
            .reverse()
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
