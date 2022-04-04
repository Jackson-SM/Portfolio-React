import React, { useContext } from 'react';
import CardFrameworks from '../CardFrameworks';

import { Section, Container, TitleSection, Title, Decription } from './styles';

import { ThemeContext } from 'styled-components';
import { ApiGithubContext } from '../../contexts/apiGithub';

export default function SectionFrameworks(){
  
  const { title, colors } = useContext(ThemeContext);
  const { userGithub, repositories } = useContext(ApiGithubContext);
  const repo_list_black = ['Jackson-SM'];

  return (
    <Section>
      <TitleSection>
        <Title>Other projects directed by Pinnacle</Title>
        <Decription>projects in order to adapt to the practices of languages ​​and frameworks.</Decription>
      </TitleSection>
      <Container>
        {repositories.map(repo => {
          if(!repo_list_black.includes(repo.name)){
            return (
              <CardFrameworks titleCard={repo.name} titleMini="React Application" url={repo.html_url} />
            );
          }
        })}
      </Container>
    </Section>
  );
}