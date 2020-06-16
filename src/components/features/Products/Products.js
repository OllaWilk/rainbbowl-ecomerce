import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';
import { ProductBox } from '../../common/ProductBox/ProductBox';
import { Title } from '../../common/Title/Title';

const Component = ({ className, products }) => {
  console.log('products', products);
  return (
    <div className={clsx(className, styles.root)}>
      <div className='container py-5 '>
        <div className='row '>
          <div className='col-10 mx-auto col-sm-6  '>
            <div className='d-flex align-items-center justify-content-center'>
              <Title title="Our" dominant="Shop"/>
            </div>
          </div>
        </div>
        <div className='container py-5 '>
          <div  className='row justify-content-center '>
            <div className={`${styles.wrapper}`}>
              {products.map(el => (
                <ProductBox key={el.id} {...el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ProductsContainer = connect(mapStateToProps)(Component);

export {

  ProductsContainer as Products,
  Component as ProductsComponent,
};
