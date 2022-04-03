import styled from 'styled-components';

export const Button = styled.button`
  align-self: start;
  padding: 15px 70px;
  border-radius: 3px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.text};
  margin-top: 35px;

  transition: all ease 200ms;

  &:hover {
    background: ${props => props.theme.colors.text};
    color: white;
  }

  @media(max-width: 900px){
    align-self: center;
  }
`;