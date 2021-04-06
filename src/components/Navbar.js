import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styles from '../styles/navbar.module.css';

const Navbar = props => {
  const { val } = props;
  return (
    <nav className={styles.navbar}>
      <div className="brand">Math Magicians</div>
      <div className={styles.navLinks}>
        <Link to="/" className={`${styles.link} ${val === 'Home' ? styles.active : null}`}>Home</Link>
        <Link to="/calculator" className={`${styles.link} ${val === 'Calculator' ? styles.active : null}`}>Calculator</Link>
        <Link to="/quote" className={`${styles.link} ${val === 'Quote' ? styles.active : null}`}>Quote</Link>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  val: 'chimbo',
};

Navbar.propTypes = {
  val: PropTypes.string,
};

export default Navbar;
