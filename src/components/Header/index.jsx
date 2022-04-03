import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { BsFillSunFill, BsFillMoonFill, BsPersonFill } from 'react-icons/bs';
import { AiFillHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';

import Logo from '../Logo';

import { Container, ButtonTheme, ListItem, ItemContainer, LinkItem } from './styles';

export default function Header({ toggleTheme }) {

  const { title, colors } = useContext(ThemeContext);

  const iconLength = 23;

  return (
    <Container>
      <Logo />
      <ListItem>
        <ItemContainer><LinkItem href='/'><AiFillHome size={iconLength} />Home</LinkItem></ItemContainer>
        <ItemContainer><LinkItem href='/category'><MdCategory size={iconLength} />Category</LinkItem></ItemContainer>
        <ItemContainer><LinkItem href='/projects'><AiOutlineUnorderedList size={iconLength} />Projects</LinkItem></ItemContainer>
        <ItemContainer><LinkItem href='/about-me'><BsPersonFill size={iconLength} />About Me</LinkItem></ItemContainer>
      </ListItem>
      <ButtonTheme onClick={toggleTheme}>{title === 'dark' ? <BsFillSunFill size={20}/> : <BsFillMoonFill size={18} />}{title === 'dark' ? "Light" : "Dark"}</ButtonTheme>
    </Container>
  );
}