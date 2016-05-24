import { DIGIT_TO_OPERAND_ADDED } from '../constants';

export default function addDigitToOperand(number) {
  return {
    type: DIGIT_TO_OPERAND_ADDED,
    payload: { number }
  };
}
