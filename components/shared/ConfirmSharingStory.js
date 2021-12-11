import React from 'react';
import styles from '../../styles/components/shared/ConfirmSharingStory.module.scss';

const ConfirmSharingStory = () => {
  return (
    <div className={styles.container}>
      <img src="imgs/person.png" alt="" />
      <div>
        <p className={styles.title}>Do you have a story that is worth sharing?</p>
        <p className={styles.description}>
          Please don’t hesitate to share it with us at 
            <span className="m-1">editorial@africaone.com</span> 
           If you wish to volunteer as an Africa One remote journalist, please let us know at volunteer@africaone.com
        </p>
      </div>
    </div>
  );
};

export default ConfirmSharingStory;