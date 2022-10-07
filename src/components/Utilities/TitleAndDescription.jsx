import React from "react";
import styled from "styled-components";

const ContainerSub = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 55px;

  p {
    font-size: 1.3rem;
    color: #494949;
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
`;

const TitleSub = ({ Title, Description }) => {
  return (
    <ContainerSub>
      <h3>{Title}</h3>
      <p>{Description}</p>
    </ContainerSub>
  );
};
export default TitleSub;
