import React, { useEffect, useState } from "react";
import API from "../../../services/api";
import Separator from "../../Utilities/Separator";
import TitleSub from "../../Utilities/TitleAndDescription";
import ContainerMaps from "./Styles";
import { Link } from "react-router-dom";

const Mapas = () => {
  const [mapas, setMapas] = useState();

  useEffect(() => {
    let isMounted = true;

    document.title = "Valorant | Mapas";

    async function CallFunction() {
      try {
        const response = await API.get();
        if (isMounted) {
          setMapas(response.data[0].maps);
        }
      } catch {
        window.alert("Erro! ao carregar os Mapas!");
      }
    }
    CallFunction();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ContainerMaps>
      <TitleSub
        Title="Quais são os mapas do VALORANT?"
        Description="Um dos fatores mais importantes no desenvolvimento de um FPS tático são os cenários que estarão no jogo. Por conta disso, a Riot Games tem um cuidado especial com a criação dos mapas do VALORANT e busca sempre atualizar e melhorar suas invenções, além de ocasionalmente lançar um novo conceito.
        Atualmente, VALORANT conta com oito mapas diferentes, sete deles sendo parte da rotação competitiva do jogo. No lançamento, o FPS contava apenas com três cenários, porém a Riot Games atualizou o game com o passar dos anos para diversificar a jogabilidade."
      />
      {mapas?.map((item, index) => (
        <div className="containerAllInfo" key={index}>
          <Separator>{item.name}</Separator>
          <div>
            <img
              src={item.thumb}
              alt={item.name}
              draggable="false"
              title="Font: https://maisesports.com.br/"
            />
          </div>
          <div>
            <img
              src={item.image}
              alt={item.name}
              draggable="false"
              title="Font: https://maisesports.com.br/"
            />
          </div>
          <div className="descriptionMap">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <TitleSub
        Title="Competitivo de VALORANT não deverá ter mais que sete mapas"
        Description="Assim que a Riot Games anunciou a saída da Split para a entrada da Pearl, a desenvolvedora também revelou que pretende fixar em sete o número ideal de mapas no competitivo. De acordo com a desenvolvedora, não é saudável que o jogo tenha muitos mapas tanto para o cenário competitivo quanto para o casual."
      />
      <h3>Agora que você já conhece todas as Armas do Valorant</h3>
      <p>
        <Link to="/characters">Veja os personagens do Valorant</Link>
      </p>
    </ContainerMaps>
  );
};

export default Mapas;
