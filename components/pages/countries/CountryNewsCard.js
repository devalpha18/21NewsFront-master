import React, { useState, useEffect } from "react";
import DataSource from '../../shared/DataSource';
import Spinner from '../../shared/Spinner';
import { getImageSrc, truncate } from '../../shared/SharedAPI';
import NewsCard from '../../shared/NewsCard';

const dataSource = new DataSource();

const CountryNewsCard = (props) => {

    const [news, setNews] = useState([]);
    const [done, setDone] = useState(false);

    const fetchNews = async() => {
        if(props.country_name){
            await dataSource.fetchNewsByCountry(props.country_name).then(res => {
              console.log("News for the country", res.data);
              setNews(res.data);
              setDone(true);
            }).catch(error => { console.log("Exception in fetching news for a country", error) });
          }else{
            console.log("No country found");
          }
    }

useEffect(()=> {
    fetchNews();
}, [])
    

    return (
        
            done && news.length >= 0 ? (
            news.map((item, i) => {
                if(i < 3)
                return <NewsCard
                avatar= {item.news_image}
                tag={item.country_name}
                news_id={item._id}
                newsCat={item.country_name}
                title={truncate(item.news_title, 65) }
                description={truncate(item.short_description, 180)}
                imgWidth={256}
                imgHeight={120}
              />
              })
              ): <Spinner/>
    )
}

export default CountryNewsCard;