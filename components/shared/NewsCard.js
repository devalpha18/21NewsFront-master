import React, { Component, useEffect } from 'react';
import styles from '../../styles/components/shared/NewsCard.module.scss';
import { getImageSrc, readDetails, encryptStr } from '../shared/SharedAPI';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import { useRouter } from 'next/router';
import DataSource from './DataSource';

const dataSource = new DataSource();
const NewsCard = (props) => {
  const router = useRouter();
  
  const readDetails = async(news_id) => {
    await dataSource.incrementReviewCount(news_id).then(res=>{
      let statusCode = res.success;
      if(statusCode == 1){
        var category = (props.newsCat) ? props.newsCat : 'video';
        router.push({ pathname: `/category/details/`, query: { data: encryptStr(news_id), cat: encryptStr(category) } });
      }else{
        // console.log("Error iss",res.message);
      }
    }).catch(error => { console.log("Exception in incrementing review count for the article is " + error) });
  
  }
  
  return (
    <Router>
    <Link onClick={() => readDetails(props.news_id)}>
    <div className={`${styles.container} ${props.direction !== 'row' && styles.flexColumn}`}>
    <div className={styles.header}>
    <img src={getImageSrc(props.avatar, props.imgWidth, props.imgHeight)} className={styles.avatar} alt="" id="image" />
    <span className={styles.tag}>{props.tag}</span>
    </div>
    <div className={styles.body}>
    <p className={styles.title}>{props.title}</p>
    <p className={styles.description}>{props.description}</p>
    </div>
    </div>
    </Link>
    </Router>
    )
    
  }
  
  export default NewsCard;