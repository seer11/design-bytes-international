/** @format */

import { store } from "../app/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Head from "next/head";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

const progress = new ProgressBar({
  size: 2,
  color: "#00d0b0",
  className: "bar-of-progress",
  delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const Preloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, []);

  return (
    <Provider store={store}>
      {loading && (
        <Preloader>Loading...</Preloader>
      )}
      <Layout>
        <Head>
          <title>Design Bytes International</title>
          <meta
            name='description'
            content='Helping companies & individuals identify key solutions for their target markets. We boost their ability to create products. Our business model saves clients time and money. Don`t reinvent the wheel..'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
