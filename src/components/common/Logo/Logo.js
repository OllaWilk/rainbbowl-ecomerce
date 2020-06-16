import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Link className={styles.logo} to={'/'}>
      <img className={styles.logoImg} src='/img/logo-rainbbowl_optimized.png' alt='logo' />
      <p className={styles.logoName}>Rainbbowl</p>
    </Link>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as Logo,
  Component as LogoComponent,
};
