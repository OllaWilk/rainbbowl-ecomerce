import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './CartSideBar.module.scss';
// import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Component = ({ className, cart }) => {
  console.log('cart', cart);

  return (
    <section className={clsx(className, styles.root)}>
      <div className={styles.iconbascet} >
        <FontAwesomeIcon
          icon={faCartPlus}
          className={styles.bascet}
        />
        <span>{parseInt(cart.amount)}</span>
      </div>
      <div className={styles.cartOpen}>
        <div className={`${styles.cart} cart sm-12 `}>
          <div className={styles.cartItems}>
          </div>
        </div>
      </div>
    </section>
  );
};

Component.propTypes = {
  cart: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as CartSideBar,
  Component as CartSideBarComponent,
};
