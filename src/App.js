import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import TopMenu from './global/TopMenu';
import Footer from './global/Footer';
import Home from './pages/Home';
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopMenu />
        <Container maxWidth="md">
          <Home />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
