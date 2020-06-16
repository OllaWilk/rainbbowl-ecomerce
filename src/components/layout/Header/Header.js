import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import { Logo } from '../../common/Logo/Logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faHeart } from '@fortawesome/free-solid-svg-icons';


const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <header className={`navbar navbar-expoand-sm px-sm-5  ${styles.header}`}>
      <Logo className={styles.logoHeader}/>

      {/* MENU BAR */}
      <nav>
        <div className= "navbar navbar-expand-sm px-sm-5 ">
          <div className={`col-auto ${styles.menu} `} >
            <ul >
              <li>
                <Link to={'/'} className={styles.active}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* USER OPTIONS */}

      <div className= "navbar navbar-expand-sm px-sm-5 ">
        <div className={`col-auto ${styles.userOption} `}>
          <ul >
            <li className={styles.split}>
              <Link to={'/'} className={styles.active}>EN</Link>
            </li>
            <li>
              <Link className={styles.unactive} to={'/pl'} >PL</Link>
            </li>
          </ul>
        </div>
        <div className={`col-auto  ${styles.userOption} `}>
          <ul  >
            <li>
              <Link to={'http://google.com'}>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to={'/pl'}>
                <FontAwesomeIcon className={styles.icon} icon={faHeart} />
              </Link>
            </li>
            <li >
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};