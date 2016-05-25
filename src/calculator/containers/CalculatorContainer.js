import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import addDigitToOperand from '../actionCreators/addDigitToOperand';
import addOperand from '../actionCreators/addOperand';
import subtractOperand from '../actionCreators/subtractOperand';
import multiplyOperand from '../actionCreators/multiplyOperand';
import divideOperand from '../actionCreators/divideOperand';

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const mapStateToProps = ({ sum, nextOperand }) => ({
  sum,
  nextOperand,
  digits
});

const mapDispatchToProps = dispatch => ({
  addDigitToOperand: number => () => dispatch(addDigitToOperand(number)),
  operationActions: {
    add: operand => () => dispatch(addOperand(operand)),
    subtract: operand => () => dispatch(subtractOperand(operand)),
    multiply: operand => () => dispatch(multiplyOperand(operand)),
    divide: operand => () => dispatch(divideOperand(operand))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
