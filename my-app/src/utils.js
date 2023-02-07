const url = 'https://api.github.com/users/';

function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function request(
  url,
  method = 'GET',
) {
  const options = { method };

  return wait(300)
    .then(() => fetch(url, options))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  getUserInfo: (username) => request(`${url}${username}`),
  getRepos: (username) => request(`${url}${username}/repos`),
};
