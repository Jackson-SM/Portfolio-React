import React, { Fragment } from 'react';

import Home from './templates/Home';
import About from './templates/About';

import Header from './components/Header';


import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useSaveTheme from './utils/useSaveTheme';

import GlobalStyle from './styles/global';

function App() {

  const [theme,setTheme] = useSaveTheme('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
