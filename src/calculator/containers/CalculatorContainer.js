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
  addDigitToOperand: number => () => undefined, // use dispatch perhaps?
  operationActions: {
    add: operand => () => undefined, // use dispatch perhaps?
    subtract: operand => () => undefined, // use dispatch perhaps?
    multiply: operand => () => undefined, // use dispatch perhaps?
    divide: operand => () => undefined // use dispatch perhaps?
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
