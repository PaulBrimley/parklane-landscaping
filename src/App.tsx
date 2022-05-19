import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';

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

function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
    </main>
  );
}
function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}
function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  );
}


function App() {
  const dispatch = useAppDispatch();
  const appRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions(appRef);

  useEffect(() => {
    dispatch(setWidth(width));
  }, [width]);

  return (

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

    /*<div>
      <h1>Book Keeper!</h1>
      <nav style={{borderBottom: '1px solid black', paddingBottom: '1rem'}}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>*/
    /*<LocationProvider>
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
    </LocationProvider>*/
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
