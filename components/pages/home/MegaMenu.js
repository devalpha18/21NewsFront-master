import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FullSearchBar from './FullSearchBar';
import useOnclickOutside from "react-cool-onclickoutside";
import DataSource from '../../shared/DataSource';
import styles from '../../../styles/components/pages/home/MegaMenu.module.scss';


const dataSource = new DataSource();
const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [newsCats, setNewsCats] = useState([]);
  const [trendingPost, setTrendingPost] = useState(null);

  const handleBtnClick = async() => {
    fetchNewsCat().then(
      fetchTrendingNews()
    ).then(setOpenMenu(!openMenu));
   
    // setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const ref = useOnclickOutside(() => {
    closeMenu();
  });

  const fetchTrendingNews = async() =>{
    await dataSource.fetchTrendingNews()
      .then((res) =>{
         setTrendingPost(res);
      })
      .then(setisLoading(true))
      .catch(error => { console.log("Exception in fetching trending news in Mega Menu component", error) });


      // .then(res => {
      //   console.log("Stuff like hhhs", res);
      //   setTrendingPost(res);
      //   setHasRun(true);
      //   })


 }


  const fetchNewsCat = async () => {
    await dataSource.fetchNewsCategories()
              .then((res) => {
                setNewsCats(res.data)
              })
              .then(setisLoading(true))
              .catch(error => { console.log("Exception in fetching news cat in Mega Menu component", error) });

  }

  useEffect(async () => {
    fetchTrendingNews();
    fetchNewsCat();
  }, []);




  return (
    <>
      <div ref={ref}>
        <button onClick={handleBtnClick}><img src="/imgs/icons/menu.svg" alt="" /></button>
        {
            isLoading ? (
              openMenu ? (
            <div className={styles.container}>
              <div className={styles.megaMenu}>
                <FullSearchBar />
                <div className={styles.menus}>
                  <div className={styles.links}>
                    <div>

                    {
                   newsCats.map((item, i) => {
                    <div className={styles.item}>
                    <p className={styles.title}>dallington</p>
                    <p><Link href="/">Markets</Link></p>
                    <p><Link href="/">Tech</Link></p>
                    <p><Link href="/">Media</Link></p>
                    <p><Link href="/">Success</Link></p>
                    <p><Link href="/">Perspective</Link></p>
                  </div>
                   })
                }

                  {
                   newsCats.map(item => {
                    <p>{item.category_name}</p>
                   })
                }
                      {/* <div className={styles.item}>
                        <p className={styles.title}>Business</p>
                        <p><Link href="/">Markets</Link></p>
                        <p><Link href="/">Tech</Link></p>
                        <p><Link href="/">Media</Link></p>
                        <p><Link href="/">Success</Link></p>
                        <p><Link href="/">Perspective</Link></p>
                      </div>
                      <div className={styles.item}>
                        <p className={styles.title}>Health</p>
                        <p><Link href="/">Food</Link></p>
                        <p><Link href="/">Fitness</Link></p>
                        <p><Link href="/">Wellness</Link></p>
                        <p><Link href="/">Parenting</Link></p>
                        <p><Link href="/">Vital Signs</Link></p>
                      </div>
                      <div className={styles.item}>
                        <p className={styles.title}>Entertainment</p>
                        <p><Link href="/">Stars</Link></p>
                        <p><Link href="/">Screen</Link></p>
                        <p><Link href="/">Binge</Link></p>
                        <p><Link href="/">Culture</Link></p>
                        <p><Link href="/">Media</Link></p>
                      </div> */}
                    </div>

                    <div>
                      <div className={styles.item}>
                        <p className={styles.title}>Tech</p>
                        <p><Link href="/">Innovate</Link></p>
                        <p><Link href="/">Gadget</Link></p>
                        <p><Link href="/">Upstarts</Link></p>
                        <p><Link href="/">Work Transformed</Link></p>
                        <p><Link href="/">Innovative Cities</Link></p>
                      </div>
                      <div className={styles.item}>
                        <p className={styles.title}>Style</p>
                        <p><Link href="/">Arts</Link></p>
                        <p><Link href="/">Design</Link></p>
                        <p><Link href="/">Fashion</Link></p>
                        <p><Link href="/">Architecture</Link></p>
                        <p><Link href="/">Luxury</Link></p>
                      </div>
                      <div className={styles.item}>
                        <p className={styles.title}>Sports</p>
                        <p><Link href="/">Football</Link></p>
                        <p><Link href="/">Tennis</Link></p>
                        <p><Link href="/">Motorsport</Link></p>
                        <p><Link href="/">Golf</Link></p>
                        <p><Link href="/">Basket Ball</Link></p>
                      </div>
                    </div>

                  </div>

                  {
                  trendingPost.map((item, i) =>{
                    <div className={styles.ads}>
                    <div className={styles.titlebar}>Trending</div>
                    <div className={styles.card}>
                      <img src="imgs/mega-menu.png" alt="" />
                      <div className={styles.gradient}></div>
                      <p className={styles.title}>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy.</p>
                    </div>
                  </div>
                   })
                }


                
                </div>
                <div className={styles.footer}>
                  <span>Follow Africa one</span>
                  <div className={styles.buttonGroup}>
                    <button><img src="/imgs/icons/facebook.svg" alt="" /></button>
                    <button><img src="/imgs/icons/twitter.svg" alt="" /></button>
                    <button><img src="/imgs/icons/youtube.svg" alt="" /></button>
                  </div>
                </div>
              </div>
            </div>
          ) : (null)
          ) : (null)
        }
      </div>
    </>
  )
}

export default MegaMenu;
