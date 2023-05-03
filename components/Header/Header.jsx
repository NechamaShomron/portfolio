import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [showMobile, setShowMobile] = useState(false);
  const logoImage = '/logo.PNG';
  function toggleMobileView() {
    setShowMobile(!showMobile);
  }
  function closeMobileView(e) {
    setShowMobile(false);
    e.stopPropagation();
  }
  return (
    <>
      <nav className={styles.navbar}>
        <Image className={styles.logo_image} role="presentation" loader={() => logoImage} src={logoImage} alt="logo" width={40} height={40} unoptimized priority />
        <ul className={showMobile ? `${styles.navbar_menu} ${styles.active}` : styles.navbar_menu}>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="/" className={styles.navbar_link}>Home</a>
          </li>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="/about" className={styles.navbar_link}>About</a>
          </li>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="/projects" className={styles.navbar_link}>Projects</a>
          </li>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="/contact" className={styles.navbar_link}>Contact</a>
          </li>
        </ul>
        <div
          role="presentation"
          className={styles.hamburger_container}
          onClick={toggleMobileView}
        >
          <span className={showMobile ? `${styles.hamburger_bar} ${styles.active}` : styles.hamburger_bar} />
          <span className={showMobile ? `${styles.hamburger_bar} ${styles.active}` : styles.hamburger_bar} />
          <span className={showMobile ? `${styles.hamburger_bar} ${styles.active}` : styles.hamburger_bar} />
        </div>
      </nav>
      <div className={styles.hero_section_container} role="presentation" onClick={(e) => closeMobileView(e)} />
    </>
  );
}
