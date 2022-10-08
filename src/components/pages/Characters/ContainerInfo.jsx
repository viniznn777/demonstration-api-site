import React, { useEffect, useState } from "react";
import TitleSub from "../../Utilities/TitleAndDescription";
import ContainerInfo from "./Styles";
import API from "../../../services/api";
import Separator from "../../Utilities/Separator";

const ContainerInfoCharacters = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    let isMouted = true;

    async function CallFunction() {
      try {
        const response = await API.get();
        if (isMouted) {
          setCharacters(response.data[0].results);
        }
      } catch {
        window.alert("Erro! ao buscar os personagens");
      }
    }
    CallFunction();
    return () => {
      isMouted = false;
    };
  }, []);

  return (
    <ContainerInfo>
      <TitleSub
        Title="Valorant tem ao todo 19 personagens disponíveis"
        Description="Chamados “agentes”, cada um com sua história e habilidades únicas. E esse número aumenta a cada episódio do game.A seguir, te mostrarei quem é quem em VALORANT. Conheça a nacionalidade, as características, os poderes e algumas curiosidades da lore de cada um. Você tem um agente preferido?"
      />
      {characters?.map((item, index) => (
        <div className="containerCharacters" key={index}>
          <Separator>{item.character}</Separator>
          <div className="containerImage">
            <img
              src={item.image}
              alt={item.name}
              title="Font: https://canaltech.com.br/"
              draggable="false"
            />
          </div>
          <ul>
            <li>Origem: {item.origin}</li>
            <li>Nome: {item.name}</li>
            <li>Função: {item.function}</li>
            <li>Classificação: {item.classification}</li>
          </ul>
          <div className="descriptionCharacter">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <Separator>Agora que já sabe tudo sobre VALORANT.</Separator>
      <p>
        <a
          href="https://apivalorantgame.herokuapp.com/info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui e conheça a API que tornou este site possível
        </a>
      </p>
    </ContainerInfo>
  );
};

export default ContainerInfoCharacters;
