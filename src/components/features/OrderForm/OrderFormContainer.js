import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state, props) => {
  const optionsOrder = getOrderOptions(state, props);

  return {
    optionsOrder,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: orderOption => dispatch(setOrderOption(orderOption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);