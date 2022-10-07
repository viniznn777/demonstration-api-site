import React from "react";
import Separator from "../../Utilities/Separator";
import Slider from "../../Utilities/Slider";
import styles from "./Home.module.css";
import { useEffect } from "react";

import thumb1 from "../../../Imgs/thumb1.jpeg";
import thumb2 from "../../../Imgs/thumb2.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Valorant API Demonstration";
  }, []);

  return (
    <main>
      <Slider />
      <Separator>
        Valorant: o que é e tudo que precisa saber sobre o FPS da Riot
      </Separator>
      <section>
        <div className={styles.subDescription}>
          <p>
            Criado pela mesma produtora de League of Legends, saiba tudo sobre,
            personagens, armas, mapas do Valorant FPS{" "}
          </p>
        </div>
        <div className={styles.containerDescription}>
          <div className={styles.containerImage}>
            <img src={thumb1} alt="" draggable="false" />
          </div>
          <div className={styles.description}>
            <p>
              Competindo com gigantes como CS:GO e Overwatch, Valorant é o jogo
              de tiro da Riot Games que já pode ser considerado um dos melhores
              jogos competitivos no Brasil, como mostramos em nossa lista. Até
              pouco tempo atrás, a Riot cuidava apenas da sua “galinha dos ovos
              de ouro”, conhecida como League of Legends. Só que a companhia
              quis expandir seu portfólio e abocanhar uma parte dos jogadores
              que não curtem tanto MOBA, ao mesmo tempo que atraindo a
              curiosidade de sua base de fãs. O resultado disso foi o colorido
              jogo de tiro com partidas 5x5, no qual cada jogador escolhe um
              “Agente" e deve conquistar objetivos para vencer a equipe inimiga.
              Tem curiosidade em conhecer o Valorant da Riot Games, mas não quer
              perder tempo com um jogo que talvez não valha a pena?
            </p>
          </div>
        </div>
      </section>
      <Separator>O que é Valorant? </Separator>
      <section>
        <div className={styles.containerImage2}>
          <img src={thumb2} alt="" draggable="false" />
        </div>
        <div className={styles.description2}>
          <p>
            Lançado em 2020, Valorant é um jogo de tiro online e multiplayer no
            qual dois grupos com cinco jogadores se enfrentam nos diversos mapas
            de Valorant, inspirados em locais do mundo real. Dependendo do mapa
            disputado, cada lado da disputa deverá alcançar um objetivo
            determinado ou impedir o outro lado de conseguir conquistar essa
            meta.
          </p>
          <p>
            Lembra de Counter-Strike? Aqui a jogabilidade é bem parecida, tanto
            na busca pelos objetivos quanto em alguns detalhes, como a
            impossibilidade de reviver caso seja abatido. Quando isso acontece,
            você deverá esperar a rodada acabar, o que acontece quando um grupo
            alcança um objetivo ou elimina o seu esquadrão, para poder voltar a
            jogar.
          </p>
          <p>
            Uma diferença crucial entre Valorant e as diferentes versões de
            Counter-Strike é que os Agentes, os personagens do game, possuem
            habilidades únicas que podem ser ativadas em meio a partida. Essas
            habilidades podem ser usadas para melhorar o ataque, encontrar
            inimigos escondidos ou dar suporte aos seus companheiros de equipe,
            dependendo do personagem que escolheu.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
