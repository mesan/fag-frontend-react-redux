import { OPERAND_MULTIPLIED } from '../constants';

export default function multiplyOperand(operand) {
  return {
    type: OPERAND_MULTIPLIED,
    payload: { operand }
  };
}
