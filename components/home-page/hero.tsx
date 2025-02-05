/** @format */

import Image from "next/image";
import styled from "styled-components";
import { FC, memo, useRef, useEffect, useState } from "react";

const Hero: FC = () => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			// top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	return (
		<HeroWrapper style={{ position: "relative" }}>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{ paddingTop: "7rem", position: "absolute", top: "-100px" }}
				className='auto-scroll'></div>

			{/* <AbsoluteBackGroundlinearGradient>
				<LinearGradientImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/es.png'
						alt='qsak Image'
						layout='fill'
						objectFit='cover'
					/>
				</LinearGradientImageContainer>
			</AbsoluteBackGroundlinearGradient> */}

			<CustomContainer>
				<ContentContainer>
					<h1>
						We are <span>always</span> there for all your needs
					</h1>

					<p>
						We are experienced in the field of interface design for
						websites, mobile applications
					</p>

					<JobsContain>
						<div>
							<p className='job-success'>30+</p>
							<p>Job Success</p>
						</div>
						<div>
							<p className='job-success'>40+</p>
							<p>Products</p>
						</div>
					</JobsContain>

					<CustomButton>MAKE A SCHEDULE</CustomButton>
				</ContentContainer>

				{/* <ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/home/home1.jpg'
						alt='Hero Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer> */}

				{/* <HiddenImageContainer>
					<Image
						src='/home/home1.jpg'
						alt='Hero Image'
						width={500}
						height={400}
						layout='responsive'
					/>
				</HiddenImageContainer> */}
			</CustomContainer>
		</HeroWrapper>
	);
};

export default memo(Hero);

const HeroWrapper = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100vw;
	color: white;
	background: var(--color-primary);
	/* background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	); */
	padding: 5rem 9%;
	padding-top: 12rem;

	* {
		opacity: 0.99;
		z-index: 50;
	}

	@media (min-width: 768px) {
		padding: 8rem 9%;
		padding-top: 15rem;
	}
	@media (min-width: 1169px) {
		padding-bottom: 300px !important;
	}
`;

const ContentContainer = styled.div`
	flex: 1;

	max-width: 36.1875rem;
	margin-right: 2rem;

	h1 {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 4rem;
		line-height: 150%;
		margin-bottom: 1.5rem;
		@media (max-width: 768px) {
			font-size: 2rem;
		}
		@media (max-width: 568px) {
			font-size: 1.5rem;
		}
		span {
			color: var(--color-secondary);
		}
	}
	p {
		margin: 1rem 0;
		font-style: normal;
		font-weight: normal;
		font-size: 1rem;
		line-height: var(--line-height);
		font-size: 1.1rem;
	}
	@media (max-width: 768px) {
		max-width: 100vw;
	}
`;

const CustomContainer = styled.div`
	position: relative;
	z-index: 100;
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	min-height: 43.5625rem;
	display: flex;
	color: white;
	padding-left: 4px;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const ImageContainer = styled.div`
	flex: 1;
	width: 40.5rem;
	min-width: 40.5rem;
	height: 43.563rem;
	max-height: 43.5625rem;
	overflow: hidden;
	img {
		display: block;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const JobsContain = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;
	max-width: 400px;
	min-width: 300px;

	@media (max-width: 568px) {
		display: none;
	}
	.job-success {
		border-left: 2px solid var(--color-secondary);
		font-weight: bold;
		font-size: 20px;
	}
	p {
		padding-left: 1rem;
		font-size: 1rem;
	}
`;

const CustomButton = styled.button`
	min-width: 190px;
	height: 48px;
	font: inherit;
	cursor: pointer;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition-duration: var(--transition-duration);
	color: white;
	margin-top: 3rem;
	display: block;
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	@media (min-width: 768px) {
		display: none;
	}
	@media (max-width: 768px) {
		margin-top: -6rem;
	}
	img {
		object-fit: cover;
		display: block;
	}
`;

const AbsoluteBackGroundlinearGradient = styled.div`
	width: 1500px;
	height: 1500px;
	top: -700px;
	left: -700px;
	position: absolute;
	pointer-events: none;
	z-index: 10;
	@media (min-width: 1500px) {
		width: 1800px;
		height: 1700px;
	}
`;

const LinearGradientImageContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;
