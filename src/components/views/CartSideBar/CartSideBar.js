import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartSideBar.module.scss';
// import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Component = ({className, children}) => (
  <section className={clsx(className, styles.root)}>
    <div className={styles.iconbascet} >
      <FontAwesomeIcon
        icon={faCartPlus}
        className={styles.bascet}
      />
      8
    </div>
    <div className={styles.cartOpen}>
      <div className={`${styles.cart} cart sm-12 `}>
        <div className={styles.cartItems}>
        </div>
      </div>
    </div>
  </section>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as CartSideBar,
  // Container as CartSideBar,
  Component as CartSideBarComponent,
};
