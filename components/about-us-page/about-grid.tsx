/** @format */
import styled from "styled-components";
import { FC, memo } from "react";

import GridItem from "./grid-item";

const Grid: FC = () => {
	return (
		<GridWrapper>
			<GridContainer>
				<GridItem
					src='/about-us/tem-img.png'
					title='Co-Founder & CEO'
					founder='Founder'
					name='Kashif Ahmad'
				/>

				<GridItem
					src='/about-us/tem3.png'
					title='Co-Founder & CTO'
					founder='Founder'
					name='Abid Rozdar'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='Co-Founder & CFO'
					founder='Founder'
					name='Ameer Hayat'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='Co-Founder & COO'
					founder='Founder'
					name='Ejaz Karim'
				/>

				{/* <GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Muneer Hayat'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Tanveer'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Developer'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Faris Setiawan'
				/> */}

				<GridItem join='Join' />
			</GridContainer>
		</GridWrapper>
	);
};

export default memo(Grid);

const GridWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3.75rem;
`;

const GridContainer = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (min-width: 568px) {
		gap: 3rem;
	}
`;
