import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const myImagePath = '/my_image.svg';
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Protfolio Nechama Shomron</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body_container}>
        <div className={styles.hero_container}>
          <div className={styles.title}>
            Hello, I&apos;m
            <span className={styles.name}> Nechama Shomron.</span>
          </div>
          <Image width={170} height={150} src={myImagePath} role="presentation" loader={() => myImagePath} alt="My Image" className={styles.my_image} unoptimized priority />
        </div>
        <div className={styles.profession}>And I&apos;m a Full Stack Web Developer!</div>
        <div className={styles.introduction}>
          <span role="presentation">
            {' '}
            I&apos;m from Tel Aviv and
            I specialize in back end & front end development.
          </span>
          <br />
          <span>
            I have a passion for developing innovative apps and for
            learning new platforms, techniques,
            and programming languages.
          </span>
          <br />
          <span>
            Skilled in Angular, React, JavaScript,
            Java, C#, HTML, CSS, Node.js,SQL, MongoDB and more.
          </span>
        </div>
      </div>
    </div>
  );
}
