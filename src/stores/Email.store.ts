import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/** api **/
import { get, IServerResponse, post, Paths as ApiPaths } from '../api/api';

const CONTACT_SERVICE_ID = process.env.REACT_APP_CONTACT_SERVICE_ID as string;
const CONTACT_TEMPLATE_ID = process.env.REACT_APP_CONTACT_TEMPLATE_ID as string;
const SUBSCRIBE_SERVICE_ID = process.env.REACT_APP_SUBSCRIBE_SERVICE_ID as string;
const SUBSCRIBE_TEMPLATE_ID = process.env.REACT_APP_SUBSCRIBE_TEMPLATE_ID as string;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID as string;

/** thunks **/
export const sendEmail = createAsyncThunk('email/sendEmail', async ({ config, form, serviceID, templateID }: { config?: AxiosRequestConfig; form: Record<string, any>, serviceID: string, templateID: string; }) => {
  const response = await post<AxiosResponse<IServerResponse>>(ApiPaths.EMAIL_SEND, {
    service_id: serviceID,
    template_id: templateID,
    template_params: form,
    user_id: USER_ID
  }, { headers: { contentType: 'application/json' } });
});



interface IEmailState {
  serviceIDs: Record<string, string>,
  templateIDs: Record<string, string>
}
const initialState: IEmailState = {
  serviceIDs: {
    CONTACT_SERVICE_ID,
    SUBSCRIBE_SERVICE_ID
  },
  templateIDs: {
    CONTACT_TEMPLATE_ID,
    SUBSCRIBE_TEMPLATE_ID
  }
};
export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {},
  extraReducers: {}
});
export default emailSlice.reducer;