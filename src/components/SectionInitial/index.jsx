import React, { useContext, useEffect } from 'react';
import ButtonMore from '../ButtonMore';

import { SectionContent, IllustrationAvatar, ContainerApresentation } from './styles';

import { ApiGithubContext } from '../../contexts/apiGithub';

export default function SectionInitial() {

  const { userGithub } = useContext(ApiGithubContext);

  return (
    <SectionContent>
      <IllustrationAvatar avatar={userGithub.avatar_url}>
      </IllustrationAvatar>
      <ContainerApresentation>
        <h1>{userGithub.name}</h1>
        <h2>{userGithub.bio}</h2>
        <p>Meu objetivo é me inserir na profissão de programador<br></br> e adquirir mais conhecimento, construindo um<br></br> bom ambiente para trabalhos em equipe.</p>
        <ButtonMore></ButtonMore>
      </ContainerApresentation>
    </SectionContent>
  );
}