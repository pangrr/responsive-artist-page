import React, { Component } from 'react';
import './App.css';

let sampleList = [
	'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
	'http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)',
	'http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)',
	'http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)',
	'http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)',
	'http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)'
];

class App extends Component {
 	render() {
		return (
    	<div className="App">
     		<Searchbar />
        <List list={sampleList} />
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
					return <Item key={index} img={item} />;
				})}
			</div>
		);
	}
}

class Item extends Component {
	render() {
		return (
			<div className="item">
				<div className="item-content">
					<img src={this.props.img} alt="" className="image"></img>
				</div>
			</div>
		);
	}
}

export default App;
