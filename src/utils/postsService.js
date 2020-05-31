import tokenService from "./tokenService";

const BASE_URL = "/api/posts/";

export default {
  index,
  create,
};

function index() {
  // const get = {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //     // Add this header - don't forget the space after Bearer
  //     Authorization: "Bearer " + tokenService.getToken(),
  //   },
  //   body: JSON.stringify(post),
  // };
  // return fetch(BASE_URL, get)
  return fetch(BASE_URL)
  .then((res) => res.json());
}

function create(post) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      // Add this header - don't forget the space after Bearer
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(post),
  };
  return fetch(BASE_URL, options)
  .then((res) => res.json());
}