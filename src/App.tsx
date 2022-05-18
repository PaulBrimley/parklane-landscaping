import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';
import { LocationProvider } from '@reach/router';

/** stores **/
import { setWidth } from './stores/App.store';

/** hooks **/
import { useAppDispatch } from './hooks/useStore.hook';
import useWindowDimensions from './hooks/useWindowDimensions';

/** components **/
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import Menu from './components/organisms/Menu';
import Routes from './routes/Routes';

/** theme **/
import Theme from './theme';

function App() {
  const dispatch = useAppDispatch();
  const appRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions(appRef);

  useEffect(() => {
    dispatch(setWidth(width));
  }, [width]);

  return (
    <LocationProvider>
      <ThemeProvider theme={Theme}>
        <StyledApp ref={appRef}>
          <ToastContainer transition={Slide} hideProgressBar={true} autoClose={5000} pauseOnFocusLoss={false} icon={true} theme="colored" />
          <Menu />
          <Header />
          <div className="routes">
            <Routes />
          </div>
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </LocationProvider>
  );
}
const StyledApp = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 950px;
  min-width: 300px;
  margin: 0 auto;
  .routes {
    flex: 1 1 auto;
  }
`;

export default App;
