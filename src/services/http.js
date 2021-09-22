import axios from "axios";

export const HTTP_GET_REQUEST = (
  url,
  successCallback,
  errorCallback,
  finallyCallback
) => {
  axios
    .get(url)
    .then((res) => successCallback(res))
    .catch((err) => errorCallback(err))
    .then(() => finallyCallback());
};
