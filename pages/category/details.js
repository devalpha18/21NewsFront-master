import React, { Component } from 'react';
import Back from '../../components/shared/Back.js';
import TipAds from '../../components/shared/TipAds';
import Email from '../../components/shared/Email';
import RegisterCard from '../../components/pages/home/RegisterCard.js';
import TipNewsCard from '../../components/shared/TipNewsCard';
import BusinessItem from '../../components/shared/BusinessItem';
import AfricaOneCard from '../../components/shared/AfricaOneCard';
import styles from '../../styles/components/pages/article/Index.module.scss';
import { getImageSrc, decryptStr } from '../../components/shared/SharedAPI';
import Post from '../../components/shared/Post';
import MostRead from '../../components/shared/MostRead.js';
import RelatedStories from '../../components/shared/RelatedStories';
import PaidContent from '../../components/shared/PaidContent';
import ConfirmSharingStory from '../../components/shared/ConfirmSharingStory';
import DataSource from '../../components/shared/DataSource';
import { NEWS_API_URL } from '../../config/env';
import Spinner from '../../components/shared/Spinner';
const dataSource = new DataSource();

class Details extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      newsCat: '',
      news: [],
      post: [],
      hasRun: false,
      hasNewsUpdated: false,
      ads: [],
      news_id: '',
      top_businesses: [],
      relatedStories: [],
      
      articleRelatedStories: [],
      articlePost: [],
      articleNews: [],
      hasAdsLoaded: false,
      hasPostLoaded: false,
      
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
      ]
    }
  }
  
  
  fetchNews = async () => {
    
    const NEWS_CAT_URL = NEWS_API_URL + "news/category";
    let category = 'Trending';
    this.setState({
      newsCat: category,
    })
    
    let news_id = this.state.news_id;
    var data = { category: category, news_id: news_id };
    
    await dataSource.fetchSubNewsByCat(NEWS_CAT_URL, data).then(info => {
      info.map((item, i) => {
        if (i == 0) {
          const post = {
            news_id: item.news_id,
            title: item.news_title,
            user: item.author,
            postedDate: item.published_on,
            news_image: item.news_image,
            content: item.news_description
          }
          this.setState({
            post: post,
          });
        }
      });
      
    }).catch(error => { console.log("Exception in fetching default post in Main component", error) });
    
    var searchParams = { category: category }
    await dataSource.fetchSubNewsByCat(NEWS_CAT_URL, searchParams).then(resp => {
      this.setState({
        news: resp,
      });
    }).catch(error => { console.log("Exception in fetching default related news in Main component", error) });
    
    var searchData = { category: category, exclude_id: news_id }
    await dataSource.fetchSubNewsByCat(NEWS_CAT_URL, searchData).then(relatedNews => {
      this.setState({
        relatedStories: relatedNews,
      });
    }).catch(error => { console.log("Exception in fetching default related stories in Main component", error) });
    
    this.setState({hasRun: true});
  }
  
  
  fetchNewsState = async (category, searchId) => {
    const NEWS_CAT_URL = NEWS_API_URL + "news/category";
    this.setState({
      news_id: searchId,
    })
    this.setState({
      newsCat: category,
    });
    let news_id = searchId;
    var data = { category: category, news_id: news_id };
    await dataSource.fetchSubNewsByCat(NEWS_CAT_URL, data).then(response => {
      response.map((item, i) => {
        if (i == 0) {
          const post = {
            news_id: item.news_id,
            title: item.news_title,
            user: item.author,
            postedDate: item.published_on,
            news_image: item.news_image,
            content: item.news_description
          }
          this.setState({
            articlePost: post,
            hasPostLoaded: true,
          });
        }
      });
    }).catch(error => { console.log("Exception in fetching article in fetch state 1 details component", error) });
    
    var searchParams = { category: category }
    await dataSource.fetchSubNewsByCat(NEWS_CAT_URL, searchParams).then(result => {
      this.setState({
        articleNews: result,
      });
    }).catch(error => { console.log("Exception in fetching article news in fetch state 2 details component", error) });
    
    var searchData = { category: category, exclude_id: news_id }
    await dataSource.fetchSubNewsByCat(NEWS_CAT_URL, searchData).then(article_related_stories => {
      this.setState({
        articleRelatedStories: article_related_stories,
      });
    }).catch(error => { console.log("Exception in fetching article related news in fetch state 3 details component", error) })
    
    this.setState({
      hasNewsUpdated: true,
      news_id: '',
    });
  }
  
  fetchTopBusinessesNear = async () => {
    var data = { category: 'sports' }
    await dataSource.fetchTopBusinessesNear(data).then(res => {
      let respData = res.data;
      this.setState({
        top_businesses: respData,
      })
    }).catch(error => { console.log("Exception in fetching top near businesses is " + error) });
  }
  
  getAds = async() => {
    let category = 'sidebar';
    await dataSource.fetchAdsByCategory(category).then(res => {
      this.setState({ads: res.data });
      this.setState({hasAdsLoaded: true});
    }).catch(error => { console.log("Exception in fetching adverts in Main component", error) });
  }
  
  
  componentDidMount() {
    this.fetchNews();
    this.fetchTopBusinessesNear();
    this.getAds();
  }
  
  componentDidUpdate() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let searchId = params.get('data')
    let searchCategory = params.get('cat');
    if(searchId && searchCategory){
      searchId = decryptStr(searchId);
      searchCategory = decryptStr(searchCategory);
      if (this.state.news_id != searchId) {
        this.fetchNewsState(searchCategory, searchId);
        if (this.state.hasNewsUpdated) {
          this.setState({
            post: this.state.articlePost,
            news: this.state.articleNews,
            relatedStories: this.state.articleRelatedStories,
          });
         this.setState({hasRun: true});
        }
      }
    }
  }
  
  render() {
    return (
      <>
      <div className={styles.bodyContainer}>
      <div className={styles.body}>
      <div className={styles.hidden}>
      <Back link="/home" />
      </div>
      <div className={styles.main}>
      {
        (this.state.hasRun) ? (
          <div className={styles.left}>
            {
              this.state.hasPostLoaded ? <Post {...this.state.post} /> : <Spinner/>
            }
          <RelatedStories data={this.state.relatedStories} newsCat={this.state.newsCat} exclude_id={1} />
          <div className={styles.hidden}>
          <PaidContent />
          <ConfirmSharingStory />
          </div>
          </div>
          ) : <Spinner/>
        }
        
        
        <div className={`${styles.right} ${styles.hidden}`}>
        {
          (this.state.hasRun && this.state.hasAdsLoaded) ? (
            this.state.news ? (
              <MostRead title="Most Read" count={5} data={this.state.news} hasRun={this.state.hasRun} newsCat={this.state.newsCat} />
              ) : (null)
              ) : <Spinner/>
            }
            
            {
              this.state.hasAdsLoaded ? 
              this.state.ads.map((item, i) => {
                if (i == 2)
                return <TipAds link="/" avatar={item.ad_x['seo_url']} />
                
              }) : <Spinner/>
            }
            
            {
              (this.state.hasRun && this.state.hasAdsLoaded) ? (
                <>
                <Email email="yourname@africaone.com" />
                <RegisterCard />
                <TipAds link="/" avatar="/imgs/ads/5.png" />
                
                <div className={styles.right}>
                <TipNewsCard title="Top businesses near you">
                {
                  this.state.top_businesses.map(function (item, i) {
                    if (i < 3)
                    return <BusinessItem {...item} business_image_url={item.business_logo} imgWidth={80} imgWeight={80} />
                  })
                }
                </TipNewsCard>
                <p className={styles.link}>Click here to add your business now</p>
                </div>
                <TipAds link="/" avatar="/imgs/ads/2.png" />
                <TipAds link="/" avatar="/imgs/ads/3.png" />
                {
                  this.state.hasAdsLoaded ? 
                  this.state.ads.map((item, i) => {
                    if (i == 1)
                    return <TipAds link="/" avatar={item.ad_x['seo_url']} />
                    
                  }) : <Spinner/>
                }
                <AfricaOneCard />
                </>
                ) : <Spinner/> }
                
                </div>
                
                
                
                
                </div>
                </div>
                </div>
                </>
                );
              }
            }
            
            export default Details;