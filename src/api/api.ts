import Axios from 'axios';

export interface IServerResponse {
  config: any;
  data: any;
  error: any;
  status: number;
  success: boolean;
}
export enum Paths {
  EMAIL_SEND = 'https://api.emailjs.com/api/v1.0/email/send'
}
const axios = Axios.create();
export const destroy = <T>(url: string, config = {}): Promise<T> => axios.delete(url, config);
export const get = <T>(url: string, config = {}): Promise<T> => axios.get(url, config);
export const post = <T>(url: string, body = {}, config = {}): Promise<T> => axios.post(url, body, config);
export const put = <T>(url: string, body = {}, config = {}): Promise<T> => axios.put(url, body, config);
export default axios;
