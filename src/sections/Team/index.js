import React from "react";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

const members = [
  "Ângela Morais",
  "Catarina Lopes",
  "Fernando Mendes",
  "Francisco Sousa",
  "Helena Macedo",
  "Hugo Gonçalves",
  "Regina Sousa",
  "Sofia Sepúlveda",
];

const createMemberElement = member => <li>{member}</li>;

export default function Team() {
  return (
    <section id="team">
      <Heading level="3">$ users</Heading>
      <Text>
        Somos 4 programadores, 1 designer, 2 estudantes de biomédica e 1 de
        biológica.
        Procuramos diversidade e formas diferentes de pensar. Procuramos
        irreverência. Acreditamos que todos tem um papel relevante e igual
        dentro da equipa. Não somos diferentes, apenas temos perspetivas
        diferentes. Os nossos nomes, anarquicamente escritos:
        <ul>
          {members.sort(Intl.Collator().compare).map(createMemberElement)}
        </ul>
      </Text>
    </section>
  );
}
