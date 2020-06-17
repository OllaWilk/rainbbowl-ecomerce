import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addProduct } from '../../../redux/cartRedux.js';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Component = ({ className, title, images, price, id, addProduct }) => {

  const [value] = React.useState(1);

  return (
    <div className={clsx(className, styles.root)}>
      <div className={`card ${styles.singleItem}`} >
        <div className={styles.imgContainer}>
          <Link  to={`/products/${id}`}>
            <img src={ images } alt='sweet1' className={`${styles.storeImg} card-img-top align-items-stretch`} />
          </Link>
          <span className={styles.storeItemIcon }>
            <FontAwesomeIcon
              icon={faShoppingCart}
              onClick={() => addProduct({
                id, title, price, images, value,
              })}
            />
          </span>
        </div>
        <div className={`${styles.cardBody} card-body  `}>
          <div className='card-text d-flex justify-content-between align-items-cente '>
            <FontAwesomeIcon className={styles.iconHart} icon={faHeart} />
            <h5 className={ styles.itemTitle }>{ title }</h5>
            <h5 className='store-item-value'><strong>$ {price * value} </strong></h5>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  addProduct: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  addProduct: (product, amount) => dispatch(addProduct(product, amount)),
});

const Container = connect( null, mapDispatchToProps)(Component);

export {
  // Component as ProductBox,
  Container as ProductBox,
  Component as ProductBoxComponent,
};