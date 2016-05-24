import { OPERAND_SUBTRACTED } from '../constants';

export default function subtractOperand(operand) {
  return {
    type: OPERAND_SUBTRACTED,
    payload: { operand }
  };
}
