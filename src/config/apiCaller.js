/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import axios from "axios";
import caseConverter from "change-case-object";
import queryString from "query-string";

// ########## Import Components Here ##########
import { BASE_URL as baseURL, REQUEST_TYPES } from "./endpoints";

export default (method = REQUEST_TYPES.GET, url, params = null, data = {}, token = "") =>
  axios({
    method,
    baseURL,
    url,
    params,
    paramsSerializer: (queryParams) => queryString.stringify(caseConverter.snakeCase(queryParams)),
    data,
    transformRequest: [(reqData) => JSON.stringify(caseConverter.snakeCase(reqData))],
    transformResponse: [(respData) => caseConverter.camelCase(respData)],
    headers: {
      Authorization: token || "",
      "Content-Type": "application/json",
    },
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
  })
    .then(({ data: resp }) => resp)
    .catch((error) => error);
