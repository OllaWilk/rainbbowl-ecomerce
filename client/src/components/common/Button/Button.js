import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Button.module.scss';

const Component = ({className, children, link, buttonTitle}) => (
  <a className={clsx(className, styles.root)}>
    <a href={ link } className={`btn btn-outline-secondary text-uppercase ${styles.btnAbaut} `}>{ buttonTitle }</a>
  </a>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
  buttonTitle: PropTypes.string,
};


export {
  Component as Button,
  Component as ButtonComponent,
};
