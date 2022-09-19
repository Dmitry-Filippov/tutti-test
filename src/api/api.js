const BASE_URL = "http://localhost:3010";

function __getResponseData(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const getImages = () => {
  return fetch(`${BASE_URL}/images`, {
    method: "GET",
  }).then((res) => {
    return __getResponseData(res);
  });
};

export const addComment = (id, comment) => {
  console.log(`${BASE_URL}/images/${id}`);
  return fetch(`${BASE_URL}/images/${id}`, {
    method: "POST",
    body: {
      comment,
    },
  }).then((res) => {
    return res;
  });
};
