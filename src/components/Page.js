import React from 'react';
import styles from './Page.module.css';

export default ({ title, children }) => (
  <div className={styles.page}>
    <div className={styles.main} role="main">
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);
