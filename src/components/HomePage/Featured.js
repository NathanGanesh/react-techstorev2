import React from 'react';
import { PageConsumer } from '../../context/Context';
import SingleProduct from '../SingleProduct';

export default function Featured() {
	return (
		<PageConsumer>
			{(value) => {
				const { featuredProducts } = value;

				return (
					<div>
						{featuredProducts.map((item, index) => {
							const { title, price, image } = item.fields;
							return <SingleProduct title={title} price={price} image={image} />;
						})}
					</div>
				);
			}}
		</PageConsumer>
	);
}
