import React, { useEffect } from "react";
import { useState } from "react";
import API from "../../../services/api.js";
import { Link } from "react-router-dom";
import ContainerInformation from "./Styles.js";
import TitleSub from "../../Utilities/TitleAndDescription.jsx";

const ContainerInfo = () => {
  const [pistolsValorant, setPistolsValorant] = useState();
  const [submachinesValorant, setSubmachinesValorant] = useState();
  const [riflesValorant, setRiflesValorant] = useState();
  const [heavyWeapons, setHeavyWeapons] = useState();

  useEffect(() => {
    let isMounted = true;
    async function CallFunction() {
      try {
        const response = await API.get();
        if (isMounted) {
          setPistolsValorant(response.data[0].guns.pistols);
          setSubmachinesValorant(response.data[0].guns.submachine);
          setRiflesValorant(response.data[0].guns.rifles);
          setHeavyWeapons(response.data[0].guns.heavy_weapons);
        }
      } catch {
        window.alert("erro");
      }
    }
    CallFunction();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <ContainerInformation>
      <div className="titleSub">
        <div>
          <h3>Quais são as armas do Valorant e quanto custam?</h3>
        </div>
        <p>
          Um dos principais fatores que pode influenciar a qualidade de um FPS
          tático é o arsenal do jogo. Por conta disso, a Riot Games teve um
          cuidado especial ao desenvolver as armas do VALORANT e sempre está
          buscando a melhor maneira de balancear os rifles, pistolas e escopetas
          que fazem parte de seu game.
        </p>
        <p>
          Como funcionam as armas do VALORANT Atualmente, VALORANT conta com 18
          armas diferentes, incluindo a faca. Com exceção da melee, todos os
          jogadores podem comprar qualquer um dos armamentos disponíveis no menu
          independente do lado que estiver jogando. Vale lembrar que cada
          armamento possui um preço diferente. Armas que dão mais dano aos
          adversários ou que contam com uma cadência maior de tiros por segundo
          acabam custando mais caro.
        </p>
        <h3>Categorias de armas no Valorant</h3>
        <ul>
          <li>Pistolas: Classic, Ghost, Frenzy, Shorty e Sheriff;</li>
          <li>Submetralhadoras: Stinger e Spectre;</li>
          <li>
            Rifles: Vandal, Phantom, Bulldog, Guardian, Marshall e Operator;
          </li>
          <li>Armas pesadas: Bucky, Judge, Ares e Odin;</li>
        </ul>
      </div>
      <TitleSub
        Title="Pistolas – as armas básicas do VALORANT"
        Description="As pistolas provavelmente são as primeiras armas do VALORANT que um
          novo jogador entrará em contato. As secundárias são muito importantes
          no 1° e 13° rounds da partida, quando apenas pistolas podem ser
          utilizadas. A vitória nessas rodadas pode influenciar a economia dos
          times e a partida no geral. Pistolas também são muito importantes em
          rodadas econômicas. Apesar de serem relativamente baratas em relação
          aos outros armamentos do jogo, elas podem ser extremamente letais
          dependendo da habilidade do jogador."
      />

      {pistolsValorant?.map((item, index) => (
        <div key={index} className="containerAllInfo">
          <h3>{item.name}</h3>
          <div>
            <img
              src={item.image}
              alt={item.name}
              draggable="false"
              title="Font: https://maisesports.com.br/"
            />
          </div>
          <ul>
            <li>Cadência de tiro: {item.rate_of_fire}</li>
            <li>Velocidade de corrida: {item.running_speed}</li>
            <li>Velocidade ao equipar: {item.speed_when_equipping}</li>
            <li>Velocidade ao recarregar: {item.reload_speed}</li>
            <li>Carregador: {item.gun_magazine}</li>
            <li>Dano: {item.damage}</li>
            <li>Preço: {item.price}</li>
          </ul>
        </div>
      ))}
      <TitleSub
        Title="Submetralhadoras – armas baratas, mas sem muito dano"
        Description="As submetralhadoras são as armas automáticas mais baratas do VALORANT
          e geralmente são compradas nas rodadas logo após o pistol ou em
          situações econômicas. A alta cadência de tiros desse tipo de arma é
          balanceado com um dano abaixo da média."
      />

      {submachinesValorant?.map((item, index) => (
        <div key={index} className="containerAllInfo">
          <h3>{item.name}</h3>
          <div>
            <img
              src={item.image}
              alt={item.name}
              draggable="false"
              title="Font: https://maisesports.com.br/"
            />
          </div>
          <ul>
            <li>Cadência de tiro: {item.rate_of_fire}</li>
            <li>Velocidade de corrida: {item.running_speed}</li>
            <li>Velocidade ao equipar: {item.speed_when_equipping}</li>
            <li>Velocidade ao recarregar: {item.reload_speed}</li>
            <li>Carregador: {item.gun_magazine}</li>
            <li>Dano: {item.damage}</li>
            <li>Preço: {item.price}</li>
          </ul>
        </div>
      ))}
      <TitleSub
        Title="Rifles – as armas mais cobiçadas do VALORANT"
        Description="Os rifles são as armas do VALORANT mais comuns. A Vandal e a Phantom
          são os armamentos mais populares do jogo e estão presentes em quase
          todas as rodadas armadas. Além da dupla, a Operator, arma mais
          poderosa do jogo, também se encaixa nessa categoria."
      />
      {riflesValorant?.map((item, index) => (
        <div key={index} className="containerAllInfo">
          <h3>{item.name}</h3>
          <div>
            <img
              src={item.image}
              alt={item.name}
              draggable="false"
              title="Font: https://maisesports.com.br/"
            />
          </div>
          <ul>
            <li>Cadência de tiro: {item.rate_of_fire}</li>
            <li>Velocidade de corrida: {item.running_speed}</li>
            <li>Velocidade ao equipar: {item.speed_when_equipping}</li>
            <li>Velocidade ao recarregar: {item.reload_speed}</li>
            <li>Carregador: {item.gun_magazine}</li>
            <li>Dano: {item.damage}</li>
            <li>Preço: {item.price}</li>
          </ul>
        </div>
      ))}
      <TitleSub
        Title="Armas pesadas – para eliminar rápidamente os adversários"
        Description="As armas pesadas do VALORANT são muitas vezes utilizadas em situações
      econômicas. Tanto as escopetas como a Judge e as LMGs como a Ares
      possuem um valor baixo e muitas vezes são compradas em rounds bônus ou
      econômicos."
      />
      {heavyWeapons?.map((item, index) => (
        <div key={index} className="containerAllInfo">
          <h3>{item.name}</h3>
          <div>
            <img
              src={item.image}
              alt={item.name}
              draggable="false"
              title="Font: https://maisesports.com.br/"
            />
          </div>
          <ul>
            <li>Cadência de tiro: {item.rate_of_fire}</li>
            <li>Velocidade de corrida: {item.running_speed}</li>
            <li>Velocidade ao equipar: {item.speed_when_equipping}</li>
            <li>Velocidade ao recarregar: {item.reload_speed}</li>
            <li>Carregador: {item.gun_magazine}</li>
            <li>Dano: {item.damage}</li>
            <li>Preço: {item.price}</li>
          </ul>
        </div>
      ))}
      <h3>Agora que você já conhece todas as Armas do Valorant</h3>
      <p>
        <Link to="/characters">Veja os personagens do Valorant</Link>
      </p>
    </ContainerInformation>
  );
};

export default ContainerInfo;
