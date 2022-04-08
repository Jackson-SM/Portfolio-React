import styled from 'styled-components';

export const Button = styled.a`
  align-self: start;
  padding: 12px 60px;
  border-radius: 3px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  margin-top: 35px;
  text-decoration: none;

  transition: all ease 200ms;

  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: white;
  }

  @media(max-width: 900px){
    align-self: center;
  }
`;