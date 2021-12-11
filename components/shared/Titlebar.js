import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/shared/Titlebar.module.scss';

const Titlebar = ({
  title,
  tags,
  more = false,
  hide = false,
  link = ''
}) => {
  return (
    <>
      <div className={`${styles.titlebar} ${styles.flex} ${styles.justifyBetween}`}>
        <div className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter} ${!more && styles.wFull}`}>
          <span className={styles.title}>{title}</span>
          <ul>
            {tags.map((item, index) => <li key={index}><Link href={item.link}>{item.name}</Link></li>)}
          </ul>
        </div>
        {more && <span className={`${styles.more} ${styles.flexEnd} ${hide ? styles.hide : ``}`}>
          <Link href={link}>VIEW MORE</Link>
          </span>}
      </div>
    </>
  )
}

export default Titlebar;