import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';

const lightTheme = {
  background: '#fff',
  text: '#000',
  toggleBorder: '#fff',
};

const darkTheme = {
  background: '#333',
  text: '#fff',
  toggleBorder: '#6B8096',
};

// Глобальные стили
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.3s ease';
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <ThemeToggle toggleTheme={toggleTheme} />
        <About />
      </div>
    </ThemeProvider>
  );
};

export default App;
