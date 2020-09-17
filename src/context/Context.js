import React, { Component } from 'react';
import { linkData } from './linkData';
import { items } from './productData';
const PageContext = React.createContext();

class Context extends Component {
	state = {
		sideCart: false,
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

		let storeProducts = items.map((item) => {
			return item.fields;
		});

		this.setState({
			storeProducts: storeProducts
		});

		this.setState({
			singleProduct: this.getStorageProduct()
		});
		this.setState({
			max: maxPrice,
			filteredProducts: storeProducts
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
		this.setState({ sideCart: !this.state.sideCart });
	};

	//add product to cart
	addProductToCart = (title) => {
		let tempCart = [ ...this.state.cart ];
		let tempProducts = [ ...this.state.storeProducts ];
		let tempItem = tempCart.find((item) => item.title === title);
		if (!tempItem) {
			tempItem = tempProducts.find((item) => item.title === title);
			let total = tempItem.price;
			let cartItem = { ...tempItem, count: 1, total };
			tempCart = [ ...tempCart, cartItem ];
		} else {
			tempItem.count++;
			tempItem.total = tempItem.price * tempItem.count;
			tempItem.total = parseFloat(tempItem.total.toFixed(2));
		}
		this.setState(
			() => {
				return { cart: tempCart };
			},
			() => {
				this.addTotals();
				this.syncStorage();
				this.openCart();
			}
		);
	};
	syncStorage = () => {
		localStorage.setItem('cart', JSON.stringify(this.state.cart));
	};
	addTotals = () => {
		const totals = this.getTotals();
		this.setState(() => {
			return {
				cartItems: totals.cartItems,
				cartSubTotal: totals.subTotal,
				cartTax: totals.tax,
				cartTotal: totals.total
			};
		});
	};
	getTotals = () => {
		let subTotal = 0;
		let cartItems = 0;
		this.state.cart.forEach((item) => {
			subTotal += item.total;
			cartItems += item.count;
		});

		subTotal = parseFloat(subTotal.toFixed(2));
		let tax = subTotal * 0.2;
		tax = parseFloat(tax.toFixed(2));
		let total = subTotal + tax;
		total = parseFloat(total.toFixed(2));
		return {
			cartItems,
			subTotal,
			tax,
			total
		};
	};
	handleChange = (event) => {
		console.log(event);
		const name = event.target.name;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState(
			{
				[name]: value
			},
			this.sortData
		);
	};

	setSingleProduct = (title) => {
		let product = items.filter((item) => item.fields.title === title);
		localStorage.setItem('singleProduct', JSON.stringify(product));

		this.setState({ singleProduct: { ...product } });
	};

	closeCart = () => {
		console.log(this.state.sideCart);
		this.setState({ sideCart: false });
	};
	// open
	openCart = () => {
		this.setState({ sideCart: true });
	};

	sortData = () => {
		const { storeProducts, price, company, shipping, search } = this.state;

		let tempPrice = parseInt(price);

		let tempProducts = [ ...storeProducts ];
		// filtering based on price
		tempProducts = tempProducts.filter((item) => item.price <= tempPrice);
		// filtering based on company
		if (company !== 'all') {
			tempProducts = tempProducts.filter((item) => item.company === company);
		}
		if (shipping) {
			tempProducts = tempProducts.filter((item) => item.freeShipping === true);
		}
		if (search.length > 0) {
			tempProducts = tempProducts.filter((item) => {
				let tempSearch = search.toLowerCase();
				let tempTitle = item.title.toLowerCase().slice(0, search.length);
				if (tempSearch === tempTitle) {
					return item;
				}
			});
		}
		this.setState({
			filteredProducts: tempProducts
		});
	};

	render() {
		return (
			<PageContext.Provider
				value={{
					...this.state,
					handleSideNavToggleOn: this.handleSideNavToggleOn,
					handleSideCarToggleOn: this.handleSideCarToggleOn,
					setSingleProduct: this.setSingleProduct,
					handleChange: this.handleChange,
					closeCart: this.closeCart,
					openCart: this.openCart,
					addProductToCart: this.addProductToCart
				}}
			>
				{this.props.children}
			</PageContext.Provider>
		);
	}
}

const PageConsumer = PageContext.Consumer;

export { Context, PageConsumer };
