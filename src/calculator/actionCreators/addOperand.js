import { OPERAND_ADDED } from '../constants';

export default function addOperand(operand) {
  return {
    type: OPERAND_ADDED,
    payload: { operand }
  };
}
