import { PORTAL_URL } from "constants/apiConstants";

export const PostApiCall = (url, body) => {
  return fetch(PORTAL_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/no-q.com; version=1",
    },
    body: JSON.stringify(body),
  });
};

export const GetApiCall = (url, body) => {
  return fetch(PORTAL_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept" : "application/no-q.com; version=1",
    },
  });
};
