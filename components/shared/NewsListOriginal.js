import { Component } from "react";
import Titlebar from '../../components/shared/Titlebar.js';
import PaidContent from '../../components/shared/PaidContent';
import ConfirmSharingStory from '../../components/shared/ConfirmSharingStory';
import MostRead from '../../components/shared/MostRead.js';
import TipAds from '../../components/shared/TipAds';
import Email from '../../components/shared/Email';
import RegisterCard from '../../components/pages/home/RegisterCard.js';
import TipNewsCard from '../../components/shared/TipNewsCard';
import BusinessItem from '../../components/shared/BusinessItem';
import AfricaOneCard from '../../components/shared/AfricaOneCard';
import DataSource from '../shared/DataSource';
import { useHistory } from 'react-router-dom';
import Image from 'next/image';
import Article  from '../../pages/article';
import { getImageSrc, truncate, encryptStr } from './SharedAPI';
import styles from '../../styles/components/pages/category/Index.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";


const dataSource = new DataSource();
class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
          top_businesses: [],
          ads:[],
          titlebar: {
            title: 'Sport',
            tags: [
              { name: 'Football', link: '/' },
              { name: 'Rugby', link: '/' },
              { name: 'Cricket', link: '/' }
            ],
            more: true,
            hide: true
          },
          hasRun: false,
        }
    }

    readDetails = (item, isRun) => {
      
     const history = useHistory();
      // return <NewsDetail news={item} hasRun={isRun}/>
      // return <Redirect to="/newsdetail" news={item} hasRun={isRun}/>;
      // this.props.history.push('/newsdetail', { hasRun:isRun, data: {item} });
    //   return browserHistory.push({
    //     pathname: "/newsdetail",
    //     state: {hasRun:isRun, news: item}
    // });

    history.push("/newsdetail");
      

     }

     fetchTopBusinessesNear = async () => {
      var data = { category: this.state.titlebar.title }
      await dataSource.fetchTopBusinessesNear(data).then(res => {
        let respData = res.data;
        this.setState({
          top_businesses: respData,
        });
      }).catch(error => { console.log("Exception in fetching top near businesses is " + error) });
  
    }

    getAds = async () => {
      let data = this.state.titlebar.title;
      await dataSource.fetchAds(data).then(res => {
        this.setState({
          ads: res.data,
        });
      }).catch(error => { console.log("Exception in fetching ads is " + error) });
    }

   
    componentDidMount(){
      this.fetchTopBusinessesNear();
      this.getAds();
    }


    render(){
        return(
            <div className={styles.main}>
            <div className={styles.left}>
            <Titlebar {...this.props.titlebar} />
            {
              (this.props.hasRun) ? (
                this.props.news.map((item, i) => {
                  if (i == 0)
                    return <div className={styles.category} key={i}>
                      <img src={getImageSrc(item.news_image, 620, 310)} />
                      <div>
                        <p className={styles.title}>{item.news_title}</p>
                        <p className={styles.description}>{truncate(item.short_description, 250)}</p>
                        <Router><Link to="">View Full Story</Link></Router>
                      </div>
                    </div>
                })
              ) : (null)
            }


            <div className={styles.items}>
              {
                (this.props.hasRun) ? (
                  this.props.news.map((item, i) => {
                    if (i > 0)
                    return (
                      <Router>
                        <Link to={{
                            pathname: `/category/details/${i}`,
                            news_id: i,
                            state: item,
                            news: this.props.news,
                          }} >
                      <div className={styles.item} key={i}>
                        
                        <img src={getImageSrc(item.news_image, 300, 150)}/>
                        <div>
                          <p>
                            <span className={styles.tag}>{this.props.titlebar.title}</span> Published: {item.published_on}
                          </p>
                          <p className={styles.title}>{item.news_title}</p>
                          <p className={styles.description}>{truncate(item.short_description, 155)}</p>
                        </div>
                      </div>
                      </Link>
                      <Route exact path="/category/details/:newsId" component={Article}/>
                      </Router>
                    )
                  })
                ) : (null)
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
            (this.props.hasRun) ? (
              (this.props.news) ? (
                <MostRead title="Most Read" count={5} data={this.props.news}/>

                ) : (null)
            ) : (null)
              }
            {
              this.state.ads.map((item, i) => {
                if (i == this.props.adIndex)
                  return <TipAds link="/" avatar={ getImageSrc(item.advertisement_image, 300, 600) } /> 
              })
             }
<Email email="yourname@africaone.com" />
<RegisterCard />
<TipAds link="/" avatar="/imgs/ads/5.png" />

           <div className={styles.right}>
            <TipNewsCard title="Top businesses near you">
              {
                this.state.top_businesses.map(function (item, i) {
                  if (i < 3)
                    return <BusinessItem {...item} business_image_url={item.business_logo} imgWidth={80} imgWeight={80}/>
                })
              }
            </TipNewsCard>
            <p className={styles.link}>Click here to add your business now</p>
          </div>
<TipAds link="/" avatar="/imgs/ads/2.png" />
<TipAds link="/" avatar="/imgs/ads/3.png" />
<TipAds link="/" avatar="/imgs/ads/6.png" />
<AfricaOneCard />
</div>



</div>


        )
    }
}

export default NewsList