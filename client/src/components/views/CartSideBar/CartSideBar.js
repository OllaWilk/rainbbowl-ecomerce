import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './CartSideBar.module.scss';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartBox } from '../../common/CartBox/CartBox';


const Component = ({ className, cart }) => {
  console.log('cart', cart);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section className={clsx(className, styles.root)}>
      <div className={styles.iconbascet} >
        <FontAwesomeIcon
          icon={faCartPlus}
          className={styles.bascet}
          onClick={(e) => handleClick(e)}
        />
        <span>{parseInt(cart.amount)}</span>
      </div>
      {open ? (
        <div className={styles.cartOpen}>
          <div className={`${styles.cart} cart sm-12 `}>
            <div className={styles.cartItems}>
              {cart.length ? (cart.map((prod) => (<CartBox key={prod.id} {...prod} />)))
                : (
                  <div className={styles.cartEmpty}>
                    <p>Your cart is empty</p>
                  </div>
                )}
            </div>
            {cart.length ? (
              <div>
                <Button link={`/cart`} buttonTitle="order"  />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
};

Component.propTypes = {
  cart: PropTypes.array,
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
