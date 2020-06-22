import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, loadProductsRequest } from '../../../redux/productsRedux.js';


import styles from './Products.module.scss';
import { ProductBox } from '../../common/ProductBox/ProductBox';
import { Title } from '../../common/Title/Title';

class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    products: PropTypes,
    loadProducts: PropTypes.func,
  };

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { className, products } = this.props;
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
                  <ProductBox key={el._id} {...el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {

  ProductsContainer as Products,
  Component as ProductsComponent,
};
