import React from 'react';
import styles from '../../../styles/components/pages/details/MenuItem.module.scss';

const MenuItem = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <img src="/imgs/icons/dot.svg" />
        {title}
      </p>
      <ul>
        {data.map(item => <li><img src="/imgs/icons/left.svg" /><span>{item}</span></li>)}
      </ul>
    </div>
  )
}

export default MenuItem;