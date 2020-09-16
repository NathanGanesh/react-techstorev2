import React from 'react';
import { PageConsumer } from '../../context/Context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SingleProduct() {
	return (
		<PageConsumer>
			{(value) => {
				const { addProductToCart, singleProduct } = value;
				console.log(value);
				const { title, price, company, description } = singleProduct[0].fields;
				const { url } = singleProduct[0].fields.image.fields.file;
				// console.log(props);
				return (
					<ProductWrapper>
						<div className="single-product">
							<div>
								<img src={window.location.origin + `/${url}`} alt="product" />
							</div>
							<div>
								<div>
									<h3>Model : {title}</h3>
									<h3>Company : {company}</h3>
									<h3>Price: ${price}</h3>
									<h5>some info about product :</h5>
									<p>{description}</p>
								</div>
								<div>
									<Link
										to="/product"
										className="main-link"
										style={{ marginBottom: '25px', marginTop: '25px' }}
									>
										Add to cart
									</Link>
								</div>
								<div>
									<Link to="/products" className="main-link" style={{ marginBottom: '25px' }}>
										Back to products
									</Link>
								</div>
							</div>
						</div>
					</ProductWrapper>
				);
			}}
		</PageConsumer>
	);
}

const ProductWrapper = styled.div`
	.single-product {
		display: flex;
		flex-direction: row;
	}
`;
