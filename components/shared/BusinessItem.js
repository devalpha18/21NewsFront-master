import React, { Component } from 'react';
import Star from './Star';
import styles from '../../styles/components/shared/BusinessItem.module.scss';
import { getImageSrc, truncate } from '../shared/SharedAPI';

const BusinessItem = (props) => {
  return (
    <>
      <div className={`${styles.container} ${props.direction === 'column' && styles.flexColumn}`}>
        <div className={`${styles.avatar} ${props.direction === 'column' && styles.noMarginRight}`}>
          <img src={getImageSrc(props.business_logo.read_path, props.imgWidth, props.imgHeight)} className={styles.businessImg}/>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{props.business_name}</p>
          <div className={styles.rate}>
            <Star rate={props.avg_rating ? props.avg_rating : 5 } point={props.avg_rating ? props.avg_rating : 5 } />
          </div>
          <p className={styles.description}>{props.address}</p>
          <p className={styles.description}>{truncate(props.description, 26)}</p>
          <p className={styles.tag}>{props.tag}</p>
        </div>
      </div>
    </>
  )
}

export default BusinessItem;