import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';

export default function Home() {
	return (
		<div>
			<Hero />
			<Services />
			<Featured />
		</div>
	);
}
