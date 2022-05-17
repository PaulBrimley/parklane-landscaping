import Axios, { AxiosError, AxiosResponse } from 'axios';
import { Paths as ReactPaths } from '../routes/Routes';
Axios.defaults.withCredentials = true;

export enum Methods {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}
export enum Paths {
  EMAIL_SEND = 'https://api.emailjs.com/api/v1.0/email/send'
}
export interface IServerResponse {
  config: any;
  data: any;
  error: any;
  status: number;
  success: boolean;
}
const axios = Axios.create();

async function handleError(err: IServerResponse, method: string) {
  console.log('err', err, method);
  const currentLocation = window.location.pathname;
  const newLocation = err?.data?.location || ReactPaths.HOME;
  const status = err?.status;
  switch (true) {
    case status === 302:
      if (newLocation !== currentLocation) window.location = newLocation;
      break;
    case status === 401:
      if (newLocation !== currentLocation && !(err?.config?.url === Paths.USER && method === Methods.GET)) {
        console.log('redirecting');
        window.location = newLocation;
      }
      break;
    case status === 499:
      console.log('request cancelled');
      return null;
  }
  throw new Error(err?.data?.errors?.join(', ') ?? 'Unknown error');
}
async function handleResponse(response: IServerResponse) {
  const currentLocation = window.location.pathname;
  const newLocation = response?.data?.location || ReactPaths.HOME;
  const status = response?.status;
  switch (true) {
    case status === 302:
      if (newLocation !== currentLocation) window.location = newLocation;
      break;
  }
  return response;
}
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response: AxiosResponse<IServerResponse>) => handleResponse(response?.data),
  (err: AxiosError<IServerResponse>) => {
    if (Axios.isCancel(err)) {
      err.response = {
        message: err.message,
        status: 499
      };
    }
    return handleError(err?.response, err.config.method.toUpperCase());
  }
);

export const destroy = <T>(url: string, config = {}): Promise<T> => axios.delete(url, config);
export const get = <T>(url: string, config = {}): Promise<T> => axios.get(url, config);
export const post = <T>(url: string, body = {}, config = {}): Promise<T> => axios.post(url, body, config);
export const put = <T>(url: string, body = {}, config = {}): Promise<T> => axios.put(url, body, config);
export default axios;
