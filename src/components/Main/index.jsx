import React from 'react';

import { MainComponent } from './styles';
import SectionInitial from '../SectionInitial';
import SectionRepository from '../SectionRepository';
import SectionInfo from '../SectionInfo';

export default function Main(){
  return (
    <MainComponent>
      <SectionInitial />
      <SectionInfo />
      <SectionRepository />
    </MainComponent>
  );
}