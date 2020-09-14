import React from 'react';
import { FaTwitter, FaFacebook, FaTwitch } from 'react-icons/fa';
import styled from 'styled-components';
export default function Footer() {
	return (
		<FooterWrapper>
			<nav className="footer">
				<p>Copyright © Tech Store 2020. All Rights Reserved</p>
				<div className="footer-icons">
					<a href="www.facebook.com">
						<FaTwitter className="footer-icon" />
					</a>
					<a href="www.facebook.com">
						<FaFacebook className="footer-icon" />
					</a>
					<a href="www.facebook.com">
						<FaTwitch className="footer-icon" />
					</a>
				</div>
			</nav>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.section`
	.footer {
		background: darkgrey;
		display: flex;
		margin: auto;
		padding: 10px 0;
		text-align: center;
		justify-content: center;
	}
	.footer-icon {
		padding-left: 60px;
		font-size: 2rem;
		margin: 0 auto;
		text-align: center;
		color: black;
	}
`;
