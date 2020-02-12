import React, { Component, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, NavItem ,Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { logout } from '../../actions/auth';
import SideNav from '../layout/SideNav';





class Header extends Component {


    render() {

        const authlinks = (
            <ul>
                <li>
                    <Link to= '/profiles'> Developers</Link>
                </li>
                <li>
                    <Link to = '/posts'> Posts</Link>
                </li>
                <li>
                    <Link to = '/dashboard'>
                        <span>Dashboard</span>
                    </Link>
                </li>
            </ul>
        );

        return(
            
            <nav className="navbar bg-dark animated fadeIn pt-1 text-center">
                
               
                <h1>
                    <Link disabled to = '/'>
                        <i className='fas fa-code' /> Logo
                    </Link>
                </h1>
                

                <Fragment>
                    {authlinks}
            </Fragment>
            </nav>
            
        )
    };
}

export default Header;