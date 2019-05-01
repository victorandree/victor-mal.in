import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { FormattedMessage } from 'react-intl';

const Header = ({ menuItems }) => (
  <header className={styles.header}>
    <Link to="/" className={styles.homeLink}>
      <FormattedMessage id="title" />
    </Link>
    <nav className={styles.nav}>
      <ul>
        {menuItems.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
