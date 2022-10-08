import React from "react";
import styled from "styled-components";

const RoleSeparator = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.7rem;
    border-left: 5px solid #fa2e3f;
    border-right: 5px solid #fa2e3f;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
  }

  @media screen and (max-width: 465px) {
    h2 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 319px) {
    h2 {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 283px) {
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const Separator = (prop) => {
  return (
    <RoleSeparator>
      <h2>{prop.children}</h2>
    </RoleSeparator>
  );
};

export default Separator;
