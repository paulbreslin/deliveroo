import React, { Component } from 'react';

import './appHeader.css';
import LogoImg from '../../assets/logo.svg';
import MenuIcon from '../../assets/hamburger.svg';

class AppHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showMobileNav: false
		};
	}

	handleMenuClick = () => {
		const {showMobileNav} = this.state;
		this.setState({
			showMobileNav: !showMobileNav
		});
	}

	render() {
		return(
			<header className={'app-header ' + (this.state.showMobileNav ? 'show-mobile' : '')}>
				<a href="/" className="mobile-logo">
					<img src={LogoImg} alt="Deliveroo Logo" />
				</a>
				<img
					src={MenuIcon}
					alt="Menu"
					className="menu-icon"
					onClick={this.handleMenuClick} />
				<nav className="app-nav">
					<a href="">Home</a>
					<a href="">Search</a>
					<a href="">£8.55</a>
					<a href="">Simon Rohrbach</a>
				</nav>
			</header>
		)
	}
}

export default AppHeader;
