import {
  DIGIT_TO_OPERAND_ADDED,
  OPERAND_ADDED,
  OPERAND_SUBTRACTED,
  OPERAND_MULTIPLIED,
  OPERAND_DIVIDED
} from '../constants';

export default function nextOperandReducer(state = 0, action) {
  switch (action.type) {
    case DIGIT_TO_OPERAND_ADDED: {
      const { number } = action.payload;
      return parseInt(`${state}${number}`, 10);
    }
    case OPERAND_ADDED:
    case OPERAND_SUBTRACTED:
    case OPERAND_MULTIPLIED:
    case OPERAND_DIVIDED: {
      return 0;
    }
    default: {
      return state;
    }
  }
}
