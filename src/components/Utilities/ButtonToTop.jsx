import React from "react";
import styled from "styled-components";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

const Button = styled.button`
  position: absolute;
  right: 0;
  margin-right: 50px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 5px black;
  cursor: pointer;
  font-size: 1.9rem;
  border: none;
  outline: none;
  background-color: #1b2c3e;
  border-radius: 20px;
  color: #ffffff;
`;

const ButtonToTop = () => {
  return (
    <Button onClick={() => toTop()} title="Back to top page">
      <MdOutlineVerticalAlignTop />
    </Button>
  );

  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};

export default ButtonToTop;
