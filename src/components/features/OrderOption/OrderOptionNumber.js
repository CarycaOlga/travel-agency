import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';

const OrderOptionNumber = ({required, currentValue, setOptionValue}) => (
  <input
    className={styles.inputSmall}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
    type= "number"
    required={required}
  >
  </input>
);

OrderOptionNumber.propTypes = {
  required: ProtoTypes.any,
  currentValue: ProtoTypes.any,
  setOptionValue: ProtoTypes.any,
};

export default OrderOptionNumber;