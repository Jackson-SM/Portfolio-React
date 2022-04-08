import React from 'react';

import { Section, ContainFrontBack, Container, TitleObjective } from './styles';

import { TitleSection, Title, Decription } from '../SectionRepository/styles';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiPhp } from 'react-icons/di';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiTypescript,SiPostgresql,SiMysql } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';

import CardObjective from '../CardObjective';

export default function SectionLanguages() {
  return (
    <Section>
      <TitleSection>
        <Title>Base de conhecimento</Title>
        <Decription>Meu objetivo é alcançar o maior entendimento possível de linguagens e frameworks.</Decription>
      </TitleSection>
      <Container>
        
      <TitleObjective>Front-End</TitleObjective>
        <ContainFrontBack>
          <CardObjective titleCard="HTML" element={<AiFillHtml5 size={70} />} changeColor="#ff913c" />
          <CardObjective titleCard="CSS" element={<DiCss3 size={70} />} changeColor="#00aaff" />
          <CardObjective titleCard="JavaScript" element={<DiJavascript1 size={70} />} changeColor="#d6c530" />
          <CardObjective titleCard="React JS" element={<FaReact size={70} />} changeColor="#3dc8ff" />
          <CardObjective titleCard="Bootstrap" element={<BsFillBootstrapFill size={70} />} changeColor="#9070db" />
        </ContainFrontBack>
        
        <TitleObjective>Back-End</TitleObjective>
        <ContainFrontBack>
          <CardObjective titleCard="PHP" element={<DiPhp size={70} />} changeColor="#8f5faa" />
          <CardObjective titleCard="Node.Js" element={<FaNode size={80} />} changeColor="#3d9147" />
          <CardObjective titleCard="TypeScript" element={<SiTypescript size={70} />} changeColor="#42b0db" />
          <CardObjective titleCard="PostgreSQL" element={<SiPostgresql size={70} />} changeColor="#286f8a" />
          <CardObjective titleCard="MySQL" element={<SiMysql size={70} />} changeColor="#c6ab91" />
        </ContainFrontBack>

      </Container>
    </Section>
  );
}