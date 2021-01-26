/*import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {!required ? '' : (
      <div className={styles.icon} key={key} onClick= {event => setOptionValue('')}>
          <Icon name='time-circle'/>
          none
      </div>
    )}
    {values.map(value => (
      <div
        HERE I NEED HELP --> (className={styles.icon})
        key={value.id}
        onClick={event => setOptionValue(event.value.id)}>
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: ProtoTypes.any,
  required: ProtoTypes.any,
  currentValue: ProtoTypes.any,
  setOptionValue: ProtoTypes.any,
};

export default OrderOptionIcons;*/