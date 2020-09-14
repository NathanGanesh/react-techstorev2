import React from 'react';
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';
import styled from 'styled-components';

export default function Services() {
	let services = [
		{
			id: 1,
			icon: <FaDolly />,
			title: 'free shipping',
			text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus.'
		},
		{
			id: 2,
			icon: <FaRedo />,
			title: '30 days return policy',
			text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus.'
		},
		{
			id: 3,
			icon: <FaDollarSign />,
			title: 'secured payment',
			text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus.'
		}
	];

	return (
		<ServicesWrapper>
			<div className="services">
				{services.map((item) => {
					return (
						<div key={item.id}>
							<div className="service-icon">{item.icon}</div>
							<h6>{item.title}</h6>
							<p>{item.text}</p>
						</div>
					);
				})}
			</div>
		</ServicesWrapper>
	);
}

const ServicesWrapper = styled.section`
	.services {
		background: cadetblue;
		display: flex;
		padding: 20px 35px;

		text-align: center;
		justify-content: center;
	}
	.service-icon {
		font-size: 2.5rem;
		/* padding-top: 30px; */
		color: black;
	}
	h6 {
		font-size: 1.2rem;
	}
	p {
		color: black;
	}
`;
