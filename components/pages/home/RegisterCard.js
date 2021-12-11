import React from 'react';
import styles from '../../../styles/components/pages/home/RegisterCard.module.scss';

const RegisterCard = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="/imgs/register-card.png" alt="" />
        <div className={styles.form}>
          <p className={styles.title}>Africa Business platform</p>
          <p className={styles.description}>Get a free listing today</p>
          <button>REGISTER NOW</button>
        </div>
      </div>
    </>
  )
}

export default RegisterCard;