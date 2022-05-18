import { configureStore } from '@reduxjs/toolkit';

/** stores **/
import appReducer from './App.store';
import emailReducer from './Email.store';
import imgReducer from './Img.store';

const store = configureStore({
  reducer: {
    app: appReducer,
    email: emailReducer,
    img: imgReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: ""
    }
  })
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default  store;
