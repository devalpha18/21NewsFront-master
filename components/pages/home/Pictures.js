import React, { useState, useEffect } from 'react';
import Titlebar from '../../shared/Titlebar';
import TipAds from '../../shared/TipAds';
import DataSource from '../../shared/DataSource';
import styles from '../../../styles/components/pages/home/Pictures.module.scss';
import ConfirmSharingStory from '../../shared/ConfirmSharingStory';
import AfricaOneCard from '../../shared/AfricaOneCard';
import { getImageSrc, truncate, encryptStr } from '../../shared/SharedAPI';
import SideTipAd from '../../shared/SideTipAd';
import Spinner from '../../shared/Spinner';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Link
} from "react-router-dom";
import { useRouter } from 'next/router';
import { random } from '../../shared/SharedAPI';



const dataSource = new DataSource();

const Pictures = (props) => {
  
  const router = useRouter();
  const [hasRun, sethasRun] = useState(false);

  const [todaysPhotoData, settodaysPhotoData] = useState([]);
  const [photoRandomInt, setPhotoRandomInt] = useState();
  const [adRandomInt, setAdRandomInt] = useState();

  const [ads, setAds] = useState([]);
  const [doneLoadingAds, setDoneLoadingAds] = useState(false);


  const titlebar = {
    title: 'In Pictures',
    subTitle1: 'day',
    subTitle2: 'yesterday',
    tags: [
      { name: 'PHOTO OF THE DAY', link: '/' },
    ],
    more: true
  }
  
  
  const fetchPicturesInfo = async () => {
    await dataSource.fetchPictures().then(res => {
      settodaysPhotoData(res.data);
      sethasRun(true);
      if(res.count){
        const random_num = random(res.count);
        setPhotoRandomInt(random_num);
      }
    }).catch(error => { console.log("Exception in fetching picture info in Pictures component ", error) });
  }
  
  const readDetails = (news_id) => {
    var category = (props.newsCat) ? props.newsCat : 'video';
    router.push({ pathname: "/category/details", query: { data: encryptStr(news_id), cat: encryptStr(category) } });
  }
  
  const getAds = async() => {
    let category = 'sidebar';
    await dataSource.fetchAdsByCategory(category).then(res => {
      setAds(res.data);
      if(res.count){
        const random_num = random(res.count);
        setAdRandomInt(random_num);
      }
      setDoneLoadingAds(true);
      }).catch(error => { console.log("Exception in fetching adverts in Main component", error) });
   }
  
  // method that returns number of days between 2 dates
  const compareDates = (dateX, dateY) => {
    dateX = new Date(dateX);
    dateY = new Date(dateY);
    return (dateY - dateX) / (1000 * 3600 * 24);
  }
  
  const Today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }
  
  useEffect(async () => {
    fetchPicturesInfo();
    getAds();
   

    
  }, []);
  
  return (
    <>
    <div className={styles.container}>
    <div className={styles.left}>
    <Titlebar {...titlebar} />
    <div className={styles.body}>
    
    {hasRun ? (
      <div>
      <div className={styles.sectionOne}>
      <div>
      {
        photoRandomInt ?
        todaysPhotoData.map((item, i) => {
          if (compareDates(item.publication_date, Today()) === 0)
          return <Router>
             <Switch>
          <Link onClick={() => readDetails(item._id)} ><img src={getImageSrc(item.photo, 620, 400)} alt="" />
          </Link>
          </Switch>
          </Router>
          else if(i == photoRandomInt)
            return <Router>
            <Switch>
            <Link onClick={() => readDetails(item._id)} ><img src={getImageSrc(item.photo, 620, 400)} alt="" />
            </Link>
            </Switch></Router>
        })
        : <Spinner/>
      }
      
      </div>
      
      
      <div className={styles.hidden}>
      {
        todaysPhotoData.map((item, i) => {
          if (compareDates(item.publication_date, Today()) === 1)
          return <Router>
          <Switch>
          <Link onClick={() => readDetails(item._id)} ><div className={styles.header}>
          <p className={styles.title}>{truncate(item.title, 32)}</p>
          <p className={styles.description}>Photo Credit: {item.publication_date}</p>
          </div>
          </Link>
          </Switch>
          </Router>
          else if(i == photoRandomInt)
              return <Router>
          <Switch>
          <Link onClick={() => readDetails(item._id)} ><div className={styles.header}>
          <p className={styles.title}>{truncate(item.title, 32)}</p>
          <p className={styles.description}>Photo Credit: {item.publication_date}</p>
          </div>
          </Link>
          </Switch>
          </Router>
        })
      }
      
      {hasRun ? (
        <div className={styles.content}>
        <p className={styles.photo}>YESTERDAY’S PHOTO</p>
        
        {
          todaysPhotoData.map((item, i) => {
              if (compareDates(item.publication_date, Today()) === 1)
                return <Router>
                <Switch>
                <Link onClick={() => readDetails(item._id)} ><div className={styles.card}>
                <img src={getImageSrc(item.photo, 300, 220)} alt="" />
                <div className={styles.gradient}></div>
                <p className={styles.title}>{truncate(item.title, 50)} {item.publication_date}</p>
                </div>
                </Link>
                </Switch>
                </Router>
             else if(compareDates(item.publication_date, Today()) != 1)
             if(i == photoRandomInt)
                      return <Router>
                      <Switch>
                      <Link onClick={() => readDetails(item._id)} ><div className={styles.card}>
                      <img src={getImageSrc(item.photo, 300, 220)} alt="" />
                      <div className={styles.gradient}></div>
                      <p className={styles.title}>{truncate(item.title, 50)} {item.publication_date}</p>
                      </div>
                      </Link>
                      </Switch>
                      </Router>
          })
        }
        
        </div>
        ) : (null)
      }
      </div>
      
      </div>
      </div>
      
      ) : (null)
    }
    
    {/* <div className={styles.sectionTwo}>
    <img src="imgs/children.png" alt="" />
    <div>
    <p className={styles.title}>
    See more photos at <span className={styles.yellow}>seeafrica.org</span>
    </p>
    <span className={styles.visit}>VISIT NOW</span>
    </div>
    </div> */}


    <div className={styles.sectionThree}>
    <ConfirmSharingStory />
    </div>
    </div>
    </div>
    <div className={`${styles.right} ${styles.hidden}`}>
            {
              doneLoadingAds ? 
                <SideTipAd gotAds={doneLoadingAds} ads={ads} adIndex={adRandomInt} />
                : <Spinner/>
            }
    <TipAds link="/" avatar="imgs/ads/7.png" />
    <AfricaOneCard />
    </div>
    </div>
    </>
    )
  }
  
  export default Pictures;