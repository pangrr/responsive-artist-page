import React, { Component } from 'react';
import './App.css';

class App extends Component {
 	render() {
		return (
    	<div className="App">
     		<Searchbar />
        <List list={[1, 2, 3, 4, 5, 6]} />
      </div>
    );
  }
}

class Searchbar extends Component {
  render() {
    return (
    	<div className="searchbar"></div>
    );
  }
}

class List extends Component {
	render() {
		return (
			<div className="list">
				{this.props.list.map((item, index) => {
					return <Item key={index} />;
				})}
			</div>
		);
	}
}

class Item extends Component {
	render() {
		return (
			<div className="item">
				<div className="item-content"></div>
			</div>
		);
	}
}

export default App;
