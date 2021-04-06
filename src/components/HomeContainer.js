import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import Header from './Header';
import Text from './Text';

const HomeContainer = () => {
  const lorem = new LoremIpsum();
  const homeParagraph = lorem.generateWords(200);
  return (
    <div className="container">
      <Header text="Welcome to our page" />
      <Text content={homeParagraph} />
    </div>
  );
};

export default HomeContainer;
