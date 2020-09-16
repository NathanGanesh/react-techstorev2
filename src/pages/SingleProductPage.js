import React from 'react';
import Hero from '../components/Hero';
import SingleProduct from '../components/SingleProduct/SingleProduct';
export default function SingleProductPage() {
	return (
		<div>
			<Hero img={'/static_images/singleProductBcg.jpeg'} title="single product" />
			<SingleProduct />
		</div>
	);
}
