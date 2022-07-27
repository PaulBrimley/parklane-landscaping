import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Theme from '../theme';

const RE_CAPTCHA_SITE_KEY = process.env.REACT_APP_RE_CAPTCHA_SITE_KEY as string;

interface ICompanyInfo {
  city: string;
  email: string;
  phone: string;
  poBox: string;
  state: string;
  street: string;
  website: string;
  zip: string;
}
interface IAppState {
  companyInfo: ICompanyInfo;
  isMobile: boolean;
  menuCollapsed: boolean;
  reCAPTCHASiteKey: string;
  width: number;
}
const initialState: IAppState = {
  companyInfo: {
    city: 'San Antonio',
    email: 'info@parklanelandscaping.com',
    phone: '210-239-6715',
    poBox: 'P.O. Box 100054',
    state: 'TX',
    street: '2910 N Elmendorf St',
    website: 'www.parklanelandscaping.com',
    zip: '78201'
  },
  isMobile: false,
  menuCollapsed: true,
  reCAPTCHASiteKey: RE_CAPTCHA_SITE_KEY,
  width: 0
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenuCollapsed(state: IAppState, action: PayloadAction<boolean>) {
      state.menuCollapsed = action?.payload;
    },
    setWidth(state: IAppState, action: PayloadAction<number>) {
      state.isMobile = action?.payload <= Theme.mobileWidth;
      state.width = action?.payload;
    }
  },
  extraReducers: {}
});
export const { setMenuCollapsed, setWidth } = appSlice.actions;
export default appSlice.reducer;