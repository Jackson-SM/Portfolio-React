import React from 'react';
import ButtonMore from '../ButtonMore';

import { SectionContent, Illustration, ContainerApresentation } from './styles';
import { FaReact } from 'react-icons/fa';

export default function SectionInitial() {
  return (
    <SectionContent>
      <Illustration>
      </Illustration>
      <ContainerApresentation>
        <h1>Software Design React</h1>
        <h2>Project with a React pinned content purpose</h2>
        <p>Software made with a modern and current design for more user comfort with our interface.</p>
        <ButtonMore></ButtonMore>
      </ContainerApresentation>
    </SectionContent>
  );
}