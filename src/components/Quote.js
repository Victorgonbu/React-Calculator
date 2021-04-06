import React from 'react';
import Navbar from './Navbar';
import Text from './Text';
import * as styles from '../styles/components.module.css';

const Quote = () => {
  const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul';
  return (
    <>
      <Navbar val="Quote" />
      <div className={`${styles.container} ${styles.quote}`}>
        <Text content={quote} />
      </div>
    </>
  );
};

export default Quote;
