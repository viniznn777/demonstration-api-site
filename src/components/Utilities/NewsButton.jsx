import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  bottom: 0;
  position: fixed;
  z-index: 999999;
  right: 0;
  margin-bottom: 3rem;
  margin-right: 2rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #fa2e3f;
  color: #ffffff;
  border: none;
  outline: none;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  padding: 12px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #c40515;
  }
`;

const NewsButton = ({ content }) => {
  return <Button onClick={() => sendNotification()}>{content}</Button>;

  async function checkPermission() {
    return await Notification.requestPermission();
  }
  async function sendNotification() {
    await checkPermission().then((isAllowed) => {
      if (!isAllowed) {
        return;
      }
      new Notification("Valorant API", {
        body: "😱😱😱 Você viu o novo personagem que lançou no Valorant? Confira aqui no nosso site ou em nossa API tudo o que ele faz. Será que o novo Controlador entrará para o META?",
      });
    });
  }
};

export default NewsButton;
