import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/layouts/SearchBar.module.scss';
import { useRouter } from 'next/router';
import {REVIEWS_FRONTEND} from '../../config/env';


const initialState = {
  business: '',
  location: '',
}

export const SearchBar = () => {

  const router = useRouter();

  const [state, setData] = useState(initialState);

  // const fetchData = async(business, location) => {
 
  //   const BASE_API_URL = Path.REVIEW_API_URL;
  //   const res = await fetch(BASE_API_URL+'business/search', {
  //     body: JSON.stringify({
  //       business: business,
  //       location: location,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   });
    
  //   const result = await res.json();
  //   let respCode = result.statusCode;
  //   let message = result.message;
  //   let businessInfo = result.data;

  //   if (respCode == 0) {
  //     router.push({
  //       pathname: Path.REVIEW_PORTAL_URL+'business/details',
  //       query: { data: JSON.stringify(businessInfo)}
  //       });
  //   }else{
  //      alert(message);
  //   };

  // }

  const handleSearchBusiness= () => {
      if(state.business && state.location) {
      // alert("Business "+state.business+" and location "+state.location+"");
        router.push({
          pathname: REVIEWS_FRONTEND +'business',
          query: { data: state.business, location: state.location}
          });
      }else{
        alert("Please enter business and location");
      }
      // https://africaone.biz/category
  };

  const handleGotoBusiness = () => {
    router.push({
      pathname: 'https://africaone.biz/login',
      });
  }

 
  return (

    <div className={styles.container}>
    <div className={styles.inputGroup}>
      <div className={`${styles.textField} ${styles.borderRight}`}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" value={state.business} placeholder="restaurants, hotels, spas…" onChange={event => setData({...state, business: event.target.value})} />
      </div>
      <div className={styles.textField}>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" value={state.location} placeholder="Uganda" onChange={event => setData({...state, location: event.target.value})} />
      </div>
    </div>
    <button onClick={handleSearchBusiness}>SEARCH</button>
    <button onClick={handleGotoBusiness}>ADD YOUR BUSINESS</button>
  </div>

  )
}