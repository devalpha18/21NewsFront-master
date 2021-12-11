import React from 'react';
import Back from './Back.js';
import ConfirmSharingStory from './ConfirmSharingStory';
import MostRead from './MostRead.js';
import TipAds from './TipAds';
import Email from './Email';
import RegisterCard from '../pages/home/RegisterCard.js';
import TipNewsCard from './TipNewsCard';
import BusinessItem from './BusinessItem';
import Review from './Review';
import AfricaOneCard from './AfricaOneCard';
import Post from './Post';
import RelatedStories from './RelatedStories';
import PaidContent from './PaidContent';
import styles from '../../styles/components/pages/article/Index.module.scss';
import {getImageSrc} from './SharedAPI';

const Article = (props) => {

  const post = {
    news_id: props.location.state.news_id,
    title: props.location.state.news_title,
    user: props.location.state.author,
    postedDate: props.location.state.published_on,
    news_image: props.location.state.news_image,
    content:props.location.state.news_description
  }

  const relatedStories = props.location.news


  const businessItems = [
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
  ];

  

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          {/* <div className={styles.hidden}>
            <Back link="/home" />
          </div> */}
          {/* <div className={styles.main}> */}

          {
           (props.location.state) ?
            <div className={styles.left}>
              <Post {...post}/>
              <RelatedStories data={relatedStories} exclude_id={props.location.news._id}/>
              <div className={styles.hidden}>
                <PaidContent />
                <ConfirmSharingStory />
              </div>
            </div>
            :(null)
          }


           
            {/* <div className={`${styles.right} ${styles.hidden}`}>
              <MostRead
                title="Most Read"
                data={[
                  {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }
                ]}
              />
              <TipAds link="/" avatar="/imgs/ads-lg.png" />
              <Email email="yourname@africaone.com" />
              <RegisterCard />
              <TipNewsCard title="Top businesses near you">
                <BusinessItem
                  avatar="imgs/misc/1.png"
                  rate={4.5}
                  point="17"
                  title="Cafe Javas Kampala"
                  description="Plot 7 Kampala Road"
                  tag="For Breakfast, Lunch, Supper & Takea…"
                  direction="column"
                />
              </TipNewsCard>
              <p className={styles.link}>Click here for more listings nearby</p>
              <TipAds link="/" avatar="imgs/ads/5.png" />
              <TipNewsCard title="Top businesses near you">
                {businessItems.map((item, index) => <BusinessItem {...item} />)}
              </TipNewsCard>
              <p className={styles.link}>Click here to add your business now</p>
              <TipNewsCard title="Review of the day">
                <Review
                  userInfo={{ avatar: 'imgs/users/1.png', name: 'Martha Kayiwa', reviewCount: 10, photoCount: 9 }}
                  reviewInfo={{ name: 'Cafe Javas Kamwokya', rate: 4.5, reviewCount: 123, avatar: 'imgs/reviews/1.png' }}
                />
              </TipNewsCard>
              <TipAds link="/" avatar="imgs/ads/1.png" />
              <TipAds link="/" avatar="imgs/ads/2.png" />
              <TipAds link="/" avatar="imgs/ads/3.png" />
              <TipAds link="/" avatar="imgs/ads/6.png" />
              <TipAds link="/" avatar="imgs/ads/7.png" />
              <AfricaOneCard />
            </div> */}



          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Article;