import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js'

import styles from './CartBoxSummary.module.scss';


const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.total}>
      <h1 className={styles.summary}>Summary: <span>10.99 $</span></h1>
    </div>
  </div>
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
  Component as CartBoxSummary,
  // Container as Button,
  Component as CartBoxSummaryComponent,
};
