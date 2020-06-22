import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getRequest, loadProductsRequest } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';

import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';
import { Alert, Progress } from 'reactstrap';


class Component extends React.Component {

  state = {
    value: 1,
  }


  static propTypes = {
    className: PropTypes.string,
    addProduct: PropTypes.func,
    products: PropTypes.array,
    request: PropTypes.object,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    loadProducts: PropTypes.func,
  };

  onChange = ({ target }) => {
    this.setState({ ...this.state, value: parseInt(target.value) });
  };

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { className, products, addProduct, request, match } = this.props;
    const { value } = this.state;

    if (request.pending) return <Progress animated color="primary" value={50} />;
    else if (request.error) return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !products.length) return <Alert color="info">No products</Alert>;
    else if (request.success)

      return (
        <section className={clsx(className, styles.root)}>
          {products.filter(el => el._id === match.params.id).map(product => (
            <div className={`  py-5 `} key={product._id} >
              <div className='container '>
                <div className={` ${styles.productDetails} row `}>
                  <div className='col-10 max-auto col-md-6 my-5 align-self-center '>
                    <div className={styles.productDetailsImgContainer}>
                      <div className={`card ${styles.singleItem}`} >
                        <div className={styles.imgContainer}>
                          <img
                            src={ product.images }
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
                      <h2 className={styles.title }>{product.title}</h2>
                      <strong className={styles.titleDominant}>
                        $ {product.price * value}
                      </strong>
                    </div>
                    <p className='my-4 text-muted ' >
                      {product.description}
                    </p>
                    <div className='d-flex'>
                      <AmountWidget value={this.state.value} /*onChange={e => this.onChange(e)} */ onChange={this.onChange}/>
                      <Button className={styles.submit} color="primary" variant="contained"  onClick={() => addProduct(product, value)}>Buy</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      );
  }
}

const mapStateToProps = state => ({
  products: getAll(state),
  request: getRequest(state),
});


const mapDispatchToProps = (dispatch) => ({
  addProduct: (product, amount) => dispatch(addProduct({ product, amount })),
  loadProducts: () => dispatch(loadProductsRequest()),
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ProductContainer as Product,
  Component as ProductComponent,
};