import React from 'react';
//import PropTypes from 'prop-types';
import Navbar from './Navbar';
import HeroText from './HeroText';

const Home = () => {
    return(
        <div className='home'>
            <Navbar />
            <HeroText />
        </div>
    );
}

export default Home;
