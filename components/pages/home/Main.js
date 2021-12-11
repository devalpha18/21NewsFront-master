import React, { useState, useEffect} from 'react';
import BusinessItem from '../../shared/BusinessItem';
import NewsCard from '../../shared/NewsCard';
import TipAds from '../../shared/TipAds';
import TipNewsCard from '../../shared/TipNewsCard';
import Email from '../../shared/Email';
import NewsSlider from './NewsSlider';
import RegisterCard from './RegisterCard';
import Titlebar from '../../shared/Titlebar';
import styles from '../../../styles/components/pages/home/Main.module.scss';
import DataSource from '../../shared/DataSource';
import RestApi from '../../shared/ApiGateway';
import {truncate} from '../../shared/SharedAPI';
import { NEWS_API_URL, REVIEW_API_URL} from '../../../config/env';
import Spinner from '../../shared/Spinner';
import Spinner1 from '../../shared/Spinner1';


const dataSource = new DataSource();
const _apiGateway = new RestApi();

const newsCardWidth = 300;
const newsCardHeight = 180;

const initialState = {
  avatar: '',
  tag: '',
  title: '',
  description: '',
  hasRun: false,
  news: [],
  top_businesses: [],
  titlebar : {
    title: 'Trending',
    tags: [
      { name: 'SPORTS', link: '/sports' },
      { name: 'ENTERTAINMENT', link: '/entertainment' },
      { name: 'BUSINESS', link: '/business' },
      { name: 'SCIENCE & TECHNOLOGY', link: '/technology' }
    ],
    more: false
  }

}

const Main = () => {

  const [state, setData] = useState(initialState);
  const [news, setNews] = useState([]);
  const [done, setDone] = useState(false);

  const fetchTopBusinessesNear = async() => {
    const GET_TOP_BUSINESSES_URL = REVIEW_API_URL+"fetch/topbusiness";
    let category = state.titlebar.title;
    var data = { category: category }
  
     await _apiGateway.fetchDataByGet(GET_TOP_BUSINESSES_URL, data).then(res => {
       let respData = res.data;
      setData({
        ...state,
        top_businesses:respData,
       });
      }).catch(error => { console.log("Exception in fetching top near businesses in Main component", error) });
  
  }

  const fetchTrendingNews = async() =>{
    await dataSource.fetchTrendingNews().then(res => {
      let trending_news = res.data;
      setNews(trending_news);
      setTimeout(() =>  setDone(true), 3000);
      }).catch(error => { console.log("Exception in fetching trending news in Main component", error) });
 }
 
 useEffect(async () => {
  fetchTrendingNews();
  fetchTopBusinessesNear();
}, []);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.sectionOne}>
            <div className={styles.slider}>
              { done && news.length >= 0 ? (
              <NewsSlider carouselContent={news} />
              ): <Spinner   width={newsCardWidth} height={newsCardHeight}/>
              }
            </div>
            {
            done && news.length >= 0 ? (
            news.map((item, i) => {
                if(i== 1)
                return <NewsCard
                avatar= {item.news_image}
                tag={item.country_name}
                news_id={item._id}
                newsCat={state.titlebar.title}
                title={truncate(item.news_title, 65) }
                description={truncate(item.short_description, 180)}
                imgWidth={newsCardWidth}
                imgHeight={newsCardHeight}
              />
              })
              ): <Spinner width={newsCardWidth} height={newsCardHeight}/>
            }
          </div>

          <div className={styles.sectionTwo}>
            <Titlebar {...state.titlebar} />
            <div className={styles.body}>
            {
              done && news.length > 0 ? (
              news.map((item, i) => {
                if(i>1 && i<5)
                return  <div className="col-md-4"><NewsCard
                avatar={item.news_image}
                tag={item.address}
                newsCat={state.titlebar.title}
                news_id={item._id}
                title={truncate(item.news_title, 74)}
                description={truncate(item.short_description, 72)}
                imgWidth={300}
                imgHeight={140}
              /></div>
              })
              ): <Spinner width={newsCardWidth} height={newsCardHeight}/>
            }
            </div>
          </div>

          
        </div>
        <div className={styles.right}>
          <Email email="yourname@africaone.com" />
          <RegisterCard/>
          <TipNewsCard title="Top business near you">
            {
              state.top_businesses.map(function(item, i){
                if(i == 0)
                return <BusinessItem {...item} business_image_url={item.business_logo.read_path} imgWidth={248} imgHeight={107} direction="column" />
              })
            }
          </TipNewsCard>
          <p className={styles.link}>Click here for more listings nearby</p>
          <div className={styles.hidden}>
            <TipAds link="/" avatar="imgs/ads/5.png" />
          </div>
        </div>
      </div >
    </>
  )
}


export default Main;