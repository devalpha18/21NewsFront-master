import React from 'react';
import styles from '../../styles/components/shared/Star.module.scss';

const Star = ({
  rate,
  point
}) => {

  const renderRate = () => {
    let html = '';
    for (let i = 0; i < Math.floor(rate / 1); i++) {
      html += '<img style="margin: 0 1.6px" src="imgs/icons/full-star.svg" />';
    }

    if (rate % 1 > 0) {
      html += '<img style="margin: 0 1.6px" src="imgs/icons/half-star.svg" />';
    }

    return html;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.rate} dangerouslySetInnerHTML={{ __html: renderRate() }}></div>
        <span>{point}</span>
      </div>
    </>
  )
}

export default Star;