import React, { Component , lazy, Suspense } from 'react';
import {Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {MDBContainer} from 'mdbreact';



class Home extends Component {
  render() {

    return (
      <div >
      <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Container Content</h1>
          
          <div className='buttons'>
            <Link to='/register' className='btn btn-secondary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-dark'>
              Login
            </Link>
          </div>
        </div>
      </div>
      </section>
      
      </div>
    );

  } 
}


export default Home;