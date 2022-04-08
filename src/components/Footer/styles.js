import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Foot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  background: ${props => props.theme.title === 'dark' ? lighten(0.05,props.theme.colors.background) : darken(0.15,"white")};
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

export const GroupLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-size: 22px;
    color: ${props => props.theme.colors.secundary};
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.secundary};
  transition: all ease 200ms;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
`;

export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContact = styled.input`
  font-size: 14px;
  background: none;
  border: none;
  outline: none;
  border: 2px solid ${props => props.theme.colors.text};
  padding: 7px 4px;
  width: 300px;
  color: ${props => props.theme.colors.secundary};
  border-radius: 3px;

`;

export const LabelContact = styled.label`
  padding: 5px;
`;

export const ContactBtn = styled.button`
  padding: 7px 20px;
  border: none;
  background: none;
  outline: none;

  border: 2px solid ${props => props.theme.colors.text};
  border-radius: 3px;
  color: ${props => props.theme.colors.secundary};

  cursor: pointer;

  display: flex;
  gap: 5px;

  transition: all ease 200ms;

  &:hover {
    color: ${props => props.theme.colors.text};
    background: ${props => lighten(0.08,props.theme.colors.background)};
  }
`;