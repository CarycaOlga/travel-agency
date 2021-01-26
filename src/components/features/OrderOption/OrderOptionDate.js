import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={date => setStartDate(date)}
      showWeekNumbers />
  );
};


export default OrderOptionDate;