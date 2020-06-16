import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './About.module.scss';
import { Title } from '../../common/Title/Title';

const Component = ({ className }) => (

  <section className={clsx(className, styles.root)}>
    <div className={`  py-5 `}>
      <div className='container '>
        <div className={` ${styles.abaut} row `}>
          <div className='col-10 max-auto col-md-6 my-5 '>
            <div className='d-flex align-items-center '>
              <Title title="About" dominant="Us" />
            </div>
            <p className='my-4 text-muted ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
          </div>
          <div className='col-10 max-auto col-md-6 my-5 align-self-center '>
            <div className={styles.aboutImgContainer}>
              <img src='/img/aboutOptimazed.jpg' className='img-fluid ' alt='imgWe' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  Component as About,
  // Container as PostEdit,
  Component as AboutComponent,
};
