import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/components.module.css';

const Header = props => {
  const { text } = props;

  return <h1 className={styles.header}>{text}</h1>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
