import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';
import { Title } from '../../common/Title/Title';
import { CartBox } from '../../common/CartBox/CartBox';
import { CartBoxSummary } from '../../features/CartBoxSummary/CartBoxSummary';


const Component = ({ className }) => (
  <section className={clsx(className, styles.root)}>
    <div className={`  py-5 `}>
      <div className='container '>
        <div className={` ${styles.cart} row `}>
          <div className='col-10 max-auto col-md-6 my-5 align-self-center  '>
            <CartBox />
            <CartBoxSummary />
          </div>
          {/* Order*/}
          <div className={`${styles.order} col-10 max-auto col-md-6 my-5 `}>
            <div className='d-flex align-items-center '>
              <Title name="Order" />
            </div>
            <p className='my-4 text-muted ' >
                podsumowanie zamówienia ORDER
            </p>
            <div className='d-flex'>
              <Button link={`/product`} buttonTitle="order" />
              <Button className={styles.btnBack} link={`/ `} buttonTitle='back' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
