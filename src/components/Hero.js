import React from 'react';
import styled from 'styled-components';

export default function Hero({ img, title, max, children }) {
	console.log(max);
	return (
		<HeroWrapper max={max} img={img}>
			<div className="banner">
				<h1 className="title">{title}</h1>
				{children}
			</div>
		</HeroWrapper>
	);
}

const HeroWrapper = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: ${(props) => (props.max ? '100vh' : '60vh')};
	color: white;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url(${(props) => props.img}) center/cover no-repeat;
	.title {
		padding-top: 2rem;
		font-size: 3.5rem;
		text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
		text-transform: uppercase;
		letter-spacing: 0.3rem;
	}
`;

Hero.defaultProps = {
	img: window.location.origin + '/static_images/mainBcg.jpeg'
};
