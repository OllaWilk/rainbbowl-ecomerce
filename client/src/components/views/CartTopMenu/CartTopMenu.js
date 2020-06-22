import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, changeAmount, addNotes, removeProduct, saveCartRequest, loadCartRequest, getTotalPrice, getTotalAmount} from '../../../redux/cartRedux.js';

import styles from './CartTopMenu.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartTopMenu } from '../../views/CartTopMenu/CartTopMenu';


class Component extends React.Component {

  state = {
    opened: false,
  }

  static propTypes = {
    className: PropTypes.string,
    cart: PropTypes.object,
    changeAmount: PropTypes.func,
    addNotes: PropTypes.func,
    removeProduct: PropTypes.func,
    loadCart: PropTypes.func,
    saveCart: PropTypes.func,
    total: PropTypes.number,
    amount: PropTypes.number,
  };

  componentDidMount() {
    this.props.loadCart();
  }

  componentDidUpdate() {
    this.props.saveCart(this.props.cart);
  }

  toggleCart() {
    const { opened } = this.state;

    opened ? this.setState({ opened: false }) : this.setState({ opened: true });
  }

  render() {
    const { className, cart, changeAmount, addNotes, removeProduct, total, amount } = this.props;
    const { opened } = this.state;

    return (
      <section className={clsx(className, styles.root)}>
        <div>
          <Button className={styles.iconbascet} onClick={() => this.toggleCart()}>
            {/* <Button className={styles.iconbascet} onClick={toggleCart} > */}
            <FontAwesomeIcon icon={faCartPlus} className={styles.bascet} />
            {/* <span>${cart.total}</span> */}
            <span>{cart.products.length ? `$ ${total} (${parseInt(amount)})` : '0 (0)'}</span>
          </Button>
          {/* {isCart ? <CartTopMenu /> : ''} */}
          {this.state.isCart ? <CartTopMenu /> : ''}
        </div>

        {opened ?
        <div className={styles.cartOpen}>
          <div className={`${styles.cart} cart sm-12 `}>
            <div className={styles.table} aria-label="cart table">


              {cart.products.map(el => (
                <div key={el._id} className={ styles.wrap}>
                  <div className={styles.image} >
                    <img className={styles.img} src= { el.images } alt="eloquence" />
                  </div>
                  <div className={` ${styles.description} col-8 `}>
                    <p id='cart-item-title ' className={ styles.productName }>
                      { el.title }
                    </p>
                    <div className={` ${styles.cartDesc} d-flex justify-content-between `} >
                      <span span id='cart-item-price '>$ { el.price * el.amount} </span>
                      <AmountWidget
                        className={styles.amountWidget}
                        value={el.amount}
                        onChange={e => changeAmount({ id: el._id, amount: parseInt(e.target.value) })}
                      />
                      <div id='cart-item-remove ' className={ styles.cartItemRemove }>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => removeProduct(el)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=' d-flex justify-content-center pb-3 '>
                    <textarea
                      value={el.notes}
                      placeholder="Personalize your product here"
                      onChange={e => addNotes({ id: el._id, notes: e.target.value })}
                      className=' d-flex justify-content-center '
                    >
                    </textarea>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
        :
        <div className={styles.emptyCart}>
          <span>Your cart is empty</span>
        </div>
      }
        <div>
          <Button color="primary" variant="contained" href="/cart" >Show my order</Button>
        </div>

      </section>
    );
  };
}



const mapStateToProps = state => ({
  cart: getCart(state),
  total: getTotalPrice(state),
  amount: getTotalAmount(state),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
  addNotes: (id, notes) => dispatch(addNotes(id, notes)),
  removeProduct: (product) => dispatch(removeProduct(product)),
  loadCart: () => dispatch(loadCartRequest()),
  saveCart: data => dispatch(saveCartRequest(data)),

});

const ComponentMenuTop = connect(mapStateToProps, mapDispatchToProps )(Component);


export {
  ComponentMenuTop as CartTopMenu,
  Component as CartTopMenuComponent,
};
