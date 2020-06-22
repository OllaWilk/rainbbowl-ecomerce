import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Title.module.scss';


class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    dominant: PropTypes.string,
  }

  render() {
    const { className, title, dominant } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <div className='d-flex align-items-center '>
          <div className="row">
            <div className="col-12 max-auto my-2 " >
              <h1 className= {styles.title}>{ title }
                <span className={styles.titleDominant}>{ dominant }</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export {
  Component as Title,
  Component as TitleComponent,
};
