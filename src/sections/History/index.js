import React from "react";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

export default function History() {
  return (
    <section id="history">
      <Heading level="3">$ history | tail -n 2</Heading>
      <Heading level="4">cat secret_santa.txt</Heading>
      <Text>
        &gt; O Secret Santa decorreu em Dezembro de 2017 com o objetivo de
        melhorar o Natal de crianças em situações económicas ou sociais
        difíceis, acolhidas por instituições. Em família ou num grupo de amigos,
        os participantes ofereceram uma prenda a uma criança que lhes foi
        atribuída de forma aleatória. Nós tratamos de fazer os “matches”
        acontecer e de entregar nas diversas instituições.
      </Text>

      <Heading level="4">cat tech_dayz.txt</Heading>
      <Text>
        &gt; Os nossos tech dayz são atividades periódicas que desenvolvemos em
        instituições de acolhimento. Até ao momento decorreram em 3 diferentes,
        procuramos trazer às crianças acolhidas tecnologia diferente: realidade
        virtual, hologramas, retrogames e o que nos ocorre no momento.
      </Text>
    </section>
  );
}
