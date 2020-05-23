import { PORTAL_URL } from "constants/apiConstants";

export const PostApiCall = (url, body, headers = {}) => {
  return fetch(PORTAL_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/no-q.com; version=1",
      ...headers,
    },
    body: JSON.stringify(body),
  });
};

export const GetApiCall = (url, body) => {
  return fetch("http://localhost:3001" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/no-q.com; version=1",
    },
  });
};

export const getJSON = (response) => response.json();
