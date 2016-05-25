import React, { PropTypes } from 'react';

const OperationSection = ({
  nextOperand,
  operationActions: {
    add,
    subtract,
    multiply,
    divide
  }
}) =>
  <section className="operation-buttons">
    <button onClick={add(nextOperand)} className="button operation-button">+</button>
    <button onClick={subtract(nextOperand)} className="button operation-button">−</button>
    <button onClick={multiply(nextOperand)} className="button operation-button">×</button>
    <button onClick={divide(nextOperand)} className="button operation-button">÷</button>
  </section>;

OperationSection.propTypes = {
  nextOperand: PropTypes.number.isRequired,
  operationActions: PropTypes.object.isRequired
};

export default OperationSection;
