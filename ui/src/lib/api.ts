import axios from "axios";
import { coreApiUrl as baseURL, defaultSelectedLang } from "../siteConfig";

const cfg = { baseURL };
const ctx = axios.create(cfg);

export const api = {
  get: <T>(uri: string, params?: object) =>
    ctx.get<T>(uri, {
      headers: {
        "Accept-Language":
          localStorage.getItem("lang") ?? defaultSelectedLang.abbr,
      },
      ...params,
    }),
  post: <T>(uri: string, data: any, params?: object) =>
    ctx.post<T>(uri, data, {
      headers: {},
      ...params,
    }),
  patch: <T>(uri: string, data: any) =>
    ctx.patch<T>(uri, data, {
      headers: {},
    }),
  delete: <T>(uri: string) =>
    ctx.delete<T>(uri, {
      headers: {},
    }),
};
