import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

/** api **/
import { IServerResponse, post, Paths as ApiPaths } from '../api/api';

const CONTACT_TEMPLATE_ID = process.env.REACT_APP_CONTACT_TEMPLATE_ID as string;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string;
const SUBSCRIPTION_TEMPLATE_ID = process.env.REACT_APP_SUBSCRIPTION_TEMPLATE_ID as string;
const USER_ID = process.env.REACT_APP_USER_ID as string;

/** thunks **/
export const sendEmail = createAsyncThunk('email/sendEmail', async ({ config, form, templateID }: { config?: AxiosRequestConfig; form: Record<string, any>, templateID: string; }) => {
  const response = await post<AxiosResponse<IServerResponse>>(ApiPaths.EMAIL_SEND, {
    service_id: SERVICE_ID,
    template_id: templateID,
    template_params: form,
    user_id: USER_ID
  }, { headers: { contentType: 'application/json' } });

});



interface IEmailState {
  templateIDs: Record<string, string>
}
const initialState: IEmailState = {
  templateIDs: {
    CONTACT_TEMPLATE_ID,
    SUBSCRIPTION_TEMPLATE_ID
  }
};
export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {},
  extraReducers: {}
});
export default emailSlice.reducer;