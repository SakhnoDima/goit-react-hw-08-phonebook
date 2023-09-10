import React from 'react';
import { Section, StyledLink, Text, Title } from './Home.styles';

const Home = () => {
  return (
    <Section>
      <Title>Phonebook</Title>
      <Text>Welcome to your private phonebook application</Text>
      <StyledLink to="/contacts">Try it!</StyledLink>
    </Section>
  );
};

export default Home;
