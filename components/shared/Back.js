import React from 'react';
import Link from 'next/link';
import Advertisement from '../shared/Advertisement';
import styles from '../../styles/components/shared/Back.module.scss';

const Back = ({ link, index }) => {
  return (
    <div className={styles.container}>
      {/* <img classNam={styles.ads} src="/imgs/ads-back.png" /> */}
      {/* <Advertisement index={index} imgWidth={728} imgHeight={90} showAdText={false}/> */}
      <Link href={link}>
        <span className={styles.link}>
          <img src="/imgs/icons/back.svg" />
          Back
        </span>
      </Link>
    </div>
  );
};

export default Back;