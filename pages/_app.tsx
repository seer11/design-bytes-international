import { store } from "../app/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
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

// Define a CSS spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the spinner
const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #cd8b49;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

// Preloader styled component
const Preloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #112d69;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.div`
  display: ${(props: { visible: boolean }) => (props.visible ? 'block' : 'none')};
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout in case the component is unmounted before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <Preloader><Spinner /></Preloader>
      ) : (
        <Content visible={!loading}>
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
        </Content>
      )}
    </Provider>
  );
}

export default MyApp;
