import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
`;

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 150, friction: 25 },
  });

  return (
    <animated.div style={props}>
      <AboutContainer>
        <h2>Обо мне</h2>
        <p>
          Салам алейкум родным блатным обычным необычным. Я короче че могу сказать люблю играть как в пк игры так и в шахматы шашки, занимаюсь в спорт зале больше года. Конец. 
        </p>
      </AboutContainer>
    </animated.div>
  );
};

export default About;
