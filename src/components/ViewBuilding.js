import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	render() {

		const{listings, selectedBuilding, removeBuilding}=this.props;
		var building = listings.find(listing => {return listing.id === selectedBuilding})
			
				if(building)
					return (
						<div>
							<h4>ID:</h4>
							<p>{building.id}</p>
							<h4>Code:</h4>
							<p>{building.code}</p>
							<h4>Name:</h4>
							<p>{building.name}</p>
							{building.coordinates && <p>Coordinates:{' '+building.coordinates.latitude},{' '+building.coordinates.longitude}</p>}
							{building.address && <p>Address:{' ' + building.address}</p>}
							<RemoveBuilding removeBuilding={removeBuilding} />
						</div>
					)
				
					return (
						<div>
							<p>
								{' '}
								<i>Click on a name to view more information</i>
							</p>
						</div>
					);
		
		
	}
}
export default ViewBuilding;
