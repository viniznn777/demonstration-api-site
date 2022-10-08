import React from "react";
import styled from "styled-components";
import Separator from "./Separator";

const ContainerSub = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 55px;

  p {
    font-size: 1.3rem;
    color: #494949;
    padding: 0 8px;
  }
  h3 {
    color: #fa2e3f;
    font-size: 1.9rem;
    border-left: 5px solid #fa2e3f;
    border-right: 5px solid #fa2e3f;
    width: max-content;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (max-width: 984px) {
    text-align: center;
    padding: 0;
    h3 {
      padding: 0;
      word-wrap: break-word;
      font-size: 1.6rem;
    }
    p {
      font-size: 1.19rem;
    }
  }
  @media screen and (max-width: 796px) {
    h3 {
      font-size: 0.99rem;
    }
  }
  @media screen and (max-width: 796px) {
    h3 {
      font-size: 0.6rem;
    }
  }
`;

const TitleSub = ({ Title, Description }) => {
  return (
    <ContainerSub>
      <Separator>{Title}</Separator>
      <p>{Description}</p>
    </ContainerSub>
  );
};
export default TitleSub;
