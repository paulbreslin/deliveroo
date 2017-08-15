import React from 'react';

import './heroBanner.css';

const HeroBanner = ({locationName, locationDescription, numberOfRestaurants}) => {
	return(
		<div className="hero-banner">
			<div className="hero-text">
				<p className="restaurants-number">
					{numberOfRestaurants} restaurants delivering to
				</p>
				<h1 className="location-name">{locationName}</h1>
				<p className="location-description">{locationDescription}</p>
			</div>
		</div>
	)
}

export default HeroBanner;
