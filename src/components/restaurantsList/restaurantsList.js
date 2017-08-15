import React from 'react';

import caretImg from '../../assets/caret.svg';

import './restaurantsList.css';

const RestaurantsList = ({restaurantsList}) => {
	restaurantsList = JSON.parse(restaurantsList);
	const restaurantElement = restaurantsList.map( restaurant => {
		return (
			<div className="restaurant-item">
				<span className="restaurant-name">{restaurant.name}</span>
				<div className="restaurant-info">
					<span className="restaurant-minutes">{restaurant.estimatedTime} minutes</span>
					<span>{restaurant.type}</span>
					<img src={caretImg} alt=""/>
				</div>
			</div>
		)
	});
	return(
		<div className="restaurants-list">
			{restaurantElement}
		</div>
	)
}

export default RestaurantsList;
