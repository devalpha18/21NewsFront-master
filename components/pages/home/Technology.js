import React, { useState, useEffect} from 'react';
import Titlebar from '../../shared/Titlebar';
import TipAds from '../../shared/TipAds';
import styles from '../../../styles/components/pages/home/Shared.module.scss';
import DataSource from '../../shared/DataSource';
import HomeNewsCat from '../../shared/HomeNewsCat';
import Spinner from '../../shared/Spinner';
import { random } from '../../shared/SharedAPI';

const dataSource = new DataSource();

const initialState = {
  avatar: '',
  tag: '',
  title: '',
  description: '',
  hasRun: false,
  news: [],
  titlebar: {
    title: 'Technology',
    tags: [
      { name: 'INNOVATIONS', link: '/' },
      { name: 'HEALTH', link: '/' },
      { name: 'SCIENCE', link: '/' }
    ],
    more: true,
    link: '/technology',
  }
}

const Technology = () =>  {
  const [state, setData] = useState(initialState);
  const [news, setNews] = useState([]);
  const [done, setDone] = useState(false);
  const [ads, setAds] = useState([]);
  const [adRandomInt, setAdRandomInt] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  const fetchTechnologyNews = async () => {
    let data = state.titlebar.title;
    await dataSource.fetchNews(data).then(res => {
      setNews(res)
      setTimeout(() =>  setDone(true), 3000);
    }).catch(error => { console.log("Exception in fetching tech news in Technology component", error) });
    
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
    fetchTechnologyNews();
    getAds();
  }, []);
  
  return (
    <>
    <div className={styles.container}>
    <div className={styles.left}>
    <Titlebar {...state.titlebar} />
    { done ?
      <HomeNewsCat news={news} hasRun={done} newsCat={state.titlebar.title}/>
      : <Spinner/>
    }
    </div>
    <div className={styles.right}>
          {
              doneLoading ? 
              ads.map((item, i) => {
                if (i == adRandomInt)
                  return <TipAds link="/" avatar={item.ad_x['seo_url']} />
                if (i == adRandomInt-1)
                  return <TipAds link="/" avatar={item.ad_x['seo_url']} />
         
              }) : <Spinner/>
            }
    </div>
    </div>
    </>
    )
  }
  
  export default Technology;