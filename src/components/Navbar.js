import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../styles/navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar} data-testid="navbar">
    <div className={styles.brand}>Math Magicians</div>
    <div className={styles.navLinks}>

      <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
      <NavLink to="/calculator" className={styles.link} activeClassName={styles.active}>Calculator</NavLink>
      <NavLink to="/quote" className={styles.link} activeClassName={styles.active}>Quote</NavLink>

    </div>
  </nav>

);

export default Navbar;
