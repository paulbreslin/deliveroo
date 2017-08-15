import React, { Component } from 'react';

import HeroBanner from '../heroBanner/heroBanner';
import RestaurantsList from '../restaurantsList/restaurantsList';

class NeighbourhoodView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locationName: 'Hampstead',
			locationDescription: `Hampstead is a great place to while away a whole day. As well as three of London's biggest and best museums, there're plenty of other things to do that are sure to entertain and amuse everyone in your group.`,
			numberOfRestaurants: 34,
			restaurantsList: [{
				name: 'Bobo Social',
				estimatedTime: 30,
				type: 'Vietnamese'
			}, {
				name: 'Tsunami',
				estimatedTime: 30,
				type: 'Vietnamese'
			}, {
				name: 'Wild Game Co',
				estimatedTime: 30,
				type: 'Vietnamese'
			}, {
				name: 'Bobo Social',
				estimatedTime: 30,
				type: 'Vietnamese'
			}]
		};
		// Would typically retrieve above data via API endpoint
	}

	render() {
		const {
			locationName,
			locationDescription,
			numberOfRestaurants,
			restaurantsList
		} = this.state;
		return(
			<div>
				<HeroBanner
					locationName={locationName}
					locationDescription={locationDescription}
					numberOfRestaurants={numberOfRestaurants} />
				<RestaurantsList restaurantsList={JSON.stringify(restaurantsList)} />
			</div>
		)
	}
}

export default NeighbourhoodView;
