import React from 'react';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = (props) => (
  <h2 className = {styles.component}>Total
    <strong>{formatPrice(calculateTotal(props.tripCost, props.orderOption))}</strong></h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  orderOption: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderSummary;