import React from 'react';

import { MainComponent } from './styles';
import SectionInitial from '../SectionInitial';
import SectionRepository from '../SectionRepository';
import SectionLanguages from '../SectionLanguages';

export default function Main(){
  return (
    <MainComponent>
      <SectionInitial />
      <SectionLanguages />
      <SectionRepository />
    </MainComponent>
  );
}