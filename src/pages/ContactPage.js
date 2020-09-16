import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/ContactPage/Contact';
export default function ContactPage() {
	return (
		<div>
			<Hero img={'/static_images/contactBcg.jpeg'} />
			<Contact />
		</div>
	);
}
