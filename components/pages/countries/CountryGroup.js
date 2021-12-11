import React from 'react';
import styles from '../../../styles/components/pages/countries/CountryGroup.module.scss';
import Country from './Country';

const CountryGroup = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.group}>
        {
          data.map((item, index) => <Country key={index} country_id={item._id} data={item} avatar={item.country_flag_readPath} name={item.country_name} />)
        }
      </div>
    </div>
  )
}

export default CountryGroup;