import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { About } from './components/views/About/About';
import { Contact } from './components/views/Contact/Contact';
import { NotFound } from './components/views/NotFound/NotFound';

import './styles/bootstrap.scss';
import './styles/global.scss';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffb8b8' },
    secondary: { main: '#67e6dc' },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;