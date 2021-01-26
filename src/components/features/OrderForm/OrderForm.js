import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
// import style from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid'; 
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
//import {setOrderOption} from '../../../redux/orderRedux';

const OrderForm = ({optionsOrder, setOrderOption, tripCost}) => (
  <Row>
    {pricing.map(item => (
      <Col md={4} key={item.id}>
        <OrderOption
          {...item}
          currentValue={optionsOrder[item.id]}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} orderOption={optionsOrder}/> 
    </Col>
  </Row>

);

OrderForm.propTypes = {
  cost: PropTypes.string,
  tripCost: PropTypes.string,
  optionsOrder: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;