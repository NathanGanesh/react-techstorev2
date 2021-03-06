import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<Hero max="true" title="Awesome gadgets">
				<Link to="/product" className="main-link" style={{ margin: '2rem' }}>
					our products
				</Link>
			</Hero>
			<Services />
			<Featured />
			<Link
				to="/products"
				className="main-link"
				style={{
					justifyContent: 'center',
					display: 'flex',
					margin: 'auto',
					width: '250px',
					marginBottom: '25px'
				}}
			>
				our products
			</Link>
		</div>
	);
}
