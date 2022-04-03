import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const SectionContent = styled.section`
  display: flex;
  padding: 20px;
  gap: 5rem;
  align-items: center;
  justify-content: center;

  height: 100%;

  @media(max-width: 900px){
    flex-direction: column;
    height: auto;
  }
`;

export const Illustration = styled.div`
  height: 450px;
  width: 450px;
  flex: none;

  background: url('/initial.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media(max-width: 550px) {
    height: 350px;
    width: 400px;
  }
`;

export const ContainerApresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(max-width: 900px){
    align-items: center;
  }

  h1 {
    font-size: 45px;
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    gap: 10px;

    @media(max-width: 900px){
      font-size: 35px;
    }
  }

  h2 {
    font-size: 20px;
    color: ${props => props.theme.colors.secundary};

    @media(max-width: 900px){
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.secundary};

    @media(max-width: 900px) {
      font-size: 12px;
    }
  }
`;