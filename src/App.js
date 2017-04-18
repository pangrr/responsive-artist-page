import React, { Component } from 'react';
import './App.css';
import Client from './Client';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			// Default artists.
			artists: [
				{
					artistName: 'The Weeknd',
					artistStationDescription: 'Feat. August Alsina, Jeremih and more',
					imageUrl: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)'
				},
				{
					artistName: 'Selena Gomez',
					artistStationDescription: 'Feat. Ariana Grande, Demi Lovato and more',
					imageUrl: 'http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)'
				},
				{
					artistName: 'R. City',
					artistStationDescription: 'Feat. Nelly, Iyaz, Wiz Khalifa and more',
					imageUrl: 'http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)'
				},
				{
					artistName: 'Justin Bieber',
					artistStationDescription: 'Feat. Shawn Mendes, One Direction and more',
					imageUrl: 'http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)'
				},
				{
					artistName: 'Major Lazer',
					artistStationDescription: 'Feat. Iyaz, Dillon Francis & DJ Snake and more',
					imageUrl: 'http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)'
				},
				{
					artistName: 'Taylor Swift',
					artistStationDescription: 'Feat. Meghan Trainor, Katy Perry and more',
					imageUrl: 'http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)'
				}
			]
		};

		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
		this.handleSearchInputSubmit = this.handleSearchInputSubmit.bind(this);
	}

	handleSearchInputChange(event) {
		this.setState({ search: event.target.value.toLowerCase() });
	}

	handleSearchInputSubmit(event) {
		// Clear content as a hint of quering.
		this.setState({ artists: []});

		Client.search(this.state.search, (artists) => {
			this.setState({ artists: artists });
		});

		event.preventDefault();
	}
	
 	render() {
		return (
    	<div className='app'>
    		<div className='top-placeholder'></div>
     		<form className='searchbar'>
	    		<input type='text' placeholder='Find an artist' className='search-input' value={this.state.search} onChange={this.handleSearchInputChange}/>
	    		<button type='submit' className='search-submit' onClick={this.handleSearchInputSubmit}>
	    			<img src={require('./search.svg')} alt=''></img>
	    		</button>
	    	</form>
        <Artists artists={this.state.artists} />
      </div>
    );
  }
}


class Artists extends Component {
	render() {
		return (
			<div className='artists'>
				{this.props.artists.map((artist, i) => {
					return <Artist key={i} artist={artist} />;
				})}
			</div>
		);
	}
}


class Artist extends Component {
	render() {
		return (
			<div className='artist'>
				<div className='artist-info'>
					<img src={this.props.artist.imageUrl} alt='' className='artist-image'></img>
					<p className='artist-name'>{this.props.artist.artistName}</p>
					<p className='artist-station-description'>{this.props.artist.artistStationDescription}</p>
				</div>
			</div>
		);
	}
}



export default App;
