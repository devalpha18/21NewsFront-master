import React from 'react';
import styles from '../../styles/components/shared/AfricaOneCard.module.scss';

const AfricaOneCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Africa One Rep.</p>
      <p className={styles.description}>
        We are looking for representatives across the continent. Talk to us if interested.
        <br />
        Email us at join@africaone.com
      </p>
    </div>
  )
}

export default AfricaOneCard;