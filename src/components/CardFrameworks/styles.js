import styled from 'styled-components';

import { lighten } from 'polished';

export const Card = styled.div`
  height: auto;
  width: 280px;

  margin: 0 auto;

  background: ${props => lighten(0.04,props.theme.colors.background)};
  padding: 20px;

  border-radius: 15px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all ease 200ms;

  box-shadow: 0 0 20px 1px rgba(40,40,40,0.4);

  gap: 1rem;

  &:hover {
    transform: scale(1.05);

    h1 {
      color: ${props => props.theme.colors.text};
    }
  }
`;

export const ContentImage = styled.div`
  position: relative;
`;


export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex: 1;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${props => lighten(0.5,props.theme.colors.primary)};
  transition: all ease 200ms;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleMini = styled.span`
  color: ${props => lighten(0.3,props.theme.colors.primary)};
  font-size: 12px;
`;