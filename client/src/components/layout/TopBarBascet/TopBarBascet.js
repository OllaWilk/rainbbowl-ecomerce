import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCart, loadCartRequest } from '../../../redux/cartRedux.js';

import styles from './TopBarBascet.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartTopMenu } from '../../views/CartTopMenu/CartTopMenu';


class Component extends React.Component {

  state = {
    isCart: false,
  };

  static propTypes = {
    className: PropTypes.string,
    cart: PropTypes.object,
    loadCart: PropTypes.func,
  };

  componentDidMount() {
    const { loadCart } = this.props;
    loadCart();
  }

  toggleCart() {
    const { isCart } = this.state;
    return isCart ? this.setState({ isCart: false }) : this.setState({ isCart: true });
  }

  render() {
    const { className, cart } = this.props;

    // const [isCart, setCart] = React.useState(false);

    return (
      <div className={clsx(className, styles.root)}>

        <Button className={styles.iconbascet} onClick={() => this.toggleCart()}>
          {/* <Button className={styles.iconbascet} onClick={toggleCart} > */}
          <FontAwesomeIcon icon={faCartPlus} className={styles.bascet} />
          {/* <span>${cart.total}</span> */}
          <span>{`$ ${cart.total} (${parseInt(cart.amount)})`}</span>

        </Button>
        {/* {isCart ? <CartTopMenu /> : ''} */}
        {this.state.isCart ? <CartTopMenu /> : ''}

      </div>
    );
  }
}



const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  loadCart: (cart) => dispatch(loadCartRequest(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as TopBarBascet,
  Component as TopBarBascetComponent,
};
