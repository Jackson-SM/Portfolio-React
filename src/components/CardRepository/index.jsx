import React, { useContext } from 'react';

import { Card, ContentCard, ContentImage, ContentTitle, Title, TitleMini } from './styles';

import { AiFillGithub } from 'react-icons/ai';

import { ThemeContext } from 'styled-components';
import ButtonMore from '../ButtonMore';

export default function CardReposity({repo}) {

  const { title, colors } = useContext(ThemeContext);

  return (
      <Card href={repo.html_url} target="_blank">
        <ContentCard>
          <ContentImage>
            <AiFillGithub size={60} color={colors.text}/>
          </ContentImage>
          <ContentTitle>
            <Title>
              <TitleMini>{`${repo.language} Application`}</TitleMini>
              {repo.name} 
            </Title>
          </ContentTitle>
        </ContentCard>
      </Card>
  );
}