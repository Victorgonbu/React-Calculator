import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../styles/navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className="brand">Math Magicians</div>
    <div className={styles.navLinks}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/calculator" className={styles.link}>Calculator</Link>
      <Link to="/quote" className={styles.link}>Quote</Link>
    </div>
  </nav>
);

export default Navbar;
