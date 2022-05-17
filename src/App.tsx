import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';

import Routes from './routes/Routes';
function App() {
  return (
    <ThemeProvider theme={{}}>
      <StyledApp>
        <ToastContainer transition={Slide} hideProgressBar={true} autoClose={5000} pauseOnFocusLoss={false} icon={true} theme="colored" />

        <Routes />
      </StyledApp>
    </ThemeProvider>
  );
}
const StyledApp = styled.div``;

export default App;
