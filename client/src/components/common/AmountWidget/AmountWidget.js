import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './AmountWidget.module.scss';


const Component = ({ className, value, onChange  }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.amountWidget}>
        <input type="number" min="1" max="10" value={value} onChange={onChange}/>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export {
  Component as AmountWidget,
  Component as AmountWidgetComponent,
};
