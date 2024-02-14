import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/CounterContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/global-styles.css';

import { Home } from './templates/Home';
import { Abc } from './templates/Abc';
import { Page404 } from './templates/Page404';

import { Menu } from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/abc/:id?" Component={Abc} />
          <Route path="/abc" Component={Abc} />
          <Route exact path="/" Component={Home} />
          <Route path="*" Component={Page404} />
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
