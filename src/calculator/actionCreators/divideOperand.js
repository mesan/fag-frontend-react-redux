import { OPERAND_DIVIDED } from '../constants';

export default function divideOperand(operand) {
  return {
    type: OPERAND_DIVIDED,
    payload: { operand }
  };
}
