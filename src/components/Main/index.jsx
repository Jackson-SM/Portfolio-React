import React from 'react';

import { MainComponent } from './styles';
import SectionInitial from '../SectionInitial';
import SectionFrameworks from '../SectionFrameworks';
import SectionInfo from '../SectionInfo';

export default function Main(){
  return (
    <MainComponent>
      <SectionInitial />
      <SectionInfo />
      <SectionFrameworks />
    </MainComponent>
  );
}