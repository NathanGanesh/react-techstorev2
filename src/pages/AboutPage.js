import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutPage/AboutUs';
export default function AboutPage() {
	return (
		<div>
			<Hero max="false" img={'/static_images/aboutBcg.jpeg'} />
			<AboutUs />
		</div>
	);
}
