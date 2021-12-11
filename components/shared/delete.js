import React from 'react';
import Back from '../components/shared/Back.js';
import ConfirmSharingStory from '../components/shared/ConfirmSharingStory';
import MostRead from '../components/shared/MostRead.js';
import TipAds from '../components/shared/TipAds';
import Email from '../components/shared/Email';
import RegisterCard from '../components/pages/home/RegisterCard.js';
import TipNewsCard from '../components/shared/TipNewsCard';
import BusinessItem from '../components/shared/BusinessItem';
import AfricaOneCard from '../components/shared/AfricaOneCard';
import PaidContent from '../components/shared/PaidContent';
import Titlebar from '../components/shared/Titlebar.js';
import styles from '../styles/components/pages/category/Index.module.scss';

const Category = () => {
  const titlebar = {
    title: 'Entertainment',
    tags: [
      { name: 'SHOWBIZ', link: '/' },
      { name: 'DRAMA', link: '/' },
      { name: 'MUSIC', link: '/' }
    ],
    more: true,
    hide: true
  }

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

  const categories = [
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
  ]

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.hidden}>
            <Back link="/home" />
          </div>




          <div className={styles.main}>
            <div className={styles.left}>
              <Titlebar {...titlebar} />

              <div className={styles.category}>
                <img src="/imgs/category.png" />
                <div>
                  <p className={styles.title}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                  <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et…</p>

                  <a>View Full Story</a>
                </div>
              </div>

              <div className={styles.items}>

                {
                  categories.map(item => {
                    return (
                      <div className={styles.item}>
                        <img src={item.avatar} />
                        <div>
                          <p>
                            <span className={styles.tag}>{item.tag}</span> Published: {item.date}
                          </p>
                          <p className={styles.title}>{item.title}</p>
                          <p className={styles.description}>{item.description}</p>
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
              <TipAds link="/" avatar="/imgs/ads/5.png" />
              <TipNewsCard title="Top businesses near you">
                {businessItems.map((item, index) => <BusinessItem {...item} />)}
              </TipNewsCard>
              <p className={styles.link}>Click here to add your business now</p>
              <TipAds link="/" avatar="/imgs/ads/2.png" />
              <TipAds link="/" avatar="/imgs/ads/3.png" />
              <TipAds link="/" avatar="/imgs/ads/6.png" />
              <AfricaOneCard />
            </div>



          </div>



        </div>
      </div>
    </>
  );
}

export default Category;