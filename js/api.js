const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные формы'
};

async function load(route, method = Method.GET, body = null) {
  const response = await fetch(`${BASE_URL}${route}`, {method, body});
  return response.ok ? await response.json() : Promise.reject(ErrorText[method]);
}

function getData() {
  return load(Route.GET_DATA, ErrorText.GET_DATA);
}

export {getData};
