import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { Products } from '../../features/Products/Products';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Products />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as Homepage,

  Component as HomepageComponent,
};
