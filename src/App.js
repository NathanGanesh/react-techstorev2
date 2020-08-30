import React, { Component } from 'react';

import './index.css';

import Home from './pages/Home';
import Cartpage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import Error from './pages/Error';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<SideBar />
				<SideCart />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={ContactPage} />
					<Route exact path="/products" component={ProductPage} />
					<Route exact path="/cart" component={Cartpage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/products/:id" component={SingleProductPage} />
					<Route component={Error} />
				</Switch>
				<Footer />
			</BrowserRouter>
		);
	}
}
