import React from 'react';
import styles from '../../styles/components/shared/MostRead.module.scss';
import { getImageSrc, truncate, truncateText, encryptStr } from './SharedAPI';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useRouter } from 'next/router';
import DataSource from './DataSource';


const dataSource = new DataSource();

const MostRead = (props) => {
  const router = useRouter();

  // const readDetails = (news_id) => {
  //   var category = (props.newsCat) ? props.newsCat : 'sports';
  //   router.replace({ pathname: "/category/details", query: { data: news_id, cat: category } });
  // };

    const readDetails = async(news_id) => {
      await dataSource.incrementReviewCount(news_id).then(res=>{
        let statusCode = res.success;
        if(statusCode == 1){
          var category = (props.newsCat) ? props.newsCat : 'sports';
          router.push({
            pathname: `/category/details/`,
            query: { data : encryptStr(news_id), cat: encryptStr(category)}
          });
        }else{
        }
      }).catch(error => { console.log("Exception in incrementing review count for the article is " + error) });
    }




  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      {
        props.hasRun && props.data?
          props.data.map((item, i) => {
            if (i < props.count)
              return (
                <Router>
                <Link onClick={() => readDetails(item._id)}>
                <div className={styles.article}>
                  <img src={getImageSrc(item.news_image, 70, 70)} />
                  <div>
                    <p className={styles.title}>{truncateText(item.news_title, 45)}</p>
                    <p className={styles.description}>{truncate(item.short_description, 55)}</p>
                  </div>
                </div>
                </Link>
             </Router>
              )
          })
          : (null)

      }
    </div>
  )
}

export default MostRead;