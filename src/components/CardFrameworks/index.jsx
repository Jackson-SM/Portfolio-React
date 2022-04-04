import React, { useContext } from 'react';

import { Card, ContentCard, ContentImage, ContentTitle, Title, TitleMini } from './styles';

import { AiFillProject } from 'react-icons/ai';

import { ThemeContext } from 'styled-components';
import ButtonMore from '../ButtonMore';

export default function CardFrameworks({titleCard, titleMini,url}) {

  const { title, colors } = useContext(ThemeContext);

  return (
      <Card href={url} target="_blank">
        <ContentCard>
          <ContentImage>
            <AiFillProject size={60} color={colors.text}/>
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