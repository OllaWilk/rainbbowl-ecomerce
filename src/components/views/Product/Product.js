import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';

import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from '../../views/NotFound/NotFound';
import { Button } from '../../common/Button/Button';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

const Component = ({ className, product }) => {
  const {  title, description, images, price } = product;

  const [value, setValue] = React.useState(1);

  const handleAdd = () => {
    if (value >= 1 &&  value < 10) {
      setValue(value + 1);
    }
  };

  const handleRemove = () => {
    if (value <= 10 && value > 1 ) {
      setValue(value - 1);
    }
  };

  const onChange = ({ target }) => {
    console.log('target', target);
  };


  return (
    product && product.id ? (
      <section className={clsx(className, styles.root)}>
        <div className={`  py-5 `}>
          <div className='container '>
            <div className={` ${styles.productDetails} row `}>
              <div className='col-10 max-auto col-md-6 my-5 align-self-center '>
                <div className={styles.productDetailsImgContainer}>
                  <div className={`card ${styles.singleItem}`} >
                    <div className={styles.imgContainer}>
                      <img
                        src={ images }
                        alt='sweet1'
                        className={`${styles.storeImg} card-img-top align-items-stretch`}
                      />
                      <span className={styles.storeItemIcon }>
                        <p>
                          <FontAwesomeIcon icon={faHeart} />
                            Add to favorites
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-10 max-auto col-md-6 my-5 '>
                <div className='d-flex align-items-center '>
                  <h2 className={styles.title }>{ title }</h2>
                  <strong className={styles.titleDominant}>
                        ${ price }
                  </strong>
                </div>
                <p className='my-4 text-muted ' >
                  { description }
                </p>
                <div className='d-flex'>
                  <AmountWidget value={value} onAdd={handleAdd} onRemove={handleRemove} onChange={onChange} />
                  <Button className={styles.btnBack} link={`/`} buttonTitle="buy" />
                  <Button className={styles.btnBack} link={`/`} buttonTitle="back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) :
      (
        <NotFound />
      )
  );
};

Component.propTypes = {
  product: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ProductContainer = connect(mapStateToProps)(Component);

export {
  ProductContainer as Product,
  Component as ProductComponent,
};