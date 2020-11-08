import { URL_LOCALHOST } from "../config/constants";

const fetchExecuteHermes = (body) => {
  const url = `${URL_LOCALHOST}/execute-hermes`;

  return fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: body
  });
};

export default fetchExecuteHermes;