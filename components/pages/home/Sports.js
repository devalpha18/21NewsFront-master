import React, { useState, useEffect} from 'react';
import Titlebar from '../../shared/Titlebar';
import TipNewsCard from '../../shared/TipNewsCard';
import BusinessItem from '../../../components/shared/BusinessItem';
import styles from '../../../styles/components/pages/home/Shared.module.scss';
import DataSource from '../../shared/DataSource';
import HomeNewsCat from '../../shared/HomeNewsCat';
import Spinner from '../../shared/Spinner';


const dataSource = new DataSource();

const initialState = {
  avatar: '',
  tag: '',
  title: '',
  description: '',
  africaoneReview: [],
  titlebar: {
    title: 'Sports',
    tags: [
      { name: 'FOOTBALL', link: '/' },
      { name: 'RUGBY', link: '/' },
      { name: 'MOTORSPORT', link: '/' }
    ],
    more: true,
    link: '/sports',
  },


  businessItems: [
    {
      avatar: 'imgs/businesses/1.png',
      title: 'Luwombo Restaurant',
      rate: 4.5,
      point: 14,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
    {
      avatar: 'imgs/businesses/2.png',
      title: '2k Restaurant',
      rate: 4.5,
      point: 61,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
    {
      avatar: 'imgs/businesses/3.png',
      title: 'Uhuru Restaurant',
      rate: 4.5,
      point: 34,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
    {
      avatar: 'imgs/businesses/4.png',
      title: 'The Food Hub',
      rate: 4.5,
      point: 54,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
  ]
}

const Sports = () => {

  const [state, setData] = useState(initialState);
  const [news, setNews] = useState([]);
  const [done, setDone] = useState(false);
  
  const fetchSportsNews = async () => {
    var data = state.titlebar.title;
    await dataSource.fetchNews(data).then(res => {
      setNews(res);
      setTimeout(() =>  setDone(true), 3000);
    }).catch(error => { console.log("Exception in fetching sports news in Sports component", error) });

  }


  const fetchTopBusinessesNear = async () => {
    var data = { category: state.titlebar.title }
    await dataSource.fetchTopBusinessesNear(data).then(res => {
      let respData = res.data;
      setData({
        ...state,
        africaoneReview: respData,
      });
    }).catch(error => { console.log("Exception in fetching top near businesses in Sports component ", error) });
  }

  useEffect(async () => {
    fetchSportsNews();
    fetchTopBusinessesNear();
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
            <TipNewsCard title="Top businesses near you">
              {
                state.africaoneReview.map((item, i) => {
                  if (i < 4)
                    return  <BusinessItem {...item} business_image_url={item.business_logo.read_path} address={item.full_address}
                              imgWidth={80} imgWeight={80} direction="row"/>
                })
              }
            </TipNewsCard>
            <a className={"text-primary"} href="https://africaone.biz/login">
              Click here to add your business now
              </a>
          </div>
        </div>
      </>
    )
  }

export default Sports;