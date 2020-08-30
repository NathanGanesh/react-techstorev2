import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageConsumer } from '../context/Context';

const NavWrapper = styled.nav`
	position: sticky;
	top: 0px;
	display: flex;
	justify-content: space-between;
	padding: 0 30px;
	align-items: center;
	height: 66px;
	border-bottom: 3px solid wheat;
	background: whitesmoke;
	font-size: 24px;
	z-index: 100;
	.nav-icon {
		cursor: pointer;
	}
`;

export default function NavBar() {
	// console.log(window.location.origin + '/static_images/logo.svg');
	return (
		<PageConsumer>
			{(value) => {
				const { handleSideCarToggleOn, handleSideNavToggleOn } = value;
				return (
					<NavWrapper>
						<FaBars className="nav-icon" onClick={handleSideNavToggleOn} />
						<Link to="/">
							<img src={window.location.origin + '/static_images/logo.svg'} alt="logo" />
						</Link>
						<FaCartPlus className="nav-icon" onClick={handleSideCarToggleOn} />
					</NavWrapper>
				);
			}}
		</PageConsumer>
	);
}
