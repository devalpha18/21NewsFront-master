import React from 'react';
import styles from '../../styles/components/shared/TipNewsCard.module.scss';

const TipNewsCard = ({
  title,
  children
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          {title}
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </>
  )
}

export default TipNewsCard;