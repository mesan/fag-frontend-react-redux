import { DIGIT_TO_OPERAND_ADDED } from '../constants';

export default function addDigitToOperand(digit) {
  return {
    type: DIGIT_TO_OPERAND_ADDED,
    payload: { digit }
  };
}
