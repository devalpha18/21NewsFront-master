import React, {useState} from 'react';
import styles from '../styles/components/pages/home/Index.module.scss';
import Advertisement from '../components/shared/Advertisement';
import Main from '../components/pages/home/Main';
import Sports from '../components/pages/home/Sports';
import Entertainment from '../components/pages/home/Entertainment';
import Technology from '../components/pages/home/Technology';
import Travel from '../components/pages/home/Travel';
import Politics from '../components/pages/home/Politics';
import Business from '../components/pages/home/Business';
import Pictures from '../components/pages/home/Pictures';

const category = 'Main';

 const Index = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <Main />
          <Politics />
          <Business/>
         <Technology/>
          <Advertisement index={0} category={category} imgWidth={970} imgHeight={250} showAdText={true}/>
          <div className={styles.hidden}>
            <Sports />
            <Advertisement index={1} category={category} imgWidth={970} imgHeight={250} showAdText={true}/>
          </div>
          <Advertisement index={2} category={category} imgWidth={970} imgHeight={250} showAdText={true}/>
          <Pictures />
        </div>
      </div>
    </>
  )
}
export default Index;