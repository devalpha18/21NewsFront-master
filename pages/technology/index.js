import React, { useState, useEffect } from 'react';
import Back from '../../components/shared/Back.js';
import styles from '../../styles/components/pages/category/Index.module.scss';
import DataSource from '../../components/shared/DataSource';
import NewsList from '../../components/shared/NewsList';
import Spinner from '../../components/shared/Spinner';

const dataSource = new DataSource();

const Technology = () => {

  const [news, setNews] = useState([]);
  const [done, setDone] = useState(false);

    const state = {
      titlebar: {
        title: 'Technology',
        tags: [
          { name: 'Gadget', link: '/' },
          { name: 'Upstarts', link: '/' },
          { name: 'Innovative Cities', link: '/' }
        ],
        more: true,
        hide: true
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
      ],


    }

  const fetchTechnologyNews = async () => {
    var data = state.titlebar.title;
    await dataSource.fetchNews(data).then(res => {
      setNews(res);
      setTimeout(() =>  setDone(true), 3000);
    }).catch(error => { console.log("Exception in fetching tech news in technology component is", error) });

  }

  useEffect(async () => {
    {!done && news.length > 0 ? (
      <Spinner/>
    ): null }
    fetchTechnologyNews();
  }, []);

  return (
    <>
    <div className={styles.bodyContainer}>
    {done ? (
      <div className={styles.body}>
      <div className={styles.hidden}>
      <Back link="/home" index={0} />
      </div>
      <NewsList titlebar={state.titlebar} hasRun={done} news={news} 
      businessItems={state.businessItems} adIndex={1} newsCat={state.titlebar.title}/>
      </div>
      ) : (
        <Spinner/>
        )}
        </div>
        </>
        );
  }

export default Technology;