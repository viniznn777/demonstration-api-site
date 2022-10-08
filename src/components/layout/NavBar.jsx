import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

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

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
    color: #ffffff;
    display: none;
  }
  @media screen and (max-width: 930px) {
    justify-content: space-around;
    button {
      display: block;
    }
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
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const MenuMobile = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 100%;
  position: fixed;
  background-color: #ee2a3ae8;
  z-index: 999;
  align-items: center;
  justify-content: center;
  display: flex;

  @keyframes OpenMenuAnimation {
    0% {
      top: 100%;
      border-radius: 900%;
    }
    100% {
      top: 0%;
      border-radius: 0%;
    }
  }
  @keyframes CloseMenuAnimation {
    0% {
      top: 0%;
      border-radius: 900%;
    }
    100% {
      top: 100%;
      border-radius: 0%;
    }
  }
`;

const ContainerLinksMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  gap: 35px;

  li {
    font-size: 1.8rem;
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

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 930 && openNavBar) {
      CloseMenuMobile();
    }
  });

  return (
    <main>
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
        <button onClick={() => OpenMenuMobile()}>
          <GiHamburgerMenu />
        </button>
      </Header>
      <MenuMobile id="menumobile">
        <ContainerLinksMobile>
          <button onClick={() => CloseMenuMobile()}>
            <GrClose />
          </button>
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
        </ContainerLinksMobile>
      </MenuMobile>
    </main>
  );

  function OpenMenuMobile() {
    let MenuMobile = document.getElementById("menumobile");
    MenuMobile.style.top = "0%";
    MenuMobile.style.animationDuration = "0.7s";
    MenuMobile.style.animationName = "OpenMenuAnimation";
    setOpenNavBar(true);
    let Links = document.getElementsByTagName("a");
    for (let i = 0; i < Links.length; i++) {
      Links[i].addEventListener("click", (e) => {
        if (e) {
          CloseMenuMobile();
        }
      });
    }
  }
  function CloseMenuMobile() {
    let MenuMobile = document.getElementById("menumobile");
    MenuMobile.style.top = "100%";
    MenuMobile.style.animationDuration = "0.7s";
    MenuMobile.style.animationName = "CloseMenuAnimation";
    setOpenNavBar(false);
  }
};

export default NavBar;
