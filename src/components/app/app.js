import React from 'react';

import AppHeader from '../appHeader/appHeader';
import NeighbourhoodViewContainer from '../../containers/neighbourhoodViewContainer';

const App = () => {
	return(
		<div>
			<AppHeader />
			<NeighbourhoodViewContainer />
		</div>
	)
}

export default App;
