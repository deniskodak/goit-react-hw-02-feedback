import React from "react";
import { Section, H2 } from "./styled";

const SectionWithTitle = ({ title, children }) => (
  <Section>
    <H2>{title}</H2>
    {children}
  </Section>
);

export default SectionWithTitle;
