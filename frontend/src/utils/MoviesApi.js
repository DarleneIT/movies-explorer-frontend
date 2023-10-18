class MoviesApi {
  constructor(options) {
    this._url = options.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json());
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co",
});

export default moviesApi;
