import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Component = ({ className, title, images, price, id }) => (
  <div className={clsx(className, styles.root)}>
    <div className={`card ${styles.singleItem}`} >
      <div className={styles.imgContainer}>
        <Link  to={`/products/${id}`}>
          <img src={ images } alt='sweet1' className={`${styles.storeImg} card-img-top align-items-stretch`} />
        </Link>
        <span className={styles.storeItemIcon }>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </div>
      <div className={`${styles.cardBody} card-body  `}>
        <div className='card-text d-flex justify-content-between align-items-cente '>
          <FontAwesomeIcon className={styles.iconHart} icon={faHeart} />
          <h5 className={ styles.itemTitle }>{ title }</h5>
          <h5 className='store-item-value'><strong>$ {price} </strong></h5>
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};