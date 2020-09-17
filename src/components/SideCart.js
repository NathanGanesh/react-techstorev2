import React from 'react';
import { PageConsumer } from '../context/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideCart() {
	return (
		<PageConsumer>
			{(value) => {
				const { sideCart, closeCart, cart, cartTotal } = value;
				return (
					<CartWrapper show={sideCart} onclick={closeCart}>
						<div>
							<ul>
								{cart.map((item) => {
									return (
										<li key={item.id}>
											<div>
												<div>
													<img
														style={{ width: '65px' }}
														src={window.location.origin + '/' + item.image.fields.file.url}
														alt="product-img"
													/>
												</div>
												<div>{item.title}</div>
												<div>
													<h5>amount: {item.count}</h5>
												</div>
											</div>
										</li>
									);
								})}
							</ul>
							<h4 className="cart-total">cart total : ${cartTotal}</h4>

							<Link to="/cart" className="main-link" style={{ marginLeft: '40px' }}>
								Cart page
							</Link>
						</div>
					</CartWrapper>
				);
			}}
		</PageConsumer>
	);
}

const CartWrapper = styled.div`
	position: fixed;
	top: 60px;
	right: 0;
	width: 100%;

	height: 100%;
	background: white;
	z-index: 1;
	transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
	border-left: 4px solid lightblue;
	transition: all 0.3s ease-in-out;
	@media (min-width: 576px) {
		width: 20rem;
	}
	overflow: scroll;
	padding: 2rem;
	ul {
		padding: 0 !important;
		list-style-type: none;
	}
	.cart-item {
		list-style-type: none;
	}

	.cart-total {
		color: lightskyblue;
		font-size: 1.5rem;
	}
`;
