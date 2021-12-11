import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/layouts/Footer.module.scss';

export const Footer = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.socialLinkContainer}>
    <div className={styles.socialLink}>
    <img src="imgs/logo.svg" alt="" />
    <div className={styles.link}>
    <span>Follow Africa one</span>
    <div>
    <Link href="https://facebook.com/theADASAPP"><img src="/imgs/icons/facebook.svg" alt="" /></Link>
    <Link href="https://twitter.com/@theADASAPP"><img src="/imgs/icons/twitter.svg" alt="" /></Link>
    <Link href="https://twitter.com/@theADASAPP"><img src="/imgs/icons/youtube.svg" alt="" /></Link>
    </div>
    </div>
    </div>
    
    </div>
    <div className={styles.sitemapContainer}>
    <div className={styles.sitemapFooter}>
    <div className={styles.sitemap}>
    <div>
    <div className={styles.item}>
    <p className={styles.title}>
    Africa One
    </p>
    <p className={styles.linkItem}><Link href="/countries">About Us</Link></p>
    <p className={styles.linkItem}><Link href="/countries">Countries</Link></p>
    <p className={styles.linkItem}><Link href="https://africaone.biz">Reviews</Link></p>
    <p className={styles.linkItem}><Link href="mailto:join@africaone.com">Join us</Link></p>
    <p className={styles.linkItem}><Link href="mailto:join@africaone.com">Covid Updates</Link></p>

    </div>
    <div className={styles.item}>
    <p className={styles.title}>
    Explore
    </p>
    <p className={styles.linkItem}><Link href="/politics">Politics</Link></p>
    <p className={styles.linkItem}><Link href="/business">Business</Link></p>
    <p className={styles.linkItem}><Link href="/technology">Tech & Science</Link></p>
    <p className={styles.linkItem}><Link href="/health">Health</Link></p>
    <p className={styles.linkItem}><Link href="/culture">Culture</Link></p>
    <p className={styles.linkItem}><Link href="/sports">Sports</Link></p>
    
    </div>
    </div>
    <div>
    <div className={styles.item}>
    <p className={styles.title}>
    Our Network
    </p>
    <p className={styles.linkItem}><Link href="https://mail.africaone.com">Africa One Mail</Link></p>
    <p className={styles.linkItem}><Link href="https://africaone.cloud">Cloud Hosting</Link></p>
    <p className={styles.linkItem}><Link href="https://my.africaone.cloud/cart.php?a=add&domain=register">Domain Registration</Link></p>
    <p className={styles.linkItem}><Link href="https://africaone.biz">Business Listing</Link></p>
    <p className={styles.linkItem}><Link href="https://adas.app">Digital Address</Link></p>
    </div>
    <div className={styles.item}>
    <p className={styles.title}>More</p>
    <p className={styles.linkItem}><Link href="mailto:editorial@africaone.com">Share your story</Link></p>
    <p className={styles.linkItem}><Link href="/">Content Guidelines</Link></p>
    <p className={styles.linkItem}><Link href="/">Terms of Service</Link></p>
    <p className={styles.linkItem}><Link href="/">Privacy Policy</Link></p>
    <p className={styles.linkItem}><Link href="/">Advertise With Us</Link></p>
    </div>
    </div>
    </div>
    
    <div className={styles.links}>
    {/* <p>NEWS  |  MAIL  |  CLOUD HOSTING  |  DATA BACK UP  |  BUSINESS LISTINGS  |   REVIEWS  |  ELECTRIFY AFRICA</p> */}
    <p className="copyright">Copyright © {new Date().getFullYear()} AfricaOne.com | Africa One is not responsible for the content of external sites.</p>
    </div>
    
    </div>
    </div>
    </div>
    </>
    )
  }