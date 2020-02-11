import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../layout/NotFound';

const routes = () => {

    return (
        <section className='container'>
            
            <Switch>
                <Route exact path= '/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

   
;

export default routes;