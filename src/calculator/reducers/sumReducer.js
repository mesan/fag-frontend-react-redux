import {
  OPERAND_ADDED,
  OPERAND_SUBTRACTED,
  OPERAND_MULTIPLIED,
  OPERAND_DIVIDED
} from '../constants';

export default function sumReducer(state = 0, action) {
  switch (action.type) {
    case OPERAND_ADDED: {
      const { operand } = action.payload;
      return state + operand;
    }
    case OPERAND_SUBTRACTED: {
      const { operand } = action.payload;
      return state - operand;
    }
    case OPERAND_MULTIPLIED: {
      const { operand } = action.payload;
      return state * operand;
    }
    case OPERAND_DIVIDED: {
      const { operand } = action.payload;
      if (operand === 0) {
        return state;
      }

      return state / operand;
    }
    default: {
      return state;
    }
  }
}
