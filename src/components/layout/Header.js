import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

import SideNavPage from './SideNavPage';



class Header extends Component {


    render() {

        return(
            <nav className="navbar bg-dark">
               
                <h1>
                    <Link disabled to = '/'>
                        <i className='fas fa-code' /> Logo
                    </Link>
                </h1>
            </nav>
            
        )
    };
}

export default Header;