import React from 'react';
import styles from '../../../styles/components/pages/home/FullSearchBar.module.scss';

const FullSearchBar = () => {
  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder="Search Africaone…" />
        <button>
          Search
           <img src="imgs/icons/arrow-right.svg" alt="" />
        </button>
      </div>
    </>
  )
}

export default FullSearchBar;