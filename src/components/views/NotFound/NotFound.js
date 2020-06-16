import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';
import { Logo } from '../../common/Logo/Logo';
import { Title } from '../../common/Title/Title';

const Component = ({ className }) => (
  <section className={clsx(className, styles.root)}>
    <div className='container display-flex '>
      <Title title='Quo vadis  ' dominant='?' />
      <Logo />
    </div>
  </section>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
