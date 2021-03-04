import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
// import style from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid'; 
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
//import {setOrderOption} from '../../../redux/orderRedux';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import {settings} from '../../../data/settings';

const sendOrder = (options, tripCost, countryId, countryName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if ((options.name == '') || (options.contact == '')) {
    window.alert('Please fill name and contact form');
  }else {
    const payload = {
      countryId,
      countryName,
      countryCode,
      ...options,
      totalCost,
    };
  

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({optionsOrder, setOrderOption, tripCost, countryName, countryCode, countryId}) => (
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
    <Button onClick={() => sendOrder(optionsOrder, tripCost, countryName, countryCode, countryId)}>Order Now!</Button>
  </Row>

);

OrderForm.propTypes = {
  cost: PropTypes.string,
  tripCost: PropTypes.string,
  optionsOrder: PropTypes.object,
  setOrderOption: PropTypes.func,
  countryName: PropTypes.string,
  countryId: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;