import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';
import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';

const Component = ({ className }) => (
  <section className={clsx(className, styles.root)}>
    <div className={`  py-5 `}>
      <div className='container '>
        <div className={ styles.contact }>
          <div className={ `${styles.formPosition}` }>
            <form method="POST" action="/contact">
              <div className='d-flex align-items-center '>
                <Title title="Send" dominant="Message" />
              </div>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                minLength="2"
                maxLength="40"
                title="Write your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                title="Write your email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                minLength="2"
                maxLength="40"
                title="Write your subject"
                required
              />

              <textarea
                placeholder="Type your message here"
                name="message">
              </textarea>

              <Button link="/contact" buttonTitle="send" />
            </form>
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
  Component as Contact,
  // Container as PostAdd,
  Component as ContactComponent,
};
