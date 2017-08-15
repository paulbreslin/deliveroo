import React from 'react';

import AppHeader from '../appHeader/appHeader';
import NeighbourhoodView from '../neighbourhoodView/neighbourhoodView';

const App = () => {
	return(
		<div>
			<AppHeader />
			<NeighbourhoodView />
			{/* Would typically replace "NeighbourhoodView" with view from router */}
		</div>
	)
}

export default App;
