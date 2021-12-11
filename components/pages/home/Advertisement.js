import React, { useState, africaoneReview} from 'react';
import styles from '../../styles/components/shared/Advertisement.module.scss';
import DataSource from '../shared/DataSource';
import Spinner from '../shared/Spinner';
import { getImageSrc } from '../shared/SharedAPI';

const dataSource = new DataSource();
const initialState = {
  hasRun: false,
  ads: [],
  titlebar: {
    title: 'Advertisement',
    tags: [
      { name: 'SHOWBIZ', link: '/' },
      { name: 'DRAMA', link: '/' },
      { name: 'MUSIC', link: '/' }
    ],
    more: true
  }
}

const Advertisement = (props) => {

  const [ads, setAds] = useState([]);
  const [done, setDone] = useState(false);

  const getAds = async() => {
    let category = props.category ? props.category : 'main';
    await dataSource.fetchAdsByCategory(category).then(res => {
      console.log("Ads information", res.data);
      setAds(res.data);
      setTimeout(() =>  setDone(true), 3000);
      }).catch(error => { console.log("Exception in fetching adverts in Main component", error) });
   }

   useEffect(() => {
    getAds();
  }, []);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.real}>
            {!done ? 
              ads.map((item, i) => {
                if (i == props.index)
                  return <div key={i}>   
                  <p className={styles.title}>advertisement</p>
                   <img src={item.ad_x.seo_url}/>
                  </div>
              }) : <Spinner/>
            }
          </div>
        </div>
      </>
    )
  }


export default Advertisement;