import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #ff4655;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    padding-left: 12px;
  }
`;

const ContainerLinks = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 45px;
  gap: 23px;
  list-style: none;

  li {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
      color: #222222;
    }
  }
`;

const NavBar = () => {
  return (
    <Header>
      <div className="logo">
        <Link to="/" draggable="false">
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
      <ContainerLinks>
        <li>
          <Link to="/" draggable="false">
            Início
          </Link>
        </li>
        <li>
          <Link to="/guns" draggable="false">
            Armas
          </Link>
        </li>
        <li>
          <Link to="/maps" draggable="false">
            Mapas
          </Link>
        </li>
        <li>
          <Link to="/characters" draggable="false">
            Personagens
          </Link>
        </li>
      </ContainerLinks>
    </Header>
  );
};

export default NavBar;
