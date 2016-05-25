import React, { PropTypes } from 'react';
import DigitSection from './DigitSection';
import OperationSection from './OperationSection';

const Calculator = props =>
  <section className="calculator">
    <section className="sum-container">
      <div className="sum-and-next-operand">
        <span className="sum">{props.sum}</span>
        <span className="next-operand">{props.nextOperand}</span>
      </div>
    </section>
    <DigitSection
      {...props}
    />
    <OperationSection
      {...props}
    />
  </section>;

Calculator.propTypes = {
  sum: PropTypes.number.isRequired,
  nextOperand: PropTypes.number.isRequired
};

export default Calculator;
