import React from 'react';
import styles from './Polaroid.module.css';

export default ({ src, caption, marginTop }) => (
  <figure className={styles.polaroid}>
    <div className={styles.imgContainer}>
      <img
        src={src}
        alt={caption}
        title={caption}
        style={{ marginTop: marginTop || 0 }}
      />
    </div>
    <figcaption>{caption}</figcaption>
  </figure>
);

export const Polaroids = ({ children }) => (
  <div className={styles.polaroids}>{children}</div>
);
