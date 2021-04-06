import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import Header from './Header';
import Text from './Text';
import * as styles from '../styles/components.module.css';

const HomeContainer = () => {
  const lorem = new LoremIpsum();
  const paragraph1 = lorem.generateWords(120);
  const paragraph2 = lorem.generateWords(150);
  return (
    <div className={styles.container}>
      <Header text="Welcome to our page" />
      <Text content={paragraph1} />
      <Text content={paragraph2} />
    </div>
  );
};

export default HomeContainer;
