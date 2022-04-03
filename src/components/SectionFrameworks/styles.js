import styled from 'styled-components';

import { transparentize } from 'polished';

export const Section = styled.section`
  background: linear-gradient(to bottom, ${props => props.theme.colors.background},${props => transparentize(0.75,props.theme.colors.text)},${props => props.theme.colors.background});
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
  padding: 30px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: ${props => props.theme.colors.text};
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: ${props => props.theme.colors.secundary};
`;

export const Decription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.secundary};
`;