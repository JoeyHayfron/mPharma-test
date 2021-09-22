import React from "react";
import styled from "styled-components";
import Button from "./button";

const ListItem = ({ name, price }) => {
  return (
    <Wrapper>
      <LeftPatch />
      <Details>
        <Info>
          <Drug>{name}</Drug>
          <Price>Price: GHC {price}</Price>
        </Info>
        <ButtonGroup>
          <Button text="Edit" />
          <Button text="Delete" />
        </ButtonGroup>
      </Details>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  background-color: #fbfcf8;
  min-height: 95px;
  display: flex;
  flex-direction: row;
  width: 80%;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  margin-bottom: 15px;
`;

const LeftPatch = styled.div`
  height: 100%;
  background-color: #fe5100;
  width: 8px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const Drug = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0;
`;

const Price = styled.p`
  margin-top: 5px;
`;
