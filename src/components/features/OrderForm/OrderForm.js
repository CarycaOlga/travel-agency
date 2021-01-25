import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
// import style from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid'; 
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {setOrderOption} from '../../../redux/orderRedux';

const OrderForm = (props) => (
  <Row>
    {pricing.map(price => (
      <Col md={4} key={price.id}>
        <OrderOption
          currentValue={props.optionsOrder}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} orderOption={props.optionsOrder}/> 
    </Col>
  </Row>

);

OrderForm.propTypes = {
  cost: PropTypes.string,
  tripCost: PropTypes.string,
  optionsOrder: PropTypes.object,
  //setOrderOption: PropTypes.func,
};

export default OrderForm;