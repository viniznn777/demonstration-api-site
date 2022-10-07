import React, { useEffect } from "react";
import ContainerInfoCharacters from "./ContainerInfo";

const Personagens = () => {
  useEffect(() => {
    document.title = "Valorant | Personagens";
  }, []);

  return <ContainerInfoCharacters />;
};

export default Personagens;
