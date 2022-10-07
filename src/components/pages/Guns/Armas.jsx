import React from "react";
import ContainerInfo from "./ContainerInfo";
import { useEffect } from "react";

const Armas = () => {
  useEffect(() => {
    document.title = "Valorant | Armas";
  }, []);

  return (
    <main>
      <ContainerInfo></ContainerInfo>
    </main>
  );
};

export default Armas;
