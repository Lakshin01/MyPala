import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';


import Header from './Header';




class Layout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>




render() {

    return (
        <div className="app">
            <Header fixed>
            </Header>
        </div>
    );
    }
}

export default Layout