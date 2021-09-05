/** @format */

import Head from "next/head";
import Router from "next/router";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 4,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#00daff",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>PHOENIX SOFTWARE SOLUTION</title>
				<meta
					name='description'
					content='Helping companies & individuals identify key solutions for their target markets. We boost their ability to create products. Our business model saves clients time and money. Don`t reinvent the wheel..'
				/>
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
