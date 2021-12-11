import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import Titlebar from '../../shared/Titlebar';
import styles from '../../../styles/components/pages/home/Shared.module.scss';
import DataSource from '../../shared/DataSource';
import HomeNewsCat from '../../shared/HomeNewsCat';
import SideTipAd from '../../shared/SideTipAd';
import TipAds from '../../shared/TipAds';
import Spinner from '../../shared/Spinner';
import { random } from '../../shared/SharedAPI';

const dataSource = new DataSource();

const initialState = {

  avatar: '',
  tag: '',
  title: '',
  description: '',
  hasRun: false,
  gotAds: false,
  ads: [],
  titlebar: {
    title: 'Travel',
    tags: [
      { name: 'TOURISM', link: '/' },
      { name: 'PEOPLE', link: '/' },
      { name: 'FOOD', link: '/' }
    ],
    more: true
  }

}

const Travel =  () =>  {

  const [state, setData] = useState(initialState);
  const [news, setNews] = useState([]);
  const [done, setDone] = useState(false);
  const [ads, setAds] = useState([]);
  const [adRandomInt, setAdRandomInt] = useState();
  const [doneLoading, setDoneLoading] = useState(false);

  const fetchTravelNews = async () => {
    let data = state.titlebar.title;
    await dataSource.fetchNews(data).then(res => {
      setNews(res)
      setTimeout(() =>  setDone(true), 3000);
    }).catch(error => { console.log("Exception in fetching travel news in Travel component", error) });

  }

  const getAds = async() => {
    let category = 'sidebar';
    await dataSource.fetchAdsByCategory(category).then(res => {
      setAds(res.data);
      if(res.count){
        const random_num = random(res.count);
        setAdRandomInt(random_num);
      }
      setTimeout(() =>  setDoneLoading(true), 3000);
      }).catch(error => { console.log("Exception in fetching adverts in Main component", error) });
   }
  

  useEffect(async () => {
    fetchTravelNews();
    getAds();
  }, []);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.left}>
            <Titlebar {...state.titlebar} />
            { done ?
                <HomeNewsCat news={news} hasRun={done} newsCat={state.titlebar.title} />
                : <Spinner/>
            }
          </div>


          <div className={`${styles.right} ${styles.hidden}`}>
          {
              doneLoading ? 
              ads.map((item, i) => {
                if (i == adRandomInt)
                  return <TipAds link="/" avatar={item.ad_x['seo_url']} />
                if (i == adRandomInt-1)
                  return <TipAds link="/" avatar={item.ad_x['seo_url']} />
         
              }) : <Spinner/>
            }
            {/* {state.gotAds ? (
                < SideTipAd gotAds={state.gotAds} ads={state.ads} adIndex={0} imgWidth={300} imgHeight={330}/>
            ) : <Spinner/>
            } */}
            <div className={styles.createBusinessCard}>
              <p>List your business on</p>
              <p className={styles.title}>Africa One for free</p>
              <p className={styles.link}>
                <Link href="/">Click here to create your business listing now</Link>
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default Travel;
