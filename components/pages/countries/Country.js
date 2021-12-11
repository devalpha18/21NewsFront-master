import React from 'react';
import styles from '../../../styles/components/pages/countries/Country.module.scss';
import {getImageSrc} from '../../shared/SharedAPI';
import { useRouter } from 'next/router'

const Country = ({ country_id, avatar, name }) => {
  const router = useRouter();

  const readDetails = (id) => {
        router.push({pathname:"/countries/details", query:{ id: id, name: name }});
  }
  
  return (
    <div className={styles.container}>
      <a onClick={() => readDetails(country_id)}>
      <img src={getImageSrc(avatar, 44, 27)} />
      <span>{name}</span>
      </a>
    </div>
  )
}

export default Country;