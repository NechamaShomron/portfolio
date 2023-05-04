import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import getLocalData from '../../lib/localdata';
import styles from '../styles/About.module.css';

// eslint-disable-next-line react/prop-types
export default function About({ bioData }) {
  const [data, setData] = useState(bioData);

  useEffect(() => {
    setData(bioData);
  }, [bioData]);

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        ABOUT
        {' '}
        <span className={styles.inner_title}>ME</span>
      </div>
      <div className={styles.sub_title}>{data && data.subIitle}</div>
      <Image width={220} height={220} src={data && data.PictureSrc} role="presentation" loader={() => data && data.PictureSrc} alt="My Image" className={styles.my_image} unoptimized priority />
      <div className={styles.bio}>
        {data && data.Bio}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const bioData = await getLocalData('json/bioData.json');

  return {
    props: { bioData },
  };
}
