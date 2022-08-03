import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink className={styles.btn} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
