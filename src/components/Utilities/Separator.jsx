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
`;

const Separator = (prop) => {
  return (
    <RoleSeparator>
      <h2>{prop.children}</h2>
    </RoleSeparator>
  );
};

export default Separator;
