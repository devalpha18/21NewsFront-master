import React from 'react';
import styles from '../../../styles/components/pages/countries/Searchbar.module.scss';

const Searchbar = () => {
  return (
    <div className={styles.container}>
      <input type='text' placeholder="Search for a country here…" />
      <button>
        Search
        <img src="/imgs/icons/arrow-right.svg" />
      </button>
    </div>
  )
}

export default Searchbar;