function search(query, cb) {
  return fetch(`api/artist?q=${query}`, {
    accept: 'application/json'
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

function parseJSON(response) {
  // Return empty array on error.
  if (!response) {
    return [];
  }

  return response.json();
}

const Client = { search };
export default Client;