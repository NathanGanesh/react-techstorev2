import React from 'react';
import { PageConsumer } from '../../context/Context';
import styled from 'styled-components';
import ProductFilter from './ProductFilter';
export default function Products() {
	return (
		<PageConsumer>
			{(value) => {
				const { filteredProducts } = value;
				return (
					<div>
						<ProductFilter />
					</div>
				);
			}}
		</PageConsumer>
	);
}

const FilterWrapper = styled.div``;
