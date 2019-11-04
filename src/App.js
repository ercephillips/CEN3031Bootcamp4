import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.data,
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding:id
    })
  }

  removeBuilding() {
		var listings = this.state.listings.filter(listing => {return listing.id !== this.state.selectedBuilding})
    this.setState({
      listings: listings
    })
  }

  addBuilding(code, name, latitude, longitude, address) {
    const id = this.state.listings.length + 1;
    const building = {
      id:id,
      code:code,
      name:name,
      coordinates: { 
        latitude:parseFloat(latitude), 
        longitude:parseFloat(longitude) },
      address:address
    }
    var listings = [...this.state.listings, building]
    this.setState({
      listings: listings,
      selectedBuilding: building.id
    })
  }

  render() {
  
    return (
      <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
        <Search filterUpdate={this.filterUpdate.bind(this)} />
      </div>

      <main>
        <div className="row">
          <div className="column1">
             <table className="table table-striped table-hover">>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Building</th>
                </tr>
              </thead>
              <BuildingList
                data={this.state.listings} 
                filterText={this.state.filterText} 
                selectedUpdate={this.selectedUpdate.bind(this)}
              />
            </table>
          </div>
          <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                listings={this.state.listings}
                removeBuilding={this.removeBuilding.bind(this)}
              />
              <AddBuilding 
                  listings={this.state.listings}
                  addBuilding={this.addBuilding.bind(this)} 
                />
            <br/>
          </div>
          </div>
      </main>
      <footer className="row">
        <Credit />
      </footer>
    </div>
  );
}
}

export default App;
