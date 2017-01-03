function fetchGet(id) {

  const url = `/places`;

  const headers = new Headers({
    "Accept": "application/vnd.foodrly.v1+json",
    "Content-Type": "application/json"
  });

  const request = new Request(url, {
    headers: headers,
    method: 'GET'
  })

  return fetch(request)
    .then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { fetchGet };
export default Client;
