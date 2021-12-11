import React, { useState } from 'react';
import Link from 'next/link';
import { SearchBar, MenuBar } from '../components/layouts';
import FullSearchBar from '../components/pages/home/FullSearchBar';
import MegaMenu from '../components/pages/home/MegaMenu';
import Search from '../components/pages/home/Search';
import Head from 'next/head';
import styles from '../styles/components/layouts/Header.module.scss';

export const Header = () => {
  
  const [open, setOpen] = useState(false);
  const handleMobileMenu = () => {
    setOpen(!open);
  }
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    <title>Africa One News</title>
    {/* <script data-ad-client="ca-pub-5234180718888746" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
    </Head>
    <div className={styles.container}>
    <div className={styles.desktopMenu}>
    <div className={styles.headerContainer}>
    <div className={styles.header}>
    <img src="imgs/logo.svg" alt="" />
    <SearchBar />
    <a href="https://mail.africaone.com">
    <img src="imgs/mail.svg" alt="" />
    </a>
    </div>
    </div>
    <div className={styles.menuContainer}>
    <div className={styles.menubar}>
    <MenuBar />
    <div className={styles.toolbar}>
    <Search />
    <MegaMenu />
    </div>
    </div>
    </div>
    </div>
    
    <div className={styles.mobileMenu}>
    <div className={styles.headerContainer}>
    <div className={styles.searchField}>
    <label htmlFor="">Search</label>
    <input type="text" placeholder="restaurants, hotels..." />
    <button><img src="imgs/icons/search.svg" alt="" /></button>
    </div>
    <button>ADD YOUR BUSINESS</button>
    </div>
    <div className={styles.menuContainer}>
    <button onClick={handleMobileMenu}><img src="imgs/icons/hamburger.svg" alt="" /></button>
    <img src="imgs/logo.svg" alt="" />
    <button><img src="imgs/icons/search.svg" alt="" /></button>
    </div>
    </div>
    
    <div className={`${styles.mobileSlideMenu} ${open ? styles.open : ``}`}>
    <FullSearchBar />
    <div className={styles.links}>
    <Link href="/home">News</Link>
    <Link href="/" as="/news">News</Link>
    <Link href="/" as="/business">Business</Link>
    <Link href="/" as="/sports">Sports</Link>
    <Link href="/" as="/technology">Tech & Science</Link>
    <Link href="/" as="/world">World</Link>
    <Link href="/" as="/innovation">Innovation</Link>
    <Link href="/" as="/entertainment">Entertainment & Arts</Link>
    <Link href="/" as="/health">Health</Link>
    <Link href="/" as="/politics">Politics</Link>
    <Link href="/" as="/videos">Videos</Link>
    <Link href="/" as="/countries">Countries</Link>
    </div>
    
    <div className={styles.link}>
    <span>Follow Africa ones</span>
    <div>
    <button><img src="imgs/icons/facebook.svg" alt="" /></button>
    <button><img src="imgs/icons/twitter.svg" alt="" /></button>
    <button><img src="imgs/icons/youtube.svg" alt="" /></button>
    </div>
    </div>
    </div>
    </div>
    </>
    )
  }