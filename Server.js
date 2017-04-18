const express = require('express');
const request = require('request');
const app = express();

const keywordsPlaceholder = 'KEY_WORDS';
const endpointTemplate = `http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=${keywordsPlaceholder}&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US`;
const imageUrlTemplate = 'http://iscale.iheart.com/catalog/artist/ARTIST_ID?ops=fit(250,0)';
const artistIdPlaceholder = 'ARTIST_ID';

app.get('/api/artist', (req, res) => {
  const param = req.query.q;

  // Return empty array with empty request parameter.
  if (!param) {
    res.json([]);
    return;
  }

  request({
    uri: endpointTemplate.replace(keywordsPlaceholder, param),
    json: true
  }, (error, response, body) => {
    // Handle error.
    if (error) {
      res.end(500);
      return;
    }

    let artists = [];

    // Get the first 6 artists.
    for (let i = 0; i < body.artists.length; i++) {
      if (i > 5) {
        break;
      }

      artists.push({
        artistName: body.artists[i].artistName,
        artistStationDescription: '',
        imageUrl: imageUrlTemplate.replace(artistIdPlaceholder, body.artists[i].artistId)
      });
    }

    res.json(artists);
  });
});


app.listen(3001, () => {
  console.log('Server is listening on port 3001')
});