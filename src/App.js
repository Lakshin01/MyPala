import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/views/Home/Home';
import Routes from './components/routing/routes';
import Footer from './components/layout/Footer';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import './App.css';



function App() {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Routes} />
          </Switch>
          <Footer/>
        </Fragment>
      </Router>
      </Provider>
 



    );
}

export default App;
