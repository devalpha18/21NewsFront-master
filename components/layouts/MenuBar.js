import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/layouts/MenuBar.module.scss';

export const MenuBar = () => {
  return (
    <div className={styles.container}>
    <a href="/"><img src="imgs/icons/home.svg" alt="" /></a>
    <a href="/">Home</a>
    <a href="/politics">Politics</a>
    <a href="/business">Business</a>
    <a href="/technology">Tech & Science</a>
    <a href="/health">Health</a>
    <a href="/culture">Culture</a>
    <a href="/sports">Sports</a>
    <a href="/world">Travel</a>
    
    <div class="btn-group">
    <a class="btn bg-white text-dark dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Africa
    </a>
    <div class="dropdown-menu">
    <a class="dropdown-item" href="/countries">East AFrica</a>
    <a class="dropdown-item" href="/countries">West Africa</a>
    <a class="dropdown-item" href="/countries">South Africa</a>
    <a class="dropdown-item" href="/countries">North Africa</a>
    <a class="dropdown-item" href="/countries">Countries</a>
    </div>
    </div>
    
    <div class="btn-group">
    <a class="btn bg-white text-dark dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    World
    </a>
    <div class="dropdown-menu">
    <a class="dropdown-item" href="/countries">Europe</a>
    <a class="dropdown-item" href="#">USA</a>
    <a class="dropdown-item" href="#">Latin AMERICA</a>
    <a class="dropdown-item" href="#">Middle East</a>
    <a class="dropdown-item" href="#">Asia Pacific</a>
    </div>
    </div>
    
    
    
    </div>
    );
  }