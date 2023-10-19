const apiEndpoint = 'https://example.com/api';

export function fetchData(username, callback) {
  // Appel à l'API pour récupérer les tweets de l'utilisateur
  fetch(`${apiEndpoint}/tweets?user=${username}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}

export function postTweet(username, text) {
  // Appel à l'API pour poster un tweet
  const data = {
    user: username,
    text: text,
  };

  fetch(`${apiEndpoint}/tweets`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .catch((error) => console.error(error));
}
