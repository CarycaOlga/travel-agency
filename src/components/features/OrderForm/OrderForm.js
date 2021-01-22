import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
// import style from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid'; 

const OrderForm = (props) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} orderOption={props.optionsOrder}/> 
    </Col>
  </Row>

);

OrderForm.propTypes = {
  cost: PropTypes.string,
  tripCost: PropTypes.string,
  optionsOrder: PropTypes.object,
};

export default OrderForm;