import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import Searchbar from '../../components/pages/countries/Searchbar';
import styles from '../../styles/components/pages/countries/Index.module.scss';
import CountryGroup from '../../components/pages/countries/CountryGroup';
import DataSource from '../../components/shared/DataSource';
import Spinner from '../../components/shared/Spinner';

const dataSource = new DataSource();

const Index = () => {

  const [east_african_countries, setEastAfricanCountries] = useState([]);
  const [west_african_countries, setWestAfricanCountries] = useState([]);
  const [north_african_countries, setNorthAfricanCountries] = useState([]);
  const [south_african_countries, setSouthAfricanCountries] = useState([]);
  const [central_african_countries, setCentralAfricanCountries] = useState([]);

  const [isEastSet, setEastSet] = useState(false);
  const [isWestSet, setWestSet] = useState(false);
  const [isSouthSet, setSouthSet] = useState(false);
  const [isNorthSet, setNorthSet] = useState(false);
  const [isCentralSet, setCentralSet] = useState(false);
  
  const fetchEastAfricanCountries = async () => {
    await dataSource.fetchAfricanCountriesByRegion('East').then(res => {
      let east_side_countries = res.data;
      console.log("East African countries", east_side_countries);
      setEastAfricanCountries(east_side_countries);
      setEastSet(true);
    }).catch(error => { console.log("Exception in fetching east african countries in countries index component is ", error) });
  }
  
  const fetchWestAfricanCountries = async () => {
    await dataSource.fetchAfricanCountriesByRegion('West').then(res => {
      let west_side_countries = res.data;
      console.log("West African countries", west_side_countries);
      setWestAfricanCountries(west_side_countries);
      setWestSet(true);
    }).catch(error => { console.log("Exception in fetching west african countries in countries index component is ", error) });
  }
  
  const fetchNorthAfricanCountries = async () => {
    await dataSource.fetchAfricanCountriesByRegion('North').then(res => {
      let north_side_countries = res.data;
      console.log("North African countries", north_side_countries);
      setNorthAfricanCountries(north_side_countries);
      setNorthSet(true);
    }).catch(error => { console.log("Exception in fetching north african countries in countries index component is ", error) });
  }
  
  const fetchSouthAfricanCountries = async () => {
    await dataSource.fetchAfricanCountriesByRegion('South').then(res => {
      let south_side_countries = res.data;
      console.log("South African countries", south_side_countries);
      setSouthAfricanCountries(south_side_countries);
      setSouthSet(true);
    }).catch(error => { console.log("Exception in fetching south african countries in countries index component is ", error) });
  }
  
  const fetchCentralAfricanCountries = async () => {
    await dataSource.fetchAfricanCountriesByRegion('Central').then(res => {
      let central_side_countries = res.data;
      console.log("Central African countries", central_side_countries);
      setCentralAfricanCountries(central_side_countries);
      setCentralSet(true);
    }).catch(error => { console.log("Exception in fetching central african countries in countries index component is ", error) });
  }
  
  
  
  
  useEffect(async () => {
    fetchEastAfricanCountries();
    fetchWestAfricanCountries();
    fetchNorthAfricanCountries();
    fetchSouthAfricanCountries();
    fetchCentralAfricanCountries();
  }, []);
  
  
  return (
    <div className={styles.bodyContainer}>
    <div className={styles.body}>
    <div className={styles.main}>
    <div className={styles.header}>
    <img src="imgs/world-map.png" className={styles.map} />
    <div className={styles.text}>
    <p className={styles.title}>
    Find Helpful Information About<br />
    All <Link href="/news"><span>African</span></Link> Countries.
    </p>
    <p className={styles.description}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    <br /><br />
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    </div>
    
    <div className={styles.searchBar}>
    <Searchbar />
    </div>
    </div>
    <div className={styles.content}>
    
    { isNorthSet? 
      <CountryGroup
      title="NORTH AFRICA"
      data={north_african_countries}
      /> : <Spinner/>}
      
      { isEastSet?
        <CountryGroup
        title="EAST AFRICA"
        data={east_african_countries}
        /> : <Spinner/>}
        
        { isCentralSet? 
          <CountryGroup
          title="CENTRAL AFRICA"
          data={central_african_countries}
          /> : <Spinner/>}
          
          { isWestSet? 
            <CountryGroup
            title="WEST AFRICA"
            data={west_african_countries}
            /> : <Spinner/>}
            
            { isSouthSet? 
              <CountryGroup
              title="SOUTHERN AFRICA"
              data={south_african_countries}
              /> : <Spinner/>}
              
              </div>
              </div>
              </div>
              </div >
              );
            }
            
            export default Index;