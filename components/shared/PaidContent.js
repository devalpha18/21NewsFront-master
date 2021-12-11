import React from 'react';
import Image from 'next/image'
import styles from '../../styles/components/shared/PaidContent.module.scss';

const PaidContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titlebar}>
        <span>Paid Content</span>
        <img src="/imgs/smartfeed.png" />
      </div>

      <div className={styles.body}>
        <img src="/imgs/iframe-ads.png"/> 
      </div>
    </div>
  )
};

export default PaidContent;