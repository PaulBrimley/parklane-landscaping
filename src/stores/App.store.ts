import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Theme from '../theme';

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
  modals: Record<string, boolean>;
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
  modals: {},
  width: 0
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    registerModal(state: IAppState, action: PayloadAction<string>) {
      state.modals[action?.payload] = false;
    },
    setMenuCollapsed(state: IAppState, action: PayloadAction<boolean>) {
      state.menuCollapsed = action?.payload;
    },
    setModalStatus(state: IAppState, action: PayloadAction<{ modalID: string; open: boolean; }>) {
      state.modals[action?.payload?.modalID] = action?.payload?.open;
    },
    setWidth(state: IAppState, action: PayloadAction<number>) {
      state.isMobile = action?.payload <= Theme.mobileWidth;
      state.width = action?.payload;
    }
  },
  extraReducers: {}
});
export const { registerModal, setMenuCollapsed, setModalStatus, setWidth } = appSlice.actions;
export default appSlice.reducer;