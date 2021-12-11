import React, { useState, useEffect} from 'react';
import Titlebar from '../../shared/Titlebar';
import TipNewsCard from '../../shared/TipNewsCard';
import Review from '../../shared/Review';
import TipAds from '../../shared/TipAds';
import styles from '../../../styles/components/pages/home/Shared.module.scss';
import RestApi from '../../shared/ApiGateway';
import DataSource from '../../shared/DataSource';
import HomeNewsCat from '../../shared/HomeNewsCat';
import { REVIEW_API_URL} from '../../../config/env';
import Spinner from '../../shared/Spinner';

const _apiGateway = new RestApi();
const dataSource = new DataSource();


const initialState = {
  avatar: '',
  tag: '',
  title: '',
  description: '',
  hasRun: false,
  isReviewOk: false,
  news: [],
  reviewOfDay: [],
  titlebar: {
    title: 'Business',
    tags: [
      { name: 'Economy', link: '/' },
      { name: 'Markets', link: '/' },
      { name: 'Trade', link: '/' }
    ],
    more: true,
    link: '/business',
  }

}

const Business = () => {

  const [state, setData] = useState(initialState);
  const [news, setNews] = useState([]);
  const [done, setDone] = useState(false);
  

  const fetchBusinessNews = async () => {
    var data = state.titlebar.title;
    await dataSource.fetchNews(data).then(res => {
      setNews(res);
      setTimeout(() =>  setDone(true), 3000);
    }).catch(error => { console.log("Exception in fetching business news in Entertainment component", error) });

  }

  const fetchReviewOfTheDay = async () => {
    const GET_TOPREVIEW_URL = REVIEW_API_URL+"fetch/review/oftheday";
    var data = {}

    await _apiGateway.fetchDataByGet(GET_TOPREVIEW_URL, data).then(res => {
      let respData = res.data;

      setData({
        ...state,
        reviewOfDay: respData,
        isReviewOk: true,
      });
    }).catch(error => { console.log("Error in catch is " + error) });

  }

  useEffect(async () => {
    fetchBusinessNews();
    fetchReviewOfTheDay();
  }, []);

    return (
      <>
        <div className={styles.container}>
          <div className={styles.left}>
            <Titlebar {...state.titlebar} />
            {done ? (
                      <HomeNewsCat news={news} hasRun={done} newsCat={state.titlebar.title}/>
                      ): <Spinner/>
            }
          </div>

          <div className={styles.right}>
            <TipNewsCard title="Review of the day">
                { state.isReviewOk && state.reviewOfDay.length >= 0 ? (
                <div className={styles.flex} style={{ height: '100%', paddingBottom: '20px' }}>
                   {
                    state.reviewOfDay.map(function (item, i) {
                      return <div><Review
                        userInfo={{ avatar: item.image[0]['image_url'], name: item.user_name, reviewCount: item.rating, photoCount: 9 }}
                        reviewInfo={{ name: item.business_name, rate: 4.5, reviewCount: item.rating, avatar: item.image[0]['image_url'] }}
                        imgWidth={265} imgHeight={140}
                      /></div>
                    })
                  }
                </div>
              ) : (
                <Spinner/>
              )}
            </TipNewsCard>
            <div className={styles.tipAds}>
              <TipAds
                link="/"
                avatar="imgs/ads/1.png"
              />
            </div>
          </div>


        </div>
      </>
    )
}

export default Business;