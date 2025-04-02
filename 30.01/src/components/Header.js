import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Личный Блог</h1>
      <p>Добро пожаловать на мою страницу. Тут особо ничего нету, не придумал ну ладно.</p>
    </HeaderContainer>
  );
};

export default Header;
