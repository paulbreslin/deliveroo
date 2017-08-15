import React from 'react';

import caretImg from '../../assets/caret.svg';

import './restaurantsList.css';

const RestaurantsList = ({restaurantsList}) => {
	restaurantsList = JSON.parse(restaurantsList);
	const restaurantElement = restaurantsList.map( (restaurant, index) => {
		return (
			<div className="restaurant-item" key={index}>
				<span className="restaurant-name">{restaurant.name}</span>
				<div className="restaurant-info">
					<span className="restaurant-type">{restaurant.type}</span>
					<span className="restaurant-price">&pound;&pound;</span>
					<span className="restaurant-minutes">{restaurant.estimatedTime} minutes</span>
					<img src={caretImg} alt=""/>
				</div>
			</div>
		)
	});
	return(
		<div className="restaurants-list">
			<div className="restaurants-inner">
				{restaurantElement}
			</div>
		</div>
	)
}

export default RestaurantsList;
