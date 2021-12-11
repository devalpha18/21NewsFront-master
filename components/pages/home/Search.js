import React, { useState } from 'react';
import FullSearchBar from './FullSearchBar';
import useOnclickOutside from "react-cool-onclickoutside";
import styles from '../../../styles/components/pages/home/Search.module.scss';

const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const ref = useOnclickOutside(() => {
    closeMenu();
  });

  return (
    <>
      <div ref={ref}>
        <button onClick={handleBtnClick}><img src="imgs/icons/search.svg" alt="" /></button>
        {
          openMenu && (
            <div className={styles.container}>
              <div className={styles.search}>
                <FullSearchBar />
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default MegaMenu;