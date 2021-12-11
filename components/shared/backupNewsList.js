import { Component, useState, useEffect } from "react";
import Titlebar from './Titlebar.js';
import PaidContent from './PaidContent';
import ConfirmSharingStory from './ConfirmSharingStory';
import MostRead from './MostRead.js';
import TipAds from './TipAds';
import Email from './Email';
import RegisterCard from '../pages/home/RegisterCard.js';
import TipNewsCard from './TipNewsCard';
import BusinessItem from './BusinessItem';
import AfricaOneCard from './AfricaOneCard';
import DataSource from './DataSource';
import Image from 'next/image';
import Article from './article';
import { getImageSrc, truncate, encryptStr } from './SharedAPI';
import styles from '../../styles/components/pages/category/Index.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useHistory,
  Link
} from "react-router-dom";


const dataSource = new DataSource();
 const NewsList = (props) => {

  const [top_businesses, setBusiness] = useState([]);
  const [ads, setAds] = useState([]);
  const [hasRun, sethasRun] = useState(false);
  let history = useHistory();


   const titlebar = {
        title: 'Sport',
        tags: [
          { name: 'Football', link: '/' },
          { name: 'Rugby', link: '/' },
          { name: 'Cricket', link: '/' }
        ],
        more: true,
        hide: true
      }
      
    

  const readDetails = () => {
    return history.push("/category/health");
  }

  const fetchTopBusinessesNear = async () => {
    var data = { category: titlebar.title }
    await dataSource.fetchTopBusinessesNear(data).then(res => {
      let respData = res.data;
      setBusiness(respData);
    }).catch(error => { console.log("Exception in fetching top near businesses is " + error) });

  }

  const getAds = async () => {
    let data = titlebar.title;
    await dataSource.fetchAds(data).then(res => {
      setAds(res.data);
    }).catch(error => { console.log("Exception in fetching ads is " + error) });
  }


  useEffect(async () => {
    fetchTopBusinessesNear();
    getAds();
  }, []);



    return (
      <div className={styles.main}>
        <div className={styles.left}>
          <Titlebar {...props.titlebar} />
          {
            (props.hasRun) ? (
              props.news.map((item, i) => {
                if (i == 0)
                  return <Router>
                  <div className={styles.category} key={i}>
                    <img src={getImageSrc(item.news_image, 620, 310)} />
                    <div>
                      <p className={styles.title}>{item.news_title}</p>
                      <p className={styles.description}>{truncate(item.short_description, 250)}</p>
                      <Router><Link to="">View Full Story</Link></Router>
                    </div>
                  </div>
                  </Router>
              })
            ) : (null)
          }


          <div className={styles.items}>
            {
              (props.hasRun) ? (
                props.news.map((item, i) => {
                  if (i > 0)
                    return (
                      <Router>
                      <Link to={{
                          pathname: `/category/details/${i}`,
                          news_id: i,
                          state: item,
                          news: props.news,
                        }} >
                          <div className={styles.item} key={i}>
                            <img src={getImageSrc(item.news_image, 300, 150)} />
                            <div>
                              <p>
                                <span className={styles.tag}>{props.titlebar.title}</span> Published: {item.published_on}
                              </p>
                              <p className={styles.title}>{item.news_title}</p>
                              <p className={styles.description}>{truncate(item.short_description, 155)}</p>
                            </div>
                          </div>
                        </Link>
                        <Route exact path="/category/details/:newsId" component={Article} />
                      </Router>
                    )
                })
              ) : (null)
            }
            <div className={styles.loadMore}>
              <a>LOAD MORE</a>
            </div>
          </div>

          <div className={styles.hidden}>
            <PaidContent />
            <ConfirmSharingStory />
          </div>
        </div>

        <div className={`${styles.right} ${styles.hidden}`}>
          {
            (props.hasRun) ? (
              (props.news) ? (
                <MostRead title="Most Read" count={5} data={props.news} />
              ) : (null)
            ) : (null)
          }
          {
            ads.map((item, i) => {
              if (i == props.adIndex)
                return <TipAds link="/" avatar={getImageSrc(item.advertisement_image, 300, 600)} />
            })
          }
          <Email email="yourname@africaone.com" />
          <RegisterCard />
          <TipAds link="/" avatar="/imgs/ads/5.png" />

          <div className={styles.right}>
            <TipNewsCard title="Top businesses near you">
              {
                top_businesses.map(function (item, i) {
                  if (i < 3)
                    return <BusinessItem {...item} business_image_url={item.business_logo} imgWidth={80} imgWeight={80} />
                })
              }
            </TipNewsCard>
            <p className={styles.link}>Click here to add your business now</p>
          </div>
          <TipAds link="/" avatar="/imgs/ads/2.png" />
          <TipAds link="/" avatar="/imgs/ads/3.png" />
          <TipAds link="/" avatar="/imgs/ads/6.png" />
          <AfricaOneCard />
        </div>



      </div>


    )
  }


export default NewsList