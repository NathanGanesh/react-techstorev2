import React, { Component } from 'react';
import { linkData } from './linkData';

const PageContext = React.createContext();

class Context extends Component {
	state = {
		sideCar: false,
		sideNav: false,
		links: linkData
	};

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
