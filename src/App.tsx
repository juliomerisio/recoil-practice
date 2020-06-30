import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <GlobalStyle />
        <Helmet>
          <title>Recoil - VUTTR</title>
          <meta name="description" content="RecoilJS Exercise" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
