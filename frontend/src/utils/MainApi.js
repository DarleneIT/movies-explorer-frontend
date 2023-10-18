class ApiMain {
  constructor(options) {
    this._url = options.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json());
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(path, options) {
    return fetch(`${this._url}${path}`, options).then(this._checkResponse);
  }

  //Регистрация и авторизация
  registration({ name, email, password }) {
    return this._request("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
  }

  authorization({ email, password }) {
    return this._request("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  //Получение данных пользователя
  getUser(token) {
    return this._request("/users/me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  //Редактирование данных пользователя (проверить)
  editUserInfo(name, email, token) {
    return this._request('/users/me', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  //Получение фильмов
  getMovies(token) {
    return this._request("/movies", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  //Добавление и удаление фильмов
  likeMovie(card) {
    return this._request("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: card.country,
        description: card.description,
        director: card.director,
        duration: card.duration,
        image: `https://api.nomoreparties.co${card.image.url}`,
        movieId: card.id,
        nameEN: card.nameEN,
        nameRU: card.nameRU,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
        trailerLink: card.trailerLink,
        year: card.year,
      }),
    });
  }

  dislikeMovie(cardId) {
    return this._request(`/movies/${cardId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  }
}

export const apiMain = new ApiMain({
  //url: "http://localhost:3000",
  url: "https://movies.nomoredomainsrocks.ru",
});
