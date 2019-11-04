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
            <table className="listings-table">
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
