import React from 'react';
import { PageConsumer } from '../../context/Context';
import styled from 'styled-components';
export default function ProductFilter() {
	return (
		<PageConsumer>
			{(value) => {
				const { search, min, max, company, price, shipping, handleChange, storeProducts } = value;

				let companies = new Set();
				companies.add('all');
				for (let product in storeProducts) {
					companies.add(storeProducts[product]['company']);
				}
				companies = [ ...companies ];

				return (
					<FilterWrapper>
						<div className="filter-wrapper">
							<div>
								<label htmlFor="search">Search products</label>
								<input
									type="text"
									name="search"
									id="search"
									onChange={handleChange}
									value={search}
									className="filter-item"
								/>
							</div>
							<div>
								<label htmlFor="company">company</label>
								<select
									name="company"
									id="company"
									onChange={handleChange}
									value={company}
									className="filter-item"
								>
									{companies.map((company, index) => {
										return (
											<option key={index} value={company}>
												{company}
											</option>
										);
									})}
								</select>
							</div>
							<div>
								<label htmlFor="price">
									<p className="mb-2">
										product price : <span>$ {price}</span>
									</p>
								</label>
								<input
									type="range"
									name="price"
									id="price"
									min={min}
									max={max}
									className="filter-price"
									value={price}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor="shipping" className="mx-2">
									free shipping
								</label>
								<input
									type="checkbox"
									name="shipping"
									id="shipping"
									onChange={handleChange}
									checked={shipping && true}
								/>
							</div>
						</div>
					</FilterWrapper>
				);
			}}
		</PageConsumer>
	);
}

const FilterWrapper = styled.div`
	label {
		font-weight: bold;
		text-transform: capitalize;
	}
	.filter-wrapper {
		display: grid;
		/* flex-direction: column; */
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-column-gap: 2rem;
		grid-row-gap: 1rem;
	}
`;
