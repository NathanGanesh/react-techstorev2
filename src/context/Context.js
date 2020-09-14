import React, { Component } from 'react';
import { linkData } from './linkData';
import { items } from './productData';
const PageContext = React.createContext();

class Context extends Component {
	state = {
		sideCar: false,
		sideNav: false,
		links: linkData,
		featuredProducts: []
	};

	componentDidMount() {
		this.setProducts(items);
	}

	//featuredProducts
	setProducts = (items) => {
		this.setState({ featuredProducts: items.filter((item) => item.fields.featured === true) });
	};

	//toggle bullshit
	handleSideNavToggleOn = () => {
		this.setState({ sideNav: !this.state.sideNav });
	};
	handleSideCarToggleOn = () => {
		this.setState({ sidenav: !this.state.sideCar });
	};

	render() {
		return (
			<PageContext.Provider
				value={{
					...this.state,
					handleSideNavToggleOn: this.handleSideNavToggleOn,
					handleSideCarToggleOn: this.handleSideCarToggleOn
				}}
			>
				{this.props.children}
			</PageContext.Provider>
		);
	}
}

const PageConsumer = PageContext.Consumer;

export { Context, PageConsumer };
