import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';

const OrderOptionDropdown = ({required, currentValue, setOptionValue}) => (
  <input
    className={styles.inputSmall}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
    type= "number"
    required={required}
  >
  </input>
);

OrderOptionDropdown.propTypes = {
  required: ProtoTypes.any,
  currentValue: ProtoTypes.any,
  setOptionValue: ProtoTypes.any,
};

export default OrderOptionDropdown;