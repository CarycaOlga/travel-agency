import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state, props) => {
  const optionsOrder = getOrderOptions(state, props);

  return {
    optionsOrder,
  };
};

export default connect(mapStateToProps)(OrderForm);