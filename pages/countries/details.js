import React, {Component} from 'react';
import AdsSlider from '../../components/pages/details/AdsSlider'; // ../../components/pages/details/AdsSlider
import MenuItem from '../../components/pages/details/MenuItem';
import Advertisement from '../../components/shared/Advertisement';
import styles from  '../../styles/components/pages/details/Index.module.scss';
import DataSource from '../../components/shared/DataSource';
import Spinner from '../../components/shared/Spinner';
import { getImageSrc } from '../../components/shared/SharedAPI';
import CountryNewsCard from '../../components/pages/countries/CountryNewsCard';

const dataSource = new DataSource();

class Details extends Component {
 constructor(props) {
   super(props);
   this.state = {
     country_name: '',
     countryInfo: [],
     news: [],
     done: false,
     newsLoaded: false,
   }
 }

 fetchCountryData = async (country_id, country_name) => {
  await dataSource.fetchCountryDataById(country_id).then(res => {
    const countryData = res.data;
    console.log("Fetched country data is", countryData);
    this.setState({
      countryInfo: countryData,
    });
    this.setState({done: true});
  }).catch(error => { console.log("Exception in fetching country data for id "+country_id+" is " + error) });

//   if(country_name){
//   await dataSource.fetchNewsByCountry(country_name).then(res => {
//     console.log("News for the country", res.data);
//     this.setState({
//       news: res.data,
//     });
//     this.setState({newsLoaded: true});
//   }).catch(error => { console.log("Exception in fetching news for a country", error) });
// }else{
//   console.log("No country found");
// }

}

 componentDidUpdate() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let country_id = params.get('id');
  let country_name = params.get('name');
  if(country_id && country_name){
      this.fetchCountryData(country_id, country_name);
  }
}

render() {
  return (
    <>
    {
    this.state.done ?
    this.state.countryInfo.map((item, i) => {

    return <div className={styles.container}>
      <AdsSlider />
      <div className={styles.header}>
        <div>
          <div>
            <p className={styles.countryName}>{item.country_name}</p>
            <p className={styles.key}>KEY FACTS</p>
            <div className={styles.ulGroup}>
              <ul>
                <li><span><b>Region: </b>{item.region}</span></li>
                <li><span><b>Population: </b>{item.population}</span></li>
                <li><span><b>Time Zone: </b>{item.time_zone}</span></li>
              </ul>
              <ul>
                <li><span><b>Area: </b>{item.area} </span></li>
                <li><span><b>Capital: </b>{item.capital}</span></li>
              </ul>
            </div>
          </div>
          <img src={getImageSrc(item.country_flag_readPath, 220, 136)} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.left}>
            <MenuItem
              title="TOURISM INFO"
              data={[
                'Requirements for Entry into Uganda',
                'Find the most attractive places',
                'Connect with tour and travel firms',
                'Hotels & Safari Lodges',
                'Brief About Uganda',
                'Weather & Climate',
              ]}
            />

            <MenuItem
              title="BUSINESS INFO"
              data={[
                'acts and Figures on Investment',
                'Why invest in Uganda',
                'Key Investment Sectors',
                'Investors Tools',
                'Registering a new company',
                'Industrial & Business Parks',
              ]}
            />

            <MenuItem
              title="USEFUL LINKS"
              data={[
                'acts and Figures on Investment',
                'Why invest in Uganda',
                'Key Investment Sectors',
                'Investors Tools',
                'Registering a new company',
                'Industrial & Business Parks',
              ]}
            />
          </div>

          <div className={styles.right}>
            <p className={styles.title}>BRIEF</p>
            <p className={styles.text}>
              {item.brief}
            </p>

            <div className={styles.cloneLeftMenu}>
              <MenuItem
                title="TOURISM INFO"
                data={[
                  'Requirements for Entry into Uganda',
                  'Find the most attractive places',
                  'Connect with tour and travel firms',
                  'Hotels & Safari Lodges',
                  'Brief About Uganda',
                  'Weather & Climate',
                ]}
              />

              <MenuItem
                title="BUSINESS INFO"
                data={[
                  'acts and Figures on Investment',
                  'Why invest in Uganda',
                  'Key Investment Sectors',
                  'Investors Tools',
                  'Registering a new company',
                  'Industrial & Business Parks',
                ]}
              />

              <MenuItem
                title="USEFUL LINKS"
                data={[
                  'acts and Figures on Investment',
                  'Why invest in Uganda',
                  'Key Investment Sectors',
                  'Investors Tools',
                  'Registering a new company',
                  'Industrial & Business Parks',
                ]}
              />
            </div>
            <p className={styles.title}>IN THE NEWS</p>
            <div className={styles.items}>

            <CountryNewsCard country_name={item.country_name}/>

              {/* <NewsCard
                avatar="/imgs/news/15.png"
                title="Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
              <NewsCard
                avatar="/imgs/news/16.png"
                title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
              <NewsCard
                avatar="/imgs/news/17.png"
                title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumm"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              /> */}
            </div>
          </div>

        </div>
        <Advertisement />
      </div>
    </div>
    })
    : <Spinner/>
  }
    </>
  );
}
}

export default Details;