import React from "react";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

export default function Section1() {
  return (
    <section id="section1">
      <Heading level="1">Section1</Heading>
      <Text size="medium" weight="bold">
        Medium size bold text
      </Text>

      <Text>Default size text</Text>

      <Text size="small" weight="light">
        Small size light text
      </Text>
    </section>
  );
}
