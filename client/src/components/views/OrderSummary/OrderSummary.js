import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, sendOrder } from '../../../redux/cartRedux.js';

import styles from './OrderSummary.module.scss';

import Button from '@material-ui/core/Button';
import { Title } from '../../common/Title/Title';
import { CartBox } from '../../common/CartBox/CartBox';
import { BillingDetailsForm } from '../../common/BillingDetailsForm/BillingDetailsForm';
import { CostSummary } from '../../common/CostSummary/CostSummary';
import CardHeader from '@material-ui/core/CardHeader';


const Component = ({ className, cart, sendOrder}) => {
  console.log('cart', cart);

  const [client, setClient] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    postCode: '',
    city: '',
    phone: '',
    email: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setClient({ ...client, [name]: value });
  };


  return (
    <section className={clsx(className, styles.root)}>
      <div className={` ${styles.cart}  py-5 `}>
        <div className='container '>
          <div className= 'row'>
            <div className='col-10 max-auto col-md-6 my-5 align-self-center  '>
              <CartBox cart={cart} />
              <CardHeader title="Cart total" />
              <CostSummary cart={cart} />
            </div>
            <div className={`${styles.order} col-10 max-auto col-md-6 my-5 `}>
              <Title title="your" dominant="Order" className='d-flex align-items-center ' />
              <div className='my-4 text-muted ' >
                <BillingDetailsForm onChange={handleChange} client={client}>
                  <Button color="primary" variant="contained" onClick={() => sendOrder({ cart: cart, client: client})}>Order</Button>
                </BillingDetailsForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  sendOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: (cart, client) => dispatch(sendOrder(cart, client)),
});

const OrderSummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  OrderSummaryContainer as OrderSummary,
  Component as OrderSummaryComponent,
};
