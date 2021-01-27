import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ProtoTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <div>
      <DatePicker 
        dateFormat="dd/MM/yyyy" 
        selected={currentValue} 
        onChange={setOptionValue}
        showWeekNumbers />
    </div>
  );
};

OrderOptionDate.propTypes = {
  currentValue: ProtoTypes.any,
  setOptionValue: ProtoTypes.any,
};


export default OrderOptionDate;