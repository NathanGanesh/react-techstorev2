import React from 'react';
import { PageConsumer } from '../../context/Context';
import SingleProduct from '../SingleProduct';

export default function Featured() {
	return (
		<PageConsumer>
			{(value) => {
				const { featuredProducts } = value;
				return (
					<div className="featured-flex">
						<h1>Featured Products</h1>
						<div className="featured-items">
							{featuredProducts.map((item) => {
								return <SingleProduct key={item.sys.id} product={item.fields} />;
							})}
						</div>
					</div>
				);
			}}
		</PageConsumer>
	);
}
