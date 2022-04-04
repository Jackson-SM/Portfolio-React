import React from 'react';

import { Button } from './styles';

export default function ButtonMore({link}){
  return (
    <Button href={link} target="_blank">View More</Button>
  );
}