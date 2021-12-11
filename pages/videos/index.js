import React, { useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Back from '../../components/shared/Back.js';
import ConfirmSharingStory from '../../components/shared/ConfirmSharingStory';
import MostRead from '../../components/shared/MostRead.js';
import TipAds from '../../components/shared/TipAds';
import Email from '../../components/shared/Email';
import RegisterCard from '../../components/pages/home/RegisterCard.js';
import TipNewsCard from '../../components/shared/TipNewsCard';
import BusinessItem from '../../components/shared/BusinessItem';
import AfricaOneCard from '../../components/shared/AfricaOneCard';
import PaidContent from '../../components/shared/PaidContent';
import Titlebar from '../../components/shared/Titlebar.js';
import styles from '../../styles/components/pages/category/Index.module.scss';
import DataSource from '../../components/shared/DataSource';
import VideoThumbnail from 'react-video-thumbnail';

const dataSource = new DataSource();

const  Video = () => {

  const [news, setNews] = useState([]);
  const [hasRun, setHasRun] = useState(false);

    const state = {
      titlebar : {
        title: 'Video',
        tags: [
          { name: 'SHOWBIZ', link: '/' },
          { name: 'DRAMA', link: '/' },
          { name: 'MUSIC', link: '/' }
        ],
        more: true,
        hide: true
      },
    
       businessItems : [
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
    
       categories : [
        {
          avatar: '/imgs/categories/1.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/2.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/3.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/1.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/2.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/3.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/1.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/2.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/3.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
        {
          avatar: '/imgs/categories/1.png',
          title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          tag: 'FASHION',
          date: 'August 7, 2020'
        },
      ],
    }
  
  const fetchNewsWithVideos = async () => {
    var data = { category: state.titlebar.title }
    await dataSource.fetchNewsWithVideos(data).then(res => {
      setNews(res.data);
      setHasRun(true);
    }).catch(error => { console.log("Exception in fetching video news in video component is", error) });

  }

  useEffect(async () => {
    fetchNewsWithVideos();
  }, []);

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.hidden}>
            <Back link="/home" index={2}/>
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <Titlebar {...state.titlebar} />

              {
                  news.map((item,i) => {
                    if(i==0)
                    return (
                      <div className={styles.category}>
                        {/* <Video src={item.news_video}/> */}
                        <ReactPlayer url={item.news_video} />
                        {/* <source src={item.news_video} ></source> */}
                
                      <div>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.description}>{item.short_description}</p>
      
                        <a>View Full Story</a>
                      </div>
                    </div>
                    )
                  })
                }

             

              <div className={styles.items}>

                {
                  news.map((item, i) => {
                    if(i>0 && i<11)
                    return (
                      <div className={styles.item}>
                        <div>
                          <p>
                            <span className={styles.tag}>{item.category_name}</span> Published: {item.published_on}
                          </p>
                          <p className={styles.title}>{item.news_title}</p>
                          <p className={styles.description}>{item.short_description}</p>
                           <ReactPlayer url={item.news_video} />
                        </div>
                      </div>
                    )
                  })
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
              (hasRun) ? (
                (news) ? (
                  <MostRead title="Most Read" count={2} data={news}/>

                  ) : (null)
              ) : (null)
                }
              <TipAds link="/" avatar="/imgs/ads-lg.png" />
              <Email email="yourname@africaone.com" />
              <RegisterCard />
              <TipAds link="/" avatar="imgs/ads/5.png" />
              {/* <TipNewsCard title="Top businesses near you">
                {this.state.businessItems.map((item, index) => <BusinessItem {...item} />)}
              </TipNewsCard> */}
              {
              (hasRun) ? (
                (news) ? (
                  <MostRead title="Most Read" count={5} data={news}/>
                  ) : (null)
              ) : (null)
                }
              <p className={styles.link}>Click here to add your business now</p>
              <TipAds link="/" avatar="imgs/ads/2.png" />
              <TipAds link="/" avatar="imgs/ads/3.png" />
              <TipAds link="/" avatar="imgs/ads/6.png" />
              <AfricaOneCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;