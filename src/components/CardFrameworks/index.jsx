import React, { useContext } from 'react';

import { Card, ContentCard, ContentImage, ContentTitle, Title, TitleMini } from './styles';

import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoXing } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiNintendonetwork } from 'react-icons/si';
import { FiFilm } from 'react-icons/fi';

import { ThemeContext } from 'styled-components';
import ButtonMore from '../ButtonMore';

export default function CardFrameworks({titleCard, titleMini, element}) {

  const { title, colors } = useContext(ThemeContext);

  return (
      <Card>
        <ContentCard>
          <ContentImage>
            {element}
          </ContentImage>
          <ContentTitle>
            <Title>
              <TitleMini>{titleMini}</TitleMini>
              {titleCard} 
            </Title>
          </ContentTitle>
        </ContentCard>
      </Card>
  );
}