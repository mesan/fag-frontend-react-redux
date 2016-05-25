import React, { PropTypes } from 'react';

const Calculator = ({
  sum,
  nextOperand,
  numbers,
  operations,
  addDigitToOperand,
  operationActions
  }) =>
  <section className="calculator">
    <section className="sum-view">
      <span className="sum">{sum}</span>
      <span className="next-operand">{nextOperand}</span>
    </section>
    <section className="number-buttons">
      {numbers.map(num =>
        <button
          key={num}
          onClick={addDigitToOperand(num)}
          className="button number-button"
        >
          {num}
        </button>
      )}
    </section>
    <section className="operation-buttons">
      {operations.map((operation, index) =>
        <button
          key={operation}
          onClick={operationActions[index](nextOperand)}
          className="button operation-button"
        >
          {operation}
        </button>
      )}
    </section>
  </section>;

Calculator.propTypes = {
  sum: PropTypes.number.isRequired,
  nextOperand: PropTypes.number.isRequired,
  numbers: PropTypes.array.isRequired,
  operations: PropTypes.array.isRequired,
  addDigitToOperand: PropTypes.func.isRequired,
  operationActions: PropTypes.array.isRequired
};

export default Calculator;
