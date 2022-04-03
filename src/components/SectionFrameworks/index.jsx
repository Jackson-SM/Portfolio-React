import React, { useContext } from 'react';
import CardFrameworks from '../CardFrameworks';

import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoXing } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiNintendonetwork } from 'react-icons/si';
import { FiFilm } from 'react-icons/fi';

import { Section, Container, TitleSection, Title, Decription } from './styles';

import { ThemeContext } from 'styled-components';

export default function SectionFrameworks(){
  
  const { title, colors } = useContext(ThemeContext);
  const size = 60;

  return (
    <Section>
      <TitleSection>
        <Title>Other projects directed by Pinnacle</Title>
        <Decription>projects in order to adapt to the practices of languages ​​and frameworks.</Decription>
      </TitleSection>
      <Container>
        <CardFrameworks titleCard="Pinnacle" titleMini="React Application" element={<IoLogoXing size={size} color={colors.text} />} />
        <CardFrameworks titleCard="Network" titleMini="React Application with Php" element={<SiNintendonetwork size={size} color={colors.text} />} />
        <CardFrameworks titleCard="Devcine" titleMini="Application with Php of Streaming" element={<FiFilm size={size} color={colors.text} />} />
      </Container>
    </Section>
  );
}