import React from 'react';
import { PageConsumer } from '../context/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//sidebar
export default function Sidebar() {
	return (
		<PageConsumer>
			{(value) => {
				const { sideNav, links, handleSideNavToggleOn } = value;
				return (
					<SideWrapper toggle={sideNav}>
						<ul>
							{links.map((link) => {
								return (
									<li key={link.id}>
										<Link to={link.path} onClick={handleSideNavToggleOn} className="sidebar-link">
											{link.text}
										</Link>
									</li>
								);
							})}
						</ul>
					</SideWrapper>
				);
			}}
		</PageConsumer>
	);
}

const SideWrapper = styled.nav`
	position: fixed;
	top: 50px;
	left: 0;
	width: 350px;
	height: 100%;

	background: lightgrey;
	z-index: 1;
	border-right: 4px solid lightblue;
	transition: all 0.3s ease-in-out;
	transform: ${(props) => (props.toggle ? 'translateX(0)' : 'translateX(-100%)')};
	ul {
		list-style-type: none;
		padding: 0 !important;
	}

	.sidebar-link {
		display: block;
		font-size: 1.5rem;
		text-transform: capitalize;
		color: black;
		padding: 0.5rem 1.5rem;
		background: transparent;
		transition: all 0.3s ease-in-out;
	}
	.sidebar-link:hover {
		background: lightskyblue;
		color: #fff;
		padding: 0.5rem 1.5rem 0.5rem 2.5rem;
		text-decoration: none;
	}
`;
