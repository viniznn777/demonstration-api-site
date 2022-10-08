import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonToTop from "../Utilities/ButtonToTop";

const FooterPage = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #fa2e3f;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;

  span {
    margin-bottom: 5px;
    color: #ffffff;
    cursor: not-allowed;
    font-size: 1rem;
    font-weight: bold;

    &::selection {
      display: none;
    }
  }

  .logo {
    position: absolute;
    left: 50%;
    right: 50%;
  }

  @media screen and (max-width: 885px) {
    span {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 545px) {
    justify-content: center;
    align-items: center;
    span {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterPage>
      <span>Developed by @viniciuskauandev for API demonstration.</span>
      <div className="logo">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="55"
            viewBox="0 0 100 100"
            width="65"
          >
            <path
              d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
              fill="#fff"
            ></path>
          </svg>
        </Link>
      </div>
      <ButtonToTop />
    </FooterPage>
  );
};

export default Footer;
