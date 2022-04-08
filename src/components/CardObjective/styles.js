import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Card = styled.div`
  height: 150px;
  width: 200px;
  background: ${props => props.theme.title === 'dark' ? lighten(0.03,props.theme.colors.background) : darken(0.1,"white")};
  border-radius: 3px;
  margin: 0 auto;
  transition: all ease 200ms;
  
  &:hover {
    svg {
    color: ${props => props.changeColor};
    }

    h1 {
      color: ${props => props.changeColor};
    }
    box-shadow: 0 0 20px 1px ${props=>props.changeColor};
  }

  svg,h1 {
    transition: all ease 200ms;
    color: #a3a3a3;
  }
  
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center
`;

export const Title = styled.h1`
  font-size: 20px;
`;