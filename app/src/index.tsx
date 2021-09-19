/// <reference types="@rckeller/example-sdk" />
import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Button } from '@rckeller/example-react-lib';
import { DemoRoute } from './routes/Demo';

import './index.css'

const App = () => {
  return (
    <Router>
      <main>
        <header>
          <nav />
        </header>
        <section>
          <Switch>
            <Route exact path="/">
              <DemoRoute />
            </Route>
          </Switch>
        </section>
        <footer />
      </main>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));