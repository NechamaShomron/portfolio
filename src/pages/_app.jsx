/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import Header from '../../components/Header/Header';

// eslint-disable-next-line import/no-unresolved
import '@/styles/globals.css';
// eslint-disable-next-line import/order, no-unused-vars
import { AppProps } from 'next/app';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
