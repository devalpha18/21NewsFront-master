import React from 'react';
import styles from '../../styles/components/layouts/Mail.module.scss';

export const Mail = () => {
  return (
    <div className={styles.container}>
      {/* <img className={styles.img} src="imgs/icons/mail-read.svg" alt="" /> */}
      <div>
        <p className={styles.title}>AfricaOne</p>
        <p className={styles.mail}>Mail</p>
      </div>
    </div>
  );
}