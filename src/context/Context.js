import React, { Component } from 'react';
import { linkData } from './linkData';
import { items } from './productData';
const PageContext = React.createContext();

class Context extends Component {
	state = {
		sideCar: false,
		sideNav: false,
		links: linkData,
		featuredProducts: [],
		storeProducts: [],
		singleProduct: {},
		min: 0,
		max: 0,
		price: 0,
		search: '',
		filteredProducts: [],
		shipping: false,
		company: 'all',
		cartItems: 0,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
		cart: []
	};

	componentDidMount() {
		this.setProducts(items);
	}

	//featuredProducts
	setProducts = (items) => {
		this.setState({ featuredProducts: items.filter((item) => item.fields.featured === true) });

		let maxPrice = Math.max(...items.map((item) => item.fields.price));

		this.setState({
			storeProducts: items.map((item) => {
				const { id } = item.sys;
				const { image } = item.fields.image.fields.file.url;
				const product = { id, ...item.fields, image };
				return product;
			})
		});

		this.setState({
			singleProduct: this.getStorageProduct()
		});
		this.setState({
			max: maxPrice
		});
	};

	getStorageProduct = () => {
		return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {};
	};
	//toggle bullshit
	handleSideNavToggleOn = () => {
		this.setState({ sideNav: !this.state.sideNav });
	};
	handleSideCarToggleOn = () => {
		this.setState({ sidenav: !this.state.sideCar });
	};

	//add product to cart
	addProductToCart = (id) => {
		console.log('adding product');
	};

	setSingleProduct = (title) => {
		let product = items.filter((item) => item.fields.title === title);
		localStorage.setItem('singleProduct', JSON.stringify(product));

		this.setState({ singleProduct: { ...product } });
	};

	render() {
		return (
			<PageContext.Provider
				value={{
					...this.state,
					handleSideNavToggleOn: this.handleSideNavToggleOn,
					handleSideCarToggleOn: this.handleSideCarToggleOn,
					setSingleProduct: this.setSingleProduct
				}}
			>
				{this.props.children}
			</PageContext.Provider>
		);
	}
}

const PageConsumer = PageContext.Consumer;

export { Context, PageConsumer };
