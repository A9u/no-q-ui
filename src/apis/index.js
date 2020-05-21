export const PostApiCall = (url, body) => {
  return fetch("http://localhost:3001" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.no-q.com; version=1",
    },
    body: JSON.stringify(body),
  });
};
