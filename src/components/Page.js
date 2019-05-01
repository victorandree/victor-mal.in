import React from 'react';
import styles from './Page.module.css';

export default ({ title, imageUrl, children }) => (
  <div className={styles.page}>
    {imageUrl && (
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} />
      </div>
    )}
    <div className={styles.main} role="main">
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);
