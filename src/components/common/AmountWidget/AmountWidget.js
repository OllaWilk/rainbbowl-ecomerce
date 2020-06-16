import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './AmountWidget.module.scss';


const Component = ({ className, value, onChange, onAdd, onRemove }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.amountWidget}>
        <div className= {styles.btnAbaut} onClick={onAdd} >+</div>
        <div className= {styles.input} type="number" min="1" max="10" value={value} onChange={onChange} >{value}</div>
        <div className= {styles.btnAbaut} onClick={onRemove} >-</div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export {
  Component as AmountWidget,
  Component as AmountWidgetComponent,
};
