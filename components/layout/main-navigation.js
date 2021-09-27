/** @format */

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import React, { fragment } from "react";
import { useRouter } from "next/router";

import Logo from "./logo";
import SideBar from "./side-bar";

function MainNavigation() {
	const [burgerMenuStatus, SetBurgerMenuStatus] = useState(false);
	const router = useRouter();

	return (
		<fragment>
			<Header id='header'>
				<CustomContainer>
					<Link href='/'>
						<a>
							<Logo />
						</a>
					</Link>
					<nav className='show'>
						<ul>
							<li
								className='hid-ss'
								id={router.pathname == "/" ? "active" : ""}>
								<Link href='/'>HOME</Link>
							</li>
							<li className='hid-ss'>
								<Link href='/work'>WORK</Link>
							</li>
							<li
								className='hid-s'
								id={router.pathname == "/services" ? "active" : ""}>
								<Link href='/services'>SERVICES</Link>
							</li>
							<li
								className='hid-s'
								id={router.pathname == "/blog" ? "active" : ""}>
								<Link href='/blog'>BLOG</Link>
							</li>
							<li
								className='hid-m'
								id={router.pathname == "/about-us" ? "active" : ""}>
								<Link href='/about-us'>ABOUT US</Link>
							</li>
							<li
								className='hid-m'
								id={router.pathname == "/contact" ? "active" : ""}>
								<Link href='/contact'>CONTACT US</Link>
							</li>

							<li className='hid-big'>
								<MenuIcon
									style={{
										cursor: "pointer",
									}}
									onClick={() => {
										SetBurgerMenuStatus(true);
									}}
								/>
							</li>
						</ul>
					</nav>
					<button>GET STARTED</button>
				</CustomContainer>
			</Header>
			{burgerMenuStatus && (
				<SideBar
					burgerMenuStatus={burgerMenuStatus}
					SetBurgerMenuStatus={SetBurgerMenuStatus}
				/>
			)}
		</fragment>
	);
}

export default MainNavigation;

const CustomContainer = styled.div`
	width: 100%;
	height: 7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 87.5rem;
	margin: 0 auto;
`;

const Header = styled.header`
	color: white;
	background: var(--color-primary);
	/* background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	); */
	width: 100%;
	height: 7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 9%;
	width: 100vw;
	position: sticky;
	top: 0;
	z-index: 10;
	a {
		color: white;
	}
	nav {
		flex: 1;
		@media (min-width: 568px) {
			min-width: 20rem;
			max-width: 40rem;
		}
		ul {
			display: flex;
			align-items: center;
			justify-content: center;
			@media (max-width: 568px) {
				justify-content: flex-end;
			}
			li {
				margin: 0 var(--size-4);
				transition: var(--transition-duration);
				min-width: fit-content;
				a {
					display: block;
					transition: var(--transition-duration);
					&:hover,
					&:active {
						border-bottom: 2px solid var(--color-secondary);
						transition: var(--transition-duration);
					}
				}
			}
			li.hid-m {
				@media (max-width: 991px) {
					display: none;
				}
			}
		}
		li.hid-s {
			@media (max-width: 768px) {
				display: none;
			}
		}
		li.hid-ss {
			@media (max-width: 568px) {
				display: none;
			}
		}
		li.hid-big {
			@media (min-width: 568px) {
				display: none;
			}
		}
		li#active a {
			border-bottom: 2px solid var(--color-secondary);
			transition: var(--transition-duration);
		}
	}
	button {
		width: 148px;
		height: 48px;
		font: inherit;
		cursor: pointer;
		background-color: #ffffff;
		border: 1px solid #ffffff;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		transition-duration: var(--transition-duration);
		min-width: fit-content;
		&:hover,
		&:active {
			border: 2px solid var(--color-secondary);
		}
		@media (max-width: 568px) {
			display: none;
		}
	}
`;
