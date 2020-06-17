import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';
import { Title } from '../../common/Title/Title';
import { CartBox } from '../../common/CartBox/CartBox';
import { CartBoxSummary } from '../../features/CartBoxSummary/CartBoxSummary';

const Component = ({ className }) => {
  return (
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
              <div className='my-4 text-muted ' >

              </div>
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
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  addNotes: PropTypes.func,
};

export {
  Component as Cart,
  Component as CartComponent,
};
