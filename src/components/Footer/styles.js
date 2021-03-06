import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Foot = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 40px;

  background: ${props => props.theme.title === 'dark' ? lighten(0.05,props.theme.colors.background) : darken(0.15,"white")};
`;

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media(max-width:800px){
    flex-direction: column;
    align-items:center;
    gap: 4rem;
  }
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
  color: ${props => props.theme.colors.text};
  transition: all ease 200ms;

  font-size: 13px;

  &:hover {
    color: ${props => props.theme.colors.secundary};
  }
`;

export const Contact = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
`;

export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  overflow: hidden;
`;

export const InputContact = styled.input`
  font-size: 14px;
  border: none;
  outline: none;
  width: 400px;
  color: ${props => props.theme.colors.text};
  border-radius: 3px;
  padding: 12px;
  background: ${props => props.theme.colors.background};
`;

export const InputTextarea = styled.textarea`
  resize: none;
  width: 400px;
  outline: none;
  height:120px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const InviteFormContact = styled.button`
  outline: none;
  border: none;
  padding: 15px 50px;
  cursor: pointer;
  border-radius: 3px;
  background: ${props => props.theme.title === 'dark' ? lighten(0.1,props.theme.colors.background) : darken(0.25,"white")};
  color: ${props => props.theme.colors.text};

  width: 100%;

  transition: all ease 200ms;

  &:hover{
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.secundary};
  }
`;

export const TitleForm = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.text};
`;

export const InfoUser = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 40px;
`;

export const BtnSocial = styled.a`
  text-decoration: none;
  color: ${props => darken(0.1,props.theme.colors.text)};

  transition: all ease 200ms;

  &:hover {
    color: ${props => props.theme.colors.secundary};

    transform: scale(1.05);
  }
`;

export const TermsConditions = styled.span`
  color: ${props => props.theme.colors.secundary};
  font-size: 13px;
`;