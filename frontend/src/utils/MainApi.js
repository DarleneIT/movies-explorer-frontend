class ApiMain {
  constructor(options) {
    this._url = options.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return Promise.resolve(res.json())
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  //Регистрация и авторизация
  _request(path, method, data) {
    let body = data;
    if (method === "POST" && data) {
      body = JSON.stringify(data);
    }
    return fetch(this._url + path, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then(this._checkResponse);
  }

  registration({ name, email, password }) {
    return this._request(`/signup`, "POST", { name, email, password });
  }

  authorization({ email, password }) {
    return this._request(`/signin`, "POST", { email, password });
  }

  //Получение данных на странице
  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }


  async getUserInfo() {
    const response = await fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
    return this._checkResponse(response)
  }


  //Редактирование данных пользователя
  async setUserInfo(data) {
    const response = await fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    return this._checkResponse(response)
  }

}



export const apiMain = new ApiMain({
  url: "http://localhost:3000",
  //url: "https://api.mesto.darlene.nomoredomainsicu.ru",
});
