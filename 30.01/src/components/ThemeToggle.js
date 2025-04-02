import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme.background === '#fff' ? '#f1f1f1' : '#444')};
  }
`;

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {document.body.style.backgroundColor === 'rgb(51, 51, 51)' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </ToggleButton>
  );
};

export default ThemeToggle;
