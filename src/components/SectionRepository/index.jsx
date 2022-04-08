import React, { useContext } from 'react';
import CardRepository from '../CardRepository';

import { Section, Container, TitleSection, Title, Decription } from './styles';

import { ThemeContext } from 'styled-components';
import { ApiGithubContext } from '../../contexts/apiGithub';

export default function SectionRepository(){
  
  const { title, colors } = useContext(ThemeContext);
  const { userGithub, repositories } = useContext(ApiGithubContext);
  const repo_list_black = ['Jackson-SM'];

  return (
    <Section>
      <TitleSection>
        <Title>Projetos do github de {userGithub.name}</Title>
        <Decription>Projetos pessoais com o intuito de estudar e consolidar o conhecimento.</Decription>
      </TitleSection>
      <Container>
        {repositories.map(repo => {
          if(!repo_list_black.includes(repo.name)){
            return (
              <CardRepository repo={repo} key={repo.id}/>
            );
          }
        })}
      </Container>
    </Section>
  );
}