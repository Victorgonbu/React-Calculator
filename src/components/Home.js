import React from 'react';
// import PropTypes from 'prop-types';
import Navbar from './Navbar';
// import HeroText from './HeroText';
import HomeContainer from './HomeContainer';

const Home = () => (
  <div className="home">
    <Navbar val="Home" />
    <HomeContainer />
  </div>
);

export default Home;
