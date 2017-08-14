import React from 'react';

import './appHeader.css';
import LogoImg from '../../assets/logo.svg';
import MenuIcon from '../../assets/hamburger.svg';

const AppHeader = () => {
	return(
		<header className="app-header">
			{/*
				logo
				Deliveroo
				menu
				(close icon)
			*/}
			<a href="/" className="mobile-logo">
				<img src={LogoImg} alt="Deliveroo Logo" />
			</a>
			<img src={MenuIcon} alt="Menu" className="menu-icon" />
		</header>
	)
}

export default AppHeader;
