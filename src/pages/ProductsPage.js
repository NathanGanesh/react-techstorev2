import React from 'react';
import Hero from '../components/Hero';
import Product from '../components/ProductPage/Products';
export default function ProductsPage() {
	return (
		<div>
			<Hero img={'/static_images/productsBcg.jpeg'} />
			<h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Our products</h2>
			<Product />
		</div>
	);
}
