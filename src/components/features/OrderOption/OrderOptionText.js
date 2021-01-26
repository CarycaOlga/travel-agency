import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input
      className={styles.input}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      type= "text"
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: ProtoTypes.node,
  setOptionValue: ProtoTypes.func,
};

export default OrderOptionText;