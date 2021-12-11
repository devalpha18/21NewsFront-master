
import React from 'react';
import {truncate} from './SharedAPI';
import LargeNewsCard from '../shared/LargeNewsCard';
import NewsCard from '../shared/NewsCard';
import styles from '../../styles/components/pages/home/Shared.module.scss';
import Spinner from '../shared/Spinner';

const HomeNewsCat = (props) => {
        return (
            <div className={styles.body}>
              <div className={styles.largeNewsCard}>
                {
                  (props.hasRun) && props.news.length > 0 ? (
                      props.news.map((item, i) => {
                        if (i == 0)
                          return <LargeNewsCard
                            key={i}
                            avatar={item.news_image}
                            tag={item.country_name}
                            newsCat={props.newsCat}
                            news_id={item._id}
                            hasRun={props.hasRun}
                            title={truncate(item.news_title, 51)}
                            description={truncate(item.short_description, 72)}
                            imgWidth={300}
                            imgHeight={468}
                          />
                      })
                    ) :  null
                }

              </div>

              <div className={`${styles.smallNewsCards} ${styles.flex} ${styles.flexColumn} ${styles.justifyBetween}`}>
                <div className={styles.flex} style={{ height: '100%', paddingBottom: '20px' }}>
                  {props.hasRun && props.news.length ? (
                    props.news.map((item, i) => {
                      if (i > 0 && i < 3)
                        return <NewsCard
                          key={i}
                          avatar={item.news_image}
                          tag={item.address}
                          newsCat={props.newsCat}
                          news_id={item._id}
                          hasRun={props.hasRun}
                          title={truncate(item.news_title, 40)}
                          description={truncate(item.short_description, 72)}
                          imgWidth={300}
                          imgHeight={130}
                        />
                    })
                  ) : null
                  }
                </div>

                <div style={{ display: 'flex' }} style={{ height: '100%', paddingBottom: '10px' }}>
                  {props.hasRun && props.news.length > 0 ? (
                    props.news.map((item, i) => {
                      if (i > 2 && i < 4)
                        return <div style={{ display: 'flex' }} style={{ height: '100%', paddingBottom: '10px' }}>
                          <NewsCard
                            key={i}
                            avatar={item.news_image}
                            tag={item.address}
                            newsCat={props.newsCat}
                            news_id={item._id}
                            hasRun={props.hasRun}
                            title={truncate(item.news_title, 44)}
                            description={truncate(item.short_description, 72)}
                            imgWidth={300}
                            imgHeight={168}
                            direction="row"
                          />
                        </div>
                    })
                  ) :  null
                  }
                </div>
              </div>

            </div>
        )
}
export default HomeNewsCat;