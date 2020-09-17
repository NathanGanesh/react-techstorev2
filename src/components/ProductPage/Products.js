import React from 'react';
import { PageConsumer } from '../../context/Context';
import styled from 'styled-components';
import ProductFilter from './ProductFilter';
import SingleProduct from '../SingleProduct';
export default function Products() {
	return (
		<PageConsumer>
			{(value) => {
				const { filteredProducts } = value;
				console.log(filteredProducts);
				return (
					<div className="featured-flex">
						<ProductFilter />
						<FilterWrapper>
							<div className="products">
								{filteredProducts.length === 0 ? (
									<div>sorry, no items matched your search</div>
								) : (
									filteredProducts.map((product) => {
										return <SingleProduct key={product.id} product={product} />;
									})
								)}
							</div>
						</FilterWrapper>
					</div>
				);
			}}
		</PageConsumer>
	);
}

const FilterWrapper = styled.div`
	.products {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		justify-content: center;
		text-align: center;
		padding: 10px;
		margin: auto;
	}
`;
