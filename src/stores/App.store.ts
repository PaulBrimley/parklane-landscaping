import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
  mobileWidth: number;
  modalOpen: boolean;
  theme: {};
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
  mobileWidth: 500,
  modalOpen: false,
  theme: {},
  width: 0
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModalOpen(state: IAppState, action: PayloadAction<boolean>) {
      state.modalOpen = action?.payload;
    }
  },
  extraReducers: {}
});
export const { setModalOpen } = appSlice.actions;
export default appSlice.reducer;