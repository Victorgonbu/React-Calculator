import React from 'react';
import Navbar from './Navbar';
import Text from './Text';

const Quote = () => {
  const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul ThurstonHomeCalculatorQuote';
  return (
    <>
      <Navbar val="Quote" />
      <Text content={quote} />
    </>
  );
};

export default Quote;
