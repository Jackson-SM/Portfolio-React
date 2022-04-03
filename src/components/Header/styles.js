import { transparentize, lighten, darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;

  background: ${props => darken(-0.04,props.theme.colors.background)};
  color: ${props => props.theme.colors.text};

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: background ease 200ms;
`;

export const ButtonTheme = styled.button`
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};

  border: 1px solid ${props => transparentize(0.5,props.theme.colors.text)};
  padding: 10px 30px;
  border-radius: 3px;
  font-size: 15px;
  
  display: flex;
  align-items: center;
  gap: 3px;
  
  transition: all ease 200ms;
  
  cursor: pointer;
  :hover {
    background: ${props => transparentize(0.8,props.theme.colors.text)};
  }
`;

export const ListItem = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  height: 100%;
`;

export const ItemContainer = styled.li`
  position: relative;
  height: 100%;
  z-index: 1;
  
  overflow: hidden;
  transition: all ease 100ms;

  ::before {
    content: '';

    position: absolute;

    width: 100%;
    height: 100%;
    z-index: -1;

    top: 100%;
    left: 0;

    background: ${props => props.theme.colors.text};

    transition: all ease 400ms;
  }
  :hover {
    background: ${props => lighten(0.01, props.theme.colors.background)};

    ::before {
      top: 96%;
    }
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-family: 'Montserrat';
  font-size: 13px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 4px;
`;