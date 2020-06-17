import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, changeAmount } from '../../../redux/cartRedux.js';
import { addNotes } from '../../../redux/cartRedux.js';

import styles from './CartBox.module.scss';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

const Component = ({ className, cart, changeAmount, addNotes }) => {

  return (
    <section className={clsx(className, styles.root)}>
      {cart.products.map(el => (
        <div key={el.id} className={`${ styles.wrap}  mx-auto `}>
          <div className={styles.image} >
            <img className={styles.img} src= { el.images } alt="eloquence" />
          </div>
          <div className={` ${styles.description} col-8 `}>
            <p id='cart-item-title ' className={ styles.productName }>
              { el.title }
            </p>
            <div className={` ${styles.cartDesc} d-flex justify-content-between `} >
              <span span id='cart-item-price '>$ { el.price * el.amount} </span>
              <AmountWidget className={styles.amountWidget} value={el.amount} onChange={e => changeAmount({ id: el.id, amount: parseInt(e.target.value) })} />
              <a href='/' id='cart-item-remove ' className={ styles.cartItemRemove }>
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </div>
          </div>
          <div className=' d-flex justify-content-center pb-3 '>
            <textarea
              value={el.notes}
              placeholder="Personalize your product here"
              onChange={e => addNotes({ id: el.id, notes: e.target.value })}
              className=' d-flex justify-content-center '
            >
            </textarea>
          </div>

        </div>
      ))}

    </section>
  );
};


Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  changeAmount: PropTypes.func,
  addNotes: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
  addNotes: (id, notes) => dispatch(addNotes(id, notes)),

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as CartBox,
  Component as CartBoxComponent,
};
