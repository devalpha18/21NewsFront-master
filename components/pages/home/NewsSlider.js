import React, { Component } from "react";
import Slider from "react-slick";
import { getImageSrc, encryptStr } from '../../shared/SharedAPI';
import {truncate} from '../../shared/SharedAPI';
import styles from '../../../styles/components/pages/home/NewsSlider.module.scss';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import DataSource from '../../shared/DataSource';
import { useRouter } from 'next/router'

const dataSource = new DataSource();
const NewsSlider = (props) => {

      const router = useRouter();

      const settings = {
        customPaging: function (i) {
          return (
            <a></a>
          );
        },
        dots: true,
        dotsClass: 'dots',
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };

     
     const readDetails = async(news_id) => {
      await dataSource.incrementReviewCount(news_id).then(res=>{
        let statusCode = res.success;
        if(statusCode == 1){
          var category = (props.newsCat) ? props.newsCat : 'video';
          router.push({pathname:"/category/details", query:{ data: encryptStr(news_id), cat: encryptStr(category) }});
        }else{
        }
      }).catch(error => { console.log("Exception in incrementing review count for the article is " + error) });
    }

  return (
    <>
      <div className={styles.container}>
        <Slider {...settings}>
          {
            props.carouselContent.map((item, index) => {
              return (
                <Router>
                 <Link onClick={() => readDetails(item._id)}>
                <div className={styles.item} key={index}>
                  <div className={styles.gradient}></div>
                  <img src={getImageSrc(item.news_image,620, 390)} alt="" />
                  <p className={styles.description}>{truncate(item.short_description, 75)}</p>
                </div>
                </Link>
                </Router>
                 )
            })
          }
        </Slider>
      </div>
    </>
  )
}


export default NewsSlider;