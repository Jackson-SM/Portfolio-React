import React, { useContext } from 'react';

import { Card, Title } from './styles';

import { ThemeContext } from 'styled-components';

export default function CardObjective({ titleCard, element, changeColor }) {

  const { title, colors } = useContext(ThemeContext);

  return (
    <Card title={title} changeColor={changeColor}>
      {element}
      <Title>{titleCard}</Title>
    </Card>
  );
}