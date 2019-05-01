import React from 'react';
import styles from './Page.module.css';

export default ({ title, imageUrl, children }) => (
  <div className={styles.page}>
    {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
    <div className={styles.main} role="main">
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);
