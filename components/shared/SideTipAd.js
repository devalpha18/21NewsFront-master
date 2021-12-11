import { Component} from 'react';
import TipAds from '../shared/TipAds';
import { getImageSrc } from '../shared/SharedAPI';
import Spinner from './Spinner';

const SideTipAd = props => {
       return(
         props.gotAds) ? (
            props.ads.map((item, i) => {
              if( i== props.adIndex)
              return <TipAds link="/" avatar={item.ad_x['seo_url']} />
            })
          ) : <Spinner/>
}

export default SideTipAd;