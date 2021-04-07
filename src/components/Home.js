import React from 'react';

import { LoremIpsum } from 'lorem-ipsum';
import Navbar from './Navbar';

import Header from './Header';
import Text from './Text';

const Home = () => {
  const lorem = new LoremIpsum();
  const paragraph1 = lorem.generateWords(120);
  const paragraph2 = lorem.generateWords(150);
  return (
    <div className="home">
      <Navbar />

      <Header text="Welcome to our page" />
      <Text content={paragraph1} />
      <Text content={paragraph2} />

    </div>
  );
};

export default Home;
