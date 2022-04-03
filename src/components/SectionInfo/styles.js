import styled from 'styled-components';
import { Title } from '../SectionFrameworks/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;
`;

export const ContainFrontBack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 10px;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleObjective = styled(Title)`
  align-self: center;
  padding: 30px;
  font-size: 30px;
`;