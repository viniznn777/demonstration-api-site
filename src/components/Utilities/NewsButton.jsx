import React from "react";
import styled from "styled-components";
import API from "../../services/api";

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
      } else {
        BuscarNaAPI();
      }
    });
  }
  async function BuscarNaAPI() {
    try {
      const response = await API.get();
      new Notification(`${response.data[0].news[0].title}`, {
        body: response.data[0].news[0].message,
      });
    } catch {
      console.log("Tente Novamente");
    }
  }
};

export default NewsButton;
