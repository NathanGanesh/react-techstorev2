import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageConsumer } from '../context/Context';

export default function SingleProduct({ product }) {
	return (
		<PageConsumer>
			{(value) => {
				const { addProductToCart, setSingleProduct } = value;

				// console.log(product);
				return (
					<ProductWrapper>
						<div className="single-product-img">
							<div>
								<img
									src={window.location.origin + '/' + product.image.fields.file.url}
									alt="product-img"
								/>
							</div>
							<div className="product-info">
								<h2>{product.title}</h2>
								<h2>${product.price}</h2>
							</div>
							<div className="product-icons">
								<Link to={`/products/${product.title}`} onClick={() => setSingleProduct(product.title)}>
									<FaSearch className="product-icon" />
								</Link>

								<FaCartPlus className="product-icon" onClick={() => addProductToCart(product.title)} />
							</div>
						</div>
					</ProductWrapper>
				);
			}}
		</PageConsumer>
	);
}

const ProductWrapper = styled.div`
	.single-product-img {
		box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
		transition: all 0.3s ease-in-out;
		margin: 30px;
		position: relative;
	}

	.single-product-img:hover {
		box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}

	.single-product-img:hover img {
		transform: scale(1.15);
		opacity: 0.2;
		transition: all 0.3s ease-in-out;
	}

	.single-product-img img {
		width: 225px;
	}
	.product-info {
		display: flex;
	}

	.product-info h2 {
		font-size: 16px;
		margin: auto;
		padding: 15px;
		color: lightskyblue;
	}

	.product-icons {
		transition: all 0.3s ease-in-out;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		display: flex;
	}

	.product-icon {
		font-size: 2.5rem;
		margin: 1rem;
		padding: 0.5rem;
		color: lightskyblue;
		border-radius: 0.5rem;
	}

	.single-product-img:hover .product-icons {
		opacity: 1;
	}
`;
