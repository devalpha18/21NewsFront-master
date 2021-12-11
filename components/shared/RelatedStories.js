import React from 'react';
import Titlebar from '../../components/shared/Titlebar';
import styles from '../../styles/components/shared/RelatedStories.module.scss';
import { getImageSrc, encryptStr } from './SharedAPI';
import Article from './article';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import { useRouter } from 'next/router'

const RelatedStories = (props) => {
  const titlebar = {
    title: 'Related Stories',
    tags: [
      { name: 'AFRICA', link: '/' },
    ],
    more: false
  }

  const router = useRouter();

  const readDetails = (news_id) => {
    var category = (props.newsCat) ? props.newsCat : 'video';
    router.push({pathname: `/category/details/`,
                   query:{ data: encryptStr(news_id), cat: encryptStr(category) }});
  }

  return (
    <div className={styles.container}>
      <Titlebar {...titlebar} />
      {
        props.data ? 
        props.data.map((item, i) => {
          if(item._id !== props.exclude_id)
          return (
            <Router>
            <Link onClick={() => readDetails(item._id)} >
            <div className={styles.item}>
              <img src={getImageSrc(item.news_image, 220, 100)} />
              <div>
                <p className={styles.title}>{item.news_title}</p>
                <p className={styles.description}>{item.short_description}</p>
              </div>
            </div>
             </Link>
           </Router>
          )
        }) : (null)

      }
    </div>
  )
};

export default RelatedStories;