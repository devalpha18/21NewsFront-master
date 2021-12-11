import React from 'react';
import styles from '../../styles/components/pages/home/Email.module.scss';

const Email = ({ email }) => {
  return (
    <>
      <div className={styles.container}>
        <img src="imgs/icons/mail-open.svg" alt="" />
        <span>
          Get a free AfricaOne email <br />
          {email}
        </span>
      </div>
    </>
  )
}

export default Email;